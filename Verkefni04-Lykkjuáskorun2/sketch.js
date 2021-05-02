// Hér kemur kóðinn þinn:
function setup() {
  createCanvas(400, 400);
  background(255,215,0);
  fill(0);
  colorMode(HSB);
  frameRate(2);
}

function draw() {
  fill(random(180,360),75,100);
  stroke(0);
  strokeWeight(2);
  for(var i = 0; i < 20 ; i = i + 1) {
    ellipse(200,200,300,300)
    fill(random(180,360),75,100);
    ellipse(200,200,270,270)
    fill(random(180,360),75,100);
    ellipse(200,200,240,240)
    fill(random(180,360),75,100);
    ellipse(200,200,210,210)
    fill(random(180,360),75,100);
    ellipse(200,200,180,180)
    fill(random(180,360),75,100);
    ellipse(200,200,150,150)
    fill(random(180,360),75,100);
    ellipse(200,200,120,120)
    fill(random(180,360),75,100);
    ellipse(200,200,90,90)
    fill(random(180,360),75,100);
    ellipse(200,200,60,60)
    fill(random(180,360),75,100);
  ellipse(200,200,30,30)
    }
}
