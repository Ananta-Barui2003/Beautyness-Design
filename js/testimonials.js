$('.testi_slide').slick({
    centerMode: false,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-arrow-right-long"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true
        }
      },

      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '0',
          dots: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '0',
          dots: true,
          slidesToShow: 1
        }
      }
    ]
  });