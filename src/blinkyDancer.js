var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
// BlinkyDancer.prototype = new Dancer();

BlinkyDancer.prototype.step = function(){
  // check for collision and run collision code

  Dancer.prototype.step.call(this);

  this.$node.toggle();
};
