$('.slider-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: true,
  nav: false,
  items: 1,
  center:true,
  autoHeight: true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  autoplaySpeed: 1000,
});


$('.slider-carousel').on('changed.owl.carousel', function(event) {
  var item = event.item.index-2;

  $('h1').removeClass('animated fadeInDown');
  $('.owl-item')
    .not('.cloned')
    .eq(item)
    .find('h1')
    .addClass('animated fadeInDown');


  $('h4').removeClass('animated fadeInLeft');
  $('.owl-item')
    .not('.cloned')
    .eq(item)
    .find('h4')
    .addClass('animated fadeInLeft')
    .attr('data-wow-delay', '.5s');
  
  $('.slider-text-btn').removeClass('animated fadeInUp');
  $('.owl-item')
    .not('.cloned')
    .eq(item)
    .find('.slider-text-btn')
    .addClass('animated fadeInUp')
    .attr('data-wow-delay', '1s');
});


// XZOOM
$('.xzoom-carousel').owlCarousel({
  loop:false,
  autoplay: false,
  dots: false,
  margin:10,
  nav: true,
  items: 4,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>",
    "<i class='mdi mdi-chevron-right'></i>" 
  ],
});

$(".xzoom, .xzoom-gallery").xzoom({tint: '#333', Xoffset: 15});
$('.main-image').bind('click', function () {
  var xzoom = $(this).data('xzoom');
  xzoom.closezoom();
  var gallery = xzoom.gallery().cgallery;
  var i, images = new Array();
  for (i in gallery) {
    images[i] = {
      src: gallery[i]
    };
  }
  $.magnificPopup.open({
    items: images,
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  event.preventDefault();
});


var swiper = new Swiper('.swiper-product', {
  slidesPerView: 4,
  slidesPerColumn: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1199: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      spaceBetween: 15,
    },
    991: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 15,
    },
    575: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 15,
    },
  },
});


$('.partner-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: false,
  nav: false,
  autoplaySpeed: 1000,
  margin: 40,
  autoWidth: true,
  responsive: {
    0: {
        items:2
    },
    600: {
        items:3
    },
    1000: {
        items:4
    },
    1200: {
        items:5
    }
  }
});

$(document).ready(() => {
  const ww = document.body.clientWidth;
  const url = window.location.href;

  
  // GO TOP
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.go-top').fadeIn().css('transform','scale(1)');
      $('.menu').addClass('down animated slideInDown');
    } else {
      $('.go-top').fadeOut().css('transform','scale(0)');
      $('.menu').removeClass('down animated slideInDown');

    }
  });

  $('.go-top').click(() => {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  // NOTIFICATION ADD TO CART 
  $('.custom-cart').click(() => {
    Swal({
      title: 'Thông báo',
      type: 'success',
      html: 'Bạn đã thêm vào giỏ thành công',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<a href="gio-hang.html">Vào giỏ hàng</a>',
      cancelButtonText:
        'Tiếp tục mua sắm',
    })
  });

  $(".quantity button").on("click", function() {
    let $button = $(this);
    let oldValue = $button.parent().find("input").val();
  
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
  
    $button.parent().find("input").val(newVal);
  });

  $(".menu a").each( function () {
    if (url == (this.href)) {
      $(this).closest("a").addClass("active");
    }
  });
  
  $('.toggleMenu').click(() => {
    $('.nav').addClass('out');
    $('.overlay-menu').addClass('overlay-in');
  });

  $('.overlay-menu, .nav-close').click(function() {
    $('.overlay-menu').removeClass('overlay-in');
    $('.nav').removeClass('out');
    $('.left').removeClass('active');
  });

  $('.search-btn').click(() => {
    $('.search-btn i').toggleClass('mdi-magnify mdi-close');
    $('.search-form').toggleClass('active')
  });

  for (let item = 0; item < 10; item++) {
    $('.slider .owl-dot span').eq(item).text('0' + `${item+1}`)
  }
});
