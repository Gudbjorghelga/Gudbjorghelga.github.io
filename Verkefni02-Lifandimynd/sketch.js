// Hér kemur kóðinn þinn:
    function setup(){
        createCanvas(600,600);
        background(227,242,248);
        fill(0)//eldfjall
        quad(200,400,400,400,600,600,0,600)
        }
    function draw() {

      fill(229,127,49)//hraun
       ellipse(random(200,400), random(0,400), 10, 10);
       stroke(255,255,250)

      fill(245,228,70);//sól
      ellipse(100, 100, 100, 100);

    }
