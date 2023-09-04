// //
// let user = {
//   phone: 12323234,
//   isVerified: true,
//   name: "No User Right now",
// };

// user.phone = 889309665836;

// user.address = {
//   street: "The Wolf Street",
//   sector: "20",
//   zip: {
//     zipId: 1,
//     zip: 160023,
//   },
// };

// let arr = ["some other data", user];

// console.log(arr.length);
// console.log(arr[0]);

// let data = "blah";

// data = 5;

// console.log(data);

let arr = ["jai", 8894097452, true, null];

// // first value
// let firstVal = arr[0];

// // second value
// let secondVal = arr[1];

// // third value
// let thirdVal = arr[2];

// // fourth value
// let fourthVal = arr[3];

// console.log(firstVal, secondVal, thirdVal, fourthVal);

// OR

let [firstVal, secondVal, fourthVal, thirdVal] = arr;

console.log(firstVal, secondVal, thirdVal, fourthVal);

//
let arrOne = ["jai", 8894097452, true, null];
let arrTwo = [];

// // for first element
// arrTwo[0] = arrOne[0];

// // for second element
// arrTwo[1] = arrOne[1];

// // for three element
// arrTwo[2] = arrOne[2];

// // for four element
// arrTwo[3] = arrOne[3];

// OR

arrTwo = [...arrOne];

console.log(arrTwo);
