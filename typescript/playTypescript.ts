const message: string = "Hello World";
const numberValue: number = 10;
const booleanValue: boolean = true;

const nullValue: null = null;
const undefinedValue: undefined = undefined;

const value: 'primary' | 'secondary' = 'primary';

const list: string[] = ['a', 'b', 'c'];

const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
  ]

// const john = users.find(user => user.name === 'John');
// console.log(john?.age);

const jane = users.length > 4 ? users[3] : null;
console.log(jane?.age);