function setup() {
  createCanvas(600, 600);
   background("red");
 
 
}

function draw() {
 
  fill("white");
  stroke("black");
 
  if(mouseIsPressed){
    rect(mouseX,mouseY,30,30)
   
  }
 
 
}