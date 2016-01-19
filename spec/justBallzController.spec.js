describe('JustBallzController', function(){
  beforeEach(module('JustBallz', function($provide){

  }));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
    var scope = {};
    var _window = {};
    var ctrl = $controller('JustBallzController', {$scope: scope, $window: window1});
  }));



    it('starts with the default view shown',function(){
      console.log($window);
      console.log($scope);
      console.log(ctrl);
      expect(scope.viewPane).toBeDefined();
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
