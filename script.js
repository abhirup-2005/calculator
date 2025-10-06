const add = (a, b) => String(a + b);
const subtract = (a, b) => String(a - b);
const multiply = (a, b) => String(a * b);
const divide = (a, b) => {
    if (b === 0) return "ERROR";
    return String(a / b);
};

let num1 = "", operator = null, num2 = "";

function operate(operator) {
    let answer;
    switch (operator) {
        case "+":
            answer = add(Number(num1), Number(num2));
            break;
        case "-":
            answer = subtract(Number(num1), Number(num2));
            break;
        case "x":
            answer = multiply(Number(num1), Number(num2));
            break;
        case "*":
            answer = multiply(Number(num1), Number(num2));
            break;
        case "/":
            answer = divide(Number(num1), Number(num2));
            break;
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
        if (result !== "") {
            clrScr();
        }
        if (isScreenBlank) {
            num1 = num1 + btn.textContent;
            primaryScreen.textContent = `${num1}`;
        }
        else {
            num2 = num2 + btn.textContent;
            primaryScreen.textContent = `${num2}`;

        }
    });
});

const operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (num1 !== "") {
            if (isScreenBlank) {
                operator = btn.textContent;
                secondaryScreen.textContent = `${num1} ${operator}`;
                isScreenBlank = false;
            }
            else {
                let answer = operate(operator);
                if (answer === "ERROR") {
                    clrScr();
                    primaryScreen.textContent = "ERROR";
                }
                else {
                    answer = Math.round(answer * 100000) / 100000;
                    operator = btn.textContent;
                    secondaryScreen.textContent = `${answer} ${operator}`;
                    num1 = answer;
                    num2 = "";
                }
            }
            result = "";
        }
    })
});

let result = "";
const equalBtn = document.querySelector(".equalsTo");
equalBtn.addEventListener("click", () => {
    if (operator != null && num2 != "") {
        result = operate(operator);
        if (result === "ERROR") {
            clrScr();
            primaryScreen.textContent = "ERROR";
        }
        else {
            result = Math.round(result * 100000) / 100000;
            secondaryScreen.textContent = `${num1} ${operator} ${num2} =`;
            primaryScreen.textContent = `${result}`;
            num1 = result;
            num2 = "";
            isScreenBlank = true;
            operator = null;
        }
    }
});

const clearScreen = document.querySelector(".clear");
clearScreen.addEventListener("click", () => {
    clrScr();
});

function clrScr() {
    primaryScreen.textContent = "";
    secondaryScreen.textContent = "";
    num1 = num2 = "";
    operator = null;
    isScreenBlank = true;
    result = "";
}