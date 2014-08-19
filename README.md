## a portfolio of projects created by marie chatfield

This portfolio is a simple single-page application, implemented with Backbone.js and Twitter Bootstrap, and hosted on GitHub Pages.

### How is this different from a regular website?
A single-page application works by loading a single html page, whose content is dynamically updated with script as you navigate around the app. The application can also update the url to reflect the current view or state. The trick comes when a user requests a specific view with that url. Traditionally, you must include some sort of url rewrite rule in your server, so that these specific urls are routed to the correct base html page, which runs a script that will load the requested view.

### But GitHub Pages doesn't give you a server does it?
No, it does not. However, Pages allows you to create a custom 404 error page. And if you don't create any actual pages for your site, then every single request on your url will route to that error page. In essence, this functions as a basic url rewrite rule.

Knowing that, I treat my 404 page as the base page of my application. From that page, I run a script which then evaluates the url and loads the correct view - including an error message if the url is actually invalid. While navigating throughout the application, no new pages are loaded - the content is dynamically updated with Javascript. So the 404 page is loaded only once per initial request or refresh.

### Isn't all this a lot of work for a simple portfolio?

Probably - there's no particular benefit to be gained for implementing this project as a single-page application, as all of the content is static. However, it was a fun problem to tackle! 
