/**
 * Created by josephthomaschaske on 2/14/16.
 */
var app2 = angular.module('app2', []);

app2.controller('ctrl1', function($scope){
    $scope.randomNum1 = Math.floor((Math.random() * 10) + 1);
    $scope.randomNum2 = Math.floor((Math.random() * 10) + 1);
});

app2.controller('badCtrl', function($scope){
    var badFeelings = ["Disregarded", "Unimportant", "Rejected", "PowerLess"];
    $scope.bad = badFeelings[Math.floor((Math.random() * 4))];
});

app2.controller('goodCtrl', function($scope){
    var goodFeelings = ["Pleasure", "Awesome", "Lovable", "Inner Peace"];
    $scope.good = goodFeelings[Math.floor((Math.random() * 4))];
});