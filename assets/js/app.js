angular.module('example', [])
    .controller('LayoutCtrl', ['$rootScope', '$window', '$timeout', function ($scope, $window, $timeout) {
        var self = this;
        console.log('Greetings from LayoutCtrl');
        console.log(this.name);

        this.welcome = "Welcome to this new basic site that one day will be bigger and better !";
        this.name = "Joe";

        /*$timeout(function () {
            $scope.$broadcast("startUp", self.hello);
        }, 100);**/
        $scope.$on("nameChange", function (evt, newName) {
            console.log(newName);
            self.name = newName;

            $window.location = "page2.html";
        });
    }])

    .controller('WelcomeCtrl', ['$scope', function ($scope) {
        var self = this;
        console.log('Welcome from WelcomeCtrl');

        this.change = function () {
            $scope.$emit("nameChange", self.name)
        };

        /*$scope.$on("startUp", function (evt, startName) {
            self.name = startName;
        });**/
    }]);
