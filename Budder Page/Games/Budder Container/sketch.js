var budders = 0;
var unlockedbuddersticks = 0
var buddersticks = 0
var unlockedbuddersandwiches = 0
var buddersandwiches = 0
var buddersandwicheseaten = 0

function setup() {
  createCanvas(1280, 720);
  //create up button
  budder = createButton('Buddder');
  budder.position(550, 300);
  budder.mousePressed(Budder);
  textSize(20);
}

function draw() {
  fill(62)
  rect(0,0,1280,720)
  fill(0)
  text("You have " + budders + " Budders", 425 , 100)
  //print(unlockedbuddersticks)
  if (unlockedbuddersticks == 1) {
   text("You have " + buddersticks + " Budder Sticks", 425 , 150)
  }
  
  if (unlockedbuddersandwiches == 1) {
   text("You have " + buddersandwiches + " Budder Sandwiches", 425 , 200)
  }
  
  if (buddersandwicheseaten == 1) {
   text("You feel pretty good", 425 , 250)
  }
  
  if (buddersandwicheseaten == 2) {
   text("You feel good", 425 , 250)
  }
  
  if (buddersandwicheseaten == 3) {
   text("You feel great", 425 , 250)
  }
  
  if (buddersandwicheseaten == 4) {
   text("You feel really good", 425 , 250)
  }
  
  if (buddersandwicheseaten == 5) {
   text("You feel amazing", 425 , 250)
  }
  
  if (buddersandwicheseaten == 6) {
   text("You feel exceptional", 425 , 250)
  }
  
  if (buddersandwicheseaten == 7) {
   text("You feel wonderful", 425 , 250)
  }
  
  if (buddersandwicheseaten == 8) {
   text("You feel fantastic", 425 , 250)
  }
  
  if (buddersandwicheseaten == 9) {
   text("You feel like you could do anything", 425 , 250)
  }
  
  if (buddersandwicheseaten == 10) {
   text("You have ascended", 425 , 250)
  }
  
  if (buddersandwicheseaten == 11) {
   text("You know everything", 425 , 250)
  }
  
  if (buddersandwicheseaten == 12) {
   text("You can't feel anything", 425 , 250)
  }
  
  if (buddersandwicheseaten == 13) {
   text("The only meaning in your life in eating budder sandwiches", 425 , 250)
  }
  
  if (buddersandwicheseaten == 14) {
   text("You can't stop", 425 , 250)
  }
  
  if (buddersandwicheseaten >= 15) {
   text("What", 425 , 250)
  }
  
  
  if(budders >= 10) {
   makebudderstick = createButton('Convert 10 Budders into 1 Budder Stick');
   makebudderstick.position(550, 350);
   makebudderstick.mousePressed(BudderStick);
  }
  if(buddersticks >= 3) {
   makebuddersandwich = createButton('Make Budder Sandwich');
   makebuddersandwich.position(550, 400);
   makebuddersandwich.mousePressed(BudderSandwich);
  }
  if(buddersandwiches >= 1) {
   eatbuddersandwich = createButton('Eat Budder Sandwich');
   eatbuddersandwich.position(550, 450);
   eatbuddersandwich.mousePressed(EatBudderSandwich);
  }
}

function Budder() {
 budders += 1
}

function BudderStick() {
 if(budders >= 10) {
  unlockedbuddersticks = 1
  budders -= 10
  buddersticks += 1
 }
}

function BudderSandwich() {
 if(buddersticks >= 3) {
  unlockedbuddersandwiches = 1
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
