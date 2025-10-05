const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let num1 = 0, operator, num2 = 0;

function operate(operator) {
    let answer;
    switch (operator) {
        case "+":
            answer = add(num1, num2);
            break;
        case "-":
            answer = subtract(num1, num2);
            break;
        case "*":
            answer = multiply(num1, num2);
            break;
        case "/":
            answer = divide(num1, num2);
        default:
            break;
    }
    return answer;
}

const primaryScreen = document.querySelector(".primary");
const secondaryScreen = document.querySelector(".secondary");
let isScreenBlank = primaryScreen.textContent === "" ? true : false;

const digitBtns = document.querySelectorAll(".digit");
digitBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (isScreenBlank) {
            num1 = num1*10 + Number(btn.textContent);
            primaryScreen.textContent = `${num1}`;
            console.log(num1);
        }
        else {
            num2 = num2*10 + Number(btn.textContent);
            primaryScreen.textContent = `${num2}`;
            
        }
    });
});

const operators = document.querySelectorAll(".operator");
operators.forEach(btn => {
    btn.addEventListener("click", () => {
        operator = btn.textContent
        isScreenBlank = false;
        secondaryScreen.textContent = `${num1} ${operator}`;
    })
})