let xoff = 0.0;
let mic;
let cam;
let delta = 0.01;


function setup() {
    createCanvas(1200, 700, WEBGL);
    mic = new p5.AudioIn();
    mic.start();
    normalMaterial();
    cam = createCamera();
    // set initial pan angle
    cam.pan(-0.8);

}

function draw() {
    //background(250,5);
    cam.pan(delta);

    // every 160 frames, switch direction
    if (frameCount % 160 === 0) {
        delta *= -1;
    }

    rotateX(frameCount * 0.001);

    xoff = xoff + 2;
    let n = noise(xoff) * width;
    let vol = mic.getLevel() ;


    frameRate(16);
    boxRotat(n);



    function boxRotat(x) {
        for (let i = 0; i < 3; i++) {

            smooth();
            fill(vol * 200);
            stroke('white');
            strokeWeight(0.1);
            smooth();
            translate(45 * i, vol * 4, vol);
            rotate(PI / vol, [vol, 3, i / 2]);
            box(vol * 250);
            fill(0, 0, 0, 999);

        }
    }

    function drawPointy(weigh) {
        stroke(0);
        smooth();
        strokeWeight(random(weigh));
        point(random(vol * weigh * 100), random(vol * weigh));

    }
    drawPointy(100);
    drawPointy(50);
}