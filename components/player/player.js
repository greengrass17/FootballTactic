angular.module('app')
.directive('player', player);

function player() {
  var directive = {
    restrict: 'EA',
    link: link,
    templateUrl: 'components/player/player.html',
    scope: {
      key: '=',
      value: '='
    },
    controller: Controller,
    controllerAs: 'vm',
    bindToController: true
  }

  return directive;

  function link(scope, elem, attrs, ctrl) {
  }
}

function Controller() {

}
