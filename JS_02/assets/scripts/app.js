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