
var clickably = require('/clickably.js');
var $ = require('jquery');

module.exports.activate = function (clickable_element, options, callback) {

    $(document).ready(function () {
        clickably(clickable_element, options, callback)
    });

};