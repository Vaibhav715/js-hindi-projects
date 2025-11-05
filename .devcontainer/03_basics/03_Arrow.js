// Arrow function and This keyword 
const user = {
    username : "Vaibhav",
    price : 1000,

    welcomeMessage : function(){    
        console.log(`${this.username} ,welcome to website` )
        console.log(this);
        
}
}

// user.welcomeMessage()
// user.username ="Samuel"
// user.welcomeMessage()

console.log(this);  // here this points to global object (window in browser and empty object in nodejs)

// function abc(){
//     console.log(this);
// }

//  abc()

// const user2 = function() {
//     username : "Vaibhav",
//     console.log(this.username);
// } 

const user2 = () =>{
     username : "Vaibhav",
     console.log(this.username);
}

    user2()
// Arrow function does not have its own this keyword , it takes this from its surrounding (lexical) context

// ----------Arrow Funcction------------

// () => {}    Basic syntax of arrow function

// const funcName = (parameters) => {
//     // function body
// }

// Explicit Return - when we use return keyword to return a value from function for more than one line of code
const addTwo = (num1 , num2) => {
    return num1 + num2
}

console.log(addTwo(2,5));

// If there is only one parameter , we can skip the parenthesis
// implicitReturn - if there is only one line of code in function body , we can skip the curly braces and return keyword

const increaseOne = num1 => num1 + 1
const increasebyOne = num1 => (num1 + 1)
console.log(increasebyOne(4));
console.log(increaseOne(5));

// Arrow function for Objects

const createUser = (username) => ({  username : username  })

console.log(createUser("Vaibhav"));

// If we dont use parenthesis here it will be considered as function body not object