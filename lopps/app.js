// Qno:- 01)  Write a JavaScript program that displays the largest integer among two integers.
function largestInteger(num1, num2){
    if(num1 > num2){
        console.log("one is greater")
    }else
     if(num2 > num1){
        console.log("two is greater")
    }
    else{
        console.log("both are equal")
    }
}

let result = largestInteger(15, 15);