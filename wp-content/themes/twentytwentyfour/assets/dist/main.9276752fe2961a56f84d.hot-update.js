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
// Select all icons with class "minus-plus-img"
var minusPlusIcons = document.querySelectorAll(".minus-plus-img");

// Iterate over each icon
minusPlusIcons.forEach(function (icon) {
  // Add click event listener to each icon
  icon.addEventListener("click", function (event) {
    // Select the answer div next to the clicked icon
    var answer = this.nextElementSibling;

    // Toggle visibility of the answer div (use toggleAttribute for better compatibility)
    if (answer && answer.classList.contains("answer")) {
      answer.toggleAttribute("hidden"); // Toggles between hidden and visible
    }

    // Toggle the class of the clicked icon to change its appearance
    this.classList.toggle("close-icon");
    this.classList.toggle("show-icon");

    // Reset all other icons (optimized for efficiency)
    minusPlusIcons.forEach(function (otherIcon) {
      if (otherIcon !== icon) {
        // Ensure other icons are set to "show-icon"
        otherIcon.classList.remove("close-icon");
        otherIcon.classList.add("show-icon");

        // Hide other answer divs efficiently using getElementsByClassName
        var otherAnswers = document.getElementsByClassName("answer");
        for (var i = 0; i < otherAnswers.length; i++) {
          if (otherAnswers[i] !== answer) {
            otherAnswers[i].setAttribute("hidden", ""); // Set hidden attribute for others
          }
        }
      }
    });
  });

  // Initial check to show/hide answer div based on initial class
  var answer = icon.nextElementSibling;
  if (icon.classList.contains("close-icon")) {
    // Initially show the answer if the icon has "close-icon"
    answer.removeAttribute("hidden");
  } else {
    // Initially hide the answer if the icon has "show-icon"
    answer.setAttribute("hidden", "");
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
/******/ 	__webpack_require__.h = () => ("d3b754276b52551ddfa7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9276752fe2961a56f84d.hot-update.js.map