console.log("ce este un obiect?");
console.log("raspuns: este o colectie de proprietati si metode.");
const person = {
  name: "Daniel",
  dateOfBirthL: "15-12-1987",

  //methods
  run() {
    console.log("5km today");
  },

  code: function () {
    console.log("1000 lines of code today ");
  },
};

person.run();
person.code();

person.name = "costel";
console.log("person.name", person.name);
person["name"] = "Daniel";
console.log("person.name", person.name);

function changePerson(object, property, value) {
  object[property] = value;
}
changePerson(person, "name", "Stefania");
console.log("person.name", person.name);
