// Hér kemur kóðinn þinn:
function setup() {
  createCanvas(400,400);
  background(255, 215, 0);
  fill(0);
  colorMode(HSB);
  frameRate(3);
}

function draw(){
  fill(random(0,360),75,100);
  for(var i = 0; i < 20 ; i = i + 1) {
    ellipse(100, 10 + i*20, 15, 15);
  }
}
