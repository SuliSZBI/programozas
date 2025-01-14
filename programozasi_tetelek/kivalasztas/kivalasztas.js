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

let ertekek = [96, 50, 98, 81, 18, 98, 73, 71, 1, 16];

let collector = document.querySelector('#gyujto-doboz');

let tombElemek = '';

for (let i = 0; i < boxes.length; i++) {
    felsoBoxes[i].style.left = `${i * 50}px`;
    felsoBoxes[i].innerText = `i = ${i}`;
    alsoBoxes[i].style.left = `${i * 50}px`;
    alsoBoxes[i].innerText = ertekek[i];

    if (i < boxes.length - 1) {
        tombElemek += `${ertekek[i]}, `;
    } else {
        tombElemek += `${ertekek[i]}`;
    }
}

javascriptTomb.innerText = tombElemek;
csharpTomb.innerText = tombElemek;
pythonTomb.innerText = tombElemek;

let szamlalo = 0;
let gomb = document.querySelector('#gomb');

function kivalasztas() {
    collector.innerText = '';

    if (ertekek[szamlalo] === 73) {
        letezik = true;
        collector.innerText = `i = ${szamlalo}`;
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
