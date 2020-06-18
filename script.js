import tabs from "./modules/tabs";
import modal from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calc from "./modules/calc";
import forms from "./modules/forms";
import slider from "./modules/slider";
import {showMod} from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {

  const modalTimerId = setTimeout(() => showMod(".modal", modalTimerId), 55000); // once after some time
  
  tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
  modal("[data-modal]", ".modal", modalTimerId);
  timer(".timer", "2020-08-11");
  cards(".menu .container");
  calc();
  forms("form", modalTimerId);
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    total: "#total",
    current: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner"
  });

});
