let mic;

function setup() {
  createCanvas(499, 399);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();


}

function draw() {
  background(0, 5);
  frameRate(20);
  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel() * 4;
  fill(0);
  noStroke();
  smooth()
  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 1, random(1233), 0);
  ellipse((width / 1.2) * vol, h - 25, vol * 400, vol * 400);

  function drawPointy(weigh) {
    stroke(vol * 200);
    smooth()
    strokeWeight(random(weigh));
    point(random(windowHeight * 1.6), random(windowWidth * 1.6));
  }
  drawPointy(10);
  drawPointy(100);

  function drawArc() {
    arc(random(2000), random(2000), vol * 200, vol * 444, vol * 444, HALF_PI);
    fill(random());
    noStroke();
    arc(random(vol * 2000), random(400), vol * 444, vol * 444, HALF_PI, PI);
    arc(vol * 44, random(300), 700, 70, PI, PI + QUARTER_PI);
    arc(vol * 444, vol * 444, vol * 444, vol * 444, PI + QUARTER_PI, TWO_PI);
  }
  drawArc();
}