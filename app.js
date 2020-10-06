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

//print a error in the output -> h3#result
const printError = () => {document.getElementById("result").innerText = "Error";}

//print result of the operation in the output -> h3#result
const getSum = () => { document.getElementById("result").innerText = sum(Number(getA()),Number(getB()));}
const getSubtract = () => {document.getElementById("result").innerText = subtract(getA(),getB());}
const getMultiply = () => {document.getElementById("result").innerText = multiply(getA(),getB());}
const getDivide = () => {document.getElementById("result").innerText = divide(getA(),getB());}


//Evaluate if any input is empty and run the function depending on button clicked
const getResult = (event) => { 
    if(getA() === "" || getB() === "") {
        printError();
    } else {
            switch (event.target.id) {
                case "button-sum":
                    getSum();
                    break;
                case "button-subtract":
                    getSubtract();
                    break;
                case "button-multiply":
                    getMultiply();
                    break;
                case "button-divide":
                    getDivide();
                    break;
            }
    }
    
}

//Adding an event listerner for each button
document.getElementById("button-sum").addEventListener("click",getResult);
document.getElementById("button-subtract").addEventListener("click",getResult);
document.getElementById("button-multiply").addEventListener("click",getResult);
document.getElementById("button-divide").addEventListener("click",getResult);
