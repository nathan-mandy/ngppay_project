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
document.addEventListener('DOMContentLoaded', function () {
  // Select all divs with the class 'question-set'
  const questionSets = document.querySelectorAll('.question-set');

  // Add 'active-question' class to the first 'question-set' div
  if (questionSets.length > 0) {
    questionSets[0].classList.add('active-question');
  }
  questionSets.forEach((questionSet, index) => {
    questionSet.addEventListener('click', function () {
      // Remove 'active-question' class from all 'question-set' divs
      questionSets.forEach(set => set.classList.remove('active-question'));

      // Add 'active-question' class to the clicked 'question-set' div
      questionSet.classList.add('active-question');
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
/******/ 	__webpack_require__.h = () => ("6b6047e121276cc2136d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.02edebc67f6cdfe89df1.hot-update.js.map