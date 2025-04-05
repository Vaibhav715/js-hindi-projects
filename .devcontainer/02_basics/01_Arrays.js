// ******************Arrays*******************

const myArr = [0,1,2,3,4,5,6,true,"Vaibhav"]
const arr = [1,4,7,9]

const heroes = ["tyson","ben"]
let myArr2 = new Array(1,2,3,4)
// console.log(myArr[2]);
// console.log(myArr2);

// *************Array methods***********************


// myArr2.push(3)
// myArr2.push(5)
// console.log(myArr2);
// myArr2.pop()
// myArr.unshift(2)    => add given number at start of array
// myArr.shift()    => remove first number from start of array
// => could be time consuming for larger no of values in array 


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);




