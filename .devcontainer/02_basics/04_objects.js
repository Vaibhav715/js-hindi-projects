// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// for object.assign alwways keep in mind that key must be different otherwise it will overwrite the value
// for eg :
const obj_1 = {
    name: "sandeep",
    age: 30
    }
const obj_2 = {
    name: "mandeep",
    age: 40
        }
const obj_3 = Object.assign({}, obj1, obj2);
console.log(obj_3);
// output will be 
// {name :'mandeep' , age :40 }

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// ***************Destruture of objects*************
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);
// *******************JSON API*********************
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]


/*
This video introduces object destructuring and the JSON API in JavaScript. It demonstrates how to extract values from objects using destructuring and provides practical examples. The video also discusses the concept of APIs and how they work, highlighting the importance of understanding data structures and formats like JSON.


Highlights:
00:00 The video discusses the importance of understanding object structures and their methods for strong data structures. It emphasizes the need to analyze variables, arrays, and objects for effective programming.
          -Exploration of data structures and methods for creating strong foundations in programming. 
          -Analyzing variables, arrays, and objects to enhance programming efficiency and effectiveness. 
          -Importance of understanding object structures and their methods for effective programming and data manipulation. 
02:25 Extracting values from objects in coding courses requires precise syntax and attention to detail to avoid errors and ensure accurate results.
          -Importance of clean coding for consistent results and troubleshooting common errors in programming courses.
          -Naming conventions in coding, adjusting course and instructor names to maintain clarity and professionalism.
04:35 Understanding React concepts like props, state, and methods is crucial for building applications. Learning to destructure objects in JavaScript is essential for efficient coding and project implementation.
          -Importance of learning React concepts for application development. Understanding the significance of props, state, and methods in React.
          -The essential skill of object destructuring in JavaScript. Efficient coding practices and project implementation through object deconstruction.
07:41 Understanding the structure of JSON objects and how to properly format them is essential in programming. JSON objects consist of key-value pairs enclosed in curly braces, providing a standardized way to transmit data between a server and a web application.
          -The importance of naming conventions and syntax accuracy in JSON objects to maintain consistency and avoid errors. Understanding the purpose of each key-value pair in a JSON object is crucial for its effective implementation.
          -JSON objects follow a specific format with keys and values, facilitating data exchange in web development. Properly structured JSON ensures data integrity and efficient communication between systems.
09:11 Understanding how to fetch data using Fetch method in JavaScript within an API is crucial for converting and manipulating objects efficiently.
          -Importance of handling API responses and converting data within objects for efficient coding practices.
          -Utilizing tools like formatters to understand and convert data formats for better comprehension and coding efficiency.
11:30 Understanding JSON objects and handling data types like objects and arrays in JavaScript is crucial in various programming languages, not limited to JavaScript alone.
          -Discussion on handling JSON objects and accessing data within objects, emphasizing the importance of understanding object notation in different programming languages.
          -Exploration of JSON format beyond JavaScript, highlighting its widespread use across the API industry and different programming languages like Ruby on Rails and PHP.
          -The significance of proper data packaging and function execution, along with memory space considerations, to optimize data handling and execution efficiency.

*/