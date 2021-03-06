// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we"ve provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we"ve provided to easily load images
  this.sprite = "images/enemy-bug.png";
  this.x = x;
  this.y = y;
  this.speed = speed;
};

// Update the enemy"s position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += (100 * dt * this.speed)
  if (this.x>500) {
    this.x = -50;
  }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
  // Variables applied to each of our instances go here,
  // we"ve provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we"ve provided to easily load images
  this.sprite = "images/char-boy.png";
  this.x = x;
  this.y = y;
};

Player.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  // this.x = this.x * dt;
  // this.y = this.y * dt;
};

Player.prototype.handleInput = function(key) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  var distX = 100;
  var distY = 82.5;

  if (key) {
    switch (key) {
      case "left":
        if (this.x - distX >=0 ) {this.x -= distX;};
        break;
      case "right":
        if (this.x + distX <=400 ) {this.x += distX;};
        break;
      case "up":
      console.log(this.y - distY );
        if (this.y - distY >=-50 ) {this.y -= distY;};
        
        break;
      case "down":
        if (this.y + distY <=400 ) {this.y += distY;};
        break;
    }
  }
};

Player.prototype.render = function() {

  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
allEnemies.push(new Enemy(-50, 50, 1));
allEnemies.push(new Enemy(-50, 100, 2));
allEnemies.push(new Enemy(-50, 150, 3));
allEnemies.push(new Enemy(-50, 200, 4));


var player = new Player(200, 375);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don"t need to modify this.
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});