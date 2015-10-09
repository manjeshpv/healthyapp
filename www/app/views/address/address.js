(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    console.log('address routing')
    $stateProvider

      .state('app.address', {
        url: '/address',
        views: {
          'menuContent': {
            templateUrl: 'app/views/address/address.html',
            controller: 'AddressCtrl'
          }
        }
      });

  });



  'use strict';

  angular.module('starter').controller('AddressCtrl', function($scope, $rootScope, $location, $stateParams,$http) {
    console.log('AddressCtrl controller')

   

}).call(this);
