let data = {
    "name": "Random",
    "items": [
        "This is some sample text.",
        "This is some sample text.",
        "This is some sample text.",
        "This is some sample text.",
        "This is some sample text.",
        "This is some sample text.",
        "This is some sample text.",
        "This is some sample text.",
        "This is some sample text.",
        "This is some sample text.",
        "This is some sample text.",
        "This is some sample text.",
        "This is some sample text.",
        "This is some sample text.",
        "This is some sample text.",
        "This is some sample text."
    ],
}

let headFont, bodyFont;

function preload() {
    headFont = loadFont('../assets/Sacramento-Regular.ttf');
    bodyFont = loadFont('../assets/AmaticSC-Regular.ttf');
}

function setup() {
    noCanvas();
    let form = document.querySelector('form');

    form.addEventListener('submit', createFinal);


    // if (!navigator.userAgent.includes("iPhone") && !navigator.userAgent.includes("Android")) {
    //     form.addEventListener('input', preview);
    // }
    // else {
    //     document.querySelector('.preview').remove();
    // }

}

function preview() {
    console.log("Here.")
    let name = document.querySelector('#name').value;
    let items = document.querySelector('#items').value.split('\n');
    const data = { name, items }
    h = Math.round(windowHeight * 0.8);
    w = Math.round(h * 9 / 16);
    let preview = document.querySelector('.preview')
    bingo(w, h, data, preview);
}

function createFinal(event) {
    event.preventDefault();
    let name = document.querySelector('#name').value;
    let items = document.querySelector('#items').value.split('\n');
    const data = { name, items }
    h = Math.round(windowHeight * 0.8);
    w = Math.round(h * 9 / 16);
    // Pass invisible element as parent
    const hidden = document.querySelector('.hidden')
    bingo(1080, 1920, data, hidden);

    var c = document.querySelector('canvas');
    var d = c.toDataURL("image/png");

    let at = document.createElement("a");
    at.href = d
    at.download = 'img.png'
    let btn = document.createElement('button');
    btn.innerText = "Download"
    at.appendChild(btn)
    document.querySelector('.form').appendChild(at);
}

function bingo(w, h, data, parent) {
    let cnv = createCanvas(w, h);
    cnv.parent(parent);

    const ctx = cnv.canvas.getContext('2d');

    // Add background code here
    push()
    const lg = ctx.createLinearGradient(0, 0, w, h);
    lg.addColorStop(0, 'red');
    lg.addColorStop(1, 'blue');
    ctx.fillStyle = lg;
    rect(0, 0, w, h);
    pop()


    const margin = Math.round(w * 0.1);
    const sq_size = Math.round(w * 0.215);
    const x_padding = Math.round(w * 0.02);
    const y_padding = Math.round(h * 0.02);

    let y = (h - (sq_size * 4 + y_padding * 3)) / 2
    let x = (w - (sq_size * 4 + x_padding * 3)) / 2

    fill('darkblue');
    stroke('darkblue');
    strokeWeight(1);
    textFont(headFont);
    textSize(100);
    textAlign(CENTER, CENTER);
    text(data.name + " Birthday Bingo", width / 2, (0 + y) / 2);

    rectMode(CORNERS);
    textSize(50);
    textFont(bodyFont);
    for (item of data.items) {

        push();
        fill(255);
        stroke('red')
        rect(x, y, x + sq_size, y + sq_size);
        console.log(x, x + sq_size)
        pop();

        stroke(0)
        fill(0);
        text(item, x, y, sq_size, sq_size);

        x += sq_size + x_padding;
        if (x > width - 80) {
            x = (w - (sq_size * 4 + x_padding * 3)) / 2
            y += sq_size + y_padding;
        }

    }
}



/*
var c=document.querySelector('canvas');
var d=c.toDataURL("image/png");
let btn = document.createElement('button');
let at = document.createElement("a");
at.href = d
at.textContent = "Download Bingo"
at.download = 'img.png'
btn.appendChild(at);

let IMG = document.createElement('img');
IMG.src = d;

document.body.appendChild(btn);
document.body.appendChild(IMG);

*/
