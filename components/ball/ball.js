(function() {
  'use strict';

  angular
    .module('app')
    .directive('ftBall', ftBall);

  /* @ngInject */
  function ftBall() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'components/ball/ball.html',
      scope: {
        x: '=',
        y: '=',
        player: '='
      },
      link: linkFunc,
      controller: Controller,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {
      if (ctrl.player) {
        el.find('circle').attr('movable', true);
        console.log(ctrl.player);
        scope.x = ctrl.player.x + 15;
        scope.y = ctrl.player.y + 15;
        scope.r = 10;
      } else {
        scope.x = ctrl.x;
        scope.y = ctrl.y;
        scope.r = 20;
      }
    }
  }

  Controller.$inject = [];

  /* @ngInject */
  function Controller() {
    var vm = this;

    activate();

    function activate() {

    }
  }
})();
