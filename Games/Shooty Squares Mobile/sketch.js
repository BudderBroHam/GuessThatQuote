var WIDTH = 1280;
var HEIGHT = 720
var xspeed = 0
var yspeed = 0
var xposition = 50
var yposition =  50
var shoot = false
var bulletx = 0
var bullety = 0
var enemyx = 1200
var enemyy = 0
var enemyalive = true

function setup() {
  createCanvas(WIDTH,HEIGHT);
  //sliders
  XSlider = createSlider(0, 100, 50);
  XSlider.position(50, 75);
  YSlider = createSlider(0, 100, 50);
  YSlider.position(150, 75)
  YSlider.style('rotate', 90);
  //button
   button = createButton('Shoot');
   button.position(250 , 50);
   button.mousePressed(ButtonPressed);
   enemyy = random(100,600);
}

function draw() {
 fill(216, 206, 182)
 rect(0,0,WIDTH,HEIGHT)
 //making player
 fill(255,0,0)
 rect(xposition,yposition,50,50)
 //finding what position to go from the speed
 xposition += (xspeed - 50)/10
 yposition += (yspeed - 50)/10
 //getting slider values
 xspeed = XSlider.value();
 yspeed = YSlider.value();
 //idk anymore
 if (shoot == true) {
  fill(0,0,255)
  rect(xposition+bulletx + 50,bullety,10,10)
  bulletx +=10
 }
 //enemy
 if (enemyalive == true) {
  fill(0,255,0)
  rect(enemyx,enemyy,50,50)
  enemyx -= 3
 }
 if (xposition+bulletx + 50 > enemyx && xposition+bulletx + 50 < enemyx + 50 && bullety > enemyy && bullety < enemyy + 50)  {
  enemyalive = false
  print("nice")
 }
 
}

function ButtonPressed() {
  bulletx = 0
  bullety = yposition + 25
  shoot = true
}