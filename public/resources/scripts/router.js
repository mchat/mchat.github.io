define([
    'backbone',
    'jquery',
    'pageModel',
    'pageView'
],
function(Backbone, $, PageModel, PageView) {

    'use strict';

    var Router = Backbone.Router.extend( /** @lends Router */ {
        /**
         * @class  Router for portfolio SPA
         *
         * @author  Marie Chatfield
         * @augments { Backbone.Router }
         * @requires jQuery
         * @requires backbone.js
         * @requires underscore.js
         * @constructs Router object
         */

        routes: {
            '(:name)': 'load'
        },

        /**
         * Loads a single page.
         * @param  {string} name The name of the page to load.
         * @return {Promise}
         */
        load: function(name) {
            var that = this,
                div,
                i;

            if (name && (i = name.indexOf('#')) > -1) {
                div = name.slice(i + 1);
                name = name.slice(0, i);
            } else if (window.location.hash) {
                div = window.location.hash;
            }

            name = name || 'index';

            var model = new PageModel({ name: name, div: div }),
                view = new PageView({ el: '#workspace', model: model });

            model.fetch();
        }

    });

    return Router;

});
