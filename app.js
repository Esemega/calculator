//basic functions sum, subtract, multiply & divide
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

//calculate depending on operation
const calculate = (operation, a, b) => {
  switch (operation) {
    case "sum":
      return sum(Number(a), Number(b));
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
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

//print the result in the outputs -> h3#result & h4#operations
const print = (idElement, message) =>
  (document.getElementById(idElement).innerText = message);

//setting operations sequence
const setOperations = (lastOperations, operand, Operation) => {
  return (
    lastOperations + operand + " " + getSymbolOfChosenOperation(Operation) + " "
  );
};
//declaring these variables before the event handler
let temp = 0;
let lastChosenOperation;
let operations = "";

const buttonEventHandler = (event) => {
  //read input
  const input = getInput();
  //read chosen operation
  let chosenOperation = event.target.id.replace("button-", "");

  if (input === "") {
    //to avoid user can put +++ without entering any operation
    print("result", "Error!");
    print("operations", "");
  } else {
    //if chosenOperations === "equal" or (else) the operations is sum, subtract, multiply or divide
    if (chosenOperation === "equal") {
      //setting and printing result and operations
      const result = calculate(lastChosenOperation, temp, input);
      operations = setOperations(operations, input, chosenOperation);
      print("result", result);
      print("operations", operations);
      //restarting variables
      operations = "";
      lastChosenOperation = "";
      temp = 0;
    } else {
      if (temp === 0) {
        //if its the first input the temp variable will be equal to input
        temp = input;
        //cleaning result output
        print("result", "");
      } else {
        //if not the temp is calculed with the lastChosenOperation
        temp = calculate(lastChosenOperation, temp, input);
      }
      //once all has been calculated the chosenOperation is stored as the lastChosenOperation
      lastChosenOperation = chosenOperation;
      // setting and printing operations
      operations = setOperations(operations, input, chosenOperation);
      print("operations", operations);
    }
  }

  //cleaning the input
  document.getElementById("input").value = "";
};

//Adding an event listerner for each button
const addEventListernerToButton = (button) => {
  document
    .getElementById("button-" + button)
    .addEventListener("click", buttonEventHandler);
};

addEventListernerToButton("sum");
addEventListernerToButton("subtract");
addEventListernerToButton("multiply");
addEventListernerToButton("divide");
addEventListernerToButton("equal");
