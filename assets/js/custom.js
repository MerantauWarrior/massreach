$(document).ready(function () {

// Home benefits
  if($('.home-befits').length > 0){
    // var slides = $('.home-befits__content');
    // var slideActive = 0;
    // var lastScrollTop = 0;
    // $(window).scroll(function(e) {
    //   var st = window.pageYOffset || document.documentElement.scrollTop;
    //   if ( $(window).scrollTop() >= $('.home-befits__slide').offset().top ) {
    //     // $('.wrapper, body').css('overflow','hidden');
    //     $('.home-befits__slide').addClass('fixed');
    //     $('.home-befits').css('padding-top',$('.home-befits__slide').innerHeight() +'px');
    //     if (st > lastScrollTop){
    //       console.log('down');
    //       console.log(slides.length);
    //       console.log(slides.index(slideActive));
    //       if(slideActive < slides.length-1){
    //         slideActive++;
    //         slides.removeClass('active');
    //         slides.eq(slideActive).addClass('active');
    //       }
    //     } else {
    //       console.log('up');
    //       console.log(slides.length);
    //       if(slideActive > 0){
    //         slideActive--;
    //         slides.removeClass('active');
    //         slides.eq(slideActive).addClass('active');
    //       }
    //     }
    //   }else {
    //     $('.home-befits__slide').removeClass('fixed');
    //     $('.home-befits').css('padding-top',-$('.home-befits__slide').innerHeight() +'px')
    //   }
    //   lastScrollTop = st <= 0 ? 0 : st;
    // });

    // var $animation_elements = $('.home-befits__slide');
    // var $window = $(window);
    // function check_if_in_view() {
    //   var window_height = $window.height();
    //   var window_top_position = $window.scrollTop();
    //   var window_bottom_position = (window_top_position + window_height);
    //   var numslides = $animation_elements.length;
    //
    //   $.each($animation_elements, function() {
    //     var $element = $(this);
    //     var element_top_position = $element.offset().top;
    //
    //     if ( window_top_position >= element_top_position) {
    //       $('.home-befits').css('padding-top',$element.innerHeight() * ($animation_elements.index($element)+1) +'px');
    //       $element.addClass('fixed');
    //       // console.log($element.last());
    //       // console.log(($animation_elements.index($element)+1));
    //           }else {
    //       $element.removeClass('fixed');
    //       $('.home-befits').css('padding-top',-$element.innerHeight() * $($animation_elements.index($element)+1) +'px')
    //           }
    //   });
    // }
    // $window.on('scroll resize', check_if_in_view);
    // $window.trigger('scroll');
  }

// Home features
  if($('.home-features-item__top').length > 0){
    $('.js-home-feature').click(function () {
      $('.home-features-item').removeClass('home-features-item_opened');
      $(this).closest('.home-features-item').addClass('home-features-item_opened');
      $('.home-features__imgs-item').removeClass('current');
      $('.home-features__imgs-item').eq( $(this).parent().index()).addClass('current');
    })
  }

// Prices
  if($('.js-prices-checkbox').length > 0){
    $('.js-prices-checkbox').on('change', function () {
      var priceState = $(this).prop('checked');
      if(priceState === true){
        $('.prices-item__price-annual').hide();
        $('.prices-item__price-mo').show();
      }else {
        $('.prices-item__price-mo').hide();
        $('.prices-item__price-annual').show();
      }
    });
  }

//  Faqs
  $('.faqs-item__top').click(function () {
    $(this).parent().toggleClass('faqs-item_opened');
    $('.faqs-item__top').not($(this)).parent().removeClass('faqs-item_opened');
  });
//  Header mobile menu
  $('.header__mobile-menu').click(function () {
    $('.header-navigation').slideToggle();
  });
//  Help Sidebar
  $('.help-sidebar-menu__top').click(function () {
    $(this).toggleClass('help-sidebar-menu__top_opened');
    $('.help-sidebar-menu__top').not($(this)).removeClass('help-sidebar-menu__top_opened');
    $(this).siblings('.help-sidebar-menu__list').slideToggle(250);
    $('.help-sidebar-menu__top').not($(this)).siblings('.help-sidebar-menu__list').slideUp(250);
  });
  $('.help-sidebar-mobile').click(function () {
    $('.help-sidebar').toggleClass('help-sidebar_opened');
  });
//  Modal
  $('.js-modal-close').click(function () {
    $(this).closest('.js-modal').hide();
  });
//  Registration
  $('.registration-modal__close').click(function () {
    $(this).closest('.registration-modal').hide();
  });
//  Contacts
  $('.js-agreement').on('change', function () {
    if($(this).is(":checked") || $(this).prop("checked")){
      $(this).closest('form').find('button[type=submit]').prop('disabled',false);
    }else{
      $(this).closest('form').find('button[type=submit]').prop('disabled',true);
    }
  });
//  Registration
  $('.password-inp__icon').click(function () {
    $(this).parent().toggleClass('password-inp_show');
    var inpType = $(this).siblings('input').prop('type');
    $(this).siblings('input').prop('type', inpType === 'password' ? 'text' : 'password');
  });
//  Feedbacks
  if($('.feedbacks-slider__carousel').length > 0){
    $('.feedbacks-slider__carousel').slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
//  Partners
  if($('.partner-feedbacks').length > 0){
    $('.partner-feedbacks-slider').slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

//Select
  var x, i, j, selElmnt, a, b, c, img;
  x = document.getElementsByClassName("select");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    if (selElmnt.options[selElmnt.selectedIndex].getAttribute('data-icon') !== null) {
      a.innerHTML = '<img src="' + selElmnt.options[selElmnt.selectedIndex].getAttribute('data-icon') + '" alt=""><span>' + selElmnt.options[selElmnt.selectedIndex].innerHTML + '</span>';
    } else {
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    }
    if (selElmnt.disabled) {
      x[i].classList.add('select--disabled');
    }
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
      c = document.createElement("DIV");
      if (selElmnt.options[j].getAttribute('data-icon') !== null) {
        c.innerHTML = '<img src="' + selElmnt.options[j].getAttribute('data-icon') + '" alt=""><span>' + selElmnt.options[j].innerHTML + '</span>';
      } else {
        c.innerHTML = selElmnt.options[j].innerHTML;
      }
      c.addEventListener("click", function (e) {
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.textContent) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    if (selElmnt.disabled) {
      console.log('disabled');
    } else {
      a.addEventListener("click", function (e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }
  }
  function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  document.addEventListener("click", closeAllSelect);

//  IE9 placeholder
  $('[placeholder]').focus(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
      input.val('');
      input.removeClass('placeholder');
    }
  }).blur(function() {
    var input = $(this);
    if (input.val() == '' || input.val() == input.attr('placeholder')) {
      input.addClass('placeholder');
      input.val(input.attr('placeholder'));
    }
  }).blur().parents('form').submit(function() {
    $(this).find('[placeholder]').each(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
      }
    })
  });

});