let randomQuoteNumber
let guess
let img
let validquote
let button;

function setup() {
  createCanvas(1280, 720);
  randomQuoteNumber = int(random(0,516))
  quotes = loadStrings('Quotes.txt');
  quoted = loadStrings('Quoted.txt');
  listofpeople = ['Rylan','Will', 'Saad', 'AJ', 'Brett', 'Brock', 'Emily', 'Mr. Justin Riley', 'Doug', 'Logan Larson', 'Mr. Rice', 'Ash', 'Dillon']
  validquote = false
  guess = "blank"
  
  button = createButton('Next Quote');
  button.position(-640, 650);
  button.mousePressed(NextQuote);
}

function preload() {
  img = loadImage('buttons.png');
}

function draw() {
  background(220);
  image(img, 0, 0);
  textSize(50)
  textAlign(CENTER);
  
  for (let i = 0; i < 12; i++) {
    if (quoted[randomQuoteNumber] == listofpeople[i]){ 
      validquote = true
      text(str(quotes[randomQuoteNumber]),100,100,1000)
    }
  }
  
  if (validquote == false) {
    randomQuoteNumber = int(random(0,516))
  }
  
  
    
  
  
  if (guess == quoted[randomQuoteNumber]) {
    
    text("correct",500,400)
    button.position(640, 650);
  }
  else if (guess == "blank") {
  //
  }
  else {
    text("incorrect, it was " + quoted[randomQuoteNumber],500,400)
    button.position(640, 650);
  }
  
  
  
}
  
function mouseClicked() {
  if (mouseY < 643 && mouseY > 538)
  guess = listofpeople[int((mouseX+40)/100)-1]
}

function NextQuote() {
  validquote = false
  guess = "blank"
  randomQuoteNumber = int(random(0,516))
  button.position(-640, 650);
}
