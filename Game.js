var xCar; //Meest links boven
var yCar; //Meest links boven
var wheelSize;
var speed;
var lives = 5;

function ster() {
  this.xPos = random(1000);
  this.yPos = 1000;
}

function setup() {
  //Canvas van 200 px bij 200 px
  createCanvas(1000, 1000);
  xCar = 500;
  yCar = 500;
  wheelSize = 24;
  speed = 10;
}

function draw() {
    //Één cijfer geeft grijswaarden
    if (keyIsDown(RIGHT_ARROW)) {
      speed = 10;
      xCar += speed;
    }
    else if (keyIsDown(LEFT_ARROW)) {
      speed = -10;
      xCar += speed;
    }
    background(35,6,64);
    drawCar(xCar, yCar, wheelSize);
    //width is de breedte van het canvas
    if (xCar > width || xCar < 0){
        speed = -speed;
    }
    if (lives == 0){
      xCar = 500;
      yCar = 500;
      alert("Game Over")
    };
    if (xCar > 1000){
      lives = 0;
    };
    if (xCar < 0){
      lives = 0;
    };
};

function drawCar(xCar, yCar, wheelSize){
    //Geen randen om de auto
    noStroke();
    //Kies de opvulkleur (rgb)
    fill(115, 247, 255);
    //Parameters: x, y, breedte, hoogte
    rect(xCar, yCar, 110, 20);
    rect(xCar + 10, yCar-22, 70, 40);
    // Wielen
    stroke(255); //Witte randen voor de wielen
    strokeWeight(2); //Iets dikkere randen
    fill(125, 166, 166);
    ellipse(xCar + 25, yCar + 21, wheelSize, wheelSize); //Parameters: x, y, breedte, hoogte
    ellipse(xCar + 80, yCar + 21, wheelSize, wheelSize);
    stroke(9); //Zwarte weg
    line(0, yCar + 21 + wheelSize/2, width, yCar + 21 + wheelSize/2); //Parameters: x1,y1,x2,y2
    //'width' is de breedte van je canvas
}

if (lives == 0){
  xCar = 500;
  yCar = 500;
  alert("Game Over")
};
