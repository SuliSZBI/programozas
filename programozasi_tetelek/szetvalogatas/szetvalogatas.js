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
    let kozepsoDoboz = document.createElement('div');
    kozepsoDoboz.setAttribute('class', 'kozepso-doboz');
    doboz.appendChild(kozepsoDoboz);
    let alsoDoboz = document.createElement('div');
    alsoDoboz.setAttribute('class', 'also-doboz');
    doboz.appendChild(alsoDoboz);
    dobozok.appendChild(doboz);
}

let boxes = document.querySelectorAll('.doboz');
let felsoBoxes = document.querySelectorAll('.felso-doboz');
let kozepsoBoxes = document.querySelectorAll('.kozepso-doboz');
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
    kozepsoBoxes[i].style.left = `${i * 50}px`;
    kozepsoBoxes[i].innerText = ertek;

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
let parosSzamlalo = 0;
let paratlanSzamlalo = 0;
let parosElemek = '';
let paratlanElemek = '';

function szetvalogatas() {
    if (ertekek[szamlalo] % 2 === 0) {
        alsoBoxes[szamlalo].style.left = `${parosSzamlalo * 50}px`;
        alsoBoxes[szamlalo].style.top = `90px`;
        parosSzamlalo++;
    } else {
        alsoBoxes[szamlalo].style.left = `${paratlanSzamlalo * 50}px`;
        alsoBoxes[szamlalo].style.top = `130px`;
        paratlanSzamlalo++;
    }

    alsoBoxes[szamlalo].style.transition = 'all 1.5s';
    kozepsoBoxes[szamlalo].style.backgroundColor = `green`;
    kozepsoBoxes[szamlalo].style.color = `white`;
    kozepsoBoxes[szamlalo].style.transition = 'all 1.5s';

    szamlalo++;

    if (szamlalo === boxes.length) {
        let gomb = document.querySelector('#gomb');
        gomb.disabled = 'true';
    }
}
