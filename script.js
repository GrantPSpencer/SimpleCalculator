'use strict'

let form = document.getElementById('form');

form.onsubmit = function() {
    calculate();
    return false;
    
}

let buttons = document.querySelectorAll('.buttons');
let formula = document.getElementById('formula');

let specials = ['equalsign','pow','sqrt','clear'];

for (let button of buttons) {
    if (!specials.includes(button.value)) {
        button.onclick = function() {
            formula.value += button.value;
        }
    }
}

let equalsign = document.getElementById('equalsign');
let pow = document.getElementById('pow');
let sqrt = document.getElementById('sqrt');
let clear = document.getElementById('clear');

equalsign.onclick = function() {
    calculate();
}
sqrt.onclick = function() {
    let formula = document.getElementById('formula');
    formula.value = 'Math.sqrt(' + formula.value + ')';
    calculate();
}

pow.onclick = function() {
    let formula = document.getElementById('formula');
    formula.value = 'Math.pow(' + formula.value +', 2)';
    calculate();
}

clear.onclick = function() {
    let formula = document.getElementById('formula');
    formula.value = '';
}

function calculate() {
    let formula = document.getElementById('formula');

    // let value = Math.round((eval(formula.value) + Number.EPSILON) * 100) / 100;

    let value = eval(formula.value);

    if (!value) {
        return false;
    } else {
        formula.value = value;
    }
}