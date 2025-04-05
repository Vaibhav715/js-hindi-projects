let name = "Vaibhav"
let marks = 45

// console.log(name + marks +"value");  not to use it to concatenate because it is outdated

// String interpolation
// ``  => backticks ${} => for variable injection(joining variable with the string)
// console.log(`My name is ${name} and my marks are ${marks}`);

// Another way to declare a string
const names = new String('Vai-bh-av')
console.log(names.length);

// console.log(names);
const substitute = names.substring(0,5)
console.log(substitute);
const anotherName = names.slice(-5,-2)
console.log(anotherName);
newStringOne = "    IPL   "
newStringTwo = newStringOne.trim()
console.log(newStringOne);
console.log(newStringTwo);


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(names.split('-'));


