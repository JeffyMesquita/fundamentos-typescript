// Interface e Type

interface Person {
  firstName: string
  lastName: string
}

// type Person = {
//   firstName: string
//   lastName: string
// }

const person = {
  firstName: 'Jeferson',
  lastName: 'Mesquita',
  age: 35
}

function getFullName(person: Person) {
  return `Hello ${person.firstName} ${person.lastName}`
}

console.log(getFullName(person))