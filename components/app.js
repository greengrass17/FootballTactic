var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
  $scope.moves = 10;
  $scope.positions = {
    topleft: {
      x: 50,
      y: 50
    },
    topright: {
      x: 350,
      y: 50
    },
    botright: {
      x: 350,
      y: 350
    },
    botleft: {
      x: 50,
      y: 350
    }
  };
});
