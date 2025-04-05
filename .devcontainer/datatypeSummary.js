// ************Inteview related datatype summary JS*****

// Primitive datatype(Call by value)

// 7 types => string,number,boolean,null,undefined,symbol,BigInt(very big values)
const id = Symbol("2341414")
const anotherId = Symbol("2341414")

// console.log(id === anotherId);
// console.log(typeof(id));
const bigNumber = 2354648774564n

// Reference(Non-primitive)

// Array,Objects,Functions
// const score; => Error #we have to give intial value to score if it is  defined as constant

// Declaration of Array
const heros =["Ben 10","Naruto","Luffy","All_Might"];

// Declaration of Object
let my_Obj={
    name:"Vaibhav",
    age:21
}

// Declaration of function
const myFunction = function () { 
// console.log("Hello World !");
    
}
// *********************************************
let myYoutubeChannel = "VaibhavSrivastavaYT"
let anothername = myYoutubeChannel
anothername="harrypotterYt"
// console.log(anothername);

let userOne = {
    email:"vaib715harry@gmail.com",
    upi:"vaibhav@sbi"
}

let userTwo = userOne;
userTwo.email="vaibhavsrivasatava7715@gmail.com"
console.log(userTwo.email);
console.log(userOne.email);


