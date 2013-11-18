'use strict';


// Declare app level module which depends on filters, and services
angular.module('lashesApp',
        ['ui.bootstrap','ui.calendar','lashesApp.filters', 'lashesApp.services', 'lashesApp.directives', 'lashesApp.controllers']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/lashes/about', {templateUrl: 'partials/lashes/about.html', controller: 'AboutCtrl'});
        $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactCtrl'});
        $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'});
        $routeProvider.when('/main', {templateUrl: 'partials/main.html', controller: 'MainCtrl'});
        $routeProvider.otherwise({redirectTo: '/main'});
    }]);
