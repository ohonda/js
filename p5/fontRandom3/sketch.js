var x = 0;
var y = 0;
var t = 50;
var c = [ 0 ,0 ,0 ,0 ];
var input;

function setup() {
 createCanvas(720, 480);
 frameRate(24);
 translate(width/2, height/2);
 input = createInput("a");
 input.position(width - 150 , height - 30);
 //var button =createButton("Enter");
 //button.position(input.width + 10, height +10);
 //button.mousePressed(perform);

 //background('#ccc');
 //colorMode(HSB, 100);
 //background(50, 100 ,80, 20);
}

function draw() {
 rotate(
  radians(
   getRandom(-360,360)
  )
 );

 fill(c);
 //textAlign(LEFT, TOP);
 // text("Hello World", x, y+100);
 background(204,204,204,30);
 textSize(t);
 textFont('IBM Plex Sans');
 textStyle(BOLD);
 
 text(input.value(), x, y+100);
 //keyTyped();
 //x++;
 x = random(0, 720);
 c = [ 
       getRandom(0, 255),
       getRandom(0, 255),
       getRandom(0, 255),
       getRandom(50, 255) //transparency
     ];
 //c = 255;
 t = getRandom(50, 800);
 //t++;
 y= getRandom(1, 500);
}

function getRandom( min, max) {
 var randCount = Math.floor( Math.random() * Math.random() * (max + 1 - min) ) + min ;
 return randCount;
}