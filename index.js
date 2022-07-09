let amoutOfElement = document.querySelectorAll(".element");

let countelement = 1;
setInterval(() => {
  countelement++;

  let currentelement = document.querySelector(".current");
  currentelement.classList.remove("current");

  if (countelement > amoutOfElement.length) {
    amoutOfElement[0].classList.add("current");
    countelement = 1;
  } else {
    currentelement.nextElementSibling.classList.add("current");
  }
}, 3000);

// practice
// let amountOfElement = document.querySelectorAll(".element");

// count = 1;
// setInterval(() => {
//   count++;

//   let currentelement = document.querySelector(".current");
//   currentelement.classList.remove("current");

//   if (currentelement > amountOfElement.length) {
//     amountOfElement[0].classList.add("current");
//     count = 1;
//   } else {
//     currentelement.nextElementSibling.classList.add("current");
//   }
// }, 2000);
