// const greeting = 'Hello World';
// console.log(greeting);

// Common JS Module Syntax
// const person = require('./src/mymodule');
// console.log(person.name);

// ES2015 Module
// import { person, sayHello } from './src/mymodule2';
// console.log(person.age);
// console.log(sayHello());

// import * as mod from './src/mymodule2'
// console.log(mod.person.age);
// console.log(mod.sayHello());

import greeting from './src/mymodule2';
console.log(greeting);