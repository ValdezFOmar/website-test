// ========= create a prototype using Object =========

const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const person = Object.create(personPrototype);
person.greet(); // hello!


// ========= Using a constructor =========
// the 'personPrototype is also needed'
function Person(name) {
  this.name = name
}

Object.assign(Person.prototype, personPrototype)
// or
// Person.prototype.greet = personPrototype.greet;

const mike = new Person("Mike")
mike.greet()

