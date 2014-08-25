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
require(['router', 'config'], function (Router, config) {

    var router = new Router({});
    Backbone.history.start({
        pushState: true,
        hashChange: false
    });

    config.router = router;

});

// Google Analytics Script
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-54073560-1', 'auto');
ga('send', 'pageview');
