"use strict";
// рассчеты калькулятора
const methodChoise = document.getElementsByName('arb_method');
const diametrChoise = document.getElementsByName('arb_diametr');
const calcBtn = document.querySelector("#calc-btn");
const form = document.getElementById("form-calc");
const amountForUser = document.querySelector('.amountForUser');
console.log(amountForUser);
form.addEventListener("submit", calculate);

function calculate(e) {
    e.preventDefault();
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
            diametr = diametrChoise[i].id.split('_')[1];
        }
    }
    // если не выбрано никакое значение
    if (diametr == null) {
        alert('Выберите параметры для рассчета');
        mistakes++;
    }

    if (mistakes == 0) {
        amount = diametr * diametr * koefficient;
        let message = `Ориентировочная стоимость составит ${amount} рублей`
        amountForUser.innerText = message;
    }
}


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


