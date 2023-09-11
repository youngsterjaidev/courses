// select the required element
let loginForm = document.querySelector("#loginForm");
let loginEmail = document.querySelector("#loginEmail");
let loginPassword = document.querySelector("#loginPassword");
let loginInfo = document.querySelector("#loginInfo");

let signupForm = document.querySelector("#signupForm");
let signupEmail = document.querySelector("#signupEmail");
let signupPassword = document.querySelector("#signupPassword");
let signupInfo = document.querySelector("#signupInfo");

let errors = [];

function updateInfo(msg, id) {
  console.log(msg);
  // ..
  document.getElementById(id).innerText = msg;
}

// Login Form
loginForm.addEventListener("submit", (event) => {
  // prevent page from reloading
  event.preventDefault();

  // check the email and password have a value
  if (loginEmail.value === "" && loginPassword.value === "") {
    // update the info content
    updateInfo("Both email and password are empty !", "loginInfo");
  } else if (loginPassword.value === "") {
    // update the info content
    updateInfo("password field is empty", "loginInfo");
  } else if (loginEmail.value === "") {
    // update the info content
    updateInfo("Email field is empty", "loginInfo");
  } else {
    // update the info content
    updateInfo("Form is submitted sucessfully !", "loginInfo");

    // check if the user is registered or not
    if (
      loginEmail.value === "test333@gmail.com" &&
      loginPassword.value === "test000"
    ) {
      console.log("Welcome test user");
    } else {
      console.log("User is not registered !");
    }
  }

  console.log(errors);
});

// Login Form
signupForm.addEventListener("submit", (event) => {
  // prevent page from reloading
  event.preventDefault();

  // check the email and password have a value
  if (signupEmail.value === "" && signupPassword.value === "") {
    // update the info content
    updateInfo("Both email and password are empty !", "signupInfo");
  } else if (signupPassword.value === "") {
    // update the info content
    updateInfo("password field is empty", "signupInfo");
  } else if (signupEmail.value === "") {
    // update the info content
    updateInfo("Email field is empty", "signupInfo");
  } else {
    // update the info content
    updateInfo("Form is submitted sucessfully !", "signupInfo");

    // check if the user is registered or not
    if (
      signupEmail.value === "test333@gmail.com" &&
      signupPassword.value === "test000"
    ) {
      console.log("Welcome test user");
    } else {
      console.log("User is not registered !");
    }
  }

  console.log(errors);
});
