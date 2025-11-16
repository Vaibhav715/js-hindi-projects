// const UserEmail = "Vaibhav@Sri.ai"
//  if (UserEmail) {
//     console.log("Email is valid");
//  } else {
//     console.log("Email is not valid");
//  }

//  const Arr1 = [1,2,3,4,5];
//  if (Arr1.length > 0) {
//     console.log("Array is not empty");
//  } else {
//     console.log("Array is empty");
//  }

const emptyObjesct = {};

if (Object.keys(emptyObjesct).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}

// Nullish Coalescing Operator (??)
const UserEmail = null;
let val1;
val1 = 5 ?? 10; // 5
console.log(val1);

val1 = null ?? "Vaibhav";
console.log(val1); // "Vaibhav"

val1 = undefined ?? "Sri";
console.log(val1); // "Sri"

val1 = "" ?? "Hello";
console.log(val1); // ""