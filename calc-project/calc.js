    
let display = document.getElementById ("display");
let currentInput = "";
let operator = "";

function appendNumber (num) {
    currentInput += num;
    display.textContent = currentInput;
}

function appendOperator (op) {
    operator = op;
    currentInput += op;
    display.textContent = currentInput;
}

function calculate () {
    let result
    try {
        result = Function ('return('+ currentInput + ')')();
    } catch (error) {
        display.textContent = "Error"
        return;
    }
    display.textContent = result;
    currentInput = result.toString ();
}

let clearButton = document.getElementById ("clear");
clearButton.addEventListener ('click', function () {
    currentInput = "";
    operator = "";
    display.textContent = "";
})
