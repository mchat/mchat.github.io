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

/**
 * Return the current Bootstrap device view.
 * From http://stackoverflow.com/a/15150381
 *
 * @return {string} current Bootstrap device view
 */
var findBootstrapEnvironment = function findBootstrapEnvironment() {
    var envs = ['xs', 'sm', 'md', 'lg'];

    $el = $('<div>');
    $el.appendTo($('body'));

    for (var i = envs.length - 1; i >= 0; i--) {
        var env = envs[i];

        $el.addClass('hidden-'+env);
        if ($el.is(':hidden')) {
            $el.remove();
            return env;
        }
    }
};

// Initialize Backbone Router
require(['router'], function (Router) {

    var router = new Router({});
    Backbone.history.start({
        pushState: true
    });

    // Route local links through Backbone Router.
    $('a[view]').on('click', function (event) {

        if (findBootstrapEnvironment() === 'xs') {
            $(".navbar-collapse").collapse('hide');
        }

        var target = $(event.target).attr('view');

        // Replace this URI with target URI
        router.navigate(target);

        // Render target view
        router.load(target);
    });

});