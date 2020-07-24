// let data = {
//     "name": "Random",
//     "items": [
//         "This is some sample text.",
//         "This is some sample text.",
//         "This is some sample text.",
//         "This is some sample text.",
//         "This is some sample text.",
//         "This is some sample text.",
//         "This is some sample text.",
//         "This is some sample text.",
//         "This is some sample text.",
//         "This is some sample text.",
//         "This is some sample text.",
//         "This is some sample text.",
//         "This is some sample text.",
//         "This is some sample text.",
//         "This is some sample text.",
//         "This is some sample text."
//     ],
// }

function setup() {
    let form = document.querySelector('form');

    form.addEventListener('change', preview);
    form.addEventListener('submit', createFinal);
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
    bingo(1080, 1920, data);

    var c = document.querySelector('canvas');
    var d = c.toDataURL("image/png");
    let btn = document.createElement('button');
    let at = document.createElement("a");
    at.href = d
    at.textContent = "Download Bingo"
    at.download = 'img.png'
    btn.appendChild(at);
    document.querySelector('.form').appendChild(btn);
}

function bingo(w, h, data, parent) {
    let cnv = createCanvas(w, h);
    cnv.parent(parent);

    // Add background code here
    const ctx = cnv.canvas.getContext('2d');
    const lg = ctx.createLinearGradient(0, 0, w, h);
    lg.addColorStop(0, 'red');
    lg.addColorStop(1, 'blue');
    
    push()
    ctx.fillStyle = lg;
    rect(0, 0, w, h);
    pop()


    const margin = Math.round(w * 0.1);
    const sq_size = Math.round(w * 0.175);
    const x_padding = Math.round(w * 0.05);
    const y_padding = Math.round(h * 0.05);

    fill('darkblue');
    stroke('darkblue');
    strokeWeight(1);
    textSize(18);
    textAlign(CENTER, CENTER);
    text(data.name + " Birthday Bingo", width / 2, 50);
    let x = w - 4 * (sq_size + x_padding) - 10
    console.log(x);
    let y = 50 + y_padding + 50;
    rectMode(CORNERS);
    textSize(8);
    for (item of data.items) {
        console.log('Doing...')
        push();
        fill(255);
        stroke('red')
        rect(x, y, x + sq_size, y + sq_size);
        pop();
        stroke(0)
        fill(0);
        text(item, x, y, sq_size, sq_size);
        x += sq_size + x_padding;
        if (x > width - 80) {
            x = w - 4 * (sq_size + x_padding) - 10
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
