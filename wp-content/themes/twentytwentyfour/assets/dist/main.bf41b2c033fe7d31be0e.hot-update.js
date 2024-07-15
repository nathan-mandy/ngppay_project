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
    var currentlyOpenAnswer = document.querySelector(".answer:visible");
    if (currentlyOpenAnswer && currentlyOpenAnswer !== answer) {
      currentlyOpenAnswer.style.display = "none";
      currentlyOpenAnswer.previousElementSibling.classList.remove("close-icon");
      currentlyOpenAnswer.previousElementSibling.classList.add("show-icon");
    }

    // Toggle visibility of the clicked answer div
    if (answer && answer.classList.contains("answer")) {
      answer.style.display = answer.style.display === "none" ? "block" : "none";
      this.classList.toggle("close-icon");
      this.classList.toggle("show-icon");
    }
  });
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
/******/ 	__webpack_require__.h = () => ("57d857e64a3bb371a2bb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.bf41b2c033fe7d31be0e.hot-update.js.map