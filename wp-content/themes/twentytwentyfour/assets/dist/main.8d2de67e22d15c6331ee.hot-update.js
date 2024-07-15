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

// Select all icons with class "minus-plus-img"
var minusPlusIcons = document.querySelectorAll(".minus-plus-img");

// Iterate over each icon
minusPlusIcons.forEach(function (icon) {
  // Add click event listener to each icon
  icon.addEventListener("click", function (event) {
    // Select the answer div next to the clicked icon
    var answer = this.nextElementSibling;

    // Toggle visibility of the answer div
    if (answer && answer.classList.contains("answer")) {
      answer.style.display = answer.style.display === "none" ? "block" : "none";
    }

    // Toggle the class of the clicked icon to change its appearance
    this.classList.toggle("close-icon");
    this.classList.toggle("show-icon");

    // Reset all other icons
    minusPlusIcons.forEach(function (otherIcon) {
      if (otherIcon !== icon) {
        // Ensure other icons are set to "show-icon"
        otherIcon.classList.remove("close-icon");
        otherIcon.classList.add("show-icon");

        // Hide other answer divs
        var otherAnswer = otherIcon.nextElementSibling;
        if (otherAnswer && otherAnswer.classList.contains("answer")) {
          otherAnswer.style.display = "none";
        }
      }
    });
  });

  // Initial check to show/hide answer div based on initial class
  var answer = icon.nextElementSibling;
  if (icon.classList.contains("close-icon")) {
    // Show the answer if the icon has "close-icon" initially
    answer.style.display = "block";
  } else {
    // Hide the answer if the icon has "show-icon" initially
    answer.style.display = "none";
  }
});

// Initial setup: Hide all 

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
/******/ 	__webpack_require__.h = () => ("94d2dc728b88944c8a51")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.8d2de67e22d15c6331ee.hot-update.js.map