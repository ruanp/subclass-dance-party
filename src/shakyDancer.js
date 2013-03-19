var ShakyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

ShakyDancer.prototype = Object.create(Dancer.prototype);
ShakyDancer.prototype.constructor = ShakyDancer;
// ShakyDancer.prototype = new Dancer();

ShakyDancer.prototype.step = function () {
  var self = this;
  var left = (parseInt(this.$node.css('left')) + 50) + 'px';
  console.log((parseInt(this.$node.css('left')) + 50) + 'px');
  var styleChanges = { left: left };
  this.$node.animate(styleChanges, 'fast', function () {
    Dancer.prototype.step.call(self);
  });
};
