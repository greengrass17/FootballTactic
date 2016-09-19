angular.module('app')
.directive('ftField', ftField);

function ftField() {
  var directive = {
    templateUrl: 'ftField/ftField.html',
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
    // TODO: A system to calculate moves (moves, movesUse, movesLeft)
    var target, transform, transformList, index, startX, startY, prevX, prevY, currX, currY, movementX, movementY, matrix, radius = 50, distance, limitX, limitY, line;
    var field = elem.find('svg')[0];

    scope.mousedown = mousedown;
    scope.mouseup = mouseup;
    scope.positions = angular.copy(ctrl.positions);
    scope.moves = ctrl.moves;
    var keys = Object.keys(scope.positions);

    function mousedown(event) {
      if (event.target.nodeName == 'circle') {
        field.onmousemove = drag;
        target = event.target;
        line = target.nextElementSibling;
        transformList = target.transform.baseVal;
        startX = event.clientX;
        startY = event.clientY;
        console.log(event);
        // console.log(startX, startY);
        prevX = currX = startX;
        prevY = currY = startY;
        // index = keys.indexOf(target.id);
      } else {
        target = null;
      }
    }

    function drag(event) {
      currX = event.clientX;
      currY = event.clientY;
      distance = Math.sqrt(Math.pow(currX - startX, 2) + Math.pow(currY - startY, 2));
      if (scope.moves - Math.floor(distance/radius) > -1) {
        scope.moves = ctrl.moves - Math.floor(distance/radius) - 1;
        scope.$apply();
      } else {
        // currX = (currX - startX)*radius/distance + startX;
        // currY = (currY - startY)*radius/distance + startY;
      }

      line.x2.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_NUMBER, currX);
      line.y2.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_NUMBER, currY);
      prevX = currX;
      prevY = currY;
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
