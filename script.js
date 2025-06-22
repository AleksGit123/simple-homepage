"use strict"
// page link style change
let pagesList = document.querySelectorAll(".pages_li");

    pagesList.forEach((element, index) => {
        element.addEventListener("click", () => {

          pagesList.forEach(el => el.classList.remove("active"));
      
          element.classList.add("active");
        });
      });



// components for dark mode
let bodyTag = document.body;
let darkModeBtn = document.querySelectorAll(".dark_mode_btn");
let moon = document.querySelectorAll(".moon");
let sun = document.querySelectorAll(".sun");
let whiteCircle = document.querySelectorAll(".white_circle");
let mainLogo = document.querySelector(".main_logo");
// dark mdoe button event
darkModeBtn.forEach((element,index) =>{
  element.addEventListener("click", () => {
    whiteCircle[index].classList.toggle("move_right");
      if(whiteCircle[index].classList.contains("move_right")){
        moon[index].src = "./images/Moon_fill.svg";
        sun[index].src = "./images/light_Sun.svg";
        document.body.classList.add("dark_mode");
        mainLogo.src = "./images/logo-dark.svg";

  
      }else{ 
        moon[index].src = "./images/Moon_fill_light.svg";
        sun[index].src = "./images/Sun_fill.svg";
        document.body.classList.remove("dark_mode");
        mainLogo.src = "./images/logo-light.svg";

      }
  });
})

