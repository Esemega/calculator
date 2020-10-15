//basic functions sum, subtract, multiply & divide
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

//calculate depending on operation
const calculate = (operation, num1, num2) => {
  switch (operation) {
    case "sum":
      return sum(Number(num1), Number(num2));
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
  }
};

//get symbol of chosen operation
const getSymbolOfChosenOperation = (operation) => {
  switch (operation) {
    case "sum":
      return "+";
    case "subtract":
      return "-";
    case "multiply":
      return "x";
    case "divide":
      return "/";
    case "equal":
      return "=";
  }
};

//get input
const getInput = () => document.getElementById("input").value;

//print the result in the output -> h3#result
const setResult = (result) => {
  document.getElementById("result").innerText = result;
};

const printSequence = (sequence) => {
  document.getElementById("operations").innerText = sequence;
};

//declaring this before the event handler
let temp = 0;
let lastChosenOperation;
let operations = "";
//Evaluate if any input is empty and run the function depending on button clicked
const getResult = (event) => {
  
  //read input
  const input = getInput();
  //read chosen operation
  let chosenOperation = event.target.id.replace("button-", "");

  if (chosenOperation === "equal") {
    temp = calculate(lastChosenOperation, temp, input);
    setResult(temp);
    // console.log("if chosenOperation === equal - temp", temp);
    // console.log("if chosenOperation === equal - chosenOperation", chosenOperation);
    // console.log("if chosenOperation === equal - lastChosenOperation", lastChosenOperation);
    operations = operations + input +" "+ getSymbolOfChosenOperation(chosenOperation)+" ";
    printSequence(operations);
    operations = "";
    lastChosenOperation = "";
    temp = 0;
  } else {
    if (temp === 0) {
      temp = input;
      setResult("");
      // console.log("if temp === '' - temp", temp);
      // console.log("if temp === '' - chosenOperation", chosenOperation);
      // console.log("if temp === '' - lastChosenOperation", lastChosenOperation);
    } else {
      temp = calculate(lastChosenOperation, temp, input);
      // console.log("else temp === '' - temp", temp);
      // console.log("else temp === '' - chosenOperation", chosenOperation);
      // console.log("else temp === '' - lastChosenOperation", lastChosenOperation);
    }
    lastChosenOperation = chosenOperation;
    operations = operations + input +" "+ getSymbolOfChosenOperation(chosenOperation)+" ";
    printSequence(operations);
  }

  //print all operations
  // operations = operations + input + getSymbolOfChosenOperation(chosenOperation);
  // printSequence(operations);
  //clean the input
  document.getElementById("input").value = "";
};

//Adding an event listerner for each button
const addEventListernerToButton = (button) => {
  document
    .getElementById("button-" + button)
    .addEventListener("click", getResult);
};

addEventListernerToButton("sum");
addEventListernerToButton("subtract");
addEventListernerToButton("multiply");
addEventListernerToButton("divide");
addEventListernerToButton("equal");
