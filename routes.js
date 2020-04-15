(function () {
'use-strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl:'templates/categorylist.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      categoryItems: ['MenuDataService', function(MenuDataService){
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{itemId}',
    templateUrl:'templates/itemslist.template.html',
    controller: 'ItemsController as items',
    resolve: {
      menuItems: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
        return MenuDataService.getItemsForCategory($stateParams.itemId);
      }]
    }
  })

}

})();
