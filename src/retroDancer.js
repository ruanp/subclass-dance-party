var gimmeRandomColor = function() {
  /* Cheers to 
  http://paulirish.com/2009/random-hex-color-code-snippets/ 
  */
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

var RetroDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

RetroDancer.prototype = Object.create(Dancer.prototype);
// BlinkyDancer.prototype = new Dancer();

RetroDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.setColor();
  // this.$node.toggle();
};

RetroDancer.prototype.setColor = function() {
  var styleSettings = {
    'border-color': gimmeRandomColor()
  };
  this.$node.css(styleSettings);
}