---
title: 'Single-Page, Server-Side, Static… say what?'
description: >-
  An emoji-filled learning journey about the trade-offs of different website
  architectures, complete with gifs, diagrams, and demo apps.
date: '2018-12-11T22:10:48.517Z'
image: '/blog/web-architecture/notebook.gif'
image_alt: 'Gif of Janelle Monáe'
medium: 'https://medium.com/git-checkout-b-idk-what-im-doing/single-page-server-side-static-say-what-ee427be0e9dc'
---

If you’ve been hanging around the internet, trying to build websites and apps, you may have heard some words in conversation like **static site** or **server-side rendered (SSR)** or **single-page app (SPA)**.

But what do all of these words mean? How does each type of application architecture differ? What are the tradeoffs of each approach and which one should you use when building your website?

<!--more-->

## 🙋🏽‍♀️ What's in an architecture?

<figure class="figure">
    <img class="figure__image" src="/blog/web-architecture/notebook.gif" alt="Gif of Janelle Monáe">
    <figcaption class="figure__caption" markdown="block">
Gif of Janelle Monáe in _Hidden Figures_ movie, sitting at a classroom desk with a notebook preparing to take notes with a pencil. ([source](https://giphy.com/gifs/foxhomeent-black-history-month-hidden-figures-3ohs4qxmDXm5RvWtnW))
</figcaption>
</figure>

The main difference between each of these types of architecture is **where rendering decisions are made**, or what part of the stack is in charge of deciding what content the user should see when they load your website.

*   A **static site** serves exact files (like HTML, JavaScript, CSS, images, etc) without any changes. It doesn’t make any rendering decisions!

*   A **server-side rendered site** handles rendering decisions on the server. The server determines what each page should look like, and what data should fill it, and returns the completed HTML to the browser to display.

*   A **single-page app** handles rendering decisions in the browser. The server returns the same base HTML page for every URL. In the browser, that page loads JavaScript that will determine what view to show, make API calls for data, and swap out the HTML content as needed.

That seems a little abstract, doesn’t it? Let’s check out some real working examples and dig in!

I wrote a fun little app with [Glitch](https://glitch.com/) called **emojis according to marie**. The app lists different emojis and the name I call them in my head. You can click on an emoji link to see more details about it.

<figure class="figure">
  <div class="figure__split">
    <div class="figure__split__image">
      <img class="figure__image" src="/blog/web-architecture/emojis-list.png" alt="Home page screenshot of Emojis By Marie app">
    </div>
    <div class="figure__split__image">
      <img class="figure__image" src="/blog/web-architecture/emojis-detail.png" alt="Emoji detail screenshot of Emojis by Marie app">
    </div>
  </div>
  <figcaption class="figure__caption" markdown="block">
Screenshots of [“emojis according to marie” app](https://emojis--single-page-app.glitch.me/) (single-page app version). Displays a table with a list of emojis and titles, and a page describing the 🎉emoji.
</figcaption>
</figure>

I liked this website so much, I wrote it three times! Once as a [static site](https://glitch.com/~emojis--static), once as a [server-side rendered site](https://glitch.com/~emojis--server-side), and once as a [single-page app](https://glitch.com/~emojis--single-page-app).

Let’s say that you go to each of my three app implementations. You first open the index page, then click the 🎉 link on each table because you are curious about the **TADA** emoji.

These sequence diagrams give a brief overview of how the work is split between the browser and the server in each application!

<figure class="figure">
  <div class="figure__split">
    <div class="figure__split__image">
      <img class="figure__image" src="/blog/web-architecture/static-site.png" alt="Diagram of a static site"></div>
    <div class="figure__split__image">
      <img class="figure__image" src="/blog/web-architecture/server-side.png" alt="Diagram of a server-side rendered site">
    </div>
    <div class="figure__split__image">
      <img class="figure__image" src="/blog/web-architecture/single-page-app.png" alt="Diagram of a single-page app">
    </div>
  </div>
  <figcaption class="figure__caption" markdown="block">
Side-by-side sequence diagrams of user visiting the same two pages on a static site ([plain text description](/blog/web-architecture/static-site.txt)), a server-side rendered site ([plain text description](/blog/web-architecture/server-side.txt)), and a single-page app ([plain text description](/blog/web-architecture/single-page-app.txt)).
</figcaption>
</figure>

Don’t understand those sequences? Not sure what all these terms mean anyway? Not to worry!

In the rest of this blog post, we’re going to look at _static sites_, _server-side rendered sites_, and _single-page apps_ in greater detail. For each type of application architecture we will:

*   Explain how it works
*   Link to a fully-functioning Glitch app that you can demo or edit yourself
*   Review the source code at a high-level
*   Discuss the advantages and disadvantages (plus possible mitigations!)
*   Suggest use cases that might be best suited for that architecture

**Use this resource in whatever way works best for your brain**—whether that’s jumping straight to source code and ignoring the rest of this article, skimming the bullet points in each section, or reading the whole thing in one sitting from start to finish. Or bail out now if the sequence diagrams answered your questions!

<figure class="figure">
    <img class="figure__image" src="/blog/web-architecture/here-we-go.gif" alt="Gif of NeNe Leakes">
    <figcaption class="figure__caption" markdown="block">
Gif of NeNe Leakes from the _Real Housewives of Atlanta_ show with a bored expression, waving her hands and saying “Here we go.” ([source](https://giphy.com/gifs/bravotv-xUOxeWJU6llggPQjQc))
</figcaption>
</figure>

<div class="spacer--xl"></div>

## 📁 Static Sites

<div class="side-by-side">
  <figure class="figure grow">
    <img class="figure__image" src="/blog/web-architecture/static-site.png" alt="Diagram of a static site">
    <figcaption class="figure__caption" markdown="block">
Sequence diagram of a static site ([plain text description](/blog/web-architecture/static-site.txt)).
</figcaption>
  </figure>

  <div class="text shrink" markdown="block">
A **static site** is an application that shows the same content to everyone, on every page load. Nothing changes — it’s not dynamic. There’s not much data involved.

In some ways, **a static site is like a glorified file finder**. Every URL maps directly to an asset, like an HTML page or an image. When a user requests that URL in their browser, the server finds the file that matches the path and returns it, as is.

A blog is a great example of a static site. The content is created by the author once, then uploaded and deployed. If you’ve ever used [GitHub Pages,](https://pages.github.com/) then you’ve written a static site!
</div>
</div>

Let’s take a look at the [**emojis by marie Glitch app**](https://glitch.com/~emojis--static), implemented as a static site.

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    allow="geolocation; microphone; camera; midi; encrypted-media"
    src="https://glitch.com/embed/#!/embed/emojis--static?path=README.md&previewSize=0"
    alt="emojis--static on Glitch"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

<div class="spacer"></div>

When we navigate around the [live app](https://emojis--static.glitch.me/), we see that there are four possible URLs:

*   `index.html`, a landing page with a list of emojis

*   `about.html`, a page with information about the app

*   `✨.html`, an information page that describes the ✨ emoji

*   `🎉.html`, an information page that describes the 🎉 emoji

When we look at the [source code](https://glitch.com/edit/#!/emojis--static), we find the following files:

```
- public/  
  - index.html  
  - about.html  
  - ✨.html  
  - 🎉.html

- server.js
```

In the `public/` directory, there is an HTML file for every page in the app! Pages like `✨.html` and `🎉.html`, which look very similar, have a lot of duplicate code between them.

The `server.js` file contains a very simple Express.js server. The most important line is:

```javascript
app.use(express.static("public"));
```

That tells the server that whenever a `GET` request comes in for a given path, to look up that path in the `public/` directory and return any matching files.

So if you request `/about.html`, the server will look for a file named `public/about.html` and return it! This means that you have to know the _exact_ path you want to request. But it also means that when you’re writing this app, you have to include a file for _every single possible page_ you might want to write.

<figure class="figure">
    <img class="figure__image" src="/blog/web-architecture/all-of-them.gif" alt="Gif of Phoebe Cates">
    <figcaption class="figure__caption" markdown="block">
Gif of actress Phoebe Cates in _Gremlins_ movie, looking distressed and saying “All of them?” ([source](https://giphy.com/gifs/filmeditor-christmas-movies-gremlins-3o6wrDUeLIQZFJVEC4))
</figcaption>
</figure>

**Question:** If you’re writing a static site, does that mean you have to hand-write every single page, and copy/paste a bunch of duplicate code? No, not at all!

There are plenty of frameworks that help you generate static sites from templates and dynamic content. For example, GitHub Pages uses [Jekyll](https://jekyllrb.com/), a Ruby Gem which lets you write content in Markdown and define reusable layouts. When you are ready to build and deploy your static site, Jekyll runs a script that transforms all your Markdown into the full HTML pages that the static site server can return.

What makes this a _static_ site is that all the templating and dynamic content happens at _build time_, not runtime. At runtime, the server doesn’t know how the files were generated, and it doesn’t do any work to generate them — it just returns them, exactly the way they are, with no modifications.

<figure class="figure">
    <img class="figure__image" src="/blog/web-architecture/change.gif" alt="Gif of Russel Brand">
    <figcaption class="figure__caption" markdown="block">
Gif of actor Russell Brand in _Get Him to the Greek_ movie, frowning and saying “I don’t like change. I don’t like it when things change.” Actor Jonah Hill stands behind him scratching his head. ([source](https://giphy.com/gifs/humor-change-jonah-hill-EEkQcI9AMlf6U))
</figcaption>
</figure>

<div class="spacer"></div>

### Advantages of a Static Site

**Simplest and cheapest option!** The server isn’t doing a whole lot of work here, just returning files. That means it doesn’t need much memory and it’s pretty cheap to run! There’s plenty of options that let you host static sites for free.

<div class="spacer"></div>

### Disadvantages of a Static Site

**Can only change content with a deploy.** There’s no databases involved with static sites, no way to have a “logged in” state or display different content for different users.

<div class="spacer"></div>

### Good Use Cases for a Static Site

*   You want to host your own blog site.
*   You want a separate set of marketing or documentation pages to display to people who aren’t logged into your app.
*   You are building a simple application that doesn’t need any state, or that stores all its state in the browser. (e.g. a calculator website)

<div class="spacer--xl"></div>

## 🖥 Server-Side Rendered Sites


<div class="side-by-side">
  <figure class="figure grow">
    <img class="figure__image" src="/blog/web-architecture/server-side.png" alt="Diagram of a server-side rendered site">
    <figcaption class="figure__caption" markdown="block">
Sequence diagram of a server-side rendered site ([plain text description](/blog/web-architecture/server-side.txt)).
</figcaption>
  </figure>
  <div class="text shrink" markdown="block">
A **server-side rendered site** is an application that renders dynamic content to users in the backend.

In some ways, the output of a server-side rendered site will look very similar to a static site — everything you need to render the page will be included inline in the HTML. However, **the server is deciding at runtime how to build the HTML file and what content to include**.
</div>
</div>

Let’s take a look at another version of the [**emojis by marie Glitch app**](https://glitch.com/~emojis--server-side), this time implemented as a server-side app.

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    allow="geolocation; microphone; camera; midi; encrypted-media"
    src="https://glitch.com/embed/#!/embed/emojis--server-side?path=README.md&previewSize=0"
    alt="emojis--server-side on Glitch"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

<div class="spacer"></div>

When we navigate around the [live app](https://emojis--server-side.glitch.me/), we see that there are five basic types of URLs:

*   `/` (index), a landing page with a list of emojis

*   `/about`, a page with information about the app

*   `/new`, a form that lets us create a new emoji

*   `EMOJI`, an information page that describes the `EMOJI` emoji

*   `EMOJI/edit`, a form that lets us edit the `EMOJI` emoji

Like the static site version of the app, we start out with the ✨ and 🎉 emojis in the index table, and we can go to those URLs to see information for those emojis.

But we can also add other emojis to the app, and they instantly display in the table and have links that work!

<figure class="figure">
    <img class="figure__image" src="/blog/web-architecture/mindblown.gif" alt="Gif of Millie Bobby Brown">
    <figcaption class="figure__caption" markdown="block">
Gif of actress Millie Bobby Brown silently saying “boom” as she explodes her hands away from her face and the camera pans away. ([source](https://giphy.com/gifs/converse-3o8dFn5CXJlCV9ZEsg))
</figcaption>
</figure>

When we look at the [source code](https://glitch.com/edit/#!/emojis--server-side), we find the following files:

```
- views/  
  - index.pug  
  - about.pug

  - emojis/  
    - index.pug  
    - edit.pug  
    - new.pug

- server.js
```

All the files in the `views/` directory end with `.pug`, which is the file extension for [Pug](https://github.com/pugjs/pug), a template engine for Node.js. These templates will be used to build HTML files!

<div class="spacer"></div>

> _Note: I’m using Pug for this app, but there are lots of template engines out there for every kind of server! To name just a few, there’s also_ [_Mustache_](http://mustache.github.io/) _and_ [_Dust_](http://www.dustjs.com/) _for Node.js,_ [_Action View_](https://guides.rubyonrails.org/action_view_overview.html)_/_[_embedded Ruby_](https://ruby-doc.org/stdlib-2.5.3/libdoc/erb/rdoc/ERB.html) _(ERB) for Rails,_ [_Java Server Pages_](https://www.oracle.com/technetwork/java/overview-138580.html) _(JSP) for Java, etc._

<div class="spacer"></div>

Instead of having a specific file path for each emoji we want to render, we have a set of templates under the `views/emojis/` directory.

This time in our `server.js` file, we do a bit more work! First, we instruct our server to use `pug` as the view engine, which will translate templates into full HTML files.

```javascript
app.set("view engine", "pug");
```

Then, we set up route definitions! Let’s start with the simplest examples. When the URL is `/about`, we’ll turn `views/about.pug` into HTML and return it. This doesn’t take any data.

```javascript
app.get("/about", (req, res) => res.render("about"));
```

When the URL is `/` (or the index route), we’ll fetch all the current emoji data and use it to fill out the `views/index.pug` template.

```javascript
app.get("/", (req, res) => res.render("index",  
  { emojis: getAllEmojis() }  
));
```

If we look inside that pug template, we iterate over the list of `emojis` passed by the server to render a row in the table for each emoji.

```
table  
  thead  
    tr  
      th emoji  
      th marie's name for it  
  tbody  
    each emoji in emojis  
      tr  
        td= emoji.icon  
        td  
          a(href=emoji.icon)= emoji.name
```

That means we can create more emojis, and as long as our server has access to them, they’ll automagically show up here in the table!

<figure class="figure">
    <img class="figure__image" src="/blog/web-architecture/magic.gif" alt="Gif of Uzo Aduba">
    <figcaption class="figure__caption" markdown="block">
Gif of actress Uzo Aduba in _The Wiz_ movie, saying “The magic is inside you.” ([source](https://giphy.com/gifs/mashable-26tP7phi7bNqczuqk))
</figcaption>
</figure>

Take a look at the dynamic segments (the `:emoji` part) in these route definitions in `server.js`.

The route `/💛` will match `/:emoji`, and `req.params.emoji` will be 💛.

The route `/🌵/edit` will match `/:emoji/edit`, and `req.params.emoji` will be 🌵.

```javascript
app  
  .route("/:emoji/edit")  
  .get((req, res) =>  
    res.render("emojis/edit", { emoji: getEmoji(req.params.emoji) })  
  )  
  .post(saveEmoji);

app.get("/:emoji", (req, res) =>  
  res.render("emojis/index", { emoji: getEmoji(req.params.emoji) })  
);
```

This means that we don’t need to know every possible combination of URLs we’ll ever need when we write this code! We just need to know:

*   the general pattern of the URLs we want to support

*   how to fetch the right data for each type of URL

*   the shape of the page for each URL, and where data should be inserted into it

<figure class="figure">
    <img class="figure__image" src="/blog/web-architecture/tetris.gif" alt="Gif of human tetris">
    <figcaption class="figure__caption" markdown="block">
Gif of stop-motion animation of a game of tetris, where the pieces are players in colored shirts sitting in an auditorium. ([source](https://giphy.com/gifs/tetris-131zlO6JqtKPII))
</figcaption>
</figure>

<div class="spacer"></div>

### Advantages of a Server-Side Rendered Site

**Initial page load can be very fast!** The server is still returning an HTML file with everything the browser needs to render as the initial response to a request. Granted, the server will need time to fetch the data and fill out the template before it can return the file, but as soon as the browser gets the HTML back it can display the page to the user with all the relevant data immediately.

**Can still handle more complex interactions with JavaScript after the page has loaded.** The initial HTML is rendered by the server, but you can have that page load additional JavaScript that will render other content or update the page as needed. For example, you might render a form on your server, but then handle form validation with jQuery. Or, you might use a React component to render a complicated video player after the rest of your page loads.

**Search engines can more easily load and index your site.** Since the initial HTML response contains everything the user will see, web crawlers for search engines will see the full content of your site (if it’s available for the public) and can use that when building search results.

<div class="spacer"></div>

### Disadvantages of a Server-Side Rendered Site

**Every page has to be loaded from scratch, from the server.** When a user clicks a link to see a new page, the browser leaves the current page and loads a brand new one with the updated URL. All JavaScript context is lost, and if the user is on a slow connection they may see a white flash or loading spinner while waiting for the next page to load. This can feel very slow and non-native (where “native” means the way a mobile app behaves on phones, or a desktop app behaves on desktops).

**_Mitigation:_** There are some libraries which attempt to help with this problem.  For example, [Turbolinks](https://github.com/turbolinks/turbolinks) can be used to fetch the new HTML page behind the scenes and then swap out the `<body>` once the new content is loaded. This means your server-side rendered site can _feel_ smoother without actually having to move your rendering logic.

**For complex applications, UI logic and responsibility is split across technologies.** If your initial HTML is rendered in your server and then loads JavaScript that makes major changes to the page or does very complex rendering, you may not have a single source of truth for what is in charge of a page. If your server-side template and your JavaScript templates are written in different formats, this may mean you have to write the same output in two different languages.

<div class="spacer"></div>

### Good Use Cases for a Server-Side Rendered Site

*   Your application doesn’t have a lot of complex visual changes after the page loads, and can largely be written as plain HTML.
*   You want users to see the content on your pages as fast as possible.
*   You don’t need a website experience that feels like a native app.
*   You want to optimize for search engine discoverability.


## 📲 Single-Page Apps

<div class="side-by-side">
  <figure class="figure grow">
    <img class="figure__image" src="/blog/web-architecture/single-page-app.png" alt="Diagram of a single-page app">
    <figcaption class="figure__caption" markdown="block">
Sequence diagram of a single-page app ([plain text description](/blog/web-architecture/single-page-app.txt)).
</figcaption>
  </figure>
  <div class="text shrink" markdown="block">
A **single-page app** is an application that renders dynamic content to users in the client, or browser.

The server does very minimal rendering work in a traditional single-page app. It returns _the exact same HTML file_ for every request. That file is responsible for loading a bunch of JavaScript, which will then decide what content to render based on the URL of the browser. **Code running in the browser, not the server, determines what the user sees at any given point.**

Since the JavaScript running in browser has all the logic it needs to display all pages in the application, it can also render new pages instantly. **Instead of asking the server for the next page, a single-page app can just swap out the relevant HTML on the current page.**
</div>
</div>

Let’s take a look at another version of the [**emojis by marie Glitch app**](https://glitch.com/~emojis--single-page-app), this time implemented as a single-page app.

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    allow="geolocation; microphone; camera; midi; encrypted-media"
    src="https://glitch.com/embed/#!/embed/emojis--single-page-app?path=README.md&previewSize=0"
    alt="emojis--single-page-app on Glitch"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

<div class="spacer"></div>

The [live app](https://emojis--single-page-app.glitch.me/) looks very similar to the [server-side rendered app](https://emojis--server-side.glitch.me/)! The same route patterns apply here. We have all the same features and URLs. We can create new emojis and navigate to their links immediately.

When we look at [the source code](https://glitch.com/edit/#!/emojis--single-page-app), we see a similar file structure:

```
- app/  
  - app.jsx

  - views/  
    - index.jsx  
    - about.jsx

  - emojis/  
      - index.jsx  
      - edit.jsx  
      - new.jsx  
  
- public/  
  - base.html  
  
- server.js
```

Our `app/` directory has a bunch of JavaScript files. Since this app is implemented in React, all those files are written in [JSX](https://reactjs.org/docs/introducing-jsx.html).

The `app/views/` directory has the same files as the `views/` directory in our server-side rendered app — but they’re written in a client-side templating engine instead of a server-side templating engine!

<figure class="figure">
    <img class="figure__image" src="/blog/web-architecture/alike-but-different.gif" alt="Gif of Tia and Tamera Mowry">
    <figcaption class="figure__caption" markdown="block">
Gif of Tia and Tamera Mowry in _Sister Sister_ show opening titles, with animated text reading “We look alike but, we’re different” ([source](https://giphy.com/gifs/nickelodeon-sister-tia-and-tamera-2WY0Ld3gloDYc)).
</figcaption>
</figure>

Before we dive into how that code works, let’s take a peek at the server first.

The logic in `server.js` is _much_ simpler than the server-side rendered app. Instead of listing out every possible route pattern, we just return the `public/base.html` file for every single request.

```javascript
app.get('*', function(request, response) {  
  response.sendFile(`${__dirname}/public/base.html`);  
});
```

That’s right… the **_exact same HTML file is returned for every request._** This has got be some magic file.

It’s… actually pretty empty. It doesn’t display anything, it just adds an empty `div` to the body and then loads `/bundle.js`.

```html
<div id="root"></div>  
 
<script type="text/javascript" src="/bundle.js"></script>
```

Notice that we didn’t define a `bundle.js` script. When the server starts running for the first time, it uses [Webpack](https://webpack.js.org/) to bundle all the JavaScript files in `app/` into a single file called `public/bundle.js`.

(Remember how our static site set up a definition to serve files from `public/`? We use that exact same behavior here in our single-page app server, because even dynamic applications have static content they want to serve!)

So the server **always** returns `public/base.html`, which loads `bundle.js`, which contains **all** of the JavaScript for our entire app.

<figure class="figure">
    <img class="figure__image" src="/blog/web-architecture/all-the-things.gif" alt="Gif of woman shopping at Target">
    <figcaption class="figure__caption" markdown="block">
Gif of a woman with a Target shopping cart, dropping an entire row of snack boxes into her cart, with the caption “I want all of the things” ([source](https://giphy.com/gifs/target-bullseye-targetstyle-26xBDL9X2vhjHYVRm)).
</figcaption>
</figure>

Once the JavaScript in `bundle.js` loads, React takes over in the browser and starts rendering content! The entry point for our app is in `app/app.jsx`.

```jsx
const rootElement = document.getElementById("root");  
ReactDOM.render(<App />, rootElement);
```

React finds the empty `<div>` that was added to `public/base.html` and then replaces it with the contents of the `<App />` component. That component uses [React Router](https://reacttraining.com/react-router/) to define what component to display based on the URL.

```jsx
<Route exact path="/" component={IndexView} />

<Switch>  
  <Route exact path="/about" component={AboutView} />  
  <Route exact path="/new" component={EmojiNewView} />  
  <Route exact path="/:emoji" component={EmojiIndexView} />  
</Switch>

<Route path="/:emoji/edit" component={EmojiEditView} />
```

These route definitions should look similar to the routes defined in the `server.js` for the server-side rendered app! The distinction is that **the routing logic is being handled by JavaScript running in the browser, instead of by the server**.

The components for each page handle fetching the data required to render each page, and then swapping out the HTML in the page with the correct content based on that data.

We can still use regular links in our app.

```html
<a href="/about">About</a>
```

This tells the browser to open a brand new page at the URL `/about`. It will fetch the `public/base.html` page from the server again, but this time the React Router will render the `AboutView` component based on the URL.

**However**, we can also use a special `<Link>` component defined by the React Router to swap out the content inline!

```html
<Link to="/about">About</Link>
```

This tells React Router to update the URL to `/about` and swap out the current page content with the `AboutView` component. From the user’s perspective, this can feel much faster and smoother, since we’re just replacing part of the page instead of loading an entirely new one.

<figure class="figure">
    <img class="figure__image" src="/blog/web-architecture/elsa.gif" alt="Gif of Elsa from Frozen">
    <figcaption class="figure__caption" markdown="block">
Gif of Elsa from _Frozen_ movie singing as her dress magically changes around her. ([source](https://giphy.com/gifs/frozen-oscars-let-it-go-S4SA8fmXVdn7G))
</figcaption>
</figure>

**Note:** I’ve described how this app works with React and React Router, but the same general principles apply for any other single-page app framework, like [Ember.js](https://www.emberjs.com/), [Vue.js](https://vuejs.org/) (with the [Vue Router](https://router.vuejs.org/)), [Angular](https://angular.io/), etc.

You don’t technically _have_ to use a framework to build a single-page app—you can write it yourself in regular JavaScript. But you’ll be spending a lot of time solving problems for which multiple open-source communities have spent years building elegant and efficient solutions… and a lot less time on your actual app.

<div class="spacer"></div>

### Advantages of a Single-Page App

**User experience of the app can feel very responsive and interactive, like a native app.** Transitions between pages can appear much smoother when most of the content stays the same. Even with a slow API call, a loading spinner can be displayed in the exact part of the app that’s changing instead of having a blank white screen while waiting for the server to reply with any HTML. Most websites that _feel_ like a native application are probably some variation of a single-page app.

**Clearer division between responsibility for views/rendering and data.** All the logic for rendering content is in a single place — the JavaScript that runs in the browser once the page is loaded. That includes both the initial render as well as any updates. The server is mainly responsible for providing the initial HTML file, and a robust set of API calls to return data. If you’re using a single-page app, you can even try deploying two servers: one that solely handles returning the single-page app and its assets, and another that solely handles data calls.

<div class="spacer"></div>

### Disadvantages of a Single-Page App

**Users may end up loading a lot of JavaScript for pages they never visit.** Let’s say your single-page app contains code to render 50 different pages. If a user only visits two of those pages, they still had to load _all_ the code as part of the initial page load. That’s a lot of unnecessary code that’s going over the network, and being parsed by the browser — and that’s even worse for mobile devices on slower networks. Large single-page apps can end up being painfully slow.

**_Mitigation:_** Some code bundlers now support **code splitting**, which is the process of **building separate JavaScript files with the source code for distinct parts of an application**. For the emojis app, we might end up with bundles like:

```
- application.js // React source code + App component with React Router

- index.js // just the IndexView component  
- about.js // just the AboutView component  
- emojis.js // the EmojiIndexView, EmojiEditView, and EmojiNewView components
```

Once we split out the distinct parts of our app into separate bundles that only include the code they need, we can try **lazy loading**, where a **single-page app only fetches the source code for a page when a user requests to load it**.

We could change our initial page load to only fetch `application.js`, which is the code we want on every single page. Then, when the app decides which route to display, it would fetch the bundle for that page and then execute it.

This can speed up the initial page load and decrease network request size, but it does mean that **page transitions can be slower** since the browser may need to fetch and then parse the code that actually renders the page, if it hasn’t been loaded already!

Bundlers like [Webpack](https://webpack.js.org/guides/code-splitting/) and [Browserify](https://github.com/browserify/factor-bundle) support code-splitting, and frameworks like [React](https://reactjs.org/docs/code-splitting.html), [Vue](https://router.vuejs.org/guide/advanced/lazy-loading.html), and [Ember Engines](http://ember-engines.com/guide/lazy-loading) support lazy-loading your split bundles.

<div class="spacer"></div>

**Initial page load and paint can take a long time.** In order to render the content a user will actually see when they first visit the site, the browser has to :

*   fetch the initial HTML file
*   fetch the JavaScript that renders the site
*   execute the JavaScript

That’s a lot more work just to load the page, and the load time can be significant if you have a lot of JavaScript to send over the wire. Even though every other page transition may feel fast and native, users may perceive your app as slow or weighty if it takes a long time before they can start interacting with it.

**_Mitigation:_** Many front-end frameworks now support **isomorphic apps**, or apps which utilize the same code to return a **server-side rendered page that loads a single-page app**. The idea is that instead of returning an empty HTML page, the server will render all the HTML for the initial page load so the user can see the app as soon as possible. But that initial page **also** loads the JavaScript for a single-page app that can take over the rest of the routing and make the other page transitions feel snappy.

It’s like the best of both worlds, right? **But there is a cost: you have to be able to use the same rendering code in both the server and the client to make sure the user sees the right content.** Check out the guides on server-side rendering for your framework of choice (like [React](https://redux.js.org/recipes/server-rendering), [Vue](https://ssr.vuejs.org/), or [Ember Fastboot](https://www.ember-fastboot.com/)) for more information and details on the tradeoffs!

<div class="spacer"></div>

**By default, many single-page apps are inaccessible for screenreaders and other forms of assistive technology.** Accessibility (a11y) is an important part of any website, because all people should be able to access your app in a beautiful, engaging, and understandable manner.

When a browser navigates to a new page, screenreaders can announce the change in an expected way. Traditional links using `<a>` tags also include helpful content for screenreaders to know that a link is clickable and where it goes. But in a single-page app, content is often swapped out on an existing page.

This can create a very confusing and inaccessible experience for screenreader users. Imagine this scenario: a user clicks a link that loads a new page, but nothing tells them that the content has changed, and their focus is still on the old button. They have to manually navigate the entire page and try to guess what changed and when.

Or worse: since single-page apps can use custom code to transition pages, a developer may have made a `<div>` that just looks like a button visually. The user has no way of knowing that they can press that element to see a new page, and it doesn’t handle keyboard events.

**_Mitigation:_** single-page apps can be made accessible, but it requires a bit more attention to detail!

Websites should follow the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) to ensure that everyone can access and interact with the app. Some specific concerns for single-page apps include:

*   ensure that focus is changed to new content after a page transition
*   ensure that all links have proper markup to indicate they are interactive and what they do
*   ensure that all interactive elements handle keyboard events as well as mouse events

There are tons of learning resources out there (for example, the [Web Accessibility Checklist](https://a11yproject.com/checklist.html) from The A11y Project or this podcast on [Accessibility in Single Page Apps](https://frontsidethepodcast.simplecast.fm/1655a1ef) from The Frontside). In addition, some frameworks have specific tooling and libraries that help make accessibility a top priority!

Here are a few blog posts outlining the available a11y tooling for [Ember](https://www.emberjs.com/blog/2018/06/17/ember-accessibility-and-a11y-tools.html), [React](https://blog.usejournal.com/getting-started-with-web-accessibility-in-react-9e591fdb0d52), and [Vue](https://medium.com/@emilymears/getting-started-with-web-accessibility-in-vue-17e2c4ea0842).

<div class="spacer"></div>

### Good Use Cases for a Single-Page App

*   Your application has a lot of complex interactions.
*   You want your application to feel like a native app, especially when navigating between pages.
*   You are willing to put in a bit of extra effort to handle focus changes and ensure your application is accessible.
*   You either are not concerned about initial page load time and bundle size, **or** you have the time and resources to spend on solutions like isomorphic apps and code splitting/lazy loading.


<div class="spacer--xl"></div>
---
<div class="spacer--xl"></div>

## 👩🏻‍🏫 Let's Review!

<figure class="figure">
    <img class="figure__image" src="/blog/web-architecture/fistpump.gif" alt="Gif of Judd Nelson">
    <figcaption class="figure__caption" markdown="block">
Gif of Judd Nelson in _The Breakfast Club_ movie, walking across an empty football field and pumping his fist. ([source](https://giphy.com/gifs/club-breakfast-vRsa3fLg96Qve))
</figcaption>
</figure>

That was **a lot** of information! Kudos to you if you made the whole way through.

To summarize:

*   a **static site** serves files without making changes. It’s fast and cheap, but pretty limited.

*   a **server-side rendered site** makes rendering decisions on the server. Initial page load time can be very fast, but it doesn’t feel like a native app since you have to request a new page every time you make a transition.

*   a **single-page app** makes rendering decisions in the browser. They feel much more like a native app but can be slow to load unless you use advanced techniques (like isomorphic apps that combine server-side rendering with a single-page app, or code-splitting and lazy-loading). Additionally, single-page apps are usually less accessible out of the box than most server-side rendered apps.

There’s no one perfect architecture! Every approach has advantages and disadvantages. But if you understand how each type of application works, you can make an informed decision about the best choice for you, based on your needs, priorities, and preferences.

Now go forth and build great apps! 🎉

<div class="spacer--xl"></div>
---
<div class="spacer--xl"></div>

_Did you like this post? I’ll be sporadically publishing more content like this to the_ [**_git checkout -b idk-what-im-doing_**](/blog)  _blog in the future! Tweet me_ [_@mariechatfield_](https://twitter.com/mariechatfield) _to let me know what kind of resources you’d like to see next._

P.S. a big thank you to my wonderful coworkers at [Pingboard](https://pingboard.com/) for reviewing and giving feedback on this article, especially [Kelsey Huse](https://medium.com/u/19268bf8f0b7) and [Ryan Schutte](https://medium.com/u/10e8ebae6f9f)! 🙏🏻