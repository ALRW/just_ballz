describe('JustBallzController', function(){
  beforeEach(module('JustBallz'));

  var $scope, $timeout, ctrl;
  var $window = {
    isConnected: false
  };
  beforeEach(inject(function(_$rootScope_, _$controller_, _$timeout_) {
      $scope = _$rootScope_.$new();
      $timeout = _$timeout_;
      ctrl = _$controller_('JustBallzController', {$scope: $scope, $window: $window, $timeout: $timeout});
  }));

  afterEach(function(){
    $window.isConnected = false;
  });

    it('starts with the default view shown',function(){
      expect($scope.viewPane).toEqual(1);
    });

    it('watches for changes to the global isConnected and updates the controller variable', function(){
      $window.isConnected = true;
      spyOn($scope, 'setConnected');
      $scope.$digest();
      expect($scope.setConnected).toHaveBeenCalled();
    });

    it('When connected, changes the view and checks status', function(){
      $window.isConnected = true;
      spyOn($scope, 'checkStatus');
      $scope.$digest();
      expect($scope.viewPane).toEqual(4);
      expect($scope.checkStatus).toHaveBeenCalled();
    });

    it('reverts the view when the Sphero fails to connected', function(){
      $window.isConnected = "not connecting";
      $scope.$digest();
      expect($scope.viewPane).toEqual(2);
    });

    describe('#checkStatus', function(){
      it('checks the status of the applications connection to the Sphero', function(){
        spyOn($scope, '$digest');
        spyOn($scope, 'setConnected');
        $scope.checkStatus();
        $timeout.flush();
        expect($scope.$digest).toHaveBeenCalled();
        expect($scope.setConnected).toHaveBeenCalled();
      });

      it('Changes the view if the Sphero is not connected', function(){
        $scope.checkStatus();
        $timeout.flush();
        $timeout.flush();
        expect($scope.isConnected).toEqual(false);
        expect($scope.viewPane).toEqual(2);
        });
    });

    describe('#watcher', function(){
      it('checks the isConnected global variable and updates it if no connection is made', function(){
        $scope.watcher();
        spyOn($scope, '$digest');
        spyOn($scope, 'setConnected');
        $timeout.flush();
        expect($scope.$digest).toHaveBeenCalled();
        expect($scope.isConnected).toBeFalsy();
        expect($scope.setConnected).toHaveBeenCalled();
      });
    });

    describe('#setConnected', function(){
      it('Sets Angular\'s connected variable from the window object', function(){
        $scope.setConnected();
        expect($scope.isConnected).toBeFalsy();
      });
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

    describe('#submit', function(){
      it('submits the details entered by the user', function(){
        spyOn($scope, 'setName');
        spyOn($scope, 'setConnected');
        $scope.submit();
        expect($scope.setName).toHaveBeenCalled();
        expect($scope.setConnected).toHaveBeenCalled();
        expect($scope.viewPane).toEqual(2);
      });
    });

    describe('#setName', function(){
      it('sets the orbName used in the applications', function(){
        $scope.name = 'WOO';
        $scope.setName();
        expect($scope.orbName).toEqual('WOO');
      });
    });
});
