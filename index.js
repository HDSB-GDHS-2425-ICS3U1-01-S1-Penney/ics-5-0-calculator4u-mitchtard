let memory = null;

function calculate(){
    let useMemory = prompt("Do you wish to use the previous result in memory? (yes/no)").toLowerCase();

    let num1, num2;

    if  (useMemory === "yes" && memory !== null && !isNaN(memory)){
        num1 = memory;
        alert("Using Previous Result: " + memory);
    } else {
            num1 = parseFloat(prompt("Enter the First Number"));
    }
    if (isNaN(num1)){
        alert("Invalid first number, please try again.");
        return;
    }

    num2 = parseFloat(prompt("Enter the Second Number"));
    if (isNaN(num2)){
        alert("Invalid second number, please try again.");
        return;
    }
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
            if (num2 !== 0){
                result = num1 / num2;
            } else {
                result = "Error! Division by Zero!"
            }
            break;
            default: 
                result = "Invalid Operation!"

    }
    if (!isNaN(result)){
        memory = result;
    }
    if (typeof result === "number") {
        memory = result;
    }
    
    
    alert("The Result is: " + result);

let continueCalc = prompt("Do you want to continue using the calculator? (yes/no)").toLowerCase();
if (continueCalc === "yes") {
    calculate();
}
}

calculate();

