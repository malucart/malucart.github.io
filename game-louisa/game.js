/*
  Code modified from:
  http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/
  using graphics purchased from vectorstock.com

1.	Add sound effects to the game (not just a theme, but noises that happen with events).
2.	Add more random enemies (more sprites) (lots of sprites on the web, search!)
3.	Add wall/edge detection to keep the player on the canvas
4.	Add high scores
5.	Add obstacles/mazes
6.	animated sprites

*/
// Create the canvas for the game to display in
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
// set the canvas size
canvas.width = 800;
canvas.height = 800;
document.body.appendChild(canvas); // inject this new element intot the DOM

// load sound
var snd1 = new Audio("sounds/sound-planetcaught.mp3"); // credit https://www.myinstants.com/instant/mario-power-up/
var snd2 = new Audio("sounds/sound-gameover.mp3"); // https://www.myinstants.com/instant/megaman-3-death-sound-effect/
var snd_theme = new Audio("sounds/metroid_theme.mp3"); // Super Metroid theme from Super Nintendo, Nintendo Copyright

// load images, use the onload event so we can later wait for images to be there
// Load the background image

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  // show the background image
  bgReady = true;
};
bgImage.src = "images/space.jpg";

// Load the hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
  // show the here image
  heroReady = true;
};
heroImage.src = "images/01.png"; // credit https://www.spriters-resource.com/resources/sheets/11/11080.png  // robot from metal warrior

// Load the monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
  // show the monster image
  monsterReady = true;
};
monsterImage.src = "images/planet.png";

// Load the tree image
var treeReady = false;
var treeImage = new Image();
treeImage.onload = function () {
  // show the treee image
  treeReady = true;
};
treeImage.src = "images/wall.png";  // 50 by 60

// Load the hole image
var holeReady = false;
var holeImage = new Image();
holeImage.onload = function () {
  // show the treee image
  holeReady = true;
};
holeImage.src = "images/black-hole.png";  // 50 by 60

// Load the hole image
var newEnemyReady = false;
var newEnemyImage = new Image();
newEnemyImage.onload = function () {
  // show the treee image
  newEnemyReady = true;
};
newEnemyImage.src = "images/meteor.png";  // 50 by 60

var heroUIReady = false;
var heroUIImage = new Image();
heroUIImage.onload = function() {
    heroUIReady = true;
}
heroUIImage.src = "images/02.png"; // credit: https://www.spriters-resource.com/snes/smetroid/sheet/1728/

var enemySpriteList = [holeImage, newEnemyImage];


var COUNT = 300;  // for snow   from web article   https://php.quicoto.com/snow-html-canvas/

var Snowflake = function () {  // constructor for snowflakes
  this.x = 0;
  this.y = 0;
  this.vy = 0;
  this.vx = 0;
  this.r = 0;

  this.reset();
}

// random coordinate 
Snowflake.prototype.reset = function () {
  this.x = Math.floor(Math.random() * Math.floor(canvas.width/2));//Math.random() * canvas.width;
  this.y = Math.floor(Math.random() * Math.floor(canvas.height/2)); // Math.random() * -canvas.height;
  this.z = Math.random() * 500;
  this.dir = Math.floor(Math.random() * Math.floor(2));
  
  // More speed? Change this
  this.vy = 1 + Math.random() * 3;
  this.vx = 0.5 - Math.random();
  

  // Bigger snow?
  this.r = 1 + Math.random() * 2;

  this.o = 0.5+ Math.random() * 0.5;
}

var snowflakes = [],  // build an array of snowflakes 
  snowflake;
for (i = 0; i < COUNT; i++) {
  snowflake = new Snowflake();
  snowflake.reset();
  snowflakes.push(snowflake);
}


// Create the game objects
var hero = {
  speed: 256 // movement speed of hero in pixels per second
};
var monster = {};  // empty object, we'll add stuff later
var hole1 = {};
var hole2 = {};
var hole3 = {};
var monstersCaught = 0;

// Handle keyboard controls
var keysDown = {};  // empty object, we'll add stuff later
// Check for keys pressed where key represents the keycode captured
addEventListener("keydown", function (key) {
  keysDown[key.keyCode] = true;  // add an element to array storing value for which key they pushed
}, false);
addEventListener("keyup", function (key) {
  delete keysDown[key.keyCode];
}, false);
// what does the false do?   It determines whether or not the default browser behaviour should take place as well. 
// This is most noticeable in form submit handlers, where you can cancel a form submission if the user has made a
// mistake entering the information.

// Define a function to reset the player and monster positions when player catches a monster
var reset = function () {  // board is 800 x 800
  usedXLocations = [];
  usedYLocations = [];
  hero.anim = 0;
  hero.ui_anim = 0;
  hero.anim_interval = 5;
  hero.ui_anim_timer = 200;
  hero.is_ui_anim = false;
  // Reset player's position to centre of canvas
  hero.x = 400 - 32;
  hero.y = 400 - 32;
  usedXLocations.push(hero.x);
  usedYLocations.push(hero.y);
  // Place the monster somewhere on the canvas randomly old code
  // monster.x = 32 + (Math.random() * (canvas.width - 64));
  // monster.y = 32 + (Math.random() * (canvas.height - 64));
  monster.x = placeX();
  monster.y = placeY();
  usedXLocations.push(monster.x);
  usedYLocations.push(monster.y);
  hole1.sprite = Math.floor(Math.random() * Math.floor(enemySpriteList.length))
  hole1.x = placeX();
  hole1.y = placeY();
  usedXLocations.push(hole1.x);
  usedYLocations.push(hole1.y);
  hole2.sprite = Math.floor(Math.random() * Math.floor(enemySpriteList.length))
  hole2.x = placeX();
  hole2.y = placeY();
  usedXLocations.push(hole2.x);
  usedYLocations.push(hole2.y);
  hole3.sprite = Math.floor(Math.random() * Math.floor(enemySpriteList.length))
  hole3.x = placeX();
  hole3.y = placeY();
};

placeX = function () {
  let newx = 0;
  ok = false;

  while (ok == false) {
    newx = (50) + (Math.random() * (canvas.width - 228)); //account for tree  (64 + 50) * 2
    for (let i = 0; i < usedXLocations.length; i++) {
      if (newx > (usedXLocations[i] + 64) || newx < usedXLocations[i]-64) {
        ok = true;
      }
      else {
        ok = false;
        break;  
      }
    }
  }
  return newx
}
placeY = function () {
  let newy = 0;
  ok = false;
  while (ok == false) {
    newy = (60) + (Math.random() * (canvas.width - 248)); //account for tree  (64 + 60) * 2
    for (let i = 0; i < usedYLocations.length; i++) {
      if (newy > (usedYLocations[i] + 64) || newy < usedYLocations[i]-64) {
        ok = true;
      }
      else {
        ok = false;
        break;
      }
    }
  }
  return newy
}

var update = function (modifier) {     // modifier parameter modifys the speed  value for character motion
    snd_theme.play();

  if (38 in keysDown && hero.y > 60) { // Player is holding up key
    hero.y -= hero.speed * modifier;
  }
  if (40 in keysDown && hero.y < canvas.height - (64 + 60)) { // Player is holding down key
    hero.y += hero.speed * modifier;
  }
  if (37 in keysDown && hero.x > (50)) { // Player is holding left key
    hero.x -= hero.speed * modifier;
  }
  if (39 in keysDown && hero.x < canvas.width - (64 + 50)) { // Player is holding right key
    hero.x += hero.speed * modifier;
  }

  if (hero.anim_interval <= 0) {
    if (hero.anim < 3) {
        hero.anim++;
    } else {
        hero.anim = 0;
    }


    if (hero.is_ui_anim) {
        if (hero.ui_anim < 3) {
            hero.ui_anim++;
        } else {
            hero.ui_anim_timer = 200;
            hero.is_ui_anim = false;
            hero.ui_anim = 0;
        }
    }

    hero.anim_interval = 5;
  } else {
      hero.anim_interval--;
  }

  if (hero.is_ui_anim == false) {
      if (hero.ui_anim_timer > 0) {
          hero.ui_anim_timer--;
      } else {
          hero.is_ui_anim = true;
      }
  }

  // Check if player and monster collider
  if (
    hero.x <= (monster.x + 64)  // 32 is lenght and width of the characters
    && monster.x <= (hero.x + 64)
    && hero.y <= (monster.y + 64)
    && monster.y <= (hero.y + 64)
  ) {
    snd1.play();  // play sound
    ++monstersCaught;  // count up in our score
    reset();  // call that function to move the player and monster
  }
  // Check if player falls in hole
  if (
    (hero.x <= (hole1.x + 64)  // 32 is lenght and width of the characters
    && hole1.x <= (hero.x + 64)
    && hero.y <= (hole1.y + 64)
      && hole1.y <= (hero.y + 64)) ||
    (hero.x <= (hole2.x + 64) 
      && hole2.x <= (hero.x + 64)
      && hero.y <= (hole2.y + 64)
      && hole2.y <= (hero.y + 64)) ||
    (hero.x <= (hole3.x + 64)  
      && hole3.x <= (hero.x + 64)
      && hero.y <= (hole3.y + 64)
      && hole3.y <= (hero.y + 64)) 
  ) {
    hero.x = 400 - 32;  // reset the player else we end up in a loop
    hero.y = 400 - 32;
    snd2.play();  
    // stop the timer
    clearInterval(counter);
    // set game to finished
    finished = true;
    count = 0;
    // hider monster and hero
    monsterReady = false;
    heroReady = false;
  }
};

// Function to Draw everything on the canvas
var render = function () {
  if (bgReady) {                  // not really sure the use of this if, if its not ready, it fails anyhow??
    ctx.drawImage(bgImage, 0, 0);   // place image using the upper left corner, so 0,0
  }
  if (heroReady) {
    ctx.drawImage(heroImage, 64*hero.anim, 0, 64, 64, hero.x, hero.y, 64,64); // animation happens here
  }
  if (monsterReady) {
    ctx.drawImage(monsterImage, monster.x, monster.y);
  }
  if ((holeReady) && (newEnemyReady)) {
        // decide between new enemy or hole randomly
        ctx.drawImage(enemySpriteList[hole1.sprite], hole1.x, hole1.y);
        ctx.drawImage(enemySpriteList[hole2.sprite], hole2.x, hole2.y);
        ctx.drawImage(enemySpriteList[hole3.sprite], hole3.x, hole3.y);
    }

  if (treeReady) {   // 50 by 60
    let x = 0;
    let y = 0;
    for (x = 0; x < 799; x = x + 50) {
      ctx.drawImage(treeImage, x, 0);
      ctx.drawImage(treeImage, x, 740);
    }
    for (y = 0; y < 799; y = y + 60) {
      ctx.drawImage(treeImage, 0, y);
      ctx.drawImage(treeImage, 750, y);
    }

    
  }

  
  // Display score and time 
  ctx.fillStyle = "rgb(255, 255, 255)";  // white text
  ctx.font = "24px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Planet caught: " + monstersCaught, 60, 70);
  ctx.fillText("Time: " + count, 60, 100);
  // Display game over message when timer finished
  if (finished == true) {
    ctx.fillText("Game over!", (canvas.width / 2) - "Game over!".length * 8, canvas.height / 2);
    ctx.fillText("High Score: " +  monstersCaught, (canvas.width / 2) - "High score: ".length * 7, 50 + canvas.height / 2);
  }

  if (heroUIReady) {
      ctx.drawImage(heroUIImage, 192 * hero.ui_anim, 0, 192, 136, 600, 0, 192, 136); // animation of the hero's face happens here 
  }

};

var count = 60; // how many seconds the game lasts for - default 30
var finished = false;
var counter = function () {
  count = count - 1; // countown by 1 every second
  // when count reaches 0 clear the timer, hide monster and
  // hero and finish the game
  if (count <= 0) {
    // stop the timer
    clearInterval(counter);
    // set game to finished
    finished = true;
    count = 0;
    // hider monster and hero
    monsterReady = false;
    heroReady = false;
  }
}

// timer interval is every second (1000ms)
setInterval(counter, 1000);  // see explanation below, only being used to count down the game seconds
// The main game loop
var resetCount = 0;
var main = function () {
  // snow code
  for (i = 0; i < COUNT; i++) {
    snowflake = snowflakes[i];

    // depends on the position, it can encrease or decrease
    if (snowflake.dir) {
        snowflake.x -= 1;
        snowflake.y += 1;
    } else {
        snowflake.x += 1;
        snowflake.y -= 1;
    }

    snowflake.z = snowflake.z - 0.1;

    ctx.globalAlpha = snowflake.o;
    ctx.beginPath();
    ctx.arc(snowflake.x / (snowflake.z * 0.001), snowflake.y / (snowflake.z * 0.001), snowflake.r, 0, Math.PI * 2, false);
    ctx.closePath();

    ctx.fill();

    if (snowflake.y > canvas.height) {
      snowflake.reset();
    }

    if (snowflake.y < 0) {
        snowflake.reset();
    }

    if (snowflake.x > canvas.width) {
        snowflake.reset();
    }
  } 
  // end of snow code
  update(0.02); // check state of keys and for collisions, pass in a modifier  which "scales" the speed based on how
  // fast the requestAnimationFrame is cycling (fast or slow browser)
  render();   // redraw everything
  requestAnimationFrame(main);   // Request to do this again ASAP
};
// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
reset();  // place 2 char's for the first time
main();   // start the loop that tics of game cycles
