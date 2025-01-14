let dobozok = document.querySelector('#dobozok');
let javascriptTomb = document.querySelector('#javascript-tomb');
let csharpTomb = document.querySelector('#csharp-tomb');
let pythonTomb = document.querySelector('#python-tomb');

let szavak = ['A', 'programozás', 'egy', 'nagyon', 'szép', 'tantárgy.'];

for (let i = 0; i < szavak.length; i++) {
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

let collector = document.querySelector('#gyujto-doboz');
collector.style.borderTop = 'none';
collector.style.borderRight = 'none';

let tombElemek = '';

for (let i = 0; i < boxes.length; i++) {
    felsoBoxes[i].style.left = `${i * 105}px`;
    felsoBoxes[i].innerText = `i = ${i}`;
    kozepsoBoxes[i].style.left = `${i * 105}px`;
    kozepsoBoxes[i].innerText = szavak[i];
    alsoBoxes[i].style.left = `${i * 105}px`;
    alsoBoxes[i].innerText = szavak[i];

    if (i < boxes.length - 1) {
        tombElemek += `${szavak[i]}, `;
    } else {
        tombElemek += `${szavak[i]}`;
    }
}

javascriptTomb.innerText = tombElemek;
csharpTomb.innerText = tombElemek;
pythonTomb.innerText = tombElemek;

let szamlalo = 0;

function osszegzes() {
    let mondat = '';

    for (let i = 0; i < szamlalo + 1; i++) {
        if (szamlalo < boxes.length) {
            mondat += `${szavak[i]} `;
        }
    }

    alsoBoxes[szamlalo].style.left = `0px`;
    alsoBoxes[szamlalo].style.top = `100px`;
    alsoBoxes[szamlalo].style.borderTop = 'none';
    alsoBoxes[szamlalo].style.borderRight = 'none';
    alsoBoxes[szamlalo].style.color = `white`;
    alsoBoxes[szamlalo].style.transition = 'all 1.5s';
    kozepsoBoxes[szamlalo].style.backgroundColor = `green`;
    kozepsoBoxes[szamlalo].style.color = `white`;
    kozepsoBoxes[szamlalo].style.transition = 'all 1.5s';

    collector.innerText = mondat;

    szamlalo++;

    if (szamlalo === szavak.length) {
        let gomb = document.querySelector('#gomb');
        gomb.disabled = 'true';
    }
}
