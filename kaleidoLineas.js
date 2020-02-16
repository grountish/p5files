let mic;
var rotAngle=0;

//customisable variables
var mirror=4; //how many times the dots & lines are mirrored in a circle
var simplicity = 7; //the bigger the number, less number of lines
var dAmt = 10; //amount of dots
var dSpeed = []; //speed of dots spinning

//dots
var dx = [];
var dy = [];
var dDist = [];
var dSize = [];
var dAngle = [];

//dots mirrored
var dx2 = [];
var dy2 = [];
var dAngle2 = [];


function setup() { 
  createCanvas(1200, 700);
  noStroke();
  frameRate(20);
   mic = new p5.AudioIn();
   mic.start();

  //generator for dots' initial values
  for (var i = 0; i < dAmt; i++){
  	dDist[i] = random(0,width/2);
    dAngle[i] = 0;
    dAngle2[i] = 0;
    dSize[i] = random (2,5);
    dSpeed[i] = random (1,10);
  }
} 

function draw() { 
  background(0,12,32,78);
  translate(width/2, height/2);
   let vol = mic.getLevel();
  for (var i = 0; i<mirror; i++){
    rotate(radians(rotAngle));
    fill(77);
    
    for (var j = 0; j<dAmt; j++){
    	
      //clockwise dots
      dx[j] = dDist[j] * cos(radians(dAngle[j]));
      dy[j] = dDist[j] * sin(radians(dAngle[j]));
      ellipse(dx[j], dy[j], dSize[j], dSize[j]);
      
      //counter clockwise dots
      dx2[j] = dDist[j] * cos(radians(dAngle2[j]));
      dy2[j] = dDist[j] * sin(radians(dAngle2[j]));
      ellipse(dx2[j], dy2[j], dSize[j], dSize[j]);
      
      //draw the lines
      if (j>5 && j%simplicity==0){
        push();
        strokeWeight(0.1);
        stroke('white');
        
        //clockwise lines
        line(dx[j], dy[j], dx[j-1], dy[j-1]);
        line(vol, dy[j], dx[j-1], dy[j-1]);
        line(dx[j], dy[j], dx[j-2], dy[j-2]);
        line(dx[j-random(vol)], dy[j-1], dx[j-2], dy[j-2]);
        line(dx[j-1], dy[j-1], dx[j-3], dy[j-3]);
        line(dx[j], dy[j], dx[j-3], dy[j-3]);
        line(dx[j-2], dy[j-2], dx[j-3], dy[j-3]);
        
        //counter clockwise lines
        line(dx2[j], dy2[j], dx2[j-random(23)], dy2[j-1]);
        line(dx2[j], dy2[j], dx2[j-2], dy2[j-2]);
        line(dx2[j-1], dy2[j-1], dx2[j-2], dy2[j-2]);
        line(dx2[j-1], dy2[j-1], dx2[j-3], dy2[j-3]);
        line(dx2[j], dy2[j], dx2[j-3], dy2[j-3]);
        line(dx2[j-2], dy2[j-mouseY/399], dx2[j-3], dy2[j-3]);
        
        pop();
      }
    	
      //spin the dots
      dAngle[j]+=(dSpeed[j]*vol*-12); //clockwise
      dAngle2[j]-=(dSpeed[j]*vol/2); //counter clockwise
    }
    rotAngle+=(360/mirror); //spin the canvas & draw the dots & lines all over again
 		 
  }
  //mirror++;
}