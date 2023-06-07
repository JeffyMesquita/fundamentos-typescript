// Interface e Type

interface Person {
  firstName: string
  lastName: string
}

// interface Programmer extends Person {
//   favoriteLanguage: string // TypeScript
//   role: string // Front-end | Back-end
// }

type Programmer = Person & {
  favoriteLanguage?: string // TypeScript
  role: string // Front-end | Back-end
}

function getBio(programmer: Programmer){
  return `My name is ${programmer.firstName} ${programmer.lastName}. My favorite language is ${programmer.favoriteLanguage} and I work as a ${programmer.role} developer`;
}


const programmer: Programmer = {
  // favoriteLanguage: 'TypeScript',
  role: 'Front-end',
  firstName: "Jeferson",
  lastName: "Mesquita"
}

console.log(getBio(programmer))