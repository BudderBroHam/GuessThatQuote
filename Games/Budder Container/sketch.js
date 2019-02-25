//variables
var budderbuttoncreated = false
var budders = 0;
var gotoshopbuttoncreated = false
var backbuttoncreated = false
var buybudderstickbuttoncreated = false
var unlockedbuddersticks = 0
var buddersticks = 0
var merchantmessage = ""
var unlockedbuddersandwiches = 0
var buybuddersandwichbuttoncreated = false
var buddersandwiches = 0
var eatbuddersandwichbuttoncreated = false
var buddersandwicheseaten = 0
var buybuddergeneratorbuttoncreated = false
var unlockedbuddergenerators = 0
var buddergenerators = 0
var time = 0
var buymapbuttoncreated = false
var mapbuttoncreated = false
var unlockedmap = 0
var room = "mainmenu"





//loading images
function preload() {
 merchant = loadImage('images/merchant.png');
 buddergeneratorimg = loadImage('images/budder generator.png')
 shopmenu = loadImage('images/shop.png')
}
//setting up things
function setup() {
  createCanvas(1000, 720);
  //create budder clicker button button
  textSize(20);
}

function draw() {
 //----------------------------------------MAIN MENU------------------------------------------
 if (room == "mainmenu") {
  //make background
  fill(255,200,125)
  rect(0,0,1280,720)
  fill(0)

  
  //pretty easy to understand
  fill(0)
  text("You have " + budders + " Budders", 200 , 100)
  //setting up shop
  if (budderbuttoncreated === false) {
   budderbuttoncreated = true
   budder = createButton('Budder');
   budder.position(200, 350);
   budder.mousePressed(Budder);
  }
  //if you have unlocked budder sticks but not anything else and you have no budder sticks then show the merchant saying wanna buy budder sticks
  if (unlockedbuddersticks == 1 && unlockedbuddersandwiches === 0  && buddersticks === 0 && merchantmessage === "") {
   merchantmessage = "hey kid wanna see my shop"
  }
  //if you've unlocked buddersticks make the "buy budder stick" button, say how many budder sticks you have, and show the merchant
  if (unlockedbuddersticks == 1) {
   fill(0)
   text(merchantmessage, 550, 340)
   image(merchant, 550, 100)
   if (gotoshopbuttoncreated === false) {
    gotoshopbuttoncreated = true
    gotoshop = createButton('Go To Shop');
    gotoshop.position(550, 350);
    gotoshop.mousePressed(GoToShop);
   }
   fill(0)
   text("You have " + buddersticks + " Budder Sticks", 200 , 150)
  }
  //if you have unlocked budder sandwiches then show the mercahnt saying wanna buy budder sandwiches
  if (unlockedbuddersandwiches == 1) {
   fill(0)
   text("You have " + buddersandwiches + " Budder Sandwiches", 200 , 200)
  }
   //when you unlockbuddergenerators it showed how any budd. gens you have and creates "buy budd gen" button
   if(unlockedbuddergenerators == 1) {
    image(buddergeneratorimg, 25, 100)
    text("x" + buddergenerators, 125, 150)
   }
  if(unlockedmap == 1) {
  fill(255,200,75)
  rect(200,10,50,50);
  if (mapbuttoncreated === false) {
    mapbuttoncreated = true
    mapbutton = createButton('Map');
    mapbutton.position(206,30);
    mapbutton.mousePressed(OpenMap);
  }
  }
  //say how many budder sandwiches you've eaten
  if (buddersandwicheseaten >= 1) {
   fill(0)
   text("You have eaten " + buddersandwicheseaten + " Budder Sandwiches", 200, 300)
  }
  
  //eating budder sandwich messages
  if (1==1) {
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
    text("https://discord.gg/cFCtRFK", 200, 250)
  }
  }
  //unlocking items
  if(budders >= 10) {
   unlockedbuddersticks = 1
  }
  if(buddersticks >= 3) {
   unlockedbuddersandwiches = 1
  }
  if(budders >= 50) {
   unlockedbuddergenerators = 1
  }
  //make "eat budder sandwich" button
  if(buddersandwiches >= 1) {
   if (eatbuddersandwichbuttoncreated === false) {
    eatbuddersandwichbuttoncreated = true
    eatbuddersandwich = createButton('Eat Budder Sandwich');
    eatbuddersandwich.position(200, 400);
    eatbuddersandwich.mousePressed(EatBudderSandwich);
   }
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
   
   
   //----------------------------------------SHOP------------------------------------
   if (room == "shop") {
  
  if (buddersandwicheseaten >= 1) {
   eatbuddersandwich.remove();
  }
  //background
  fill(200,150,50)
  rect(0,0,1280,720)
  fill(0)
  image(merchant, 400,0)
  image(shopmenu, 135, 220)
  if (backbuttoncreated === false) {
   backbuttoncreated = true
   backbutton = createButton('Back');
   backbutton.position(50,50);
   backbutton.mousePressed(Back)
  }
  
 if (buybudderstickbuttoncreated === false) {
    buybudderstickbuttoncreated = true
    buybudderstick = createButton('Buy 1 Budder Stick');
    buybudderstick.position(160, 435);
    buybudderstick.mousePressed(BudderStick);
  }
  
  if (buybuddersandwichbuttoncreated === false) {
    buybuddersandwichbuttoncreated = true
    buybuddersandwich = createButton('Make Budder Sandwich');
    buybuddersandwich.position(320, 435);
    buybuddersandwich.mousePressed(BudderSandwich);
  }
  
  
  if (buybuddergeneratorbuttoncreated === false) {
    buybuddergeneratorbuttoncreated = true
    buybuddergenerator = createButton('Buy 1 Budder Generator');
    buybuddergenerator.position(515, 435);
    buybuddergenerator.mousePressed(BudderGenerator);
   }
   
   if (buymapbuttoncreated === false) {
    buymapbuttoncreated = true
    buymapbutton = createButton('Buy Map');
    buymapbutton.position(730, 435);
    buymapbutton.mousePressed(BuyMap);
    }
  
 }
 //------------------------------------------MAP-----------------------------------
 if (room == "map") {
  
   
 }
}
   
 


//--------------------------------------------BUTTON FUNCTIONS------------------------------
function GoToShop() {
 room = "shop"
 //remove buttons
  budder.remove();
  gotoshop.remove();
  if (unlockedmap == 1) {
   mapbutton.remove();
  }
}

function Back() {
 room = "mainmenu"
  //remove buttons
 budderbuttoncreated = false
 gotoshopbuttoncreated = false
 backbuttoncreated = false
 backbutton.remove();
 buybudderstickbuttoncreated = false
 buybudderstick.remove();
 buybuddersandwichbuttoncreated = false
 buybuddersandwich.remove();
 buybuddergeneratorbuttoncreated = false
 buybuddergenerator.remove();
 buymapbuttoncreated = false
 buymapbutton.remove();
}
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

function BuyMap() {
 unlockedmap = 1
}

function OpenMap() {
 //room = "map"
}
function BackToMainMenu() {
 
}
