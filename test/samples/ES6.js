const redux = require('redux')
const createStore = redux.createStore;

class Test {
  sayHello(name) {
   return `${name} test`
  }
}

let test = new Test();
console.log(test.sayHello('ravi'))

let array = [1,2,3]

function des( [a,b,c] ) {
  return {a, b, c}
}

console.log(des(array))

let obj = {name: 'ravi', age: 20,  year: 1}
function objF({ name: nameP, dep: ageP='e' }) {
  return {nameP, ageP}
}
console.log(objF(obj))

let num1 = 1;
let num2 = num1;
num2 = 2;
console.log(`${num1} and ${num2}`)

let a = {name: 'Ravi', dep: 'ECE'}
let b = a;
b.dep ='EEE'
let c = Object.assign({}, a, {dep: 'CSE'})
console.log(a)
console.log(c)

	

/*let obj = {name: 'ravi', age: 20,  year: 1}
function objF( {name: nameP, dep: ageP='e', ...spread} ) {
  return {nameP, ageP, spread}
}
objF(obj)*/