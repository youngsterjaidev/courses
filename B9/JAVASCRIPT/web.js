// let mydivs = document.querySelectorAll("div");
// for (let i = 0; i < 3; i++) {
//   mydivs[i].remove();
//   console.log(mydivs);
// }

// let mydivs = document.querySelectorAll("div");

// console.log(mydivs);

// mydivs.forEach(function (el, fhdjashdfja) {
//   if (fhdjashdfja === 2) {
//     console.log("Sorry I can't remove this");
//   } else {
//     el.remove();
//   }
// });

// console.log(mydivs);

// // CREATE element
// let Heading = document.createElement("h1");

// // first fill the text content
// Heading.innerText = "This is New heading";

// // attach or add to the body element
// document.body.append(Heading);

// let container = document.querySelector("div");

// container.innerHTML = "<p>This is paragraph</p>";

// document.body.append(container);

// console.log(Heading);

// // selectors
// document.querySelector("div");

// // selecting all the documents
// document.querySelectorAll("div");

// // selection by id
// document.getElementById("active");

// // selection by class
// document.getElementsByClassName("heading");

// // change the styling from js
// document.querySelector("h1").style.color = "red";

// document.querySelector("button").addEventListener("mouseover", function () {
//   console.log("Mouse is over the button");
//   // ... logic mera heading ka color change
//   document.querySelector("h1").style.color = "blue";
// });

// document.querySelector("button").addEventListener("mouseleave", function () {
//   console.log("Mouse is leave the button");
//   // ... logic mera heading ka color change
//   document.querySelector("h1").style.color = "";
// });

document.querySelector("body").addEventListener("mouseover", function (event) {
  let x = event.clientX;
  let y = event.clientY;

  console.log("the location", x, y);

  // box select
  // use top and left style properties
  document.querySelector(".box").style.left = x + "px";
  document.querySelector(".box").style.top = y + "px";
});
