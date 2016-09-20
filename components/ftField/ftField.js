angular.module('app')
.directive('ftField', ftField);

function ftField() {
  var directive = {
    templateUrl: 'components/ftField/ftField.html',
    scope: {
      positions: '=',
      moves: '=',
    },
    link: link,
    controller: Controller,
    controllerAs: 'vm',
    bindToController: true,
  };
  return directive;

  function link(scope, elem, attrs, ctrl) {
    // TODO: Restructure with services & classes
    var target, startX, startY, currX, currY, moves, radius = 50, limitX, limitY, line;
    var field = elem.find('svg')[0];

    scope.mousedown = mousedown;
    scope.mouseup = mouseup;
    scope.positions = angular.copy(ctrl.positions);
    scope.moves = moves = ctrl.moves;
    var keys = Object.keys(scope.positions);

    function getTotalDistance(notKey) {
      var total = 0;
      for (var key in scope.positions) {
        if (key !== notKey) {
          var distance = scope.positions[key]._distance || 0;
          total += distance;
        }
      }
      return total;
    }

    function mousedown(event) {
      if (event.target.nodeName == 'circle') {
        field.onmousemove = drag;
        target = event.target;
        line = target.nextElementSibling;
        startX = event.clientX;
        startY = event.clientY;
        console.log(event);
        // console.log(startX, startY);
        currX = startX;
        currY = startY;
      } else {
        target = null;
      }
    }

    function drag(event) {
      currX = event.clientX;
      currY = event.clientY;
      var distanceLeft = moves*radius - getTotalDistance(target.id);

      scope.positions[target.id]._distance = Math.sqrt(Math.pow(currX - startX, 2) + Math.pow(currY - startY, 2));

      if (distanceLeft - scope.positions[target.id]._distance > 0) {
        scope.moves = moves - Math.floor(getTotalDistance()/radius) - 1;
        scope.$apply();
      } else {
        var distance = scope.positions[target.id]._distance;
        currX = (currX - startX)*distanceLeft/distance + startX;
        currY = (currY - startY)*distanceLeft/distance + startY;
      }

      line.x2.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_NUMBER, currX);
      line.y2.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_NUMBER, currY);
    }

    function mouseup(event) {
      if (target) {
        ctrl.positions[target.id].x = Math.round(line.x2.animVal.value);
        ctrl.positions[target.id].y = Math.round(line.y2.animVal.value);
        ctrl.moves = scope.moves;
      }
      field.onmousemove = null;
    }
  }
}

function Controller() {

}
