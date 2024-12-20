var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var operator = document.getElementById("operator");
var calculateButton = document.getElementById("calculateButton");
var resultDisplay = document.getElementById("result");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        alert('Division by zero is not allowed.');
        return null;
    }
    return a / b;
}

calculateButton.addEventListener('click', () => {
    var num1 = parseFloat(number1.value);
    var num2 = parseFloat(number2.value);
    var op = operator.value;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers.');
        return;
    }

    var result;
    switch (op) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            alert('Invalid operator selected.');
            return;
    }

    if (result !== null) {
        resultDisplay.textContent = `Result = ${result.toFixed(2)}`;
    }
});