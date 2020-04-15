(function () {
'use-strict';

angular.module('MenuApp')
.component('menuItems', {
  templateUrl: 'templates/itemslist.template.html',
  bindings: {
    menuItems: '<'
  }
});

})();
