let str = "This is the man who survied from nuclear attack";

// saintization
let strArr = str.toLowerCase().split("");

let count = {};

console.log(
  // iterate on the array
  strArr.map((el, index) => {
    console.log(el, index);

    if (el === " ") {
      return;
    }

    // convert th comming letter to lower case
    count[el] = 0;

    // map the element to all the present element in the array
    // and check how many times it is present
    for (let i = 0; i < strArr.length; i++) {
      console.log(strArr[i] === el);

      // increasing the number of reputation
      if (strArr[i] === el) {
        count[el] = count[el] + 1;
      }
    }
  })
);

console.log(count);
