---
title: Deep Dive on Ember Events
description: >-
  The difference between Ember actions and DOM events and why it matters, plus a
  really rad flowchart.
date: '2017-08-08T20:41:09.612Z'
image: '/blog/deep-dive/chalkboard.gif'
image_alt: 'Gif of Taraji P. Henson writing math equations on a chalkboard in Hidden Figures movie'
medium:  https://medium.com/@mariechatfield/deep-dive-on-ember-events-cf684fd3b808
---

Also available as a recorded talk from [EmberConf 2018](https://www.youtube.com/watch?v=G9hXjjHFJVs). Learn more about [this talk](/talks/#ember-events) or the [general JavaScript events talk](/talks/#an-event-ful-evening-with-javascript).

**Disclaimer:** This blog post specifically references Ember 2.14. Some information and code samples may be out of date!

<!--more-->

---

<div class="spacer"></div>


A few days ago, I was working on a really exciting new feature. As part of rolling out these changes, I implemented an onboarding tour — a sequence of tooltips that teach users how to interact with the different parts.

I made one small change to a template in one of our Ember apps, and everything broke. Can you guess what happened?

{% raw %}

<div class="spacer"></div>

**Before:** Clicking on “Next Step of the Tour” opened The Thing.

```hbs
<div class="cool-new-button" {{action "toggleTheThing"}}>

  {{#if shouldShowThisTooltip}}  
    <div class="tour-tooltip">  
      This button can open and close The Thing!  
      
      <a {{action "toggleTheThingAndAdvanceToNextStep" bubbles=false}}>  
        Next Step of the Tour  
      </a>  
    </div>  
  {{/if}}

</div>
```

<div class="spacer"></div>

**After:** Clicking on “Next Step of the Tour” opened The Thing and immediately closed it — so fast that it looked like nothing happened.

```hbs
<div class="cool-new-button" onClick={{action "toggleTheThing"}}>

  {{#if shouldShowThisTooltip}}  
    <div class="tour-tooltip">  
      This button can open and close The Thing!  
      
      <a {{action "toggleTheThingAndAdvanceToNextStep" bubbles=false}}>  
        Next Step of the Tour  
      </a>  
    </div>  
  {{/if}}

</div>
```

<div class="spacer"></div>

**The Only Change:** `<div {{action "toggleTheThing"}}>` became `<div onClick={{action "toggleTheThing"}}>`

**Me:** um, what?

<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/deep-dive/confused.gif" alt="Gif of Kandi Burruss">
    <figcaption class="figure__caption" markdown="block">
Gif of Kandi Burruss speaking with caption “So I’m just confused” ([source](https://giphy.com/gifs/confused-kandi-burruss-im-just-eojbwsT5POMak/))
</figcaption>
</figure>

So off I went to the debugging races, and with a little bit of work came to the conclusion that despite their visual similarity, `{{action "foo"}}` and `onClick={{action "foo"}}` represent completely different ways of listening for clicks.

Using `onClick={{action "foo"}}` listens for DOM events that the browser sends directly, whereas `{{action "foo"}}` listens for actions fired by Ember in response to browser events. I could tell these two types of event listeners had subtly different behavior, but couldn’t yet articulate _what_ or _why_.

I realized that I was just scratching the surface of how events are handled in Ember and there was a lot more to learn.

<figure class="figure">
    <img class="figure__image" src="/blog/deep-dive/chalkboard.gif" alt="Gif of Taraji P. Henson">
    <figcaption class="figure__caption" markdown="block">
Gif of Taraji P. Henson writing math equations on a chalkboard in Hidden Figures movie ([source](https://giphy.com/gifs/taraji-p-henson-octavia-spencer-hidden-figures-3o6Mbg856XV76hkYtq/))
</figcaption>
</figure>

I spent the next three days staring at my computer screen, muttering on my walks home from work, and dancing in my kitchen when I finally managed to get a comprehensive understanding of how DOM events and Ember actions fit together.

This is what I’ve learned!

<div class="spacer--xl"></div>

## Interactive Demo: Events in Ember

If you’re a visual person and want to get your hands on some code to explore these ideas for yourself, I built a handy [Ember Twiddle demo](https://ember-twiddle.com/3de2f20b58797f1add3214c49be7fcdd?openFiles=templates.application.hbs%2C) that explains three common ways of listening to events in Ember and the way they interact.

If you’d prefer to get a clear overview of everything before you try out the demo, keep reading!

<figure class="figure">
    <a href="https://ember-twiddle.com/3de2f20b58797f1add3214c49be7fcdd?openFiles=templates.application.hbs%2C"><img class="figure__image" src="/blog/deep-dive/twiddle.png" alt="Screenshot of Ember Twiddle"></a>
    <figcaption class="figure__caption" markdown="block">
Screenshot of Ember Twiddle Demo. [Link to interactive demo](https://ember-twiddle.com/3de2f20b58797f1add3214c49be7fcdd).
</figcaption>
</figure>

## The Basics

Let’s start with a few definitions to make sure we’re all on the same page.

<div class="spacer"></div>

**DOM:** Document Object Model, an API that describes how web pages work — how HTML is rendered on a page, what events happen as users interact with that page, and more. Browsers like Chrome, Firefox, and Safari implement this API in order to display websites. (For more info, check out this [DOM documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).)

<div class="spacer"></div>

**DOM node:** A single element in the DOM. For example, a `<div>` is a single DOM node. Nodes can have parents and children:

```html
<div id="parent">                  <!-- This is a node. -->  
  <button id="child"></button>     <!-- This is also a node. -->  
</div>
```

<div class="spacer"></div>

**DOM event:** A standard way of describing that _something_ has happened on a page. This includes things like clicks, keyboard presses, form submissions, and dragging elements around the screen. (You can see the full list of DOM events in this [Event reference](https://developer.mozilla.org/en-US/docs/Web/Events).)

You can add an **event listener** to any DOM node that should do something when a particular event happens to it; for example, you might care when a button is clicked or when a user types inside a text field. The listener is a JavaScript function that is called by the browser whenever that event happens on the specified node. The listener is passed an `Event` object with relevant information when it is called.

By default, browsers call the listener for the target node of the event and then call the event listener of every parent of that node — a process called **propagation**. This is helpful; say you have a button with an icon and some text inside it. If a user clicks exactly on the icon, you still want the button to receive the click. However, any node in the chain can override this behavior and **stop propagation** in its listener to prevent its ancestors from firing their listeners— ensuring that nothing else happens as a result of that event.

<div class="spacer"></div>

**Ember action:** An Ember-specific abstraction on top of DOM events. Ember actions are also functions at their heart, but have access to extra application context and logic (like attributes or functions defined in the associated controller or component). Ember actions are fired as a result of DOM events, but are called by the framework — not the browser — and may or may not have access to the original DOM event that caused them.

<div class="spacer--xl"></div>

## Order of Events in Ember

When a user clicks on your fancy new button, how exactly does a function defined in your component get fired? What happens if a previous action calls `stopPropagation()` on the event, or another action has set `bubbles=false`?

The basic overview is:

1.  A DOM event is created

2.  All the native DOM event listeners are fired, starting from the target node and walking up the tree — unless one of those stops propagation

3.  All the Ember action listeners are fired, starting from the target node and walking up the tree — unless one of those stops propagation

The full(er) overview is explained in this **super rad flowchart** I made (the brainchild of previously referenced kitchen dance).

_Pro tip: all the colors in this chart match the colors used for different event listeners in the_ [_Ember Twiddle demo_](https://ember-twiddle.com/3de2f20b58797f1add3214c49be7fcdd?openFiles=templates.application.hbs%2C)_, so cross-reference at your leisure!_

<figure class="figure">
    <img class="figure__image" src="/blog/deep-dive/flowchart.png" alt="Image of a flowchart">
    <figcaption class="figure__caption" markdown="block">
Flowchart titled: “How do events and actions work in Ember?” [Link to plaintext outline of chart ](https://gist.githubusercontent.com/mariechatfield/ccacbb7202819092e6b697eb8b42e3a5/raw/33b3adc4919557d901ddc61459d85bcb5c681c86/events_actions_flowchart_caption.txt).
</figcaption>
</figure>

<div class="spacer--xl"></div>

## Types of Event Listeners in Ember

How do you know whether you’re using a DOM event listener or an Ember action listener? When will your action have access to the original DOM event? Can your action prevent other actions from being fired?

There are three main ways of adding listeners in Ember:

1.  Adding an **Ember action listener** to a component with an event name attribute.

```hbs
{{some-component click=(action “handleClick”)}}
```

2\. Adding an **Ember action listener** to a DOM node by modifying the element with the `action` helper.

```hbs
<div {{action "handleClick"}}></div>  
<div {{action "handleDoubleClick" on="doubleClick"}}></div>
```

3\. Adding a **DOM event listener** to a DOM node by using an event HTML attribute.

```hbs
<div onclick={{action "handleClick"}}></div>
```

_(Pro tip: this is a great time to check out the_ [_Ember Twiddle demo_](https://ember-twiddle.com/3de2f20b58797f1add3214c49be7fcdd?openFiles=templates.application.hbs%2C) _if you haven’t yet! You can see for yourself how different combinations of these events bubble from children to parents, and modify the source code that runs the demo to explore further.)_

<div class="spacer"></div>
### 1\. Component Event Attributes

<figure class="figure">
    <img class="figure__image" src="/blog/deep-dive/click-component.png" alt="Screenshot of demo">
    <figcaption class="figure__caption" markdown="block">
Screenshot of click Component Attribute in [Ember Twiddle demo](https://ember-twiddle.com/#/3de2f20b58797f1add3214c49be7fcdd?openFiles=templates.application.hbs%2C).
</figcaption>
</figure>

**Listener Type:** Ember action

**Access to original DOM event:** Yes

**Supported events:** [defined by Ember.Component](https://emberjs.com/api/ember/2.14/classes/Ember.Component/properties/actions#responding-to-browser-events)

**Can it stop propagation:**
  - _Yes for other Ember actions_, because those are fired after this action.[^1]
  - _No for DOM events_, because those are fired before this action.

[^1]: You cannot pass `bubbles=false` as part of a closure action hash (like `click=(action "foo" bubbles=false)`). If you want to stop propagation, you have to call `event.stopPropagation()` in your handler. See [this GitHub issue](https://github.com/emberjs/ember.js/issues/12632#issuecomment-158657664) or [the documentation for the action helper](https://emberjs.com/api/ember/2.14/classes/Ember.Templates.helpers/methods/action?anchor=action) for more information.

Code examples for click Attribute actions. [Link to examples in GitHub Gist](https://gist.github.com/mchat/54905616e05f17021771fa043b9c387a).

<div class="spacer"></div>
### 2\. Element Modifiers

<figure class="figure">
    <img class="figure__image" src="/blog/deep-dive/element-modifier.png" alt="Screenshot of demo">
    <figcaption class="figure__caption" markdown="block">
Screenshot of Element Modifier in [Ember Twiddle demo](https://ember-twiddle.com/#/3de2f20b58797f1add3214c49be7fcdd?openFiles=templates.application.hbs%2C).
</figcaption>
</figure>

**Listener Type:** Ember action

**Access to original DOM event:** No

**Supported events:** [defined by Ember.Templates.helpers](https://emberjs.com/api/ember/2.14/classes/Ember.Templates.helpers/methods/action#specifying-dom-event-type)

**Can it stop propagation:**  
  - _Yes for other Ember actions_, because those are fired after this action.[^2]
  - _No for DOM events_, because those are fired before this action.

[^2]: This type of action doesn’t have access to the original DOM event so it cannot call `event.stopPropagation()`. If you want to stop propagation, you have to set `bubbles=false` on the action helper.

Code examples for Element Modifier actions. [Link to examples in GitHub Gist](https://gist.github.com/mchat/ad3c99550a5e880bafd75c8e6deb4ab3).

<div class="spacer"></div>
### 3\. DOM Event Attributes

<figure class="figure">
    <img class="figure__image" src="/blog/deep-dive/onclick-attribute.png" alt="Screenshot of demo">
    <figcaption class="figure__caption" markdown="block">

Screenshot of onClick HTML Attribute in [Ember Twiddle demo](https://ember-twiddle.com/#/3de2f20b58797f1add3214c49be7fcdd?openFiles=templates.application.hbs%2C).
</figcaption>
</figure>

**Listener Type:** DOM Event

**Access to original DOM event:** Yes

**Supported events:** [defined by DOM API](https://developer.mozilla.org/en-US/docs/Glossary/Global_attribute)

**Can it stop propagation:**
  - _Yes for both DOM events and Ember actions_, because both of those are fired after this event.[^3] [^4]

[^3]: Setting `bubbles=false` on the action helper doesn’t actually stop propagation for DOM events — that’s an Ember-specific abstraction. If you want to stop propagation, you have to call `event.stopPropagation()` in your handler.

[^4]: This is where it gets extra funky — calling `event.stopPropagation()` will prevent _any_ Ember actions from firing because of that event — **even child actions, which totally goes against normal DOM propagation order** but which you can [see in action in this Ember Twiddle](https://ember-twiddle.com/95bf1c8bcbbbe3569fe17dcfcf27e27c?openFiles=templates.application.hbs%2C). Why? It’s because calling `stopPropagation` at this point prevents the event from bubbling up to the special `<div id="root">` node that is the parent node of everything inside an Ember app. That node’s handler is what kicks off the process of firing Ember actions — see the flowchart above if this is still confusing!

Code examples for onClick Attribute actions. [Link to examples in GitHub Gist](https://gist.github.com/mchat/04e61443dc21e0198425798fe0511b99).

<div class="spacer--xl"></div>

## Learnings and Recommendations

<figure class="figure">
    <img class="figure__image" src="/blog/deep-dive/kid-president.gif" alt="Gif of Robby Novak">
    <figcaption class="figure__caption" markdown="block">
Gif of Robby Novak (aka Kid President) holding eyes open ([source](https://giphy.com/gifs/soulpancake-youtube-eyes-efwfOma7Fm31S/))
</figcaption>
</figure>

All of this may be interesting, but how does it relate to the bug that originally led me down this rabbit hole?

And what does this mean for you when you’re handling events in Ember?

Let’s take another look at that buggy code example:

```hbs
<div class="cool-new-button" onClick={{action "toggleTheThing"}}>

{{#if shouldShowThisTooltip}}  
    <div class="tour-tooltip">  
      This button can open and close The Thing!  
      
      <a {{action "toggleTheThingAndAdvanceToNextStep" bubbles=false}}>  
        Next Step of the Tour  
      </a>  
    </div>  
  {{/if}}

</div>
```

We’ve got a child node that is using an Ember action listener to `toggleTheThingAndAdvanceToTheNextStep`. When it handles the Ember event, it stops any other Ember events from firing (thanks to `bubbles=false`). This _seems_ like it should prevent the parent’s action from being fired.

_However_—before the child’s action handler is ever called, the DOM event listener (`toggleTheThing`) of its parent node is called. The child hasn’t had a chance yet to stop propagation. The parent action toggles The Thing open, and the child action later toggles it back shut.

In this example, events would fire in this order (provided no handlers stop propagation):

1.  DOM events on `<a>`
2.  DOM events on `<div class="tour-tooltip">`
3.  DOM events on `<div class="cool-new-button">` (opens The Thing)
4.  Ember actions on `<a>` (closes The Thing)
5.  Ember actions on `<div class="tour-tooltip">`
6.  Ember actions on `<div class="cool-new-button">`

<div class="spacer--xl"></div>

## Takeaways

<figure class="figure">
    <img class="figure__image" src="/blog/deep-dive/now-what.gif" alt="Gif of Finding Nemo">
    <figcaption class="figure__caption" markdown="block">
Gif of fish from Finding Nemo with caption “Now what?” ([source](https://giphy.com/gifs/c5gKu4AQ4Y64g/))
</figcaption>
</figure>


*   DOM events _always_ fire before Ember actions.

*   Attaching actions directly to DOM event attributes (like `onclick`) uses the browser’s DOM events API directly.

*   Attaching actions to Ember attributes (like a component’s `click` attribute or modifying an element with the `action` helper) uses Ember’s actions API, an abstraction on top of the DOM events API.

*   You can use `bubbles=false` to stop an event from propagating _only_ if you are using the action template helper in regular form not in closure form (e.g. `{{action "foo" bubbles=false}}` works but `click=(action "foo" bubbles=false)` does not).

*   You can use `event.stopPropagation()` to stop an event from propagating _only_ if you are using a handler that has access to the original DOM event — either by using an HTML event attribute like `onclick` or by using a component event attribute like `click`.

*   Calling `event.stopPropagation()` on a DOM event handler will stop _any_ Ember actions from firing because of that event — risky business!

*   For consistency and to prevent subtle bugs, I recommend always using Ember actions over DOM events.

**One possible exception** to always using Ember actions: if you want to optionally add an event to a DOM node. Currently, Ember template helpers **do not support** modifying elements with an inline conditional:

```hbs
<div {{if shouldRespondToClick (action "handleClick")}}></div>
```

Since that’s not valid Handlebars, you have to do this instead:

```hbs
<div onClick={{if shouldRespondToClick (action "handleClick")}}</div>
```

Alternatively, you can perform this logic check in your action handler and return early: `if (!this.get('shouldRespondToClick')) { return; }`. However, your element will have styling associated with click-ability, so you may also need to optionally add a style that sets `cursor: default`.

That’s a lot of work just to keep events more consistent; it’s up to you to decide which approach you prefer.

<figure class="figure">
    <img class="figure__image" src="/blog/deep-dive/michelle-missy.gif" alt="Gif of Michelle Obama and Missy Elliott">
    <figcaption class="figure__caption" markdown="block">
Gif of Michelle Obama and Missy Elliott dancing in a car ([source](https://giphy.com/gifs/latelateshow-james-corden-michelle-obama-missy-elliot-l41Ymn9tf1TIJm1gY/))
</figcaption>
</figure>

The biggest takeaway though: **now you know how events in Ember work!** And you can make informed decisions and debug with confidence.

Commence kitchen dancing, or in the words of my personal favorite Slack emoji, **:corgi: on**.

<div class="spacer--xl"></div>

P.S. Do you love nerding out about software and learning about technology? You should [join us at Square](https://squareup.com/careers/jobs?role=Engineering) so we can learn and build great products together!

<div class="spacer--xl"></div>

{% endraw %}