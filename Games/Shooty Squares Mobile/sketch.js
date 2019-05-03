var WIDTH = 1000;
var HEIGHT = 600
var xspeed = 0
var yspeed = 0
var xposition = 50
var yposition =  50
var shoot = false
var bulletx = 0
var bullety = 0
var enemyx = 1200
var enemyy = 0
var enemyspeed = 3
var points = 0
var powerup = 0

function setup() {
  createCanvas(WIDTH,HEIGHT);
  //button
   button = createButton('Shoot');
   button.position(50, 50);
   button.mousePressed(ButtonPressed);
   enemyy = random(100,500);
}

function draw() {
 background(216, 206, 182)
 button.position(mouseX -25, mouseY-5);
 xposition = mouseX - 25 
 yposition = mouseY - 25
 //making player
 fill(255,0,0)
 rect(xposition,yposition,50,50)
 //shoot loop
 if (shoot === true) {
  fill(0,0,255)
  rect(bulletx + 50,bullety,10,10)
  if (powerup === 0) {
   bulletx +=10
  }
 }
  //making enemy
  fill(0,255,0)
  rect(enemyx,enemyy,50,50)
  enemyx -= enemyspeed
  //showing points
  textSize(50)
  fill(0)
  text(points,50,50)
  //kill enemy when bullet touches it
 if (bulletx+50 > enemyx && bulletx+50 < enemyx+50 && bullety > enemyy && bullety < enemyy + 50)  {
   enemyx=1100
   enemyspeed+=0.3
   enemyy = random(100,500);
   points+=1
 }
 //test if enemy is at edge of screen
  if(enemyx < 0) {
    fill(255,0,0);
    textSize(100)
    text("ur dead lol", 500, 100);
  }
  //powerups
  if (points > 5) {
   powerup = "wavy"
  }
  if (powerup=="wavy"&&shoot===true) {
    bulletx +=10
    bullety = bullety+10*sin(bulletx/30)
  }
}

function ButtonPressed() {
  bulletx = xposition
  bullety = yposition + 25
  shoot = true
}
