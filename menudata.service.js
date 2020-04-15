(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject=['$http']
function MenuDataService($http){
  var service = this;
  var items = [];

  service.getAllCategories = function(){
    return $http({
      method:"GET",
      url:  "https://davids-restaurant.herokuapp.com/categories.json"
    }).then(function (response) {
      var categoryItems = response.data;
      service.items = [];
      for (var i=0; i<categoryItems.length; i++){
          var item = {
            id: categoryItems[i].id,
            shortName: categoryItems[i].short_name,
            name: categoryItems[i].name,
            specialInstructions: categoryItems[i].special_instructions,
            url: categoryItems[i].url
          }
          service.items.push(item);
      }
      console.log(service.items);
      return service.items;
    });
  }

  service.getItemsForCategory = function(itemId){
    return $http({
      method:"GET",
      url:  "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + itemId,
    }).then(function (response) {
      var categoryItems = response.data.menu_items;
      service.items = [];
      for (var i=0; i<categoryItems.length; i++){
          var item = {
            id: categoryItems[i].id,
            shortName: categoryItems[i].short_name,
            name: categoryItems[i].name,
            description: categoryItems[i].description
          }
          service.items.push(item);
      }
      console.log(service.items)
      return service.items;
    });
  }

}

})();
