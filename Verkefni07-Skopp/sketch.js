// Hér kemur kóðinn þinn:
var boltiX = 100;
var boltiY = 100;
var hradiX = 5;
var hradiY = -6;
var boltiStaerd = 20;
var stig = 0;
var spadiBreidd = 150;
var spadiThykkt = 25;
var spadiY;
let value = 0;

function setup() {
	createCanvas(400,500);
	spadiY = height - 45;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);
}

function draw() {
  background(189,226,229);
	// Reikna ný hnit út frá hraða boltans:
  boltiX = boltiX + hradiX;
  boltiY = boltiY + hradiY;
	// Athuga hvort boltinn snertir vegginn hægra megin:
  if ((boltiX > width-boltiStaerd/2))  {
    hradiX = hradiX * -1;
  }
  //Athuga hvort boltinn snertir vegginn vinstra megin:
  if ((boltiX < boltiStaerd/2))  {
    hradiX = hradiX * -1;
  }
  	// Athuga hvort boltinn snertir þakið
  if ((boltiY < boltiStaerd)) {
    hradiY = hradiY * -1;
  }
  // Athuga hvort bolti snertir spaða:
  if (abs(spadiY - boltiY) < boltiStaerd/2 + spadiThykkt/2 && abs(mouseX - boltiX) < boltiStaerd/2 + spadiBreidd/2) {
    hradiY = hradiY * -1;
  }
  //stigin
  if (abs(spadiY - boltiY) < boltiStaerd/2 + spadiThykkt/2 && abs(mouseX - boltiX) < boltiStaerd/2 + spadiBreidd/2) {
    stig = stig+1;
  }
  //litur á spaða
  if (abs(spadiY - boltiY) < boltiStaerd/2 + spadiThykkt/2 && abs(mouseX - boltiX) < boltiStaerd/2 + spadiBreidd/2) {
    value = 255;
  }
  //hraði og litur á spaða
  if (stig > 2){
  	value = 0;
    hradiY = hradiY * 1;
    }
  if (stig > 4){
    	value = 255;
      hradiY = hradiY * 1.001;
    }
  if (stig > 4){
        	value = 255;
      }
  //Leik lokið
  if (abs(boltiY - height/2)> height/2){
      fill(223,37,33);
      textSize(52);
      text("Leik Lokið " ,50,250);
          }

	// Teikna boltann
  fill(195,219,65);
  ellipse(boltiX, boltiY, boltiStaerd, boltiStaerd);
	// Teikna spaðann
  fill(value);
  rect(mouseX,spadiY ,spadiBreidd,spadiThykkt);
  fill (0);
  ellipse(mouseX, spadiY, 10,10);
	// Teikna stigin
  fill(0);
  textSize(20);
  text("Stig: " + stig,10,20);
}
