// ********************Objects********************

// singleton => objects made from constructor
// Object.create() => This method is creating object from constructor
// object literals => objects made from literals 

// let myarr =[1,2]
// console.log(myarr[0]); => access in array can be done from index only
const mySym =Symbol("key1")  //  declaring a Symbol
const JsUser = {
    name:"Vaibhav",
    "full Name":"Vaibhav Srivastava", //This can't be access by (.)dot method)/only by []method access
     [mySym]:"mykey1",  // defining symbol as key using [] brackets
    age:21,
    location:"Varanasi",
    email:"vaib715harry@gmail.com",
    IsLoggedIn:false,
    LastLoggedInDays:["Monday","Thursday","Saturday","Sunday"]
}


// console.log(JsUser);
// console.log(JsUser.name);
// console.log(JsUser.age);
// console.log(JsUser.email);
// console.log(JsUser.location);

// other way to access object value is:
// console.log(JsUser["email"]);
// console.log(JsUser["LastLoggedInDays"]);
// console.log(JsUser["fullName"]);

// console.log(JsUser[mySym]);    // syntax for printing value using symbol

JsUser.location = "Greater Noida"
// console.log(JsUser["location"]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
// JsUser.greeting() => Hello JS user(Answer)
// console.log(JsUser.greeting);
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// Console.log(jsUser.greeting())  
// answer ( undefined ) ❌

// jsUser.greeting() 
// Answer ( "Hello js user")

