let add = require("./add.js");

console.log("Imported Term : ", add);

function calculator(num1, num2, operation) {
  if (operation === "+") {
    return add(num1, num2);
  } else {
    console.log("I am not designed for this !");
    return add(num1, num2);
  }
}

function calculator2(num1, num2, operation) {
  if (operation === "+") {
    return add(num1, num2);
  } else {
    console.log("I am not designed for this !");
    return add(num1, num2);
  }
}

let result = calculator2(3, 5, "+-");

console.log(result);
