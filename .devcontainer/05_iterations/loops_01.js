// for loop
// const array = [1, 7, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
//     if (array[i] == 7){
//         console.log("7 is best Number.");
//     }
    
    
// }



// Nested for loop

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// Looping through an object
const person = {
    name: "Vaibhav",
    age: 25,
    city: "New York"
};

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}

// Using for...of loop to iterate over an array
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}

// Using for...in loop to iterate over an object
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

for (const prop in car) {
    console.log(`${prop}: ${car[prop]}`);
}

// Break and Continue Statements
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at i =", i);
        break; // Exit the loop when i is 5
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i); // This will only log odd numbers
}

// Infinite Loop Example (Commented out to prevent actual infinite loop)
// let i = 0;
// while (true) {
//     console.log(i);
//     i++;
// }

// Truthy and Falsy Values Examples
// Falsy values: false, 0, "", null, undefined, NaN
// Truthy values: All values that are not falsy