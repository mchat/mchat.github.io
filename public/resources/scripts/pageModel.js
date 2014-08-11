define([
    'backbone',
    'jquery',
    'config'
],
function(Backbone, $, config) {

    'use strict';

    return Backbone.Model.extend( /** @lends PageModel */ {
        /**
         * @class PageModel fetches the html for a single page.
         *
         * @author  Marie Chatfield
         * @augments {Backbone.Model}
         * @requires jQuery
         * @requires backbone.js
         * @requires underscore.js
         * @constructs PageModel object
         */
        initialize: function (options) {
            this.name = options.name;
            this.div = options.div;
        },

        /**
         * Set the url of the html to retrieve.
         * @return {string} url
         */
        url: function () {
            return config.partialsUrl + this.name + '.html';
        },

        /**
         * Fetch the html and set it as an attribute.
         * @return {undefined}
         */
        fetch: function () {
            var that = this;

            $.ajax({
                url: this.url(),
                success: function (results) {
                    that.html = results;
                },
                error: function (xhr, status, response) {
                    that.html = '<h2>' + xhr.status + ': ' + response + '</h2>';
                },
                // Trigger change when complete so View can render.
                complete: function () {
                    that.trigger('change');
                }
            });
        }

    });

});