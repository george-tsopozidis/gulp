// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

const mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "vertical",

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});