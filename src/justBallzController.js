justBallz.controller('JustBallzController', ['$scope', '$window', '$timeout', function($scope, $window, $timeout) {
  $scope.viewPane = 1;

  $scope.$watch(function() {
      return $window.isConnected;
    },
    function(n, o) {
      $scope.setConnected();
      if ($scope.isConnected === true) {
        $scope.viewPane = 4;
        $scope.checkStatus();
      } else if ($scope.isConnected === 'not connecting') {
        $scope.viewPane = 2;
      }
    }
  );

  $scope.watcher = function() {
    $timeout(function() {
      $scope.$digest();
      if ($scope.isConnected === false) {
        $window.isConnected = "not connecting";
        $scope.setConnected();
      }
      $scope.$digest();
    }, 15000);
  };

  $scope.setConnected = function() {
    $scope.isConnected = $window.isConnected;
  };

  $scope.isInView = function(viewPane) {
    return $scope.viewPane === viewPane;
  };

  $scope.submit = function() {
    $scope.setName();
    $scope.viewPane = 2;
    $scope.setConnected();
  };

  $scope.connect = function() {
    $scope.viewPane = 3;
    $scope.watcher();
  };

  $scope.connected = function() {
    $scope.viewPane = 4;
  };

  $scope.disconnect = function() {
    $scope.viewPane = 1;
  };

  $scope.checkStatus = function() {
    $timeout(function() {
      $scope.$digest();
      $scope.setConnected();
      $timeout(function() {
        if ($scope.isConnected === false) {
          $scope.viewPane = 2;
        }
      }, 1000);
    }, 10000);
  };

  $scope.setName = function(){
    $scope.orbName = $scope.name;
  };
}]);
