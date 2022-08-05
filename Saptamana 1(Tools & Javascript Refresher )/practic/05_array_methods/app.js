const number = [1, 4, 5, 6, 11, 2];

//add elements to an array, at the end =>
number.push(12);
console.log("push:", number);

//remove elements from the end of the array (this also return the removed number)
let removedNumber = number.pop();
console.log("pop,removedNumber", number, removedNumber);

//add element to head
number.unshift(99);
console.log("unshift:", number);

//remove element to head
let removedNumberFromHead = number.shift();
console.log("shift, removedNumberFromHead:", number, removedNumberFromHead);

//transform array to a string
const joined = number.join(", ");
console.log("joined:", joined);

//umple array
const filled = [1, 2];
filled.fill(33);
console.log("fill:", filled);

//add items into array
const fruits = ["banaana", "orange", "pinaple", "apple"];
const removedFruits = fruits.splice(2, 2, "KIWI");
//sterge de de la pozitia 2, doua elemente si pune in loc pinaple si returneaza elementele scoase din array
console.log("splice,fruits :", fruits);
console.log("splice, removedFruits:", removedFruits);

//add items into array
const fruits2 = ["banana", "orange", "pinaple", "apple"];
let sliceVar = fruits2.slice(2, 4);
console.log("slice :", sliceVar);

//filter

const products = [
  { name: "iphone 11", price: 4000 },
  { name: "iphone 12", price: 4000 },
  { name: "iphone 13", price: 6000 },
  { name: "samsung 11", price: 4000 },
  { name: "samsung 12", price: 4000 },
  { name: "samsung 13", price: 6000 },
  { name: "siemens 11", price: 4000 },
  { name: "siemens 12", price: 4000 },
  { name: "siemens 13", price: 6000 },
];
const filteredProducts1 = products.filter((product) =>
  product.name.includes("11")
);
console.log("filteredProducts:", filteredProducts1);
const filteredProducts2 = products.filter((product) =>
  product.name.startsWith("s")
);
console.log("filteredProducts2:", filteredProducts2);

//find
const firstPhone = products.find((product) => product.name.includes("11"));
console.log("firstPhone:", firstPhone);

//map
const productCards = products
  .map((product) => `<div>${product.name}</div>`)
  .join("\n");
console.log(productCards);
