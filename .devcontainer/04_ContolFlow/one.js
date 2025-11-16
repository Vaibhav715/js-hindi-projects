// If statement
const isLoggedIn = true
if(isLoggedIn){
     console.log("User logged In !");
     
}
// conditions <,>,<=,>=,==(ignores datatype),===(checks whether datatype is also same or not),(!=,!==) => same as above but for not equal to

// const temperature = 45
// if(temperature < 0){
//     console.log("Extremely cold weather")
// }
// else{
//     console.log("Its not that cold")
// }

// const score = 200
// if(score >= 150){
//     const power = "fly"
//     console.log(`You have power to ${power}`);
  
// }
// console.log(`You have power to ${power}`);

const balance = 1000
// Don't do this type of coding or using comma operator
// if(balance > 500)console.log("test1"),console.log("test2"),console.log("test3");

// Nested if-else


// const userRole = "admin"
// if(isLoggedIn){
//     if(userRole === "admin"){
//         console.log("You have all the access");
//     }
//     else if(userRole === "sub-admin"){
//         console.log("You have access to create/delete courses");
//     }
//     else if(userRole === "test-prep"){
//         console.log("You have access to create/delete tests");
//     }
//     else{
//         console.log("You are a trial user");
//     }
// }
// else{
//     console.log("Please logged in to continue");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromFacebook = false

if(userLoggedIn && debitCard){
    console.log("Allowed to make the purchase !");
}

// || (logical OR) operator

//trenary operator
loggedInFromGoogle || loggedInFromFacebook ? console.log("User logged in from 3rd party") : console.log("User not logged in from 3rd party");
// condition ? true block : false block