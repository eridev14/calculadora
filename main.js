const inp = document.querySelector('.header__input');
const displayRes = document.querySelector('.header__result');
const numbers = document.querySelector('.numbers');
let res = 0;
let last = '';

numbers.addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn--digit')) {
        return
    }
    let num = e.target.textContent;
    last = num;
    inp.textContent += num;
    // if(lastOperator === '') res = parseFloat(num);
});

const zero = document.querySelector('.btn--zero');
zero.addEventListener('click', (e) => {
    let num = e.target.textContent;
    last = num;
    inp.textContent += num;
})

const point = document.querySelector('.btn--point');
point.addEventListener('click', (e) => {
    let num = e.target.textContent;
    last = num;
    inp.textContent += num;
})

//borrar todo
const del = document.querySelector('.btn--del');
del.addEventListener('click', () => {
    inp.textContent = '';
    displayRes.textContent = '';
    last = '';
})

//borrar numero por numero
const mc = document.querySelector('.btn--mc');
mc.addEventListener('click', () => {
    inp.textContent = inp.textContent.slice(0, -1);
    last = inp.textContent.slice(-1);
    console.log(last);
})

const operators = document.querySelector('.operators');
operators.addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn--op')) {
        return
    }

    let op = e.target.textContent;
    if (
        last === '+'
        || last === '-'
        || last === '*'
        || last === '/'
        || last === '.'
    ) {
        return;
    }

    if (
        op === '+'
        || op === '-'
        || op === '*'
        || op === '/'
        || op === '%'
    ) {
        inp.textContent += op;
    }

    last = op;
})

const btnEqual = document.querySelector('.btn--equal');
btnEqual.addEventListener('click', () => {
    if (
        last === '+'
        || last === '-'
        || last === '*'
        || last === '/'
        || last === '%'
        || last === ''
        || last === '.'
    ) {
        return;
    }

    let textRes = inp.textContent;
    let reg = textRes.split(/(\+|\-|\*|\/|\%)/);
    let ac = parseFloat(reg[0]);
    for (let i = 1; i < reg.length; i += 2) {
        if (i % 2 !== 0) {
            if (reg[i] === "+") {
                let num = parseFloat(reg[i + 1])
                ac += num;
            }

            if (reg[i] === "-") {
                let num = parseFloat(reg[i + 1])
                ac -= num;
            }

            if (reg[i] === "*") {
                let num = parseFloat(reg[i + 1])
                ac *= num;
            }

            if (reg[i] === "/") {
                let num = parseFloat(reg[i + 1])
                ac /= num;
            }

            if (reg[i] === "%") {
                let num = parseFloat(reg[i + 1])
                ac = ac % num;
            }
        }
    }
    displayRes.textContent = eval(ac);
})

