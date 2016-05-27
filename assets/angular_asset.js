/*global angular*/
(function (ng) {
    "use strict";
    ng.module("hello", [
    ]).controller("helloController", [
        "$scope",
        function (scope) {
            /*jslint unparam: true*/
            scope.items = [];
            scope.notify = function () {
                scope.items.push({
                    "date": new Date(),
                    "text": scope.tmpItem.text
                });
                scope.tmpItem.text = "";
            };
        }
    ]);
}(angular));
