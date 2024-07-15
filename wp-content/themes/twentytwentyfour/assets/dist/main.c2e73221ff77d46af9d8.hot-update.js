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

// Assuming you have elements with classes 'minus-plus-img' and 'answer'

const minusPlusIcons = document.querySelectorAll('.minus-plus-img');
minusPlusIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const answer = icon.nextElementSibling;

    // Toggle the visibility of the answer
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';

    // Toggle the icon class (assuming you have 'close-icon' and 'show-icon' classes)
    icon.classList.toggle('close-icon');
    icon.classList.toggle('show-icon');
  });
});

// Initially show the first answer
const firstAnswer = document.querySelector('.answer');
if (firstAnswer) {
  firstAnswer.style.display = 'block';
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
/******/ 	__webpack_require__.h = () => ("5a17f9d2d196bd3f07c5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.c2e73221ff77d46af9d8.hot-update.js.map