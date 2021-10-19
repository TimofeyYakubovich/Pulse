$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1100,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      // $('.catalog-item__link').each(function(i) {
      //   $(this).on('click', function(e) {
      //     e.preventDefault();
      //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      //   })
      // })

      // $('.catalog-item__back').each(function(i) {
      //   $(this).on('click', function(e) {
      //     e.preventDefault();
      //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      //   })
      // })

      function toggleSlide (item) {
        $(item).each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          });
        });
      }

      toggleSlide ('.catalog-item__link');
      toggleSlide ('.catalog-item__back');

      // Modal

      $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
      });
      $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
      });
      // $('.button_mini').on('click', function() {
      //   $('.overlay, #order').fadeIn('slow');
      // });
      $('.button_mini').each(function(i) {
        $(this).on('click', function() {
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
        });
      });

      function valideForms (form) {
        $(form).validate({
          rules: {
            name: {
              required: true,
              minlength: 10
            },
            phone: "required",
            email: {
              required: true,
              email: true
            }
          },
          messages: {
            name: {
              required: "Пожалуйста, введите своё имя",
              minlength: jQuery.validator.format("Введите {0} символов")
            },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введён адрес почты"
            }
          }
        });
      }

      valideForms ('#consultation-form');
      valideForms ('#consultation form');
      valideForms ('#order form');

      $('input[name=phone]').mask("+375 (99) 999-99-99");

});