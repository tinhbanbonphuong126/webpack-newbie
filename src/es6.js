import ab, {keyValue, test} from './js/import'

class Helper {
  static sum (a, b) {
    return a + b
  }
}

class Person {
  constructor (name, faculty) {
    this.name = name
    this.faculty = faculty
  }
}

let person = new Person('Alex', 'Electronics')

console.log(person.name)

let sum = Helper.sum(2, 3)
console.log(sum)
