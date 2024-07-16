self["webpackHotUpdatetwentytwentyfour"]("main",{

/***/ "./assets/src/scripts/custom.js":
/*!**************************************!*\
  !*** ./assets/src/scripts/custom.js ***!
  \**************************************/
/***/ (() => {

function checkScreenWidth() {
  const navRow = document.querySelector('.nav-row');
  const navUl = navRow?.querySelector('nav ul');
  const headerButton = document.querySelector('.header-button-design');
  const utilityP = document.querySelector('.utility-p');
  if (navRow && navUl && headerButton && utilityP) {
    if (window.innerWidth < 1025) {
      navUl.append(headerButton);
      navUl.append(utilityP);
    } else {
      navRow.appendChild(navUl);
      navRow.appendChild(headerButton);
    }
  } else {
    console.error('One or more elements not found:', {
      navRow,
      navUl,
      headerButton,
      utilityP
    });
  }
}
document.addEventListener('DOMContentLoaded', () => {
  checkScreenWidth();
  window.addEventListener('resize', checkScreenWidth);
});
var minusPlusIcons = document.querySelectorAll(".minus-plus-img");

// Add click event listeners to each icon
minusPlusIcons.forEach(function (icon, index) {
  icon.addEventListener("click", function (event) {
    var answer = this.nextElementSibling;

    // Toggle visibility of the answer div
    if (answer && answer.classList.contains("answer")) {
      answer.style.display = answer.style.display === "none" ? "block" : "none";
    }

    // Toggle the class of the clicked icon
    this.classList.toggle("show-icon");
    this.classList.toggle("close-icon");

    // Reset all other icons to "show-icon"
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

  // Set initial class based on index (only first has "close-icon")
  if (index === 0) {
    icon.classList.add("close-icon");
  } else {
    icon.classList.add("show-icon");
  }
});
var allAnswers = document.querySelectorAll(".answer");
for (var i = 1; i < allAnswers.length; i++) {
  allAnswers[i].style.display = "none";
}
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
/******/ 	__webpack_require__.h = () => ("8d6c62eb02abd3ca2e38")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.593e63e5fb329f16e7f1.hot-update.js.map