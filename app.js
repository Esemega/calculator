//Create a function for each operator
// There will be 2 inputs and 1 output

//basic functions sum, subtract, multiply & divide
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

//get 2 inputs
const getA = () => document.getElementById("input-a").value;
const getB = () => document.getElementById("input-b").value;

//print the result in the output -> h3#result
const setResult = (result) => {
  document.getElementById("result").innerText = result;
};

//Evaluate if any input is empty and run the function depending on button clicked
const getResult = (event) => {
  const a = getA();
  const b = getB();

  if (a === "" || b === "") {
    setResult("Error!");
  } else {
    switch (event.target.id) {
      case "button-sum":
        setResult(sum(Number(a), Number(b)));
        break;
      case "button-subtract":
        setResult(subtract(a, b));
        break;
      case "button-multiply":
        setResult(multiply(a, b));
        break;
      case "button-divide":
        setResult(divide(a, b));
        break;
    }
  }
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
