import {navigation} from "./modules/navigation.js";
import {moveRightSlide, moveLeftSlide} from "./modules/sliderProject.js";
const prevButton = document.querySelector(".arrow-left");
const nextButton = document.querySelector(".arrow-right");
import {navigationElements} from "./modules/navigation.js"
let isNavigationActive = false;

function handleResize() {
  if (window.innerWidth > 768) {
    navigationElements.forEach(section => {
      section.classList.add('none');
    });
    navigationElements[0].classList.remove('none');
    isNavigationActive = true;
  } else {
    navigationElements.forEach(section => {
      section.classList.remove('none');
    });
    if (isNavigationActive) {
      isNavigationActive = false;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (!isNavigationActive) {
    navigation();
    isNavigationActive = true;
  }
  handleResize();

  window.addEventListener('resize', handleResize);

  nextButton.addEventListener('click', () => {
    moveRightSlide();
  });

  prevButton.addEventListener('click', () => {
    moveLeftSlide();
  });
});