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

    // describe('#connect', function() {
    //
    //
    //
    // });
    //
    // describe("#connected",function(){
    //
    //
    // });
    //
    // describe("#disconnect",function(){
    //
    //
    //
    // });
});
