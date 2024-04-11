"use strict";
// рассчеты калькулятора
const methodChoise = document.getElementsByName('arb_method');
const diametrChoise = document.getElementsByName('arb_diametr');
const calcBtn = document.querySelector("#calc-btn");
const calcForm = document.querySelector('.calc');


function calculate() {
    let diametr = null;
    let koefficient = null;
    let amount = null;
    let mistakes = 0;

    for (let i = 0; i < methodChoise.length; i++) {
        if (methodChoise[i].type == "radio" && methodChoise[i].checked) {
            console.log(methodChoise[i].id);
            for (let j = 0; j < koef.length; j++) {
                if (methodChoise[i].id == koef[j].id) {
                    console.log(koef[j].koef);
                    koefficient = koef[j].koef;
                    console.log(typeof (koefficient))
                    console.log('koef = ' + koefficient);
                }
            }
        }
    }
    // если не выбрано никакое значение
    if (koefficient == null) {
        alert('Выберите параметры для рассчета');
        mistakes++;
    }
    for (let i = 0; i < diametrChoise.length; i++) {
        if (diametrChoise[i].type == "radio" && diametrChoise[i].checked) {
            console.log(diametrChoise[i].id);
            diametr = diametrChoise[i].id.split('_')[1];
            console.log(typeof (diametr));
            console.log('diametr = ' + diametr);
        }
    }
    // если не выбрано никакое значение
    if (diametr == null) {
        alert('Выберите параметры для рассчета');
        mistakes++;
    }

    if (mistakes == 0) {
        amount = diametr * diametr * koefficient;
        amountDiv.innerText = `Ориентировочная стоимость работ составит ${amount} рублей`;
        popapShowAmount.classList.add('_open');
    }
}


calcBtn.addEventListener('click', calculate);


const koef = [
    {
        id: 'arb1',
        koef: 1,
    },
    {
        id: 'arb2',
        koef: 2.5,
    },
    {
        id: 'arb3',
        koef: 3.33,
    },
    {
        id: 'arb4',
        koef: 5,
    },
    {
        id: 'arb5',
        koef: 6.7,
    },
    {
        id: 'arb6',
        koef: 10,
    },
    {
        id: 'arb7',
        koef: 15,
    },
]

const form = document.querySelector("form");
const amountDiv = document.querySelector('.popup__content');
const popapShowAmount = document.querySelector("._show-amount");

calcForm.addEventListener(
    "submit",
    (event) => {
        event.preventDefault();
    },

);