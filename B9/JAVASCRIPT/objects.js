//
let user = {
  phone: 12323234,
  isVerified: true,
  name: "No User Right now",
};

user.phone = 889309665836;

user.address = {
  street: "The Wolf Street",
  sector: "20",
  zip: {
    zipId: 1,
    zip: 160023,
  },
};

let arr = ["some other data", user];

console.log(arr.length);
console.log(arr[0]);

let data = "blah";

data = 5;

console.log(data);
