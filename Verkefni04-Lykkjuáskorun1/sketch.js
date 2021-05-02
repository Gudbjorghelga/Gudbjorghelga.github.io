// Hér kemur kóðinn þinn:
function setup() {
  createCanvas(400, 400);
  background(255,215,0);
  fill(0);
  colorMode(HSB);
  frameRate(3);
}

function draw() {
  stroke(0);
  strokeWeight(2);
  fill(random(180,360),75,100);
  for(var i = 0; i < 20 ; i = i + 1) {
    fill(random (180,360),75,100);
    ellipse(10 + i*20,10,15, 15);
    ellipse( 10 + i*20,30, 15, 15);
    ellipse( 10 + i*20,50, 15, 15);
    ellipse( 10 + i*20,70, 15, 15);
    ellipse( 10 + i*20,90, 15, 15);
    ellipse( 10 + i*20,110, 15, 15);
    ellipse( 10 + i*20,130, 15, 15);
    ellipse( 10 + i*20,150,15, 15);
    ellipse( 10 + i*20,170, 15, 15);
    ellipse( 10 + i*20,190, 15, 15);
    ellipse( 10 + i*20,210, 15, 15);
    ellipse( 10 + i*20,230, 15, 15);//12
    ellipse( 10 + i*20,250, 15, 15);
    ellipse( 10 + i*20,270, 15, 15);
    ellipse( 10 + i*20,290, 15, 15);
    ellipse( 10 + i*20,310, 15, 15);
    ellipse( 10 + i*20,330, 15, 15);//17
    ellipse( 10 + i*20,350, 15, 15);
    ellipse( 10 + i*20,370, 15, 15);
    ellipse( 10 + i*20,390, 15, 15);
  }
}
