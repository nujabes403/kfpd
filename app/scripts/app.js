'use strict';

/**
 * @ngdoc overview
 * @name initApp
 * @description
 * # initApp
 *
 * Main module of the application.
 */
angular.module('initApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMessages',
    //'ngTouch',
    'firebase',
    'firebase.ref',
    'firebase.auth','ngMaterial'
  ])
.config(function($mdDateLocaleProvider){
    $mdDateLocaleProvider.months = ['1월', '2월', '3월','4월','5월','6월','7월','8월','9월','10월','11월','12월',];
    $mdDateLocaleProvider.shortMonths = ['1월', '2월', '3월','4월','5월','6월','7월','8월','9월','10월','11월','12월',];
    $mdDateLocaleProvider.shortDays = ['일','월','화','수','목','금','토'];
});
