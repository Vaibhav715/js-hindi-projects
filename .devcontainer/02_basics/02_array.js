const marvel = ["Spiderman","Ironman","Captain America"]
const dc = ["Batman","Superman","Flash"]

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3][1]);
const dcmv =marvel.concat(dc)
// console.log(dcmv);

// Spread funtion ki tarah h => ye two or more arrays ke elements ko alag alag kar ke ek naye array mei represent karne mei madat karta h
const new_dcmv = [...marvel, ...dc]
// console.log(new_dcmv);

let arr = [1,2,3,4,['a','b','c'],[true,[1,2,3,4,5]],9,8]
let usable_arr = arr.flat(Infinity)
// console.log(usable_arr);

console.log(Array.isArray("Vaibhav")); // check whether given argument is array or not
console.log(Array.from("Vaibhav"));  // convert given argument to array
console.log(Array.from('1,2,3,[1,3,4],a'));  


// const Array1 = [1,2,3,4,5];
// const Array2 = [5,6,7,8,9,10];
// const Array3 = [0,0,0];
// const Array4 = [1,3,9,19];
// const concatAll = Array1.concat(Array2, Array3,Array4)
// console.log(concatAll)

console.log(Array.from({name:"Vaibhav"}));  // Interesting for interviews returns empty array [] since specified nhi h ki array keys ka chahiye ya value ka ya sab ka

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
console.log(Array.of(score1,score2,score3,score4));

/* ****************Key Takeaways***************************

1. push() method in array simply add the array as an new single entity in the existing array.
2. concat() method help us achieving a desisered output, like merging the two array, but the problems with concat are, It complicated to concat more then one array simultaneously and also It takes extra space and do the merging operation.
3. Despite push and concat we should use spread operator.
4. Intresting methods, isArray(), from() and of()*/
