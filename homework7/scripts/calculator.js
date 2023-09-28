let calcInput = document.getElementById("calculatorInput");
let currentInput = ""; 
let lastInputIsOperator = false; 


function updateInput(value) {
    if (isOperator(value) && lastInputIsOperator) {
        
        return;
    }
    
    lastInputIsOperator = isOperator(value);
    currentInput += value;
    calcInput.value = currentInput;
}


function isOperator(value) {
    return value === "+" || value === "-" || value === "*" || value === "÷";
}
function clearInput() {
    currentInput = "";
    calcInput.value = "";
    lastInputIsOperator = false;
}

function calculateResult() {
    try {       
        currentInput = eval(currentInput);
        calcInput.value = currentInput;
        lastInputIsOperator = false;
    } catch (error) {
        
        calcInput.value = "Error";
    }
}

document.getElementById("one").addEventListener("click", function () { updateInput("1"); });
document.getElementById("two").addEventListener("click", function () { updateInput("2"); });
document.getElementById("three").addEventListener("click", function () { updateInput("3"); });
document.getElementById("four").addEventListener("click", function () { updateInput("4"); });
document.getElementById("five").addEventListener("click", function () { updateInput("5"); });
document.getElementById("six").addEventListener("click", function () { updateInput("6"); });
document.getElementById("seven").addEventListener("click", function () { updateInput("7"); });
document.getElementById("eight").addEventListener("click", function () { updateInput("8"); });
document.getElementById("nine").addEventListener("click", function () { updateInput("9"); });
document.getElementById("plus").addEventListener("click", function () { updateInput("+"); });
document.getElementById("minus").addEventListener("click", function () { updateInput("-"); });
document.getElementById("multiply").addEventListener("click", function () { updateInput("*"); });
document.getElementById("divide").addEventListener("click", function () { updateInput("÷"); });
document.getElementById("dot").addEventListener("click", function () { updateInput("."); });
document.getElementById("zero").addEventListener("click", function () { updateInput("0"); });
document.getElementById("equal").addEventListener("click", calculateResult);
document.getElementById("clear").addEventListener("click", clearInput);
