// class User {
//   constructor(name, phone, address) {
//     this.name = name;
//     this.phone = phone;
//     this.address = address;
//   }

//   callName() {
//     console.log(this.name);
//   }
// }

// var user = new User("jane Doe", 23424, "sector 34");
// const user1 = new User("jack", 0000000);

// console.log(user);
// console.log(user1);

// console.log(user1.callName());

class HPBonofide {
  constructor() {
    this.state = "HP";
    this.city = "shimla";
  }

  registerLand() {
    console.log("Yes you can register land in HP");
  }
}

class Parent extends HPBonofide {
  constructor() {
    super();
    this.isMarried = true;
    this.name = "jane";
  }
}

class Child extends HPBonofide {
  constructor() {
    super();
    this.isMarried = false;
    this.facebookAccount = "jack000";
    this.name = "jack";
  }
}

const parent = new Parent();
const child = new Child();

console.log(parent, child);

console.log(child.registerLand());
