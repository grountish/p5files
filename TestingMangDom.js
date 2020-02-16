let bgcolor;
let x = 100;
let y = 100;
let xoff = 0.0;
let rectX = 123;
let allh2;

function setup() {
    canvas = createCanvas(400, 400);
    bgcolor = color(200);
    pnumberOne = createP("this is a paragraph created with createP");
    h2 = createElement('h2', "this is an h2 created with createElement");
    buttonn = createButton("click", "click");
    buttonn.mousePressed(changeColor);
    slider = createSlider(0, 600, 50);
    inputt = createInput('sometext');
    divv = createDiv('htmld');

}

function changeColor() {
    bgcolor = color(random(12, 123), random(12, 123), random(12, 123));

}

function draw() {
    fill(123, 123, 123);
    rect(rectX, slider.value(), rectX * 0.3, 123);
    background(123, 123, 24);
    // inicia el perlin noise para asignarselo a la X de pnumberOne
    xoff = xoff + 0.009;
    let n = noise(xoff) * width;
    pnumberOne.position(n, y); // <--- perlin noise en la X
    text(inputt.value(), 10, 14); // cambia el valor de
    divv.position(slider.value(), 230); // cambia la posición del div con el slider
    // pnumberOne.style("font-size", slider.value() + "px"); // cambia el tamaño del parrafo con slider
    select('#hashtak').style('color', bgcolor); // selecciona el id hashtak y le da estilo (linkeado al button.mouseclick)

    var allH2 = selectAll('h2');
    for (let i = 0; i < allH2.length; i++) {
        allH2[i].style('font-size', slider.value() + 'px');
    }
}