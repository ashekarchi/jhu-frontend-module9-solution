(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'templates/categorylist.template.html',
  bindings: {
    categoryItems: '<'
  }
});

})();
