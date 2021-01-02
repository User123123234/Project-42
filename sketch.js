var hr,mn,sc;


function setup() {
  createCanvas(500,500);
}

function draw() {
background(250,250,250); 
hr=hour()
mn=minute()
sc=second()


  angleMode(DEGREES);
  scAngle=map(sc,0,60,0,360);
  translate(width / 2, height / 2);
  push();
  rotate(scAngle);
fill('blue')
  rect(0, 0, 300, 10); // Larger rectangle is rotating in degrees
  pop();

  mnAngle=map(mn,0,60,0,360);
  //translate(width/2, height / 2);
  push();
  rotate(mnAngle);
  fill('red')
  rect(0, 0, 200, 10);
  pop();

  hrAngle=map(hr,0,12,0,360);
  //translate(width/2, height / 2);
  push();
  rotate(hrAngle);
  fill('green')
  rect(0, 0, 100, 10);
  pop();

  fill('black')
  circle(0,0,50)
  console.log(hrAngle,mnAngle,scAngle)
}