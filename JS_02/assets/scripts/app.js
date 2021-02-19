const defaultResult = 0;
let currentResult = defaultResult;

// The parts common to all activities are grouped in a separate function.
function getUserInput()
{
    return parseInt(userInput.value);
}

// The parts common to all activities are grouped in a separate function.
function createAndWriteInput(operator, resultBeforeCalc, calcNumber)
{
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; //Array declaration.

// Replace string with Int.
function getUserInput()
{
    return parseInt(userInput.value);
}

// Action description (string type).
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

function add()
{
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteInput("+", initialResult, enteredNumber);
    writeToLog("ADD", initialResult, enteredNumber, currentResult); // Displayed the objects array.
}

function subtract()
{
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;   
    createAndWriteInput("-", initialResult, enteredNumber);
    writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
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
function add()
{
    const enteredNumber = getUserInput();
    const initialresult = currentResult;
    currentResult += enteredNumber;
    createAndWriteInput("+", initialresult, enteredNumber);
}

function subtract()
{
    const enteredNumber = getUserInput();
    const initialresult = currentResult;
    currentResult -= enteredNumber;   
    createAndWriteInput("-", initialresult, enteredNumber)
}

function multiply()
{
    const enteredNumber = getUserInput();
    const initialresult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteInput("*", initialresult, enteredNumber)
}

function divide()
{
    const enteredNumber = getUserInput();
    const initialresult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteInput("/", initialresult, enteredNumber)
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);