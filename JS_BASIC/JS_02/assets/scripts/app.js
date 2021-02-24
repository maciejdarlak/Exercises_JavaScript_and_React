const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; //Array declaration.

// Replace string with Int.
function getUserInput()
{
    return parseInt(userInput.value);
}

// Action description (string type) and calculation.
function createAndWriteInput(operator, resultBeforeCalc, calcNumber)
{
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

// An array of objects describing each action has been added.
function writeToLog(operationIdentifier, prevResult, operationNumber, newResult)
{
    // Object declaration.
    const logEntry = 
    {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry); //Added object to array.
    console.log(logEntries); // Displayed the objects array.
}

// Just another way to get the result of a calculation (function within a function with if else).
function calculateResult(calculationType)
{
    const enteredNumber = getUserInput();
    const initialResult = currentResult;

    let mathOperator;
    if(calculationType === "ADD")
    {
        currentResult += enteredNumber;
        mathOperator = "+";
    }
    else
    {
        currentResult -= enteredNumber;   
        mathOperator = "-";
    }

    createAndWriteInput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);  
}

function add()
{
    calculateResult("ADD");
}

function subtract()
{
    calculateResult("SUBTRACT"); 
}

function multiply()
{
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteInput("*", initialResult, enteredNumber);
    writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide()
{
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteInput("/", initialResult, enteredNumber);
    writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);