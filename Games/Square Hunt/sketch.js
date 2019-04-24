WIDTH=400
HEIGHT=400
x=350
y=200
SquareSize=50
dead = false
loopmode = false
points = 0
function setup() {
  createCanvas(WIDTH,HEIGHT)
  button = createButton('create')
  button.mousePressed(Create)
  
  button = createButton('Turn on loop mode')
  button.mousePressed(LoopModeON)
  
  button = createButton('Turn off loop mode')
  button.mousePressed(LoopModeOFF)
  fill(255)
  slider = createSlider(1,30,1)
  speedy = random(-5,5)
}

function draw() {
  background(100)
  textSize(25)
  text(points,50,50)
  speed = slider.value()
  if (dead==false){
   x-=speed
   y-=speedy
  }
  if ((mouseX>x && mouseX<x+SquareSize && mouseY>y && mouseY<y+SquareSize)) {
   Bang()
   points+=1*speed
  }
  if (dead==true) {
   Bang()
  }
  rect(x,y,SquareSize,SquareSize)
  if (loopmode == true && x<0) {
    Create()
  }
}

function Create() {
 dead=false
 fill(255)
 x=WIDTH-SquareSize
 y= random(SquareSize,HEIGHT-SquareSize)
 speedy = random(-3,3)
}

function Bang() {
 if (loopmode == false) {
  dead =  true
  y+=10
  fill(255,0,0)
 }
 if (loopmode == true) {
  Create()
 }
}

function LoopModeON() {
 loopmode = true
 Create()
}
function LoopModeOFF() {
 loopmode = false
}
