// ********************Functions*******************
function sayMyName() {
  console.log("V");
  console.log("A");
  console.log("I");
  console.log("B");
  console.log("H");
  console.log("A");
  console.log("V");
  
}
// sayMyName()

// Function for adding two numbers

function addTwo(number1,number2){
console.log(number1 + number2);
} 

// const result = addTwo(3,4)
// console.log("Result:",result);

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username){
if(username === undefined){
    console.log("Please enter your name");
    
   }
   return `${username} just logged in `
}
// console.log(loginUserMessage("Batman"));

function calculateCartPrice(val1, val2, ...item) {  //(...item) is called rest operator 
  return(item)
}

// console.log(calculateCartPrice(200,400,500));


const user ={
  username:"Vaibhav",
  price:299,
  age:21
}

function handleObject(anyObject){
  console.log(`The user name is ${anyObject.username} and his worth is ${anyObject.price}`);

  console.log(`Age is ${anyObject.age}`);
  
}
handleObject({
  username:"MS Dhoni",
  price:"priceless",
  age:43

})
// handleObject(user)

const myNewArray = [200, 430, 450, 500]

function getSecondValue(getArray) {
  return(getArray[1])
}

 console.log(getSecondValue(myNewArray));
// console.log(getSecondValue(['a']));
// console.log(getSecondValue(['a','b']));
// console.log(getSecondValue([100, {name:"sam",age:11}, 200]));

