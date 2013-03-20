

var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.gridPosition = {};
  this.setPosition(top, left);
  this.collision = false;
  this.id = window.dancers.length;
}

Dancer.prototype.setPosition = function(top, left){
  /* Use css top and left properties to position our <span> tag
   * where it belongs on the page. See http://api.jquery.com/css/
   */
  var styleSettings = {
    top: top,
    left: left
  };
  // this.gridPosition.x = Math.round(left / 100);
  // this.gridPosition.y = Math.round(top / 100);
  this.setGridPosition(top, left);
  this.$node.css(styleSettings);
};

Dancer.prototype.step = function () {
  var self = this,
      top = parseInt(this.$node.css('top')),
      left = parseInt(this.$node.css('left'));

  // remove from current grid position
  delete window.grid[this.gridPosition.x][this.gridPosition.y][this.id];

  // reset collisions
  this.collisions = false;

  // reset grid position, pass current top and left
  this.setGridPosition(top, left);

  setTimeout(function(){
    self.step();
  }, this.timeBetweenSteps);
};

Dancer.prototype.setGridPosition = function (top, left) {
  var x = Math.round(left / 100),
      y = Math.round(top / 100);

  // set the this.gridPosition property
  this.gridPosition.x = x;
  this.gridPosition.y = y;

  // check and init the new grid position
  if (Array.isArray(window.grid[x]) !== true) {
    window.grid[x] = [];
  }
  if (typeof window.grid[x][y] !== 'object') {
    window.grid[x][y] = {};
  }

  // add it to the new grid position
  window.grid[x][y][this.id] = true;

  // check for collision
  this.checkforCollision(x, y);
};

Dancer.prototype.checkforCollision = function(x, y) {
  if (Object.keys(window.grid[x][y]).length > 1) {
    this.collision = true;
  }
};

Dancer.prototype.avoidCollision = function() {

this.collision = false;
};