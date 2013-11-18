'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('lashesApp.services', []).
  value('version', '0.1');

//var facebook = angular.module('lashesApp.services', []).
//   service('facebook', function($rootScope) {
//
//    this.login = function(fail, success) {
//        FB.login(function(response) {
//            $rootScope.$apply(function() {
//                if (response.authResponse) {
//                    success(response);
//                } else {
//                    fail('User cancelled login or did not fully authorize.');
//                }
//            });
//        });
//    };
//
//    this.FB = FB;
//});
//facebook.$inject = ['$rootScope'];
