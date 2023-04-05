import '../../vendor/swiper-bundle.min';
import Swiper from '../../vendor/swiper-bundle.min';

const findSwipers = () => {
  if (document.querySelector('.swiper') !== null) {
    const swipers = document.querySelectorAll('.swiper');
    swipers.forEach((swiper) => {
      swiper.classList.remove('swiper--no-js');
    });
  } else {
    return;
  }
}

const swiperPeople = new Swiper('.swiper--people', {

  loop: true,
  watchSlidesProgress: true,

  breakpoints: {
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30
    },
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },

  autoHeight: true,
});

const swiperReviews  = new Swiper('.swiper--reviews ', {

  initialSlide: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },

  autoHeight: true,
});

findSwipers();

export {swiperPeople, swiperReviews};
