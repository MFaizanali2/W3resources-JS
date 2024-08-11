// Qno:- 01)  Write a JavaScript program that displays the largest integer among two integers.
// function largestInteger(num1, num2){
//     if(num1 > num2){
//         console.log("one is greater")
//     }else
//      if(num2 > num1){
//         console.log("two is greater")
//     }
//     else{
//         console.log("both are equal")
//     }
// }
// let result = largestInteger(15, 15);


// Qno :- 02) Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
function sample(){
    let num1 = prompt("enter number");
    let num2 = prompt("enter number");
    let num3 = prompt("enter number");

    let product = num1 * num2 * num3;
    
    if(product > 0){
        alert("The sign of the product is positive");
    } else if(product < 0){
        alert("The sign of the product is negative");
    } else{
        alert("The sign of the product is zero");
    }
}
sample()