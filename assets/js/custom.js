$(document).ready(function () {

//  Faqs
  $('.faqs-item__top').click(function () {
    $(this).parent().toggleClass('faqs-item_opened');
    $('.faqs-item__top').not($(this)).parent().removeClass('faqs-item_opened');
  });
//  Header mobile menu
  $('.header__mobile-menu').click(function () {
    $('.header-navigation').slideToggle();
  });
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