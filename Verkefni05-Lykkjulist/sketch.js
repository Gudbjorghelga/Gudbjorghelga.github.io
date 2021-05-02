// Hér kemur kóðinn þinn:
var i;

function setup() {
  createCanvas(600,600);
  background(189,226,229);
  fill(0);
  colorMode(HSB);
  frameRate(5);
  noStroke(0)
  textFont("Courier New",16);
  textStyle(BOLD);
  textSize(52);
}

function draw(){

  for(var x = -10; x < width; x = x+50){
    for(var y = -10; y < height; y = y+50){
    ellipse(x,y + x*1, 15, 15);
     fill(random(0,360),75,200)}
     text("Vor 2021" ,300,100)
    }
  }
