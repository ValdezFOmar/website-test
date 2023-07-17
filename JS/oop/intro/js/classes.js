class Person {
  name = 'Default'

  constructor(name) {
    this.name = name
  }

  introducedSelf() {
    console.log(`Hi! I'm ${this.name}.`)
  }
}

class Professor extends Person {
  teaches

  constructor(name, teaches) {
    super(name)
    this.teaches = teaches
  }

  introducedSelf() {
    console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`)
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1)
    console.log(grade)
  }
}

class Student extends Person{
  #year

  constructor(name, year) {
    super(name)
    this.#year = year
  }

  introducedSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`)
  }

  canStudyArchery() {
    return this.#year > 1
  }
}


const joey = new Person('Joey')
joey.introducedSelf()

const walter = new Professor('Walter', 'Chemistry')
walter.introducedSelf()
walter.grade('something idk')