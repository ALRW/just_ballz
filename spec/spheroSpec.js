describe("The movement commands for Sphero", function() {
  var commands, orb;

  beforeEach(function() {
    orb = {
      stop: function(){},
      color: function(color){},
      roll: function(speed, heading){}
    };
    commands = new MovementCommands (orb);
  });

  describe('#stop', function(){

    it("should stop a sphero", function() {
      spyOn(orb, 'stop');
      commands.stop();
      expect(orb.stop).toHaveBeenCalled();
    });

    it("changes color when it has stopped", function(){
      spyOn(orb, 'color');
      commands.stop();
      expect(orb.color).toHaveBeenCalledWith('red');
    });
  });

  describe('#go',function(){
    it('rolls the ball forward', function(){
      spyOn(orb, 'roll');
      commands.go();
      expect(orb.roll).toHaveBeenCalledWith(50, 0);
    });

    it('changes color when in motion',function(){
      spyOn(orb, 'color');
      commands.stop();
      expect(orb.color).toHaveBeenCalledWith('blue');
    });
  });
});
