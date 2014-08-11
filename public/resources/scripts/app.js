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

    // Route local links through Backbone Router.
    $('a[view]').on('click', function (event) {
        var target = $(event.target).attr('view');

        // Replace this URI with target URI
        router.navigate(target);

        // Render target view
        router.load(target);
    });

});