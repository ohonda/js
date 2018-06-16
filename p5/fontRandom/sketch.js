var x = 0;
var y = 0;
var t = 50;
var c = 0;

function setup() {
  createCanvas(720, 480);
  //colorMode(HSB, 100);
  //background(50, 100 ,80, 20);
}

function draw() {
	background('#ccc');
	textSize(t);
  textFont('IBM Plex Sans');
  textStyle(BOLD);
	fill(c);
	//textAlign(LEFT, TOP);
	text("Hello World", x+100, y+300);
	//x++;
	x = Math.floor( Math.random() * 11 );
	c = Math.floor( Math.random() * 11 );
	t++;
	if(y < 100){
	 y= Math.floor( Math.random() * 11 );
	}
}