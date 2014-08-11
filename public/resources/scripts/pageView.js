define([
    'backbone',
    'jquery',
    'config'
],
function(Backbone, $, config) {

    'use strict';

    return Backbone.View.extend( /** @lends PageView */ {
        /**
         * @class Renders a page view.
         *
         * @author  Marie Chatfield
         * @augments {Backbone.View}
         * @requires jQuery
         * @requires backbone.js
         * @requires underscore.js
         * @constructs PageView object
         */
        initialize: function (options) {
            this.model = options.model;

            // Render whenever Model changes.
            this.listenTo(this.model, 'change', this.render);
        },

        /**
         * Render the page view using html fetched from model.
         * @return {undefined}
         */
        render: function () {
            this.$el.html(this.model.html);

            // Route local links through Backbone Router.
            $('a[view]').on('click', function (event) {

                if (findBootstrapEnvironment() === 'xs') {
                    $(".navbar-collapse").collapse('hide');
                }

                var target = $(event.target).attr('view');

                // Replace this URI with target URI
                config.router.navigate(target);

                // Render target view
                config.router.load(target);
            });

            if (this.model.div) {
                // TODO; Figure out a non-hacky method of updating hash
                window.location.hash = "#workspace";
                window.location.hash = this.model.div;
                window.location.hash = this.model.div;
            }
        }

    });

});