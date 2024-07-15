self["webpackHotUpdatetwentytwentyfour"]("main",{

/***/ "./assets/src/scripts/custom.js":
/*!**************************************!*\
  !*** ./assets/src/scripts/custom.js ***!
  \**************************************/
/***/ (() => {

function checkScreenWidth() {
  // Check if the screen width is less than 1024px
  if (window.innerWidth < 1025) {
    document.querySelector('.nav-row nav ul').append(document.querySelector('.header-button-design'));
    document.querySelector('.nav-row nav ul').append(document.querySelector('.utility-p'));
  } else {}
}
checkScreenWidth();
window.addEventListener('resize', checkScreenWidth);
var minusPlusIcons = document.querySelectorAll(".minus-plus-img");

// Add click event listeners to each icon
minusPlusIcons.forEach(function (icon) {
  icon.addEventListener("click", function (event) {
    var answer = this.nextElementSibling;

    // Close the currently open answer if there is one and it's not this answer
    var currentlyOpenAnswer = document.querySelector(".answer.open");
    if (currentlyOpenAnswer && currentlyOpenAnswer !== answer) {
      currentlyOpenAnswer.classList.remove("open");
    }

    // Toggle the clicked answer
    answer.classList.toggle("open");
  });
});

// Initial setup: Open the first answer and close others
var firstAnswer = document.querySelector(".answer");
if (firstAnswer) {
  firstAnswer.classList.add("open"); // Open the first answer
}
var otherAnswers = document.querySelectorAll(".answer:not(:first-child)");
otherAnswers.forEach(function (answer) {
  answer.classList.remove("open"); // Close other answers
});
document.addEventListener('DOMContentLoaded', function () {
  const showDivLinks = document.querySelectorAll('.showDivLink');
  const hiddenDivs = document.querySelectorAll('.hiddenDiv');
  let currentVisibleDiv = hiddenDivs[0]; // Initialize with the first div
  currentVisibleDiv.style.display = 'block'; // Ensure the first div is visible initially

  // Add click event listener to each anchor tag
  showDivLinks.forEach(function (showDivLink, index) {
    showDivLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default action of the anchor tag

      // Hide the currently visible div
      currentVisibleDiv.style.display = 'none';

      // Show the corresponding div
      hiddenDivs[index].style.display = 'block';

      // Update the reference to the current visible div
      currentVisibleDiv = hiddenDivs[index];
    });
  });
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2ac11ca9e214609e709b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.6599ac39588aeebaa61b.hot-update.js.map