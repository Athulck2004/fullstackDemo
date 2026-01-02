// //console.log("hello world!")
// // console.error("error message123")
// //alert("odikkoo!")
// //document.write("hello world!!")

// //variables

const pi = 3.14;
console.log(typeof pi);
console.log(pi);

var myName;
myName = "Athul";

let profesion = "student";
profession = "student trainee";
console.log(profession);
console.log(myName);
//let profesion-not allowing redeclaration is not allowed
// var redeclaration is alloowed,global scope

console.log(100 / 2);
console.log(10 % 2);
//console supports direct mathematiocal operations
console.log(2 ** 5); //exponent:2^5
let a = 5; // simple assignment operation
a += 3;
console.log(a);
let flag1 = true;
let flag2 = false;
// logical operators

console.log(flag1 || flag2);
console.log(flag1 && flag2);

let c = 10;
let d = 20;
console.log(c == d); // true

console.log(c === d); // false

console.log(flag1 != flag2 || 2 == 3);

//conditional statements
if (c < d) {
  console.log(`${c} is  not greater than ${d}`);
}

let time = new Date().getHours();
console.log(time);
if (time > 12 && time < 16) {
  console.log("hello,good afternoon");
} else if (time > 16 && time < 24) {
  console.log("good night,Zzzzz");
} else time < 12;
{
  console.log("hello,good morning ");
}
//for loop
let sum = 0;
for (let i = 0; i <= 10; i++) {
  sum += i;
}
console.log(sum);

let sum1 = 0;
for (let j = 0; j <= 10; j++) {
  if (j % 2 == 0) {
    sum1 += j;
  }
}
console.log(sum1);

//arrays
let seasons = ["summer", "winter", "spring", "autumn"];
console.log(seasons);
console.log(seasons.length);
let count = seasons.length;
for (let i = 0; i <= count; i++) {
  console.log(seasons[i]);
}

//function
let SumofEvenNumbers=(n)=> {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) sum += i;
  }
  return sum;
}

let n = 20;
const output = SumofEvenNumbers(n);
console.log(output);

//function to vote
function EligibletoVote(age) {
  if (age >= 18) return true;
  else return false;
}

let age = 2;
const eligible = EligibletoVote(age);
if (eligible) console.log("Eligible to Vote");
else console.log("Not Eligible to vote");

const employees = [
  { name: "Jake", age: 28 },
  { name: "Ali", age: 25 },
  { name: "Helen", age: 23 },
]; //[] : Array; {}: Objects;

//for each
// employees.forEach(display);

/*function display(val) {
  console.log(val);
  //   console.log(val.name) //to display name alone
}*/

let numbers = [10, 20, 30, 40, 50];
function displayplus5(val) {
  //displays +5 value for each array member
  console.log(val + 5);
}
numbers.forEach(displayplus5);

//arrow functions
// function add(a,b){
//     return a+b
// }

const add = (a, b) => a + b;
console.log(add(50, 10));
//document.getElementById("demoo").innerText="hello world"

const x1=document.getElementsByClassName("intro").innerHTML
document.getElementById("demo").innerHTML= x1

displayDate=() =>
{
  document.getElementById("demo").innerHTML=Date()
}