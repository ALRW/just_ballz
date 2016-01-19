describe('JustBallzController', function(){
  beforeEach(module('JustBallz'));

  var $scope, ctrl;
  var mockWindow = {};
  beforeEach(inject(function(_$rootScope_, _$controller_) {
      $scope = _$rootScope_.$new();
      ctrl = _$controller_('JustBallzController', {$scope: $scope, $window: mockWindow});
  }));

    it('starts with the default view shown',function(){
      expect($scope.viewPane).toEqual(1);
    });

    describe('#connect', function() {
     it('sets the viewPane to 3 and calls for a blue tooth listener', function(){
       $scope.connect();
       expect($scope.viewPane).toEqual(3);
     });

     it('calls the watcher function', function(){
       spyOn($scope, 'watcher');
       $scope.connect();
       expect($scope.watcher).toHaveBeenCalled();
     });

    });

    describe("#connected",function(){
      it('sets the viewPane to 4', function(){
        $scope.connected();
        expect($scope.viewPane).toEqual(4);
      });
    });

    describe("#disconnect",function(){
      it('sets the viewPane to 1', function(){
        $scope.disconnect();
        expect($scope.viewPane).toEqual(1);
      });
    });

    describe('#isInView', function(){
      it('returns true when the given viewPane is displayed', function(){
        expect($scope.isInView(1)).toBeTruthy();
      });

      it('returns false when the given viewPane is not displayed', function(){
        expect($scope.isInView(3)).toBeFalsy();
      });
    });
});
