let dobozok = document.querySelector('#dobozok');
let javascriptTomb = document.querySelector('#javascript-tomb');
let csharpTomb = document.querySelector('#csharp-tomb');
let pythonTomb = document.querySelector('#python-tomb');

for (let i = 0; i < 10; i++) {
    let doboz = document.createElement('div');
    doboz.setAttribute('class', 'doboz');
    let felsoDoboz = document.createElement('div');
    felsoDoboz.setAttribute('class', 'felso-doboz');
    doboz.appendChild(felsoDoboz);
    let alsoDoboz = document.createElement('div');
    alsoDoboz.setAttribute('class', 'also-doboz');
    doboz.appendChild(alsoDoboz);
    dobozok.appendChild(doboz);
}

let boxes = document.querySelectorAll('.doboz');
let felsoBoxes = document.querySelectorAll('.felso-doboz');
let alsoBoxes = document.querySelectorAll('.also-doboz');

let ertekek = [];

let collector = document.querySelector('#gyujto-doboz');

let tombElemek = '';

for (let i = 0; i < boxes.length; i++) {
    let ertek = Math.floor(Math.random() * 100);
    ertekek.push(ertek);
    felsoBoxes[i].style.left = `${i * 50}px`;
    felsoBoxes[i].innerText = `i = ${i}`;
    alsoBoxes[i].style.left = `${i * 50}px`;
    alsoBoxes[i].innerText = ertek;

    if (i < boxes.length - 1) {
        tombElemek += `${ertek}, `;
    } else {
        tombElemek += `${ertek}`;
    }
}

javascriptTomb.innerText = tombElemek;
csharpTomb.innerText = tombElemek;
pythonTomb.innerText = tombElemek;

let szamlalo = 0;
let letezik = false;
let gomb = document.querySelector('#gomb');

function eldontes() {
    collector.innerText = 'false';

    if (ertekek[szamlalo] === 73) {
        letezik = true;
        collector.innerText = 'true';
        gomb.disabled = 'true';
    }

    alsoBoxes[szamlalo].style.color = `white`;
    alsoBoxes[szamlalo].style.backgroundColor = `green`;
    alsoBoxes[szamlalo].style.transition = 'all 1.5s';

    szamlalo++;

    if (szamlalo === boxes.length) {
        gomb.disabled = 'true';
    }
}
