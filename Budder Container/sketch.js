//variables
var budders = 0;
var unlockedbuddersticks = 0
var buddersticks = 0
var merchantmessage = ""
var unlockedbuddersandwiches = 0
var buddersandwiches = 0
var buddersandwicheseaten = 0
var unlockedbuddergenerators = 0
var buddergenerators = 0
var time = 0

//loading images
function preload() {
 merchant = loadImage('images/merchant.png');
 buddergeneratorimg = loadImage('images/budder generator.png')
}
//setting up things
function setup() {
  createCanvas(1000, 720);
  //create budder clicker button button
  budder = createButton('Budder');
  budder.position(200, 350);
  budder.mousePressed(Budder);
  textSize(20);
}

function draw() {
  //make background
  fill(255,200,125)
  rect(0,0,1280,720)
  fill(0)
  //pretty easy to understand
  text("You have " + budders + " Budders", 200 , 100)

  //if you have unlocked budder sticks but not anything else and you have no budder sticks then show the merchant saying wanna buy budder sticks
  if (unlockedbuddersticks == 1 && unlockedbuddersandwiches === 0  && buddersticks === 0 && merchantmessage === "") {
   merchantmessage = "hey kid wanna buy some budder sticks"
  }
  //if you've unlocked buddersticks make the "buy budder stick" button, say how many budder sticks you have, and show the merchant
  if (unlockedbuddersticks == 1) {
   text(merchantmessage, 550, 340)
   image(merchant, 550, 100)
   buybudderstick = createButton('Buy 1 Budder Stick for 10 Budders');
   buybudderstick.position(550, 350);
   buybudderstick.mousePressed(BudderStick);
   text("You have " + buddersticks + " Budder Sticks", 200 , 150)
  }
  //if you have unlocked budder sandwiches then show the mercahnt saying wanna buy budder sandwiches
  if (unlockedbuddersandwiches == 1) {
   merchantmessage = "hey kiddo wanna buy some budder sandwiches"
   buybuddersandwich = createButton('Make Budder Sandwich');
   buybuddersandwich.position(550, 400);
   buybuddersandwich.mousePressed(BudderSandwich);
   text("You have " + buddersandwiches + " Budder Sandwiches", 200 , 200)
  }
  //say how many budder sandwiches you've eaten
  if (buddersandwicheseaten >= 1) {
   text("You have eaten " + buddersandwicheseaten + " Budder Sandwiches", 200, 300)
  }
  //eating budder sandwich messages
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
   text("This is the only meaning in your life", 200 , 250)
  }
  
  if (buddersandwicheseaten == 14) {
   text("You can't stop", 200 , 250)
  }
  
  if (buddersandwicheseaten == 15) {
   text("What", 200 , 250)
  }
 
  if (buddersandwicheseaten == 16) {
    text("Whatt", 200, 250)
  }
         
   if (buddersandwicheseaten == 17) {
    text("Whatter", 200, 250)
  }      
  
  if (buddersandwicheseaten == 18) {
    text("Whattier", 200, 250)
  }
         
  if (buddersandwicheseaten == 19) {
    text("Whattest", 200, 250)
  }
         
  if (buddersandwicheseaten == 20) {
    text("Subscribe to pewdipie", 200, 250)
  }
  
  //unlocking items
  if(budders >= 10) {
   unlockedbuddersticks = 1
  }
  if(buddersticks >= 3) {
   unlockedbuddersandwiches = 1
  }
  if(budders >= 50 || buddersticks >= 5 || buddersandwiches >= 2) {
   unlockedbuddergenerators = 1
  }
  //make "eat budder sandwich" button
  if(buddersandwiches >= 1) {
   eatbuddersandwich = createButton('Eat Budder Sandwich');
   eatbuddersandwich.position(200, 400);
   eatbuddersandwich.mousePressed(EatBudderSandwich);
  }
  //if you have enough stuff have the merchant say wanna buy budd. generator
 if (budders >= 50 && buddergenerators === 0) {
   merchantmessage = "hey kiddio wanna buy some budder generators"
 }
 //when you unlockbuddergenerators it showed how any budd. gens you have and creates "buy budd gen" button
 if(unlockedbuddergenerators == 1) {
  image(buddergeneratorimg, 25, 100)
  text("x" + buddergenerators, 125, 150)
  buybuddergenerator = createButton('Buy 1 Budder Generator for 50 Budders');
  buybuddergenerator.position(550, 450);
  buybuddergenerator.mousePressed(BudderGenerator);
 }
 //time thing to generate budder
 time+=1
 if(time==25) {
  time=0
 }
 if (time===0) {
  budders += buddergenerators
 }
 
}


//button functions
function Budder() {
 budders += 1
}

function BudderStick() {
 if(budders >= 10) {
  budders -= 10;
  buddersticks += 1;
 }
}

function BudderSandwich() {
 if(buddersticks >= 3) {
  buddersticks -= 3;
  buddersandwiches += 1;
 }
}

function EatBudderSandwich() {
 if (buddersandwiches >= 1) {
  buddersandwiches -= 1;
  buddersandwicheseaten += 1;
 }
}

function BudderGenerator() {
  if(budders >= 50) {
  buddergenerators += 1;
  budders-=50;
}
}