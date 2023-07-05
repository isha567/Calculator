// Define four functions: add(), subtract(), divide(), multiply()
// Each function should:
// 1. Retrieve the current values of the input fields with id="num1-el" and id="num2-el"
//    (use Number() to ensure these are treated as numbers, not strings)
// 2. Perform the relevant calculation
// 3. Update the paragraph with id="sum-el" to display the result

// For example, if the user enters "8" and "2", and then clicks the "Add" button,
// the add() function should render "Sum: 10" inside the paragraph with id="sum-el"

function add() {
let num1 = Number(document.getElementById("num1-el").value);
let num2 = Number(document.getElementById("num2-el").value);
let addition = num1+num2;

    document.getElementById("sum-el").textContent= ("Sum:" + addition);
    
}

function sub() {
    let num1= Number(document.getElementById("num1-el").value);
    let num2= Number(document.getElementById("num2-el").value);
    let difference= num1-num2;

    document.getElementById("sum-el").textContent= "Sum: " + difference;


}

function divide() {
    let num1= Number(document.getElementById("num1-el").value);
    let num2= Number(document.getElementById("num2-el").value);
    let quotient = num1/num2;
    document.getElementById("sum-el").textContent= "Sum: "+ quotient;

}
function multiply() {
    let num1= Number(document.getElementById("num1-el").value)
    let num2= Number(document.getElementById("num2-el").value)
    let product = num1*num2
    document.getElementById("sum-el").textContent= "Sum: "+ product

}

