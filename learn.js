/* primitive vs non primitive */

// primitive immutable
let courseName = "Js";
courseName = "K"
console.log(courseName)

// non primitive mutable
const languages = ["malayalam", "tamil"]
languages[1] = "english"
// console.log(languages[1])


let num1 = 10;

let num2 = num1;

num2 = 20


const user1 = {name:"Niyas"}
const user2 = user1;
user2.name = "Subin"

if(num1 == num2){
    console.log("equal")
}else{
    console.log("not equal")
}
