var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    250: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    671: {
      slidesPerView: 1.5,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 50,
    },
  },
});
