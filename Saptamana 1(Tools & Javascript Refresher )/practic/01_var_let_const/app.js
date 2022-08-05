// let este block scope si var nu este

// 1) VAR
// //hoisting => declaratia se muta deasupra, fara valoare
// console.log("myFirstName : ", myFirstName);
// var myFirstName = "Ion";
// myFirstName = 25; //loosly type
// // What is loosely/dynamic  typed in JavaScript?
// // JavaScript is a loosely typed language, meaning you don't have to specify what type of information will be stored in a variable in advance. ... Many other languages, like Java, require you to declare a variable's type, such as int, float, boolean, or String

// //2 ) LET
// console.log("myFirstName : ", myFirstName);
// let myFirstName = "Ion";
// myFirstName = 25;
// //variabilele create cu let trebuiesc accesate dupa ce sunt create ceea ce este valabil in orice limbaj de progranmare

// function varCount1To(n) {
//   for (var i = 0; i <= n; i++) {
//     console.log("i", i);
//   }
//   console.log("i", i);
// }
// varCount1To(10);
// //=> din exemplu iese cu 11  pe linia 21, asta inseamna ca are function scope

// function letCount1To(n) {
//   for (let i = 0; i <= n; i++) {
//     console.log("i", i);
//   }
//   console.log("i", i);
// }
// letCount1To(10);
// //=> din exemplu iese
// //=>

const a = 10;
//valoarea odata declarata nu mai poate fi schimbata
//name+price=> valoarea referintei
console.log("aaaaaaaaaa");
const phone = {
  name: "iphone",
  price: 200,
};
