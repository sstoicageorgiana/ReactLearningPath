//noua modalitate e a scrie functie in EC6

function square(number) {
  return number * number;
}
console.log(square(2));

//arraw function
const square1 = (number) => {
  return number * number;
};
console.log(square(3));

//arraw function  cand exista un singur return/ o singura linie de cod putem sa renuntam la return si acolada
const square2 = (number) => number * number;
//google clean function

const person = {
  name: "Ronaldo",
  showInfo() {
    console.log(this);
  },
  // ShowInfoafter1s() {
  //   setTimeout(function () {
  //     console.log("this after 1 sec", this);
  //   }, 1000);
  // },
  // ShowInfoafter1s() {
  //   var self = this;
  //   setTimeout(function () {
  //     console.log("this after 1 sec", self);
  //   }, 1000);
  // },
  ShowInfoafter1s() {
    setTimeout(() => console.log(this), 1000);
  },
};

person.showInfo();
person.ShowInfoafter1s(); //window
