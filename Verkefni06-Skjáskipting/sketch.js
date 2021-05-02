// Hér kemur kóðinn þinn:
let value = 200;
function setup(){
    createCanvas(400,400);
    background(233,234,227);
    fill(197,52,42)//rauður
    noStroke(0)
    rectMode(CENTER);
}

function draw() {
  background(216,244,202);
//uppi til vinstri
  if(mouseX<width/2 && mouseY<height/2 && mouseIsPressed){
    fill(214,128,173)
      rect(100,100, width/2, height/2)
    }
//niðri til  hægri
  if(mouseY>height/2 && mouseX>width/2){
    fill(value)
    rect(300,300, width/2, height/2)
  }
  //uppi til hægri
    if(mouseX>width/2 && mouseY<height/2){
      fill(245,168,59)
      rect(300,100, width/2, height/2)

    }
  //niðri til vinstri
    if(mouseY>height/2 && mouseX<width/2 && !mouseIsPressed){
      fill(189,226,229)
      rect(100,300, width/2, height/2)
    }
    if(mouseX < 200){
        //x er á bilinu frá 0 upp í width/2
      	fill(223,37,33);
        rect(mouseX, mouseY, 30, 30);
      }
      else{
        // x er á bilinu frá width/2 upp í width
      	fill(86,182,193);
        ellipse(mouseX,mouseY, 30, 30);
      }

}
function keyPressed() {
if (keyCode == '32') {
    value = 255;
  }

  }
