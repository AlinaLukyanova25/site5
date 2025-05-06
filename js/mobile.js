new Swiper('.gallery__slider', {
    // navigation: {
    //     nextEl: '.myslider-next',
    //     prevEl: '.myslider-prev',
    // }, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>'
        // },
    },
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 30,

    slidesPerView: 1,
  
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
  
      900: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
  
      1100: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
})