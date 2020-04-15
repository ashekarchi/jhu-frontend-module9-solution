(function () {
'use-strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

  ItemsController.$inject = ['menuItems'];
  function ItemsController(menuItems) {
    var ctrl = this;
    ctrl.menuItems = menuItems;
  }

})();
