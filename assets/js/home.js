// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper-comment", {
  // configure Swiper to use modules
  modules: [Navigation, Autoplay],
  slidesPerView: 1.2,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-button-comment-pre",
    prevEl: ".swiper-button-comment-next",
  },
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 24,
      centeredSlides: true,
    },
    996: {
      slidesPerView: 3.4,
      spaceBetween: 48,
      centeredSlides: true,
    },
    1320: {
      slidesPerView: 4.2,
      spaceBetween: 48,
      centeredSlides: true,
    },
  },
});

// 使用者評論區 body 高度
const comments = document.querySelectorAll("[data-user-comment]");
comments.forEach((comment) => {
  const height = comment.getBoundingClientRect().height;
  const parentBody = comment.closest(".card-comment-body");
  if (height === 48) {
    parentBody.classList.add("pb-14");
  } else if (height === 72) {
    parentBody.classList.add("pb-8");
  } else if (height === 96) {
    parentBody.classList.add("pb-3");
  }
});
