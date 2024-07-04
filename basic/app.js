    // Question One

// let day = new Date().getDay();
// let hour = new Date().getHours();
// let minutes = new Date().getMinutes();
// let second = new Date().getSeconds();
// console.log(`${day} ${hour}PM : ${minutes} : ${second}`)

    // Question two

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth();
let yyyy = today.getFullYear();

if(dd < 10){
    dd = "0" + dd;
}
if(mm < 10){
    mm = "0" + mm;
}

today = mm + "-" + dd + "-" + yyyy
console.log(today)
today = mm + "/" + dd + "/" + yyyy
console.log(today)
today = dd + "-" + mm + "-" + yyyy
console.log(today)
today = yyyy + "/" + mm + "/" + dd
console.log(today)