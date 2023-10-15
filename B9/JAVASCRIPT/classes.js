let user = {
  name: "jai",
  phone: 212432432,
  logName: function () {
    console.log("This is my Name");
  },
  printPhone() {
    console.log("I will print a phone");
  },
};

let user2 = {
  name: "udit",
  phone: 21234432432,
  logName: function () {
    console.log("This is my Name");
  },
  printPhone() {
    console.log("I will print a phone");
  },
};

let user3 = {
  name: "rohit",
  phone: 21234432432,
  logName: function () {
    console.log("This is my Name");
  },
  printPhone() {
    console.log("I will print a phone");
  },
};

class User {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  logName() {
    console.log("This is my Name");
  }

  printPhone() {
    console.log("I will print a phone");
  }
}

new User("rohit", 42432);

class SC {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    phone = 423432;
  }

  claimAJob() {
    console.log("I can claim a job");
  }

  freeRation() {
    console.log("I get free ration");
  }
}

let user = new SC();

class General {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Without class
let scUser = {
  name: "ram",
  age: 13,
  claimAJob: () => {
    console.log("claim a job");
  },
};

let scUser2 = {
  name: "atul",
  age: 13,
  claimAJob: () => {
    console.log("claim a job");
  },
};
