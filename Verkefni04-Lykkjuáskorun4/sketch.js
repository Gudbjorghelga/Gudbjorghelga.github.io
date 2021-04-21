// Hér kemur kóðinn þinn:
function setup() {
  createCanvas(400, 400);
  background(255,215,0);
  fill(0);
  colorMode(HSB);
  frameRate(2);
}

function draw() {

  fill(random(0,360),75,100);
  stroke(0);
  strokeWeight(2);
  for(var i = 0; i < 9 ; i = i + 1) {
    rect(90 + i*25, 190, 20, 20);
  }
  for(var i = 0; i < 13 ; i = i + 1) {
    ellipse( 50 + i*25,150, 20, 20);
    fill(random(180,360),75,100);
  }
  for(var i = 0; i < 11 ; i = i + 1) {
    ellipse( 75 + i*25,250, 20, 20);
    fill(random(180,360),75,100);
  }
}
