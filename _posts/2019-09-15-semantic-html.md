---
title: >-
  Don't Just Put a &lt;div&gt; on It—Use the Power of the Browser!
description: >-
  The best HTML elements you never knew existed, so you can improve your website's accessibility, mobile UX, and SEO while writing less code.
date: '2019-08-15'
image: '/blog/semantic-html/SemanticHTML.001.png'
image_alt: >-
  Slide with title Don't Just Put a &lt;div&gt; On It! Use the Power of the Browser and emojis of a computer and lightning bolts, followed by @MarieChatfield.
max_header: 3
---

The humble `<div>` is a powerful and flexible element. Throw enough CSS and JavaScript on it, and a `<div>` can be anything. But should it be?

“Semantic HTML” is a method of using elements that best match what your content means and does. But how do you write better markup if you don’t know your options?

Join the learning journey to fill your semantic HTML toolkit with the coolest elements you never knew existed. Learn specific elements to use in different scenarios and how to wield the full power of the HTML spec. You’ll write less code while making your pages more accessible and mobile-friendly!

<!--more-->


## Document Structure

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.029.png" alt="Slide of Document Structure with HTML elements listed">
    <figcaption class="figure__caption" markdown="block">
Document Structure section slide, with HTML elements &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, &lt;aside&gt;, &lt;header&gt;, &lt;footer&gt;, &lt;nav&gt;, and &lt;h1&gt;…&lt;h6&gt;.
</figcaption>
</figure>

**Elements used to outline the general shape and contents of your website.**

Communicate the relative importance of different sections of content. Improve accessibility, search engine optimization, and accuracy of tools like reader modes.

### Side by Side Preview

Let's look at a sample blog post page, implemented using mostly &lt;div&gt; elements, and implemented using semantic HTML.

<figure class="figure">
    <figcaption class="figure__caption">Side by side comparison of div vs semantic HTML implementations of a blog post.</figcaption>
    <div class="side-by-side" style="height: 420px; width: 100%;">
        <iframe class="site-iframe" src="https://semantic-html-examples.glitch.me/emojis/divified.html"></iframe>
        <iframe class="site-iframe" src="https://semantic-html-examples.glitch.me/emojis/semantic.html"></iframe>
    </div>
</figure>

You can see the source code yourself, or edit a copy of it, using this Glitch app.

<figure class="figure">
    <figcaption class="figure__caption">Source code of Glitch app</figcaption>
    <div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
      <iframe
        src="https://glitch.com/embed/#!/embed/semantic-html-examples?path=public/forms/semantic.html&previewSize=0"
        title="semantic-html-examples on Glitch"
        allow="geolocation; microphone; camera; midi; vr; encrypted-media"
        style="height: 100%; width: 100%; border: 0;">
      </iframe>
    </div>
</figure>

**Let's compare how these two sides stack up across a couple of different ways of accessing them.**

<figure>
    <figcaption class="figure__caption">Div vs Semantic HTML, on browser: visually the same.</figcaption>
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.030.png" alt="Side by side on browser">
</figure>

<figure>
    <figcaption class="figure__caption">Div vs Semantic HTML, in Reader mode: similar, but semantic version has better headings and titles.</figcaption>
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.031.png" alt="Side by side in reader mode">
</figure>

<figure>
    <figcaption class="figure__caption">Div vs Semantic HTML, without JavaScript or CSS: both plain, but semantic version still has visually distinct sections.</figcaption>
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.041.png" alt="Side by side without JS or CSS">
</figure>
<figure>
    <figcaption class="figure__caption">Div vs Semantic HTML, using VoiceOver Web Rotor: div version has only links, semantic version has links, landmarks, and headings</figcaption>
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.032.png" alt="Slide showing VoiceOver Web Rotor for div version">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.033.png" alt="Slide showing VoiceOver Web Rotor for semantic HTML version">
</figure>

**Here are the HTML elements that make up this page.**
<figure>
    <figcaption class="figure__caption">Semantic HTML web preview, with list of elements used on the right.</figcaption>
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.034.png" alt="Slide semantic HTML preview and list of elements in nested order.">
</figure>

**Skip to Section:**

- [&lt;main&gt;](#main)
- [&lt;article&gt;](#article)
- [&lt;section&gt;](#section)
- [&lt;aside&gt;](#aside)
- [&lt;nav&gt;](#nav)
- [&lt;header&gt;](#header)
- [&lt;footer&gt;](#footer)
- [&lt;h1&gt;…&lt;h6&gt;](#h1--h6)

**General Resources:**

- [Web Accessibility Tutorials: Page Regions](https://www.w3.org/WAI/tutorials/page-structure/regions/), W3C WAI

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.035.png" alt="Slide of main element">
    <figcaption class="figure__caption" markdown="block">
&lt;main&gt; element details slide, with code sample and power ups.
</figcaption>
</figure>

### &lt;main&gt;

_Warning: Inconsistent in Internet Explorer_

- **Primary content** of this page, what is unique
- Only one per page!
- Comes with `main` ARIA landmark role (except in IE)

#### Code Sample

```html
<main role="main">
  <!-- Content unique to *this* page -->
</main>
```

#### Power Ups

- ♿ Accessibility
- 🔍 SEO
- 📚 Reader Mode
- 📝 Readability

#### Resources

- [HTML Elements: `<main>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main), MDN
- [HTML Elements: `<main>`: Skip Navigation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main#Skip_navigation), MDN
- [The main element](http://html5doctor.com/the-main-element/), Richard Clark for _HTML5 Doctor_
- [ARIA: Main role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Main_role), MDN
- [Landmark 1: `main` landmark: at least one](https://fae.disability.illinois.edu/rulesets/LANDMARK_1/), University of Illinois

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.036.png" alt="Slide of article element">
    <figcaption class="figure__caption" markdown="block">
&lt;article&gt; element details slide, with code sample and power ups.
</figcaption>
</figure>

### &lt;article&gt;

- **Independent, reusable, and complete** content (RSS feed test from [HTML5 Doctor](http://html5doctor.com/the-article-element/))
- Should have a heading to identify
- Can be nested to show related content

#### Code Sample

```html
<article>
  <header><h2>Emojis as an Art Form</h2></header>
  <!-- A blog post about emojis. -->
</article>
```

#### Power Ups

- 🔍 SEO
- 📚 Reader Mode
- 📝 Readability

#### Resources

- [HTML Elements: `<article>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article), MDN
- [The article element](http://html5doctor.com/the-article-element/), Tom Leadbetter for _HTML5 Doctor_
- [How To Correctly Use Semantic HTML5 `<article>`, `<main>` and `<section>` Tags](https://ilikekillnerds.com/2014/07/how-to-correctly-use-semantic-html5-article-main-and-section-tags/), Dwayne Charrington of _I Like Kill Nerds_
- [Building websites for Safari Reader Mode and other reading apps](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9), Mandy Michael on Medium
- [The SEO Advantages of Machine-Readable HTML5 Semantic Markup](https://searchengineland.com/seo-advantages-of-machine-readable-html5-semantic-markup-314455), Detlef Johnson for _Search Engine Land_

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.037.png" alt="Slide of section element">
    <figcaption class="figure__caption" markdown="block">
&lt;section&gt; element details slide, with code sample and power ups.
</figcaption>
</figure>

### &lt;section&gt;

- **Logical piece of content**
- Typically have a heading to identify
- If you can't think of a heading, it's probably not a `<section>` (not arbitrary)

#### Code Sample

```html
<section>
  <header><h3>Best Practices</h3></header>
  <!-- Content about best practices of using emojis. -->
</section>
```

#### Power Ups

- 📝 Readability

#### Resources

- [HTML Elements: `<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section), MDN
- [How To Correctly Use Semantic HTML5 `<article>`, `<main>` and `<section>` Tags](https://ilikekillnerds.com/2014/07/how-to-correctly-use-semantic-html5-article-main-and-section-tags/), Dwayne Charrington of _I Like Kill Nerds_
- [Building websites for Safari Reader Mode and other reading apps](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9), Mandy Michael on Medium

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.038.png" alt="Slide of aside element">
    <figcaption class="figure__caption" markdown="block">
&lt;aside&gt; element details slide, with code sample and power ups.
</figcaption>
</figure>

### &lt;aside&gt;

- Logical piece of content that is **indirectly related** to parent content
- Comes with “complementary” ARIA landmark role
- Not always a sidebar! Could be something like an info block within a blog post

#### Code Sample

```html
<aside aria-labelledby="fave-emojis">
  <h3 id="fave-emojis">My Favorite Emojis</h3>
  <!-- List of my favorite emojis-->
</aside>
```

#### Power Ups

- ♿ Accessibility
- 🔍 SEO
- 📝 Readability

#### Resources

- [HTML Elements: `<aside>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside), MDN
- [ARIA: Complementary role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Complementary_role), MDN
- [Aside Revisted](http://html5doctor.com/aside-revisited/), Mike Robinson for _HTML5 Doctor_
- [Sidebar and Aside are different!](https://aastudio.fr/Sidebar-and-Aside-are-different.html) by Aurélien Aries
- [Landmark 17: Landmarks must be uniquely identifiable](https://fae.disability.illinois.edu/rulesets/LANDMARK_17/), University of Illinois

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.039.png" alt="Slide of nav element">
    <figcaption class="figure__caption" markdown="block">
&lt;nav&gt; element details slide, with code sample and power ups.
</figcaption>
</figure>

### &lt;nav&gt;

- Important blocks of **navigation links** (use sparingly!)
- Comes with “navigation” ARIA landmark role
- Should use labels if there are more than one per page
- Not all lists of links should go in a `<nav>`!

#### Code Sample

```html
<nav aria-label="Main">
  <!-- List of links to navigate website. -->
</nav>
```

#### Power Ups

- ♿ Accessibility
- 📝 Readability

#### Resources

- [HTML Elements: `<nav>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav), MDN
- [ARIA: Navigation role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role), MDN
- [Web Accessibility Tutorials: Menu Structure](https://www.w3.org/WAI/tutorials/menus/structure/), W3C WAI
- [Web Accessibility Guidelines: Navigation](http://web-accessibility.carnegiemuseums.org/code/navigation/), Carnegie Museums of Pittsburgh
- [Avoiding common HTML5 mistakes](http://html5doctor.com/avoiding-common-html5-mistakes/), Richard Clark for _HTML5 Doctor_
  - See "Don’t wrap all lists of links in `<nav>`"
- [Landmark 3: `navigation` landmark: at least one](https://fae.disability.illinois.edu/rulesets/LANDMARK_3/), University of Illinois

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.header.png" alt="Slide of header element">
    <figcaption class="figure__caption" markdown="block">
&lt;header&gt; element details slide, with code sample and power ups.
</figcaption>
</figure>

### &lt;header&gt;

- **Introductory content** for its parent element
- Often has ARIA landmark role “banner” if top-level in `<body>`
- Can be used inside other elements to identify intro content for those (e.g. an `<article>` header)

#### Code Sample

```html
<header>
  <h1>Super Cool Semantic HTML Site</h1>
  <!-- Logos, navigation links, author information, etc. -->
</header>
```

#### Power Ups

- ♿ Accessibility
- 🔍 SEO
- 📚 Reader Mode

#### Resources

- [HTML Element: `<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header), MDN
- [ARIA: Banner role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Banner_role), MDN
- [Landmark 4: `banner` landmark: identifies branding content](https://fae.disability.illinois.edu/rulesets/LANDMARK_4/), University of Illinois
- [Landmark 5: `banner` landmark: no more than one](https://fae.disability.illinois.edu/rulesets/LANDMARK_5/), University of Illinois
- [Landmark 8: `banner` landmark: must be top-level](https://fae.disability.illinois.edu/rulesets/LANDMARK_8/), University of Illinois

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.footer.png" alt="Slide of footer element">
    <figcaption class="figure__caption" markdown="block">
&lt;footer&gt; element details slide, with code sample and power ups.
</figcaption>
</figure>

### &lt;footer&gt;

- **Informational content** for its parent element
- Often has landmark role “contentinfo” if top-level in `<body>` (except in VoiceOver)

#### Code Sample

```html
<footer role="contentinfo">
  <p>Copyright by Marie Chatfield, 2019.</p>
</footer>
```

#### Power Ups

- ♿ Accessibility
- 🔍 SEO

#### Resources

- [HTML Element: `<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer), MDN
- [ARIA: contentinfo role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Contentinfo_role), MDN
- [Landmark 6: `contentinfo` landmark: identifies admin content](https://fae.disability.illinois.edu/rulesets/LANDMARK_6/), University of Illinois
- [Landmark 7: `contentinfo` landmark: no more than one](https://fae.disability.illinois.edu/rulesets/LANDMARK_7/), University of Illinois

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.042.png" alt="Slide of h1...h6 elements">
    <figcaption class="figure__caption" markdown="block">
&lt;h1&gt;...&lt;h6&gt; elements details slide, with code sample and power ups.
</figcaption>
</figure>

### &lt;h1&gt; ... &lt;h6&gt;

- **Section headings** that split the document into nested groups
- Do not skip! Do not use out of order!
- Only one `<h1>` per page
- **Most consistent and correct method to communicate document hierarchy**

#### Code Sample

```html
<h1>Super Cool Semantic HTML Site</h1>
<h2>Emojis as an Art Form</h2>
<h3>Introduction to Emojis</h3>
<h3>My Favorite Emojis</h3>
```

#### Power Ups

- ♿ Accessibility
- 🔍 SEO
- 📚 Reader Mode
- 💅 Default Style

#### Resources

- [`<h1>`-`<h6>`: The HTML Section Heading Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements), MDN
- [Web Accessibility Tutorials: Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/), W3C WAI
- [Web Accessibility Tutorials: Page Structure Concepts](https://www.w3.org/WAI/tutorials/page-structure/), W3C WAI


<div class="spacer--xl"></div>
---
<div class="spacer--xl"></div>

## Forms & Inputs

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.044.png" alt="Slide of Forms & Inputs with HTML elements listed">
    <figcaption class="figure__caption" markdown="block">
Forms & Inputs section slide, with HTML elements &lt;form&gt;, &lt;fieldset&gt;, &lt;legend&gt;, &lt;input&gt;, &lt;label&gt;, &lt;select&gt;, &lt;optgroup&gt;, &lt;option&gt;, and  &lt;output&gt;.
</figcaption>
</figure>

**General Resources**

- [Creating Accessible Forms](https://webaim.org/techniques/forms/), WebAIM

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.050.png" alt="Slide of form element">
    <figcaption class="figure__caption" markdown="block">
&lt;form&gt; element details slide, with code sample and power ups.
</figcaption>
</figure>

### &lt;form&gt; 

- **Submittable, interactive controls** and content
- Fires `submit` event when buttons are clicked or user hits
“Enter"
- Can make request with formatted input, without any
JavaScript

#### Code Sample 
```html
<form action="/submit-form" method="post" target="_blank">
<!-- Input elements go here -->
<button type="submit">Submit</button>
</form>
```

#### Power Ups

- ♿ Accessibility
- 🚧 Works without JS
- 📱 Mobile / Touch
- ⌨️ Keyboard

#### Resources

- [HTML Element: `form`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form), MDN

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.052.png" alt="Slide of fieldset and legend elements">
    <figcaption class="figure__caption" markdown="block">
&lt;fieldset&gt; and &lt;legend&gt; elements details slide, with code sample and power ups.
</figcaption>
</figure>

### &lt;fieldset&gt; + &lt;legend&gt; 

- Group of **related controls** inside a form, with a
caption
- **Must have a** `<legend>` **caption** as the first child - Most commonly used for checkboxes or radio inputs

#### Code Sample 
```html
<fieldset disabled>
  <legend>Favorite Emojis</legend>
  <!-- Checkbox inputs here -->
</fieldset>
```

#### Power Ups

- ♿ Accessibility
- 📝 Readability
- 💅 Default Style

#### Resources

- [HTML Element: `fieldset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset), MDN
- [HTML Element: `legend`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend), MDN
- [HTML5: The `fieldset` element](https://www.w3.org/TR/2011/WD-html5-author-20110809/the-fieldset-element.html), W3C
- [Accessible Form Controls](https://webaim.org/techniques/forms/controls#checkbox), WebAIM

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.057.png" alt="Slide of input and label elements">
    <figcaption class="figure__caption" markdown="block">
&lt;input&gt; and &lt;label&gt; elements details slide, with code sample and power ups.
</figcaption>
</figure>

### &lt;input&gt; + &lt;label&gt; 

- A single **interactive control**, with a caption
- Formats its data inside parent `<form>` using the "name" attribute
- Using HTML5 type attributes can give custom behavior

#### Code Sample 
```html
<input id="“sparkle-heart”" name="fave-emoji" type="checkbox" value="💖" />
<label for="sparkle-heart">💖</label>
```

#### Power Ups

- ♿ Accessibility
- 📱 Mobile / Touch
- 💅 Default Style
- 🚀 Built-in Behavior

#### Resources

- [HTML Element: `input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), MDN
- [HTML Element: `label`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label), MDN
- [Accessible Form Controls](https://webaim.org/techniques/forms/controls#input), WebAIM
- [Mobile Input Types](http://mobileinputtypes.com/), Jack Holmes

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.058.png" alt="Slide of input types">
    <figcaption class="figure__caption" markdown="block">
&lt;input&gt; type slides, split into Basic, Formatted, Date/Time, Special, and Form Controls categories.
</figcaption>
</figure>

### &lt;input&gt; types 

__Warning: Inconsistent browser support, particularly for more complex types__ 

#### Basic Types
- [text](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text), single-line text field
- [checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox), square tickbox
- [radio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio), round tickbox
- [number](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number), single-line text with built-in validation for numeric types
- [range](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range), slider to specify a numeric value __(inconsistent browser support)__


#### Formatted Types
- [email](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email), single-line text with built-in validation for email addresses
- [tel](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel), single-line text for phone numbers (no validation, but will open special keyboard on mobile)
- [url](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url), single-line text with built-in validation for URLs

#### Date / Time Types
- [date](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date), day/month/year picker __(inconsistent browser support)__
- [datetime-local](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local), localized date and time __(*very* inconsistent browser support)__
- [month](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month), month/year picker __(inconsistent browser support)__
- [time](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time), hour/minute picker __(inconsistent browser support)__
- [week](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week), week/year picker __(inconsistent browser support)__

#### Special Types
- [color](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color), color code picker __(inconsistent browser support)__
- [file](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file), local file picker 
- [password](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password), single-line text with obscured text and security controls
- [search](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search), single-line text for user-specified search

#### Form Controls
- [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button), renders a button __(&lt;button&gt; element preferred)__
- [hidden](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden), add data to form that is not accessible/available to users
- [image](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/image), renders a graphical button __(&lt;button&gt; element preferred)__
- [reset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/reset), renders a button that will clear all inputs to initial state
- [submit](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit), renders a button that will submit form on click __(&lt;button&gt; element preferred)__

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.060.png" alt="Slide of select and option elements">
    <figcaption class="figure__caption" markdown="block">
&lt;select&gt; and &lt;option&gt; elements details slide, with code sample and power ups.
</figcaption>
</figure>

### &lt;select&gt; + &lt;option&gt;

- An input with a **menu of options**, a.k.a. a dropdown
- `<option>` can provide value attribute or use text inside

#### Code Sample 
```html
<select id="activity" name="activity">
  <option value="climbing">🧗🏻‍♀️ Rock Climbing</option>
  <option value="cycling">🚵‍♀️ Cycling</option>
</select>
```

#### Power Ups

- ♿ Accessibility
- 📱 Mobile / Touch
- ⌨️ Keyboard
- 💅 Default Style
- 🚀 Built-in Behavior
- 🚧 Works without JS

#### Resources

- [HTML Element: `select`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select), MDN
- [HTML Element: `option`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option), MDN
- [Accessible Form Controls](https://webaim.org/techniques/forms/controls#select), WebAIM

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.061.png" alt="Slide of optgroup element">
    <figcaption class="figure__caption" markdown="block">
&lt;optgroup&gt; element details slide, with code sample and power ups.
</figcaption>
</figure>

### &lt;optgroup&gt; 

- An input with a **menu of grouped options**
- Displays labels at top of each group
- Prevents labels from being selected

#### Code Sample 
```html
<select id="activity" name="activity">
  <optgroup label="Outdoors Things"><!-- options --></optgroup>
  <optgroup label="Indoors Things"><!-- options --></optgroup>
</select>
```

#### Power Ups

- ♿ Accessibility
- 📱 Mobile / Touch
- ⌨️ Keyboard
- 💅 Default Style
- 🚀 Built-in Behavior
- 🚧 Works without JS

#### Resources

- [HTML Element: `optgroup`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup), MDN

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.063.png" alt="Slide of output element">
    <figcaption class="figure__caption" markdown="block">
&lt;output&gt; element details slide, with code sample and power ups.
</figcaption>
</figure>

### &lt;output&gt; 

_Warning: Unsupported by Internet Explorer_

- Displays **result or calculation** from other form inputs - Update with JavaScript for re-computation on the fly
- Typically has `aria-live` attribute by default, which announces changes without moving focus

#### Code Sample 
```html
<label for="sum"><strong>Total Cost:</strong></label>
<output id="sum" name="sum" for="cost num-emojis">\$0</output>
```

#### Power Ups

- ♿ Accessibility
- 📝 Readability

#### Resources

- [HTML Element: `output`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output), MDN

<div class="spacer--xl"></div>
---
<div class="spacer--xl"></div>

## Media & Figures

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.065.png" alt="Slide of Media & Figures with HTML elements listed">
    <figcaption class="figure__caption" markdown="block">
Media & Figures section slide, with HTML elements &lt;figure&gt;, &lt;figcaption&gt;, &lt;video&gt;, &lt;audio&gt;, and &lt;track&gt;.
</figcaption>
</figure>

**General Resources:**

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.067.png" alt="Slide of figure and figcaption element">
    <figcaption class="figure__caption" markdown="block">
&lt;figure&gt; and &lt;figcaption&gt; elements details slide, with code sample and power ups.
</figcaption>
</figure>

### &lt;figure&gt; + &lt;figcaption&gt; 

- Self contained **unit of content** that is referenced by the main content
- Can contain illustrations, diagrams, video, audio, etc.
- Should have a `<figcaption>`, ideally before content

#### Code Sample 
```html
<figure>
  <figcaption>How to say hello in JavaScript.</figcaption>
  <!-- Code snipppet here -->
</figure>
```

#### Power Ups

- ♿ Accessibility
- 📝 Readability

#### Resources

- [HTML Element: `figure`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure), MDN
- [HTML Element: `figcaption`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption), MDN
- [HTML5 Accessibility Chops: the figure and figcaption elements](https://developer.paciellogroup.com/blog/2011/08/html5-accessibility-chops-the-figure-and-figcaption-elements/), Steve Faulkner for _The Paciello Group_
  - _Note: published in 2011, before common browser support was implemented_
- [The figure & figcaption elements](http://html5doctor.com/the-figure-figcaption-elements/), Richard Clark for _HTML5 Doctor_
  - See "Differences between `<figure>` and `<aside>`"

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.069.png" alt="Slide of video element">
    <figcaption class="figure__caption" markdown="block">
&lt;video&gt; elements details slide, with code sample and power ups.
</figcaption>
</figure>

### &lt;video&gt; 

- Embedded video player—no JavaScript needed!
- Displays controls to users in familiar, platform-consistent manner
- Can include multiple sources for different video types
- Should include captions/subtitles with `<track>`

#### Code Sample 
```html
<video controls width="750">
  <source src="/say-hello.mov" type="video/mov" />
  <source src="/say-hello.mp4" type="video/mp4" />
</video>
```

#### Power Ups

- ♿ Accessibility
- 📱 Mobile / Touch
- ⌨️ Keyboard
- 💅 Default Style
- 🚀 Built-in Behavior
- 🚧 Works without JS

#### Resources

- [HTML Element: `video`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video), MDN

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.073.png" alt="Slide of audio element">
    <figcaption class="figure__caption" markdown="block">
&lt;audio&gt; elements details slide, with code sample and power ups.
</figcaption>
</figure>

### &lt;audio&gt; 

- Embedded audio player—no JavaScript needed!
- Displays controls to users in familiar, platform-consistent manner
- Can include multiple sources for different audio types
- Can include captions with `<track>`, but appears unsupported in most browsers

#### Code Sample 
```html
<audio controls width="750">
  <source src="/say-hello.m4a" type="audio/m4a" />
</audio>
```

#### Power Ups

- 📱 Mobile / Touch
- ⌨️ Keyboard
- 💅 Default Style
- 🚀 Built-in Behavior
- 🚧 Works without JS

#### Resources

- [HTML Element: `audio`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio), MDN

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.070.png" alt="Slide of track element">
    <figcaption class="figure__caption" markdown="block">
&lt;track&gt; elements details slide, with code sample and power ups.
</figcaption>
</figure>

### &lt;track&gt; 

- Add subtitles or captions to content
- Point to a WebVTT (.vtt) text formatted file
- Can specify multiple tracks with different labels for users to pick from

#### Code Sample 
```html
<video controls width="750">
  <track default kind="captions" label="English"
         srclang="en" src="/media/tracks/say-hello_en.vtt"/>
</video>
```

<figure class="figure">
    <figcaption class="figure__caption">Sample WebVTT file with English captions </figcaption>
    <div markdown="block">
```
WEBVTT

00:00.000 --> 00:04.500
So over here we have a lovely function called "sayHello"

00:04.500 --> 00:07.000
and then we're just going to do some stuff with it.

00:07.500 --> 00:10.000
So let's try saying hello to me.

00:11.500 --> 00:15.000
```
</div>
</figure>

<figure class="figure">
    <figcaption class="figure__caption">Sample WebVTT file with Spanish subtitles </figcaption>
    <div markdown="block">
```
WEBVTT

00:00.000 --> 00:04.500
Entonces, aquí tenemos una función agradable llamada &lt;&lt;saluda&gt;&gt;

00:04.500 --> 00:07.000
y vamos a hacer algunas cosas con ella.

00:07.500 --> 00:10.000
Entonces, tratemos de saludarme.

00:11.500 --> 00:15.000
Si venimos aquí después de guardar nuestro archivo
```
</div>
</figure>

#### Power Ups

- ♿ Accessibility
- 📱 Mobile / Touch
- ⌨️ Keyboard
- 💅 Default Style
- 🚀 Built-in Behavior
- 🚧 Works without JS

#### Resources

- [HTML Element: `track`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track), MDN
- [WebVTT and Video Subtitles](https://iandevlin.com/blog/2011/05/html5/webvtt-and-video-subtitles/), Ian Devlin
  - _Note: published in 2011, before common browser support was implemented_
- [WebVTT and Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/), Ian Devlin
  - Suggests workaround for audio captions by using `<video>` instead

<div class="spacer--xl"></div>
---
<div class="spacer--xl"></div>

## Text Formatting

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/SemanticHTML.078.png" alt="Slide of Text Formatting with HTML elements listed">
    <figcaption class="figure__caption" markdown="block">
Text Formatting section slide, with HTML elements &lt;pre&gt;, &lt;code&gt;, &lt;samp&gt;, &lt;kbd&gt;, &lt;var&gt;, &lt;q&gt;, &lt;blockquote&gt;, &lt;cite&gt;, &lt;abbr&gt;, &lt;dfn&gt;, &lt;address&gt;, and &lt;time&gt;.
</figcaption>
</figure>

### Programming Text
- [&lt;pre&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre): preformatted text, displayed in monospace font with white-space preserved
- [&lt;code&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code): text representing computer code, displayed in monospace font
- [&lt;samp&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp): text representing sample output from a computer program, commonly displayed in monospace font
- [&lt;kbd&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd): text representing user input on a keyboard / other device, commonly displayed in monospace font
- [&lt;var&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var): name of a variable in math or programming context, commonly displayed in italics

### Quoted Text
- [&lt;q&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q): inline quotation, commonly surrounded in quotation marks
- [&lt;blockquote&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote): extended quotation, commonly displayed as indented
- [&lt;cite&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite): citation to a creative work, commonly displayed in italics

### Terms and Definitions
- [&lt;abbr&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr): abbreviation or acronoym, may display a tooltip with full description
- [&lt;dfn&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn): term being defined within the parent context, commonly displayed in italics

### Data
- [&lt;address&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address): text representing contact information, in any preferred form; typically placed within a `<footer>`
- [&lt;time&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time): text representing time; may include machine-readable format for SEO or browser support for adding calendar events / reminders


<div class="spacer--xl"></div>
---
<div class="spacer--xl"></div>

## General Resources

### Accessibility / Assistive Tech

- [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/), WebAIM
  - Article about how screen readers are used to interact with websites, and how to build websites with them in mind
- [Functional Accessibility Evaluator Rulesets](https://fae.disability.illinois.edu/rulesets/), University of Illinois
  - List of rulesets based on the WCAG guidelines for building accessible websites
- [HTML5 Accessibility](https://www.html5accessibility.com/), Steve Faulkner
  - Current accessibility support status of HTML5 features across major browsers
- [VoiceOver User Guide](https://help.apple.com/voiceover/mac/), Apple
  - Overview from Apple about how to use the VoiceOver screenreader
- [Appendix A. Commands and Gestures](https://www.apple.com/voiceover/info/guide/_1131.html), Apple
  - Appendix of VoiceOver commands and gestures, a good quick reference

### Semantic HTML

- [Glossary: Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics), MDN
  - Definition of _semantics_ with respect to JavaScript, CSS, and HTML
- [Nu HTML Checker](http://validator.w3.org/nu/#textarea), W3
  - Experimental tool to validate markup and catch unintended mistakes

<div class="spacer--xl"></div>
---
<div class="spacer--xl"></div>

_Did you like this post? I’ll be sporadically publishing more content like this to the_ [**_git checkout -b idk-what-im-doing_**](/blog)  _blog in the future! Tweet me_ [_@mariechatfield_](https://twitter.com/mariechatfield) _to let me know what kind of resources you’d like to see next._

🙏🏻 Many thanks to my team at [**Pingboard**](https://pingboard.com/) for supporting my time writing these posts!
