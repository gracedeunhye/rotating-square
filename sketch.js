r=0;
function setup() {
  createCanvas(400, 400);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");
}

function draw() {
  background(220);
  angleMode(DEGREES);
  translate(200,200);
  fill(255);
  r++;
  rotate (r);
  rectMode(CENTER);
  square(0,0,100);
  
}