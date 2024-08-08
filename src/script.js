import {navigation} from "./modules/navigation.js";
import {moveRightSlide, moveLeftSlide} from "./modules/sliderProject.js";
const prevButton = document.querySelector(".arrow-left");
const nextButton = document.querySelector(".arrow-right");


document.addEventListener('DOMContentLoaded', () => {
  navigation();
  nextButton.addEventListener('click', ()=>{
    moveRightSlide()
  })

  prevButton.addEventListener('click', ()=>{
    moveLeftSlide()
  })
});



