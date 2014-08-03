define([
    'backbone',
    'jquery'
],
function(Backbone, $) {

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
        }

    });

});