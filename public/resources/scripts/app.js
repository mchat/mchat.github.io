require.config({
    shim: {
        'boostrap': {
            deps: ['jquery']
        },
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        }
    },
    baseUrl: '/public/resources/scripts',
    paths: {
        'bootstrap': '/public/vendor/bootstrap.min',
        'backbone': '/public/vendor/backbone.min',
        'jquery': '/public/vendor/jquery.min',
        'underscore': '/public/vendor/lodash.underscore.min',
        'config': 'app.config'
    }
});

/**
 * Initialize Bootstrap's js components
 * TODO; determine why shim deps doesn't always resolve jquery first
 */
require(['jquery'], function () {
    require(['bootstrap']);
});

// Initialize Backbone Router
require(['router'], function (Router) {

    var router = new Router({});
    Backbone.history.start({
        pushState: true
    });

    $(document).ready(function () {

        // Route local links through Backbone Router
        // instead of creating a separate http request.
        $(document).on('click', 'a[href^="/"]', function (event) {
            // Prevents http request, but also navbar link functionality
            event.preventDefault();

            var target = $(event.target).attr('href').slice(1);

            // Replace this URI with target URI
            router.navigate(target);

            // Render target view
            router.load(target);
        });

        // Restore navbar link functionality
        $(".navbar-nav li a").click(function (event) {
            $(".navbar-collapse").collapse('hide');
        });

    });

});