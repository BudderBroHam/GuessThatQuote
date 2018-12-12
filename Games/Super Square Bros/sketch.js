function setup() {
  createCanvas(500, 500);
  
  //create up button
  upbutton = createButton('^');
  upbutton.position(400, 400);
  upbutton.mousePressed(MoveUp);
  //create left button
  leftbutton = createButton('<');
  leftbutton.position(380, 420);
  leftbutton.mousePressed(MoveLeft);
  //create right button
  rightbutton = createButton('>');
  rightbutton.position(420, 420);
  rightbutton.mousePressed(MoveRight);
  
  //variables
  x = 50
  y = 350
  stompedon = false
  dead = false
}

function draw() {
 //create background
  stroke(0)
  fill(0,255,255)
  rect(0,0,1280,720);
  //create floor
  fill(100,100,0);
  rect(0,400,500,100)
  //if not dead do things
   if (dead === false) {
   fill(255,0,0)
   rect(x,y,50,50)
   //if in the air, gravity
   if(y<350) {
    y += 1
   }
  }
  
  //if not stomped on create enemy
  if(stompedon === false) {
   fill(0,255,0)
   rect(300,350,50,50)
  }
  //if stomped on, stomped on
  if((x == 300 || x == 275 || x == 325) && y < 350 && y > 300) {
   stompedon = true
  }
  print(y)
  //if died, dead
  if ((x == 300 || x == 275 || x == 325) && y == 350 && stompedon === false) {
   dead = true
  }
}

function MoveUp() {
 if(y>=350) {
  y -= 100
 }
}

function MoveLeft() {
  x -= 25
}

function MoveRight() {
  x += 25
}
