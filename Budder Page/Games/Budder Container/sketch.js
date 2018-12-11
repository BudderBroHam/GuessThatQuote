//variables
var budders = 0;
var unlockedbuddersticks = 0
var buddersticks = 0
var unlockedbuddersandwiches = 0
var buddersandwiches = 0
var buddersandwicheseaten = 0
//loading images
function preload() {
 merchant = loadImage('images/merchant.png');
}
//setting up things
function setup() {
  createCanvas(1280, 720);
  //create budder clicker button button
  budder = createButton('Budder');
  budder.position(200, 300);
  budder.mousePressed(Budder);
  textSize(20);
}

function draw() {
  //make background
  fill(255,200,125)
  rect(0,0,1280,720)
  fill(0)
  
  text("You have " + budders + " Budders", 200 , 100)
  
  //if you have unlocked budder sticks but not anything else then show the merchant saying wanna buy budder sticks
  if (unlockedbuddersticks == 1 && unlockedbuddersandwiches === 0) {
   image(merchant, 550, 100)
   text('hey kid wanna buy some budder sticks', 550, 340)
  }
  if (unlockedbuddersticks == 1) {
   makebudderstick = createButton('Buy 1 Budder Stick for 10 Budders');
   makebudderstick.position(550, 350);
   makebudderstick.mousePressed(BudderStick);
   text("You have " + buddersticks + " Budder Sticks", 200 , 150)
  }
  //if you have unlocked budder sandwiches then show the mercahnt saying wanna buy budder sandwiches
  if (unlockedbuddersandwiches == 1) {
   image(merchant, 550, 100)
   text('hey kiddo wanna buy some budder sandwiches', 550, 340)
   makebuddersandwich = createButton('Make Budder Sandwich');
   makebuddersandwich.position(550, 400);
   makebuddersandwich.mousePressed(BudderSandwich);
   text("You have " + buddersandwiches + " Budder Sandwiches", 200 , 200)
  }
  
  if (buddersandwicheseaten == 1) {
   text("You feel pretty good", 200 , 250)
  }
  
  if (buddersandwicheseaten == 2) {
   text("You feel good", 200 , 250)
  }
  
  if (buddersandwicheseaten == 3) {
   text("You feel great", 200 , 250)
  }
  
  if (buddersandwicheseaten == 4) {
   text("You feel really good", 200 , 250)
  }
  
  if (buddersandwicheseaten == 5) {
   text("You feel amazing", 200 , 250)
  }
  
  if (buddersandwicheseaten == 6) {
   text("You feel exceptional", 200 , 250)
  }
  
  if (buddersandwicheseaten == 7) {
   text("You feel wonderful", 200 , 250)
  }
  
  if (buddersandwicheseaten == 8) {
   text("You feel fantastic", 200 , 250)
  }
  
  if (buddersandwicheseaten == 9) {
   text("You feel like you could do anything", 200 , 250)
  }
  
  if (buddersandwicheseaten == 10) {
   text("You have ascended", 200 , 250)
  }
  
  if (buddersandwicheseaten == 11) {
   text("You know everything", 200 , 250)
  }
  
  if (buddersandwicheseaten == 12) {
   text("You can't feel anything", 200 , 250)
  }
  
  if (buddersandwicheseaten == 13) {
   text("The only meaning in your life is eating budder sandwiches", 200 , 250)
  }
  
  if (buddersandwicheseaten == 14) {
   text("You can't stop", 200 , 250)
  }
  
  if (buddersandwicheseaten >= 15) {
   text("What", 200 , 250)
  }
  
  
  if(budders >= 10) {
   unlockedbuddersticks = 1
  }
  if(buddersticks >= 3) {
   unlockedbuddersandwiches = 1
  }
  if(buddersandwiches >= 1) {
   eatbuddersandwich = createButton('Eat Budder Sandwich');
   eatbuddersandwich.position(200, 350);
   eatbuddersandwich.mousePressed(EatBudderSandwich);
  }
}

function Budder() {
 budders += 1
}

function BudderStick() {
 if(budders >= 10) {
  budders -= 10
  buddersticks += 1
 }
}

function BudderSandwich() {
 if(buddersticks >= 3) {
  buddersticks -= 3
  buddersandwiches += 1
 }
}

function EatBudderSandwich() {
 if (buddersandwiches >= 1) {
  buddersandwiches -= 1
  buddersandwicheseaten += 1
 }
}
