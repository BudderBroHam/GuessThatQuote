var yposition = 50
var enemyyposition = 50
var ballx = 640
var bally = 0
var ballxdirection = 5
var ballydirection = 5
var ballslope
var difficulty = 0
function setup() {
  bally = random(0,600)
  createCanvas(1280,720)
    //difficulty slider
  difficultyslider = createSlider(0, 10, 0);
  difficultyslider.position(50);
  //restart button
  restartbutton = createButton("Restart")
  restartbutton.position(200,50)
  restartbutton.mousePressed(restart)
}

function restart() {
 bally = random(0,600)
 yposition = 50
 enemyyposition = 50
 ballx = 640
 bally = 0
 ballxdirection = 5
 ballydirection = 5
 ballslope
 difficulty = 0
}

function draw() {
  yposition = mouseY
  //background
  fill(52,33,25)
  rect(0,0,1280,720)
  //paddle
  fill(50)
  rect(50,yposition,10,150)
  //enemy paddle
  fill(15,255,150)
  rect(1230,enemyyposition,10,150)
  //ball
  fill(51,35,85)
  ellipse(ballx,bally,25,25)
  ballx += ballxdirection
  bally += ballydirection
  //ball bounce
  //off of screen
  ballslope = ballxdirection/ballydirection
  if (bally >= 720 || bally <= 0) {
   ballydirection = 0-ballydirection
  }
  //off of enemy
  if (ballx == 1230 && bally > enemyyposition && bally < enemyyposition + 150) {
   ballxdirection = 0-ballxdirection
  }
  //of of player
  if (ballx == 50 && bally > yposition && bally < yposition + 150) {
   ballxdirection = 0-ballxdirection
  }

  //if not max difficulty then do normal stuff
   if (difficulty <= 9) {
   //enemy "AI"
  if (ballx == 900) {
    guessedposition = (bally + ballydirection * 70) - (75 + difficulty * random(-10,10))
  }
  if (ballx >= 900) {
    if (enemyyposition > guessedposition){
     enemyyposition -= 15
    }
    if (enemyyposition < guessedposition){
     enemyyposition += 15
    }
  }
  }
  //if max difficulty go SICKO MODE
  if (difficulty >= 9) {
     enemyyposition = bally
  }
  //do the do
  difficulty = difficultyslider.value();
}

