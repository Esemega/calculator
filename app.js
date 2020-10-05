//Create a function for each operator
// There will be 2 inputs and 1 output

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const getA = () => document.getElementById("input-a").value;
const getB = () => document.getElementById("input-b").value;

const printError = () => {document.getElementById("result").innerText = "Error";}

// const getSum = () => { 
//     if(getA() === "" || getB() === "") {
//         printError();
//     } else {
//         document.getElementById("result").innerText = sum(Number(getA()),Number(getB()));
//     }
    
// }
const getSum = () => { document.getElementById("result").innerText = sum(Number(getA()),Number(getB()));}
const getSubtract = () => {document.getElementById("result").innerText = subtract(getA(),getB());}
const getMultiply = () => {document.getElementById("result").innerText = multiply(getA(),getB());}
const getDivide = () => {document.getElementById("result").innerText = divide(getA(),getB());}


document.getElementById("button-sum").addEventListener("click",getSum);
document.getElementById("button-subtract").addEventListener("click",getSubtract);
document.getElementById("button-multiply").addEventListener("click",getMultiply);
document.getElementById("button-divide").addEventListener("click",getDivide);