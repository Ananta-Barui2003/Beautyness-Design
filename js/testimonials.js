$('.testi_slide').slick({
    centerMode: false,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-arrow-right-long"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '0',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });