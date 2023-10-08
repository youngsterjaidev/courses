// // store the intervalId
// let intervalID = 0;

// // starting the interval function and it will return
// // intervalID that i will assign in "intervalID" variable
// intervalID = setInterval(function() {
//     console.log("I am running !")
// }, 3000)

// // set the time when 15000 is happen then clear the interval
// setTimeout(function() {
//     // clear the interval after 15 sec
//     clearInterval(intervalID)
// }, 15000)

let msg = "";

// THEN and CATCH
// fetch("http://blackbaas.tech", {
//   method: "GET",
// })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log("Hey I found an error", error);
//   });

async function GetData() {
  console.log("Jaam");
  let response = await fetch("http://blackbaas.tech", {
    method: "GET",
  });

  console.log("Response: ", response);
}

GetData();
