// function orderWater(val) {
//   console.log("The Val when it send : ", val);
//   val = "filled Water";
//   console.log("Number will be added");
//   return val;
// }

// let returnedValue = orderWater("cup");

// console.log(returnedValue);

// function add(firstValue, secondValue, thirdValue) {
//   debugger;
//   // return "jaam";
//   // console.log("I will add Numbers", 2 + 2);
//   return firstValue + 2;
// }

// console.log(add());

// console.log(add(5, 9, 10, "this is not a number"));

// THIS OUR IF ELSE NESTED APPROACH
// function calculator(firstValue, secondValue, operation) {
//   // then i check what operation need to done like plus, minus
//   // or something else

//   if (operation === "plus") {
//     return firstValue + secondValue;
//   } else {
//     if (operation === "minus") {
//       return firstValue - secondValue;
//     } else {
//       if (operation === "divide") {
//         return firstValue / secondValue;
//       } else {
//         console.log("I don't know what i do");
//         return undefined;
//       }
//     }
//   }
// }

// console.log(calculator(5, 2, "divide"));
// 3

// THIS OUR ONLY IF APPROACH
function calculator(firstValue, secondValue, operation) {
  if (operation === "plus") {
    // then this will run
    console.log("plus");
    return firstValue + secondValue;
  }

  // other wise carry on with the below code

  if (operation === "minus") {
    // this is will run
    console.log("minus");
    return firstValue - secondValue;
  }

  // other wise carry on with the below code

  if (operation === "divide") {
    console.log("divide");
    // this is will run
    return firstValue / secondValue;
  }

  // other wise carry on with the below code
}

// console.log(calculator(4, 5, "divide"));

function jaam() {
  // ...
}

// This function call it self immediately when It declares
(function () {
  console.log("This is function call it self at the end");
})();

// ES6
() => {};

const ready = function () {
  console.log("I am ready !");
};

ready();
