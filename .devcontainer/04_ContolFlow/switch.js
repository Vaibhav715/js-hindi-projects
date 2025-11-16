// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;
let monthName;

switch (month) {
    case 1:
        monthName = "January";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    case 8:
        monthName = "August";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "October";
        break; 
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "December";
        break;    
    default:
        monthName = "Invalid month";
        break;
}

console.log("Month name is:", monthName);         

const fruit = "Apple";

switch (fruit) {
    case "banana":
        console.log(`${fruit} : Yellow fruit`);
        break;
    case "apple":
        console.log(`${fruit} : Red or green fruit`);
        break;
    case "orange":
        console.log(`${fruit} : Red or green fruit`);
        break;
    default:
        console.log(`${fruit} : Unknown fruit`);
        break;
}   
