/* =====================================
    Template Name: Syndicate Business Advisory
    Author Name: WebbyCrown
    Description: Syndicate Business Advisory - HTML5 Template.
    Version:1.0
========================================*/

/*======================================
[ JS Table of contents ]
01. General Open JS
    + Mobile menu
    + Mobile menu dropdown
    + AOS
    + Page scroll to Header sticky

02. Slider Open JS
    + What we do slider
    + Testimonial slider
    + Customer Reviews slider
    + Photos Gallery slider
    + Trending Attractions slider
    + Popular Events slider
    + Testimonial full slider

03. Popup Open JS
    + Cookie popup js
    + Newsletter Popup JS
    + Our Teachers popup
    + Enquiry form Popup JS
04. Preloader JS
05. Isotope JS



========================================*/

(function ($) {
  atrium_event_venues = {
    init: function() {
      // Home one js
      this.general_open();
      this.slider_open();
      this.popup_open();
      this.Isotope_js();

    },

    /*======================================
     01. General Open JS
    ========================================*/
    general_open: function() {

      /* Mobile menu */
      $(document).on("click", ".toggle-menu-button a, .mobile-menu .menu-close a", function(){
        $('.mobile-menu').toggleClass("open");
        //$(this).toggleClass("active");
      });

      /* Mobile menu dropdown*/
      if( $(window).width() <= 991 ) {
      $(".main-menu ul > li").each(function (i) {
        if ($(this).has(".mega-menu").length)
        {
          $(this).find('.mega-menu').addClass("sub-menu");
          $(this).find('> a').after('<span class="caret-arrow"></span>');
          $(this).find('> .sub-menu').css('display', 'none');
        }
      });
      $('.main-menu ul li .caret-arrow').click(function () {
        var catSubUl = $(this).next('.sub-menu');
        var catSubli = $(this).closest('li');
        if (catSubUl.is(':hidden'))
        {
            //$("#window > ul > li .sub-menu").slideUp();
          catSubUl.slideDown();
            //$('.caret').removeClass('active');
          $(this).addClass('sub-active');
          catSubli.addClass('sub-active');
        }
        else
        {
          catSubUl.slideUp();
          $(this).removeClass('sub-active');
          catSubli.removeClass('sub-active');
        }
      });
    }

      /* Search Popup */
      $(document).on("click", ".search-icon a, .close-search", function(){
        $('body').toggleClass("search-active");
      });


      /* Page scroll to Header sticky */
      $(window).scroll(function() {
        if ($(this).scrollTop() > 0){  
          $('.header').addClass("sticky-header");
        }
        else{
          $('.header').removeClass("sticky-header");
        }
      });


      


    },

    /*======================================
     02. Slider Open JS
    ========================================*/
    slider_open: function() {

      /* Popular Events uses .popular-tours-slider below — do not init
         .customers-purchased-section here or Swiper binds twice and arrows die. */

      /* Testimonial slider */
      var swiper = new Swiper(".testimonial-slider .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".testimonial-slider .swiper-button-next",
          prevEl: ".testimonial-slider .swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },
      });

      /* Special offers & Discounts slider */
      var swiper = new Swiper(".special-offers-discounts .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: ".special-offers-discounts .swiper-button-next",
          prevEl: ".special-offers-discounts .swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
      });

      /* Customer Reviews slider */
      var swiper = new Swiper(".customer-reviews-slider .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: ".customer-reviews-slider .swiper-pagination",
          clickable: true,
        },
      });

      /* Photos Gallery slider */

      var swiper = new Swiper(".photos-gallery-slider .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
          nextEl: ".photos-gallery-slider .swiper-button-next",
          prevEl: ".photos-gallery-slider .swiper-button-prev",
        },
      });

      /* Trending Attractions slider */
      var swiper = new Swiper(".trending-attractions-slider .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: ".trending-attractions-slider .swiper-pagination",
          type: "progressbar",
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      });

      /*Popular Events slider*/
      if (document.querySelector(".popular-tours-slider .mySwiper")) {
        new Swiper(".popular-tours-slider .mySwiper", {
          slidesPerView: 1,
          spaceBetween: 10,
          observer: true,
          observeParents: true,
          watchOverflow: true,
          navigation: {
            nextEl: ".customers-purchased-section .popular-events-arrows .swiper-button-next",
            prevEl: ".customers-purchased-section .popular-events-arrows .swiper-button-prev",
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1199: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          },
        });
      }


      /* Testimonial full slider */
      var swiper = new Swiper(".testimonial-full-slider .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: ".testimonial-full-slider .swiper-button-next",
          prevEl: ".testimonial-full-slider .swiper-button-prev",
        },
        pagination: {
          el: ".testimonial-full-slider .swiper-pagination",
          clickable: true,
        },
      });

    },

    /*======================================
     03. Popup Open JS
    ========================================*/
    popup_open: function() {
      /* Cookei popup JS */
        setTimeout(function() {
          $('body').find('.cookei-popup-link').trigger('click');
        }, 2000);

      // Cookei popup
      $('.cookei-popup-link').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
      });

      /* Newsletter Popup JS */
        setTimeout(function() {
          $('body').find('.newsletter-popup-link').trigger('click');
        }, 2000);

      // Newsletter Popup
      $('.newsletter-popup-link').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
      });

      // Team Popup
      $('.team-popup-link').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
      });

      // Tour Popup
      $('.tour-popup-link').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
      });

      // Hotel Popup
      $('.hotel-popup-link').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
      });

      $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade atrium-video-modal',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true,
        closeBtnInside: false,
        iframe: {
          patterns: {
            youtube: {
              index: 'youtube.com/',
              id: 'v=',
              src: 'https://www.youtube.com/embed/%id%?autoplay=1'
            },
            youtu_be: {
              index: 'youtu.be/',
              id: '/',
              src: 'https://www.youtube.com/embed/%id%?autoplay=1'
            }
          }
        }
      });
    },

    /*======================================
     05. Isotope JS
    ========================================*/
    Isotope_js: function() {
      if (!$('.grid-masonary').length || $('.atrium-portfolio-grid').length) {
        return;
      }

      var $grid_masonary = $('.grid-masonary').isotope({
        itemSelector: '.grid-item',
        masonry: {
          horizontalOrder: false,
        }
      });


        // bind filter button click
      $('#filters').on( 'click', 'li', function() {
        var filterValue = $( this ).attr('data-filter');
          // use filterFn if matches value
          //filterValue = filterFns[ filterValue ] || filterValue;
        if($('.grid-masonary').length>0){
          $grid_masonary.isotope({ filter: filterValue });
        }else{
          $grid.isotope({ filter: filterValue });
        }
      });

       // change is-checked class on buttons
      $('.portfolio-list').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'li', function() {
          $buttonGroup.find('.current').removeClass('current');
          $( this ).addClass('current');
        });
      });
    },

    


  };
  atrium_event_venues.init();

  function atriumUpdateSwipers() {
    document.querySelectorAll('.swiper').forEach(function (el) {
      if (el.swiper) el.swiper.update();
    });
  }
  $(window).on('load', atriumUpdateSwipers);
  document.addEventListener('atrium:ready', atriumUpdateSwipers);

})(jQuery);
