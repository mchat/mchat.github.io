---
title: >-
  Don't Just Put a &lt;div&gt; on It—Use the Power of the Browser!
description: >-
  The best HTML elements you never knew existed, so you can improve your website's accessibility, mobile UX, and SEO while writing less code.
date: '2019-08-15'
image: '/blog/semantic-html/slide_title.png'
image_alt: >-
  Slide with title Don't Just Put a &lt;div&gt; On It! Use the Power of the Browser and emojis of a computer and lightning bolts, followed by @MarieChatfield.
max_header: 3
---

**Adapted from a talk given at [EmberCamp](http://embercamp.com/) 2019.**

The humble &lt;div&gt; is a powerful and flexible element. Throw enough CSS and JavaScript on it, and a &lt;div&gt; can be anything. But should it be?

“Semantic HTML” is a method of using elements that best match what your content means and does. But how do you write better markup if you don’t know your options?

<!--more-->

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_title.png" alt="Title slide">
    <figcaption class="figure__caption" markdown="block">
Slide with title "Don't Just Put a &lt;div&gt; On It! User the Power of the Browser", with attribution to @MarieChatfield.
</figcaption>
</figure>

Join the learning journey to fill your semantic HTML toolkit with the coolest elements you never knew existed. Learn specific elements to use in different scenarios and how to wield the full power of the HTML spec.

You’ll write less code while making your pages more accessible and mobile-friendly!

## Introduction to Semantic HTML

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_sectionTitle_semanticHTML.png" alt="Slide of Document Structure with HTML elements listed">
    <figcaption class="figure__caption" markdown="block">
Slide with title "Semantic HTML" and subtitle "What is it? Why does it matter?"
</figcaption>
</figure>

You may have heard the phrase or idea that <q>Semantic HTML is better for accessibility</q>—but what does that mean?

<div class="spacer--xl"></div>

### What is it?

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_semanticDefinition.png" alt="Semantic definition">
    <figcaption class="figure__caption">
        <strong><dfn>Semantic</dfn></strong> means... "related to meaning."
    </figcaption>
</figure>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_semanticHTMLDefinition.png" alt="Semantic HTML definition">
    <figcaption class="figure__caption">
        When we talk about <strong><dfn>Semantic HTML</dfn></strong>, we mean choosing elements based on the meaning of their contents.
    </figcaption>
</figure>

That's still pretty abstract, so it might be easier to consider what __non-__ semantic HTML looks like.

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_nonSemanticHTMLDefinition.png" alt="Non-Semantic HTML examples">
    <figcaption class="figure__caption">
        <strong><dfn>Non-Semantic HTML</dfn></strong>, can look like picking elements based on default browser styles, or using &lt;div&gt; elements for everything.
    </figcaption>
</figure>

**Let's look at an example of using &lt;div&gt; elements in a non-semantic manner.**

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_webTech.png" alt="Slide with boxes for HTML, CSS, and JavaScript">
    <figcaption class="figure__caption">
        The building blocks of the web: HTML, CSS, and JavaScript.
    </figcaption>
</figure>

The foundational web technologies are incredibly powerful.

- <strong>HTML</strong> communicates the structure and meaning of our website, or what it is.
- <strong>CSS</strong> handles the presentation, or what it should look like.
- <strong>JavaScript</strong> adds behavior, or what the website does.

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_buttonExample_div.png" alt="Example of making a button with HTML, JavaScript, and CSS">
    <figcaption class="figure__caption">
        We can combine these technologies to make something that appears like a button.
    </figcaption>
</figure>

With HTML, we can use a &lt;div&gt; with some content that instructs the user to click it.

With CSS, we can make our &lt;div&gt; look like a button.

With JavaScript, we make our &lt;div&gt; do interesting things when it is clicked, like a button.

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_notAButton.png" alt="Is it a button? Big red X no">
    <figcaption class="figure__caption">
        So... is it a button? No.
    </figcaption>
</figure>

This "button" probably doesn't handle all the different use cases a real &lt;button&gt; does—it might not support keyboard events, it might not submit forms, it might not display different visual styles on hover.

We could always write all of that code ourselves... but someone already has. In your browser. When we use a &lt;button&gt; element, we get all of that functionality for free.

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_buttonExample_semantic.png" alt="Semantic example of a button">
    <figcaption class="figure__caption">
        If we just swap out our &lt;div&gt; for a &lt;button&gt;, we now have semantic HTML!
    </figcaption>
</figure>

<div class="spacer--xl"></div>

### Why does it matter?

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_whyDoesItMatter.png" alt="Semantic HTML matters because there is more context with less code">
    <figcaption class="figure__caption">
        Semantic HTML matters because it allows you to provide more context with less code.
    </figcaption>
</figure>

Providing context in your actual HTML means that anyone or anything that uses your code will be able to understand it better, and make better choices accordingly.

- **Assistive Tech (AT)** like screen readers can provide people who use them with more precise information about the structure of your site, the state of any data, and ability to navigate more easily.

- **Search Engines** indexing your site can determine the unique and relevant information on your page, which can improve your Search Engine Optimization (SEO) and ranking.

- **Mobile Browsers** are better able to provide a user experience (UX) that is targeted at smaller screens. For example, bringing up a dedicated keyboard based on the type of text that will be input, or showing native interactive elements that are familiar to users and appropriately sized.

- **Plugins or Tools** that use your site can better determine what to show. For example, many browsers offer a Reader Mode to show text in a simple format. Or browser extensions that save a website may be better able to extract interesting and relevant content.

- **People reading the code** (whether yourself or someone else) can more easily understand the meaning and context of a page.

<div class="spacer--xl"></div>

### Getting Started

So all of this semantic HTML stuff seems great...

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/cool-cool-cool.gif" alt="Gif of School House Rock">
    <figcaption class="figure__caption" markdown="block">
Gif of Charles from Brooklyn 99 TV show nodding and saying "Sure sure sure, cool cool cool cool cool." ([source](https://giphy.com/gifs/2kJIUDgdLVum9oaLSK))
</figcaption>
</figure>

...but what if you don't even know how to start writing it?

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/where-to-start.gif" alt="Gif of School House Rock">
    <figcaption class="figure__caption" markdown="block">
Gif of Hannah Brown from The Bachelorette TV show looking frustrated and saying "I don't even know where to start" ([source](https://giphy.com/gifs/thebachelorette-hrk1vT9WDNSAMZydLf))
</figcaption>
</figure>

That's why we're going to learn all about *a bunch* of HTML elements that you can start using today!

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_section_browserPowerUps.png" alt="Browser Power Ups title slide">
    <figcaption class="figure__caption">
        Slide with title "Browser Power Ups" and subtitle "Fill your HTML toolkit with the best elements you never knew existed."
    </figcaption>
</figure>

The rest of this post goes over a few categories of HTML elements. You'll see a preview of the same site written with &lt;div&gt; elements and in semantic HTML, with side-by-side comparisons of how it behaves in different scenarios.

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/semantic-html-examples?path=public/media/semantic.html&previewSize=100"
    title="semantic-html-examples on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

**Skip to Section:**

- [Document Structure](#document-structure)
- [Forms & Inputs](#forms--inputs)
- [Media & Figures](#media--figures)
- [Text Formatting](#text-formatting)

_Warning: Many of these elements are part of the HTML5 specification._ They may not be consistently supported across all browsers, but I have largely tried to pick examples that work in Internet Explorer, Edge, Firefox, Safari, and Chrome.

You should still do your own cross-browser functionality research and testing before implementing any of these elements yourself!

<div class="spacer--xxl"></div>
---
<div class="spacer--xxl"></div>

## Document Structure

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_documentStructure.png" alt="Slide of Document Structure with HTML elements listed">
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
        src="https://glitch.com/embed/#!/embed/semantic-html-examples?path=public/emojis/semantic.html&previewSize=0"
        title="semantic-html-examples on Glitch"
        allow="geolocation; microphone; camera; midi; vr; encrypted-media"
        style="height: 100%; width: 100%; border: 0;">
      </iframe>
    </div>
</figure>

**Let's compare how these two sides stack up across a couple of different ways of accessing them.**

<figure>
    <figcaption class="figure__caption">Div vs Semantic HTML, on browser: visually the same.</figcaption>
    <img class="figure__image" src="/blog/semantic-html/slide_structureExample_browser.png" alt="Side by side on browser">
</figure>

<figure>
    <figcaption class="figure__caption">Div vs Semantic HTML, in Reader mode: similar, but semantic version has better headings and titles.</figcaption>
    <img class="figure__image" src="/blog/semantic-html/slide_structureExample_readerMode.png" alt="Side by side in reader mode">
</figure>

<figure>
    <figcaption class="figure__caption">Div vs Semantic HTML, without JavaScript or CSS: both plain, but semantic version still has visually distinct sections.</figcaption>
    <img class="figure__image" src="/blog/semantic-html/slide_structureExample_noCssJS.png" alt="Side by side without JS or CSS">
</figure>
<figure>
    <figcaption class="figure__caption">Div vs Semantic HTML, using VoiceOver Web Rotor: div version has only links, semantic version has links, landmarks, and headings</figcaption>
    <img class="figure__image" src="/blog/semantic-html/slide_structureExample_voiceOverDiv.png" alt="Slide showing VoiceOver Web Rotor for div version">
    <img class="figure__image" src="/blog/semantic-html/slide_structureExample_voiceOverSemantic.png" alt="Slide showing VoiceOver Web Rotor for semantic HTML version">
</figure>

**Here are the HTML elements that make up this page.**
<figure>
    <figcaption class="figure__caption">Semantic HTML web preview, with list of elements used on the right.</figcaption>
    <img class="figure__image" src="/blog/semantic-html/slide_structureExample_breakdown.png" alt="Slide semantic HTML preview and list of elements in nested order.">
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
- [ARIA Landmarks Example](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html), W3C WAI

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_main.png" alt="Slide of main element">
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
    <img class="figure__image" src="/blog/semantic-html/slide_article.png" alt="Slide of article element">
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
    <img class="figure__image" src="/blog/semantic-html/slide_section.png" alt="Slide of section element">
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
    <img class="figure__image" src="/blog/semantic-html/slide_aside.png" alt="Slide of aside element">
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
    <img class="figure__image" src="/blog/semantic-html/slide_nav.png" alt="Slide of nav element">
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
    <img class="figure__image" src="/blog/semantic-html/slide_header.png" alt="Slide of header element">
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
    <img class="figure__image" src="/blog/semantic-html/slide_footer.png" alt="Slide of footer element">
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
    <img class="figure__image" src="/blog/semantic-html/slide_h1_h6.png" alt="Slide of h1...h6 elements">
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

<div class="spacer--xxl"></div>
---
<div class="spacer--xxl"></div>

## Forms & Inputs

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_formsInputs.png" alt="Slide of Forms & Inputs with HTML elements listed">
    <figcaption class="figure__caption" markdown="block">
Forms & Inputs section slide, with HTML elements &lt;form&gt;, &lt;fieldset&gt;, &lt;legend&gt;, &lt;input&gt;, &lt;label&gt;, &lt;select&gt;, &lt;optgroup&gt;, &lt;option&gt;, and  &lt;output&gt;.
</figcaption>
</figure>

**Elements used to provide interactive controls and inputs for users.**

Improve accessibility and mobile experience, particularly with more complex input validation.

### Side by Side Preview

Let's look at a sample page that has a form with multiple sections, implemented using mostly &lt;div&gt; elements, and implemented using semantic HTML.

<figure class="figure">
    <figcaption class="figure__caption">Side by side comparison of div vs semantic HTML implementations of a web form.</figcaption>
    <div class="side-by-side" style="height: 420px; width: 100%;">
        <iframe class="site-iframe" src="https://semantic-html-examples.glitch.me/forms/divified.html"></iframe>
        <iframe class="site-iframe" src="https://semantic-html-examples.glitch.me/forms/semantic.html"></iframe>
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
    <img class="figure__image" src="/blog/semantic-html/slide_formExample_browser.png" alt="Side by side on browser">
</figure>

<figure>
    <figcaption class="figure__caption">Div vs Semantic HTML, without JavaScript or CSS: both plain, but semantic version still has working inputs and is functional.</figcaption>
    <img class="figure__image" src="/blog/semantic-html/slide_formExample_noCssJS.png" alt="Side by side without JS or CSS">
</figure>

<figure>
    <figcaption class="figure__caption">Div vs Semantic HTML, using VoiceOver Web Rotor: both versions show controls and state, but semantic version includes form labels and context</figcaption>
    <img class="figure__image" src="/blog/semantic-html/slide_formExample_voiceOver.png" alt="Slide showing VoiceOver Web Rotor for div vs semantic HTML version">
</figure>

<figure>
    <figcaption class="figure__caption">Div vs Semantic HTML, mobile: visually the same.</figcaption>
    <img class="figure__image" src="/blog/semantic-html/slide_formExample_mobile.png" alt="Side by side on mobile">
</figure>

<figure>
    <figcaption class="figure__caption">Div vs Semantic HTML, mobile, phone input: semantic version has phone specific keyboard.</figcaption>
    <img class="figure__image" src="/blog/semantic-html/slide_formExample_mobilePhone.png" alt="Side by side on mobile, with phone input">
</figure>

<figure>
    <figcaption class="figure__caption">Div vs Semantic HTML, mobile, email input: semantic version has email specific keyboard.</figcaption>
    <img class="figure__image" src="/blog/semantic-html/slide_formExample_mobileEmail.png" alt="Side by side on mobile, with email input">
</figure>

<figure>
    <figcaption class="figure__caption">Div vs Semantic HTML, mobile, select input: semantic version has native dropdown menu with grouped options.</figcaption>
    <img class="figure__image" src="/blog/semantic-html/slide_formExample_mobileSelect.png" alt="Side by side on mobile, with select input">
</figure>

**Here are the HTML elements that make up this page.**

- [&lt;form&gt;](#form)
- [&lt;fieldset&gt; + &lt;legend&gt;](#fieldset--legend)
- [&lt;input&gt; + &lt;label&gt;](#input--label)
- [&lt;input&gt; types](#input-types)
- [&lt;select&gt; + &lt;options&gt;](#select--options)
- [&lt;optgroup&gt;](#optgroup)
- [&lt;output&gt;](#output)

**General Resources**

- [Creating Accessible Forms](https://webaim.org/techniques/forms/), WebAIM
- [Usability & Web Accessibility: Forms](https://usability.yale.edu/web-accessibility/articles/forms), Yale University

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_form.png" alt="Slide of form element">
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
    <img class="figure__image" src="/blog/semantic-html/slide_fieldset_legend.png" alt="Slide of fieldset and legend elements">
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
    <img class="figure__image" src="/blog/semantic-html/slide_input_label.png" alt="Slide of input and label elements">
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
    <img class="figure__image" src="/blog/semantic-html/slide_inputTypes.png" alt="Slide of input types">
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
    <img class="figure__image" src="/blog/semantic-html/slide_select_option.png" alt="Slide of select and option elements">
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
    <img class="figure__image" src="/blog/semantic-html/slide_optgroup.png" alt="Slide of optgroup element">
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
    <img class="figure__image" src="/blog/semantic-html/slide_output.png" alt="Slide of output element">
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

<div class="spacer--xxl"></div>
---
<div class="spacer--xxl"></div>

## Media & Figures

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_mediaFigures.png" alt="Slide of Media & Figures with HTML elements listed">
    <figcaption class="figure__caption" markdown="block">
Media & Figures section slide, with HTML elements &lt;figure&gt;, &lt;figcaption&gt;, &lt;video&gt;, &lt;audio&gt;, and &lt;track&gt;.
</figcaption>
</figure>

**Elements used to provide multimedia content or other visual/audio content and diagrams.**

Improve accessibility and mobile experience. Use less code or external libraries.

### Side by Side Preview

Let's look at a sample page that has sample code implementations along with audio and video content, implemented using mostly &lt;div&gt; elements, and implemented using semantic HTML.

<figure class="figure">
    <figcaption class="figure__caption">Side by side comparison of div vs semantic HTML implementations of a multimedia page.</figcaption>
    <div class="side-by-side" style="height: 420px; width: 100%;">
        <iframe class="site-iframe" src="https://semantic-html-examples.glitch.me/media/divified.html"></iframe>
        <iframe class="site-iframe" src="https://semantic-html-examples.glitch.me/media/semantic.html"></iframe>
    </div>
</figure>

You can see the source code yourself, or edit a copy of it, using this Glitch app.

<figure class="figure">
    <figcaption class="figure__caption">Source code of Glitch app</figcaption>
    <div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
      <iframe
        src="https://glitch.com/embed/#!/embed/semantic-html-examples?path=public/media/semantic.html&previewSize=0"
        title="semantic-html-examples on Glitch"
        allow="geolocation; microphone; camera; midi; vr; encrypted-media"
        style="height: 100%; width: 100%; border: 0;">
      </iframe>
    </div>
</figure>

**Let's compare how these two sides stack up across a couple of different ways of accessing them.**

<figure>
    <figcaption class="figure__caption">Div vs Semantic HTML, on browser: visually the same.</figcaption>
    <img class="figure__image" src="/blog/semantic-html/slide_mediaExample_browser.png" alt="Side by side on browser">
</figure>

I didn't bother trying to implement my own video player library, so for the &lt;div&gt; version, we do a hack where we use JavaScript to display out an iFrame with the URL to the video inside it.

This obviously does not work without JavaScript enabled. And neither would fancy JavaScript libraries.

<figure>
    <figcaption class="figure__caption">Semantic HTML version: has built-in video player with captions.</figcaption>
    <img class="figure__image" src="/blog/semantic-html/slide_mediaExample_video.png" alt="Video with captions and transcript">
</figure>

**Here are the HTML elements that make up this page.**

- [&lt;figure&gt; + &lt;figcaption&gt;](#figure--figcaption)
- [&lt;video&gt;](#video)
- [&lt;audio&gt;](#audio)
- [&lt;track&gt;](#track)

**General Resources:**

- [Making Audio and Video Media Accessible](https://www.w3.org/WAI/media/av/), W3C WAI
- [Provide an accessible media player](https://accessibility.huit.harvard.edu/provide-accessible-media-player), Harvard University

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_figure_figcaption.png" alt="Slide of figure and figcaption element">
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
  <!-- Code snippet here -->
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
- [Web Accessibility Tutorials: Complex images](https://www.w3.org/WAI/tutorials/images/complex/), W3C WAI
- [Web Accessibility Tutorials: Groups of images](https://www.w3.org/WAI/tutorials/images/groups/), W3C WAI

<div class="spacer"></div>
---
<div class="spacer"></div>

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_video.png" alt="Slide of video element">
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
    <img class="figure__image" src="/blog/semantic-html/slide_audio.png" alt="Slide of audio element">
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
    <img class="figure__image" src="/blog/semantic-html/slide_track.png" alt="Slide of track element">
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

<div class="spacer--xxl"></div>
---
<div class="spacer--xxl"></div>

## Text Formatting

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_textFormatting.png" alt="Slide of Text Formatting with HTML elements listed">
    <figcaption class="figure__caption" markdown="block">
Text Formatting section slide, with HTML elements &lt;pre&gt;, &lt;code&gt;, &lt;samp&gt;, &lt;kbd&gt;, &lt;var&gt;, &lt;q&gt;, &lt;blockquote&gt;, &lt;cite&gt;, &lt;abbr&gt;, &lt;dfn&gt;, &lt;address&gt;, and &lt;time&gt;.
</figcaption>
</figure>

**Elements used to encode special meaning or formatting for different types of text.**

May improve SEO, or trigger browser-supported tools.

### Programming Text

(Hint: check out the [&lt;figure&gt; + &lt;figcaption&gt; sample app source code](https://glitch.com/embed/#!/embed/semantic-html-examples?path=public/media/semantic.html&previewSize=0) to see these in action!)

- [&lt;pre&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre): pre-formatted text, displayed in monospace font with white-space preserved
- [&lt;code&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code): text representing computer code, displayed in monospace font
- [&lt;samp&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp): text representing sample output from a computer program, commonly displayed in monospace font
- [&lt;kbd&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd): text representing user input on a keyboard / other device, commonly displayed in monospace font
- [&lt;var&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var): name of a variable in math or programming context, commonly displayed in italics

### Quoted Text
- [&lt;q&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q): inline quotation, commonly surrounded in quotation marks
- [&lt;blockquote&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote): extended quotation, commonly displayed as indented
- [&lt;cite&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite): citation to a creative work, commonly displayed in italics

### Terms and Definitions
- [&lt;abbr&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr): abbreviation or acronym, may display a tooltip with full description
- [&lt;dfn&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn): term being defined within the parent context, commonly displayed in italics

### Data
- [&lt;address&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address): text representing contact information, in any preferred form; typically placed within a `<footer>`
- [&lt;time&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time): text representing time; may include machine-readable format for SEO or browser support for adding calendar events / reminders

<div class="spacer--xxl"></div>
---
<div class="spacer--xxl"></div>

## Honorable Mentions

For the sake of time, I couldn't include every single HTML element in the presentation. But here are a few other HTML elements that merit a mention in this longer form!

### Lists

- [&lt;ol&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol): ordered list of elements, usually prefixed by a number
- [&lt;ul&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul): unordered list of elements, usually prefixed by a bullet or dash
- [&lt;li&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li): item in a list

### Forms

- [&lt;progress&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress): a progress bar
- [&lt;textarea&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea): a multi-line text input

### Tables

_Note: It's important to format tables well, to make them accessible for screen readers! For example, making sure headers are appropriately marked as such, so screen readers can announce the label for a particular cell._

- [&lt;table&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table): section of tabular data (rows and columns)
- [&lt;caption&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption): first element of &lt;table&gt;, designates the title or caption
- [&lt;thead&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead): container for rows that make up the head (e.g. headers)
- [&lt;tbody&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody): container for rows that make up the body of the table (e.g. main content)
- [&lt;tfoot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot): container for rows that make up the footer of the table (e.g. summaries)

**Rows and Cells:**

- [&lt;tr&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr): a row of cells
- [&lt;th&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th): a header cell, for either row or column
- [&lt;td&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td): a data cell

**Irregular and complex headers:**

See [Web Accessibility Tutorials: Tables with irregular headers](https://www.w3.org/WAI/tutorials/tables/irregular/), W3C WAI

- [&lt;colgroup&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup): a group of columns that are related, useful for complex headers
- [&lt;col&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col): a single column in a table, useful for complex headers

### Typography

- [&lt;a&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a): an anchor, or link, to another page or location
- [&lt;br&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br): a line break
- [&lt;p&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p): a paragraph of text, usually separated by a blank line

**Offset text:**
- [&lt;sub&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub): a subscript, usually rendered in slightly smaller font below the rest of the text
- [&lt;sup&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup): a superscript, usually rendered in slightly smaller font above the rest of the text
- [&lt;small&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small): small print, such as legal text (prefer to use CSS if difference is merely visual)

**Emphasized or italicized text:**

_Note: many of these look very similar, but have different meanings. Pay attention to the nuances!_

- [&lt;strong&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong): text of strong importance or urgency, usually rendered with bold type
  - See [&lt;b&gt; vs &lt;strong&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong#%3Cb%3E_vs._%3Cstrong%3E)
  - See [&lt;em&gt; vs &lt;strong&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong#%3Cem%3E_vs._%3Cstrong%3E)
- [&lt;b&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b): text in bold type
  - See [Usage notes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b#Usage_notes) for discussion of &lt;b&gt; vs &lt;strong&gt; vs &lt;em&gt;
- [&lt;em&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em): emphasized text, usually rendered in italic font
  - See [&lt;i&gt; vs &lt;em&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em#%3Ci%3E_vs._%3Cem%3E)
- [&lt;i&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em): text that is set off from normal prose, usually rendered in italics (e.g. a proper name or a term in another language)
    - See [&lt;i&gt; vs &lt;em&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em#%3Ci%3E_vs._%3Cem%3E)

**Text Revisions:**
- [&lt;mark&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark): marked or highlighted text
- [&lt;s&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s): text with a strikethrough, or line (to indicate it is no longer relevant)
- [&lt;ins&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins): text that has been inserted
- [&lt;del&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del): text that has been deleted


<div class="spacer--xxl"></div>
---
<div class="spacer--xxl"></div>

## Summary

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_section_takeaways.png" alt="Summary slide">
    <figcaption class="figure__caption" markdown="block">
Slide with title "Takeaways" and subtitle "Resources & important points to remember"
</figcaption>
</figure>

That's a lot of content! Let's review the important points:

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_whySemantic.png" alt="Semantic HTML review slide">
    <figcaption class="figure__caption" markdown="block">
Semantic HTML gives more context with less code.
</figcaption>
</figure>

Semantic HTML gives more context with less code. That means you can improve accessibility, mobile UX, SEO and more... while writing less code that's more readable.

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/only-exception.gif" alt="Gif of Paramore concert">
    <figcaption class="figure__caption" markdown="block">
Gif of Paramore concert with lyrics "You are the only exception" overlaid on top of sparkling lights. ([source](https://giphy.com/gifs/love-paramore-exception-XKTUX54SYYVuU
))
</figcaption>
</figure>

But for every rule, there's an exception so... when **shouldn't** you use semantic HTML?

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_whyNotSemantic.png" alt="When not to use Semantic HTMl slide">
    <figcaption class="figure__caption" markdown="block">
Not every use case will work with the basic semantic HTML elements.
</figcaption>
</figure>

Not all HTML elements are supported across all browsers, or they might have inconsistent behavior in a way that matters to you.

Sometimes you are going to have a very specific use case or design need that can't budge.

It's okay to write your own versions instead of using semantic HTML, but you need to understand what the browser implements for you and be willing to write it yourself, test, and maintain it.

**It is strongly suggested you use an existing open source library where multiple users can support patches and ensure it works broadly and consistently across browsers.**

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/slide_questions.png" alt="Slide with questions before custom implementing">
    <figcaption class="figure__caption" markdown="block">
But if you aren't going to use semantic HTML elements, make sure you're ready to take on the work yourself or support it.
</figcaption>
</figure>

If you are going to adopt a custom version of one of these elements (even more so if you're going to write one yourself), be sure to consider:

- Has someone else already made a library? Can I help?
- Is it accessible?
- Does it work across browsers?
- Does it work on mobile devices?
- How hard is it to test and maintain?

<figure class="figure">
    <img class="figure__image" src="/blog/semantic-html/knowledge-is-power.gif" alt="Gif of School House Rock">
    <figcaption class="figure__caption" markdown="block">
Gif of School House Rock cartoon with children smiling and one says "Knowledge is Power" ([source](https://giphy.com/gifs/schoolhouse-rock-b9wSM5gcMbIf6))
</figcaption>
</figure>

Now that you know:

- that all of these HTML elements exist;
- what they do;
- and what power ups the browser provides for each one

you can make informed decisions about when to use these elements to write semantic HTML... or when your use case calls for a custom implementation, and precisely why the existing elements won't work.

Use your knowledge for great good, and make beautiful and accessible websites for all! 🎉

<div class="spacer--xl"></div>
---
<div class="spacer--xl"></div>

## Additional Resources

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

🙏🏻 Many thanks to my team at [**Pingboard**](https://pingboard.com/) for supporting my time writing these posts, and to the [**EmberCamp**](http://embercamp.com/) organizers for providing the first space for this talk to happen!

Interested in seeing this talk come to a stage near you? [Contact me!](http://mariechatfield.com/contact/)
