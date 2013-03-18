function inherit(proto) {
  function F() {}
  F.prototype = proto
  return new F
}

var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
}

Dancer.prototype.setPosition = function(top, left){
  /* Use css top and left properties to position our <span> tag
   * where it belongs on the page. See http://api.jquery.com/css/
   */
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.step = function () {
  var self = this;
  setTimeout(function(){
    self.step();
  }, this.timeBetweenSteps);
};
