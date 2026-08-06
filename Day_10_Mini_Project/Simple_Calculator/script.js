function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num2 === 0){
        return "Cannot divide by zero";
    }
    return num1 / num2;
}

function calculate(num1, operation, num2){

    switch(operation){

        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "*":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);

        default:
            return "Invalid operation";
    }
}

const button = document.getElementById("calculateBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {

    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    const answer = calculate(num1, operation, num2);

    result.textContent = `Result: ${answer}`;

});