// Hér kemur kóðinn þinn:
var bukur = 150;
var augu = 17
var munnur = 20

function setup(){
    createCanvas(600,600);
    rectMode(CENTER);
    }
function draw() {
  background(255,255,255);
  fill(144,144,142);//bukur
   ellipse(mouseX,mouseY,130,bukur);

  fill(212,137,174)//eyru
  strokeWeight(4)
  stroke(144,144,142)
  ellipse (mouseX - 25,mouseY - 67 - bukur/2, 45,45);
  ellipse (mouseX + 25,mouseY - 67 - bukur/2, 45,45);

  fill(144,144,142);//haus
  ellipse(mouseX - 1,mouseY - 30 - bukur/2, 90,90);

  fill(0)//augu
  ellipse (mouseX - 25,mouseY - 35 - bukur/2, augu,17);
  ellipse (mouseX + 25,mouseY - 35 - bukur/2, augu,17);

  fill(212,137,174)//nef
  ellipse (mouseX - 0,mouseY - 20 - bukur/2, 15,15);

  fill(0)//munnur
  ellipse (mouseX - 0,mouseY - 10 - bukur/2, munnur,15);


}


function mousePressed() {
	bukur = random (100,150);
  augu = random (15,20);
  munnur = random (15,25);
}
// Teiknum fæturna
 line (mouseX - 20, mouseY + bukur/2, mouseX - 20, mouseY + bukur/2 + 50);
 line (mouseX + 20, mouseY + bukur/2, mouseX + 20, mouseY + bukur/2 + 50);
 triangle(mouseX + 20, mouseY + bukur/2, mouseX + 20, mouseY + bukur/2 - 10,30)
 fill(144,144,142)//fætur
 ellipse (mouseX - 30,mouseY + 150 - bukur/2, 40,30);
 ellipse (mouseX + 30,mouseY + 150 - bukur/2, 40,30);
