(function() {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        var lunchCtrl = this;
        lunchCtrl.lunchItems = "";
        lunchCtrl.message = "";

        lunchCtrl.checkIfTooMuch = function() {
            var items = lunchCtrl.lunchItems.split(',').map(function(item) {
                return item.trim();
            }).filter(function(item) {
                return item !== "";
            });

            if (items.length === 0) {
                lunchCtrl.message = "Please enter data first";
            } else if (items.length <= 3) {
                lunchCtrl.message = "Enjoy!";
            } else {
                lunchCtrl.message = "Too much!";
            }
        };
    }
})();
