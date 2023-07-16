// ========= Literal syntax =========
const person = {
  // name: ["Bob", "Smith"],}
  name: {
    first: "Bobo",
    last: "Smith"
  },
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)
  },
  introducedSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`)
  }
}

// ========= simple function to create an object =========
function createPerson(name) {
  const obj = {}
  obj.name = name
  obj.introducedSelf = function () {
    console.log(`Hi! I'm ${this.name[0]}.`)
  }
  return obj
}
const myPerson = createPerson("Daniel")


/* ========= Proper constructor =========
  - Similar to a Class
  - Uses the keyword 'new' to create the object
  - Starts with a capital letter
  - Automtically binds 'this' to the object
  - Automtically returns the object
*/
function Person(name) {
  this.name = name
  this.introducedSelf = function () {
    console.log(`Hi! I'm ${this.name}.`)
  }
}