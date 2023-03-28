const swipers = document.querySelectorAll('.swiper');

swipers.forEach((swiper) => {
  swiper.classList.remove('swiper--nojs');
}
);

// const swiper = new Swiper('.product-container', {

//   grid: {
//     rows: 2,
//     fill: 'row',
//   },

//   slidesPerView: 1,

//   watchSlidesProgress: true,

//   watchSlidesVisibility: true,

//   spaceBetween: 50,

//   effect: 'slide',

//   pagination: {
//       el: '.product-container__pagination',
//       clickable: true,
//   },

//   breakpoints: {
//     1150: {
//       slidesPerView: 2,
//       spaceBetween: 15,
//       grid: {
//         rows: 1,
//       }
//     }
//   }
// }
// );

//export {swiper}
