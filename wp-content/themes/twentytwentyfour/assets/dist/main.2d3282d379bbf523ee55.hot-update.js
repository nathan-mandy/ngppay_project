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
document.addEventListener("DOMContentLoaded", function () {
  var minusPlusIcons = document.querySelectorAll(".minus-plus-img");

  // Add click event listeners to each icon
  minusPlusIcons.forEach(function (icon) {
    // Initial setup: Show the answer content if it's hidden
    var answer = icon.nextElementSibling;
    if (answer && answer.classList.contains("answer")) {
      answer.style.display = "block"; // Display the answer initially
    }
    icon.addEventListener("click", function (event) {
      var answer = this.nextElementSibling;

      // Toggle visibility of the answer div
      if (answer && answer.classList.contains("answer")) {
        answer.style.display = answer.style.display === "none" ? "block" : "none";
      }

      // Toggle the class of the clicked icon to change its appearance
      this.classList.toggle("close-icon");
      this.classList.toggle("show-icon");

      // Reset all other icons to "show-icon" if they were toggled to "close-icon"
      minusPlusIcons.forEach(function (otherIcon) {
        if (otherIcon !== icon) {
          otherIcon.classList.remove("close-icon");
          otherIcon.classList.add("show-icon");
          // Ensure other answer divs are hidden
          var otherAnswer = otherIcon.nextElementSibling;
          if (otherAnswer && otherAnswer.classList.contains("answer")) {
            otherAnswer.style.display = "none";
          }
        }
      });
    });
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
/******/ 	__webpack_require__.h = () => ("77cef43a8ce339e2e806")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.2d3282d379bbf523ee55.hot-update.js.map