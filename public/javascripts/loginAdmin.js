/*
 * Created by Welcome on 2/5/2016.
 */

angular.module("App")


    .controller("loginCtrl", function ($scope, $firebaseArray, $firebaseObject) {
        var ref = new Firebase("https://qurbaniapps.firebaseio.com/")

        $scope.men = $firebaseArray(ref.child('men'))

        $scope.sendMen = function (user) {
            $scope.men.$add(user)
            console.log($scope.men)
        }

        $scope.women = $firebaseArray(ref.child('women'))
        $scope.sendWomen = function (user) {
            $scope.women.$add(user)
            console.log($scope.women)
        }

        $scope.dropSuccessHandler = function ($event, index, array) {
            array.$remove(index, 1);
        };

        $scope.onDrop = function ($event, $data, array) {
            array.$add($data);
        };
        // })
    });

