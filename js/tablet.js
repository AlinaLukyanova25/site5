new Swiper('.gallery__slider', {
    navigation: {
        nextEl: '.myslider-next',
        prevEl: '.myslider-prev',
    },
  
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                ' из ' +
                '<span class="' + totalClass + '"></span>';
            },
    },
  
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