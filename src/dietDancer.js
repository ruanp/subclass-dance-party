var DietDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setSize(50);
};

DietDancer.prototype = Object.create(Dancer.prototype);
DietDancer.prototype.constructor = DietDancer;
// ShakyDancer.prototype = new Dancer();

DietDancer.prototype.step = function () {
  var self = this;
  var left = (parseInt(this.$node.css('left')) + 50) + 'px';
  console.log((parseInt(this.$node.css('left')) + 50) + 'px');
  var styleChanges = { left: left };
  this.$node.animate(styleChanges, 'fast', function () {
    Dancer.prototype.step.call(self);
  });
};

DietDancer.prototype.setSize = function(size) {

  var styleSettings = {
    border-radius: size + 'px'
  }

}
