// Hér kemur kóðinn þinn:
var musX = 10;
var musY = 10;
var musStaerd = 20;
var musbukur = 150;
var musaugu = 17;
var musmunnur = 20;
var hradiX = 5;
var hradiY = 3;

function setup(){
    createCanvas(600,600);

    }

function draw() {
  background(5,187,224);
  musX = musX + hradiX;
    musY = musY + hradiY;
    if (abs(musX - width/2)> width/2){
      hradiX = -1*hradiX;
      musbukur = random (50,200);
      musaugu = random (17,20);
      musmunnur = random (17,20);
    }
    if (abs(musY - height/2)> height/2){
      hradiY = -1*hradiY;
      musbukur = random (50,200);
      musaugu = random (17,20);
      musmunnur = random (17,20);
    }

    mus(musX,musY,musbukur,musaugu,musmunnur);

  }


function mus(x,y,bukur,augu,munnur){
  rectMode(CENTER);

  fill(144,144,142);//bukur
   ellipse(x,y,130,bukur);

  fill(212,137,174)//eyru
  strokeWeight(4)
  stroke(144,144,142)
  ellipse (x - 25,y - 67 - bukur/2, 45,45);
  ellipse (x + 25,y - 67 - bukur/2, 45,45);

  fill(144,144,142);//haus
  ellipse(x - 1,y - 30 - bukur/2, 90,90);

  fill(0)//augu
  ellipse (x - 25,y - 35 - bukur/2, augu,17);
  ellipse (x + 25,y - 35 - bukur/2, augu,17);

  fill(212,137,174)//nef
  ellipse (x - 0,y - 20 - bukur/2, 15,15);

  fill(0)//munnur
  ellipse (x - 0,y - 10 - bukur/2, munnur,15);


}
