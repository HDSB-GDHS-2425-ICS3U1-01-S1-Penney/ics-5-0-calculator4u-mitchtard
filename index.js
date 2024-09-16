// NAME: Mitchel Watkins
// DATE: 9/16/2024
// TITLE: CALCULATOR(Memory+Error)

// Global Memory Variable
let memory = null;

// Calculation function
function calculate() {

    // Memory function: Recalls previous answer using Memory Variable
    let useMemory = prompt("Do you wish to use the previous result in memory? (yes/no)").toLowerCase();

    let num1, num2;
    if (useMemory === "yes" && memory !== null && !isNaN(memory)) {
        num1 = memory;
        alert("Using Previous Result: " + memory);
    } else {
        num1 = parseFloat(prompt("Enter the First Number"));
    }
    // Error Warning: Invalid Answer
    if (isNaN(num1)) {
        alert("Invalid first number, please try again.");
        return;
    }
    // Error Warning: Invalid Answer
    num2 = parseFloat(prompt("Enter the Second Number"));
    if (isNaN(num2)) {
        alert("Invalid second number, please try again.");
        return;
    }
    // Recognition of type of Operation
    let operation = prompt("Choose an operation (+, -, *, /")
    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else { // Error Warning
                result = "Error! Division by Zero!"
            }
            break;
        default: // Error Warning
            result = "Invalid Operation!"

    }

    // If the result is a number, store it in the memory.
    if (!isNaN(result)) {
        memory = result;
    }
    if (typeof result === "number") {
        memory = result;
    }

    alert("The Result is: " + result);
    // Continuity of Calculations
    let continueCalc = prompt("Do you want to continue using the calculator? (yes/no)").toLowerCase();
    if (continueCalc === "yes") {
        calculate();
    }
}
// Call the Funcion
calculate();

