(function($) {
  var add_class_scroll, count, windowWidth;
  add_class_scroll = function() {
    if (jQuery(window).scrollTop() > 100) {
      jQuery('.navigation').addClass('slowup');
      jQuery('.navigation').removeClass('slowdown');
    } else {
      jQuery('.navigation').addClass('slowdown');
      jQuery('.navigation').removeClass('slowup');
    }
  };
  count = function(options) {
    var $this;
    $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
  };
  'use strict';
  $(window).load(function() {
    var $container;
    $('.masonry_btns div a').click(function() {
      var filterValue;
      filterValue = $(this).attr('data-filter');
      $container.isotope({
        filter: filterValue
      });
    });
    $container = $('.masonry_container').isotope({
      itemSelector: '.masonry_item'
    });
    $('.simulate_click').trigger('click');
  });
  windowWidth = $(window).width();
  if (windowWidth < 400) {
    $('.fade-left, .fade-up, .fade-down, .fade-right, .bounce-in, .rotate-In-Down-Left, .rotate-In-Down-Right').css('opacity', '1');
  } else {
    $('.fade-up').bind('inview', function(event, visible) {
      if (visible === true) {
        $(this).addClass('animated fadeInUp');
      }
    });
    $('.fade-down').bind('inview', function(event, visible) {
      if (visible === true) {
        $(this).addClass('animated fadeInDown');
      }
    });
    $('.fade-left').bind('inview', function(event, visible) {
      if (visible === true) {
        $(this).addClass('animated fadeInLeft');
      }
    });
    $('.fade-right').bind('inview', function(event, visible) {
      if (visible === true) {
        $(this).addClass('animated fadeInRight');
      }
    });
    $('.bounce-in').bind('inview', function(event, visible) {
      if (visible === true) {
        $(this).addClass('animated bounceIn');
      }
    });
    $('.rotate-In-Down-Left').bind('inview', function(event, visible) {
      if (visible === true) {
        $(this).addClass('animated rotateInDownLeft');
      }
    });
    $('.rotate-In-Down-Right').bind('inview', function(event, visible) {
      if (visible === true) {
        $(this).addClass('animated rotateInDownRight');
      }
    });
  }
  $('.menu').superfish({});
  $('.megamenu ul a').removeClass('sf-with-ul');
  $($('.megamenu ul li').find('ul').get().reverse()).each(function() {
    $(this).replaceWith($('<ol>' + $(this).html() + '</ol>'));
  });
  $('.menu').tinyNav({
    active: 'selected',
    header: 'MENU'
  });
  jQuery(window).scroll(function() {
    add_class_scroll();
  });
  add_class_scroll();
  $('.tooltip').tooltip({
    position: {
      my: 'center top',
      at: 'center+0 top-50'
    }
  });
  $('.calendar').datepicker({});
  $('.tab').tabs({
    show: 'fade',
    hide: 'fade'
  });
  $('.toogle').accordion({
    heightStyle: 'content',
    collapsible: true,
    active: false
  });
  $('.accordion').accordion({
    heightStyle: 'content'
  });
  $('.slider_range').slider({
    range: true,
    min: 0,
    max: 1000,
    values: [200, 700],
    slide: function(event, ui) {
      $('.slider_amount').val('$ ' + ui.values[0] + ' - $ ' + ui.values[1]);
    }
  });
  $('.slider_amount').val('$ ' + $('.slider_range').slider('values', 0) + ' - $ ' + $('.slider_range').slider('values', 1));
  $('.alerts').click(function(event) {
    $(this).css({
      'display': 'none'
    });
  });
  $('.animate_progressbar').bind('inview', function(event, visible) {
    if (visible === true) {
      $(this).removeClass('animate_progressbar');
    }
  });
  $('.internal_link').click(function(event) {
    var full_url, parts, target_offset, target_top, trgt;
    event.preventDefault();
    full_url = this.href;
    parts = full_url.split('#');
    trgt = parts[1];
    target_offset = $('#' + trgt).offset();
    target_top = target_offset.top;
    $('html,body').animate({
      scrollTop: target_top - 13
    }, 900);
  });
  $('.counter').data('countToOptions', {
    formatter: function(value, options) {
      return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    }
  });
  $('.counter').bind('inview', function(event, visible) {
    if (visible === true) {
      $('.counter').each(count);
    }
  });
  $('.nicescrool').niceScroll({
    touchbehavior: true,
    cursoropacitymax: 1,
    cursorwidth: 0,
    autohidemode: false,
    cursorborder: 0
  });
  $('.left_sidebar_btn_open').click(function(event) {
    $('.left_sidebar').css({
      'left': '0px'
    });
    $('.site, .navigation').css({
      'margin-left': '300px'
    });
    $('.overlay').addClass('overlay_on');
  });
  $('.left_sidebar_btn_close, .overlay').click(function(event) {
    $('.left_sidebar').css({
      'left': '-300px'
    });
    $('.site, .navigation').css({
      'margin-left': '0px'
    });
    $('.overlay').removeClass('overlay_on');
  });
  $('.right_sidebar_btn_open').click(function(event) {
    $('.right_sidebar').css({
      'right': '0px'
    });
    $('.site, .navigation').css({
      'margin-left': '-300px'
    });
    $('.overlay').addClass('overlay_on');
  });
  $('.right_sidebar_btn_close, .overlay').click(function(event) {
    $('.right_sidebar').css({
      'right': '-300px'
    });
    $('.site, .navigation').css({
      'margin-left': '0px'
    });
    $('.overlay').removeClass('overlay_on');
  });
  $('.mpopup_gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    }
  });
  $('.mpopup_iframe').magnificPopup({
    disableOn: 200,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
  $('.mpopup_window').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });
  jQuery(document).ready(function($) {
    var clearPopup;
    clearPopup = function() {
      $('.popup.visible').addClass('transitioning').removeClass('visible');
      $('html').removeClass('overlay');
      setTimeout((function() {
        $('.popup').removeClass('transitioning');
      }), 200);
    };
    $('[data-popup-target]').click(function() {
      var activePopup;
      $('html').addClass('overlay');
      activePopup = $(this).attr('data-popup-target');
      $(activePopup).addClass('visible');
    });
    $(document).keyup(function(e) {
      if (e.keyCode === 27 && $('html').hasClass('overlay')) {
        clearPopup();
      }
    });
    $('.popup-exit').click(function() {
      clearPopup();
    });
    $('.popup-overlay').click(function() {
      clearPopup();
    });
  });
  $('.form').find('input, textarea').on('keyup blur focus', function(e) {
    var $this, label;
    $this = $(this);
    label = $this.prev('label');
    if (e.type === 'keyup') {
      if ($this.val() === '') {
        label.removeClass('active highlight');
      } else {
        label.addClass('active highlight');
      }
    } else if (e.type === 'blur') {
      if ($this.val() === '') {
        label.removeClass('active highlight');
      } else {
        label.removeClass('highlight');
      }
    } else if (e.type === 'focus') {
      if ($this.val() === '') {
        label.removeClass('highlight');
      } else if ($this.val() !== '') {
        label.addClass('highlight');
      }
    }
  });
  $('.tab-button a').on('click', function(e) {
    var target;
    e.preventDefault();
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    target = $(this).attr('href');
    $('.tab-content > div').not(target).hide();
    $(target).fadeIn(600);
  });
  $('#closed').click(function() {
    return setTimeout($('.scroll-container-closed').jScrollPane({
      autoReinitialise: true,
      hideFocus: true
    }), 2000);
  });
  $('#ask-question-area textarea').on('focus', function() {
    return $(this).addClass('focused');
  });
  $('#ask-question-area textarea').on('focusout', function() {
    return $(this).removeClass('focused');
  });
  $('#questions-list .question, #questions-list-closed .question').on('mouseenter', function() {
    return $(this).addClass('hovered');
  });
  $('#questions-list .question, #questions-list-closed .question').on('mouseleave', function() {
    return $(this).removeClass('hovered');
  });
  $('#questions-list .question').on('click', function() {
    $('#questions-list .question').removeClass('active');
    return $(this).addClass('active');
  });
  $('#questions-list-closed .question').on('click', function() {
    $('#questions-list-closed .question').removeClass('active');
    return $(this).addClass('active');
  });
  $('#loginForm').validate({
    errorPlacement: function(error, element) {
      $(element).closest('form').find('input[name=\'' + element.attr('id') + '\']').parent().append(error);
    },
    errorElement: 'span',
    messages: {
      username: {
        required: 'Обязательное поле',
        minlength: 'Имя должно иметь не менее 3 символов',
        maxlength: 'Имя должно иметь не менее 3 символов'
      },
      password: {
        required: 'Обязательное поле',
        minlength: 'Введите не менее 5 символов и не более 20',
        maxlength: 'Введите не менее 5 символов и не более 20'
      }
    }
  });
  $('#signupForm').validate({
    errorPlacement: function(error, element) {
      $(element).closest('form').find('label[for=\'' + element.attr('id') + '\']').parent().append(error);
    },
    errorElement: 'span',
    messages: {
      username: {
        required: 'Обязательное поле',
        minlength: 'Имя должно иметь не менее 3 символов'
      },
      password: {
        required: 'Обязательное поле',
        minlength: 'Введите не менее 5 символов и не более 20',
        maxlength: 'Введите не менее 5 символов и не более 20'
      },
      email: {
        required: 'Обязательное поле',
        minlength: 3,
        maxlength: 255,
        message: 'Неверный формат E-mail'
      },
      terms: {
        required: 'Обязательное поле'
      },
      regexp: {
        regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$'
      }
    }
  });
  $('#profile-block').hover(function() {
    return $(this).find('#user-progress').slideToggle(200);
  });
  $('.user_block').on('mouseover', function() {
    $('#indicators > li').find('.dropdown').removeClass('visible');
    return $('#profile-info').show();
  });
  $('.user_block').on('mouseleave', function() {
    return $('#profile-info').hide();
  });
  $('#indicators > li').click(function() {
    $(this).find('.dropdown').toggleClass('visible');
    $(this).siblings().find('.dropdown').removeClass('visible');
    return false;
  });
  $("#tabs").tabs();
})(jQuery);
