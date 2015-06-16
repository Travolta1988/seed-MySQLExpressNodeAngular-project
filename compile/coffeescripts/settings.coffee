(($) ->
  add_class_scroll = ->
    if jQuery(window).scrollTop() > 100
      jQuery('.navigation').addClass 'slowup'
      jQuery('.navigation').removeClass 'slowdown'
    else
      jQuery('.navigation').addClass 'slowdown'
      jQuery('.navigation').removeClass 'slowup'
    return

  count = (options) ->
    $this = $(this)
    options = $.extend({}, options or {}, $this.data('countToOptions') or {})
    $this.countTo options
    return

  'use strict'
  #isotope
  $(window).load ->
    $('.masonry_btns div a').click ->
      filterValue = $(this).attr('data-filter')
      $container.isotope filter: filterValue
      return
    $container = $('.masonry_container').isotope(itemSelector: '.masonry_item')
    $('.simulate_click').trigger 'click'
    return
  #/////////
  #inview
  windowWidth = $(window).width()
  if windowWidth < 400
    $('.fade-left, .fade-up, .fade-down, .fade-right, .bounce-in, .rotate-In-Down-Left, .rotate-In-Down-Right').css 'opacity', '1'
  else
    $('.fade-up').bind 'inview', (event, visible) ->
      if visible == true
        $(this).addClass 'animated fadeInUp'
      return
    $('.fade-down').bind 'inview', (event, visible) ->
      if visible == true
        $(this).addClass 'animated fadeInDown'
      return
    $('.fade-left').bind 'inview', (event, visible) ->
      if visible == true
        $(this).addClass 'animated fadeInLeft'
      return
    $('.fade-right').bind 'inview', (event, visible) ->
      if visible == true
        $(this).addClass 'animated fadeInRight'
      return
    $('.bounce-in').bind 'inview', (event, visible) ->
      if visible == true
        $(this).addClass 'animated bounceIn'
      return
    $('.rotate-In-Down-Left').bind 'inview', (event, visible) ->
      if visible == true
        $(this).addClass 'animated rotateInDownLeft'
      return
    $('.rotate-In-Down-Right').bind 'inview', (event, visible) ->
      if visible == true
        $(this).addClass 'animated rotateInDownRight'
      return
  #/////////
  #menu
  $('.menu').superfish {}
  #megamenu
  $('.megamenu ul a').removeClass 'sf-with-ul'
  $($('.megamenu ul li').find('ul').get().reverse()).each ->
    $(this).replaceWith $('<ol>' + $(this).html() + '</ol>')
    return
  #responsive
  $('.menu').tinyNav
    active: 'selected'
    header: 'MENU'
  #/////////
  #fixed menu
  jQuery(window).scroll ->
    add_class_scroll()
    return
  add_class_scroll()
  #/////////
  #tooltip
  $('.tooltip').tooltip position:
    my: 'center top'
    at: 'center+0 top-50'
  #calendar
  $('.calendar').datepicker {}
  #tab
  $('.tab').tabs
    show: 'fade'
    hide: 'fade'
  #toogle
  $('.toogle').accordion
    heightStyle: 'content'
    collapsible: true
    active: false
  #accordion
  $('.accordion').accordion heightStyle: 'content'
  #slider-range
  $('.slider_range').slider
    range: true
    min: 0
    max: 1000
    values: [
      200
      700
    ]
    slide: (event, ui) ->
      $('.slider_amount').val '$ ' + ui.values[0] + ' - $ ' + ui.values[1]
      return
  $('.slider_amount').val '$ ' + $('.slider_range').slider('values', 0) + ' - $ ' + $('.slider_range').slider('values', 1)
  #alerts
  $('.alerts').click (event) ->
    $(this).css 'display': 'none'
    return
  #progressbar
  $('.animate_progressbar').bind 'inview', (event, visible) ->
    if visible == true
      $(this).removeClass 'animate_progressbar'
    return
  #/////////
  #internal-link
  $('.internal_link').click (event) ->
    event.preventDefault()
    full_url = @href
    parts = full_url.split('#')
    trgt = parts[1]
    target_offset = $('#' + trgt).offset()
    target_top = target_offset.top
    $('html,body').animate { scrollTop: target_top - 13 }, 900
    return
  #/////////
  #counter
  $('.counter').data 'countToOptions', formatter: (value, options) ->
    value.toFixed(options.decimals).replace /\B(?=(?:\d{3})+(?!\d))/g, ','
  # start all the timers
  $('.counter').bind 'inview', (event, visible) ->
    if visible == true
      $('.counter').each count
    return
  #/////////
  #nicescrool
  $('.nicescrool').niceScroll
    touchbehavior: true
    cursoropacitymax: 1
    cursorwidth: 0
    autohidemode: false
    cursorborder: 0
  #/////////
  #left sidebar OPEN
  $('.left_sidebar_btn_open').click (event) ->
    $('.left_sidebar').css 'left': '0px'
    $('.site, .navigation').css 'margin-left': '300px'
    $('.overlay').addClass 'overlay_on'
    return
  #left sidebar CLOSE
  $('.left_sidebar_btn_close, .overlay').click (event) ->
    $('.left_sidebar').css 'left': '-300px'
    $('.site, .navigation').css 'margin-left': '0px'
    $('.overlay').removeClass 'overlay_on'
    return
  #right sidebar OPEN
  $('.right_sidebar_btn_open').click (event) ->
    $('.right_sidebar').css 'right': '0px'
    $('.site, .navigation').css 'margin-left': '-300px'
    $('.overlay').addClass 'overlay_on'
    return
  #right sidebar CLOSE
  $('.right_sidebar_btn_close, .overlay').click (event) ->
    $('.right_sidebar').css 'right': '-300px'
    $('.site, .navigation').css 'margin-left': '0px'
    $('.overlay').removeClass 'overlay_on'
    return
  #/////////
  #mpopup_gallery
  $('.mpopup_gallery').magnificPopup
    delegate: 'a'
    type: 'image'
    tLoading: 'Loading image #%curr%...'
    mainClass: 'mfp-fade'
    gallery:
      enabled: true
      navigateByImgClick: true
      preload: [
        0
        1
      ]
    image:
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      titleSrc: (item) ->
        item.el.attr 'title'
  #mpopup_iframe
  $('.mpopup_iframe').magnificPopup
    disableOn: 200
    type: 'iframe'
    mainClass: 'mfp-fade'
    removalDelay: 160
    preloader: false
    fixedContentPos: false
  #mpopup_window
  $('.mpopup_window').magnificPopup
    type: 'inline'
    fixedContentPos: false
    fixedBgPos: true
    overflowY: 'auto'
    closeBtnInside: true
    preloader: false
    midClick: true
    removalDelay: 300
    mainClass: 'my-mfp-zoom-in'
  #login signup popup
  jQuery(document).ready ($) ->
    clearPopup = ->
      $('.popup.visible').addClass('transitioning').removeClass 'visible'
      $('html').removeClass 'overlay'
      setTimeout (->
        $('.popup').removeClass 'transitioning'
        return
      ), 200
      return
    $('[data-popup-target]').click ->
      $('html').addClass 'overlay'
      activePopup = $(this).attr('data-popup-target')
      $(activePopup).addClass 'visible'
      return
    $(document).keyup (e) ->
      if e.keyCode == 27 and $('html').hasClass('overlay')
        clearPopup()
      return
    $('.popup-exit').click ->
      clearPopup()
      return
    $('.popup-overlay').click ->
      clearPopup()
      return
    return


  $('.form').find('input, textarea').on 'keyup blur focus', (e) ->
    $this = $(this)
    label = $this.prev('label')
    if e.type == 'keyup'
      if $this.val() == ''
        label.removeClass 'active highlight'
      else
        label.addClass 'active highlight'
    else if e.type == 'blur'
      if $this.val() == ''
        label.removeClass 'active highlight'
      else
        label.removeClass 'highlight'
    else if e.type == 'focus'
      if $this.val() == ''
        label.removeClass 'highlight'
      else if $this.val() != ''
        label.addClass 'highlight'
    return
  $('.tab-button a').on 'click', (e) ->
    e.preventDefault()
    $(this).parent().addClass 'active'
    $(this).parent().siblings().removeClass 'active'
    target = $(this).attr('href')
    $('.tab-content > div').not(target).hide()
    $(target).fadeIn 600
    return

  # ---
  # generated by js2coffee 2.0.4
  # ---
  #////////
  $('#closed').click ->
    setTimeout($('.scroll-container-closed').jScrollPane({
      autoReinitialise: true,
      hideFocus: true
    }), 2000)

  $('#ask-question-area textarea').on('focus', ->
    $(this).addClass('focused')
  )
  $('#ask-question-area textarea').on('focusout', ->
    $(this).removeClass('focused')
  )

  $('#questions-list .question, #questions-list-closed .question').on('mouseenter', ->
    $(this).addClass('hovered')
  )

  $('#questions-list .question, #questions-list-closed .question').on('mouseleave', ->
    $(this).removeClass('hovered')
  )

  $('#questions-list .question').on('click', ->
    $('#questions-list .question').removeClass('active')
    $(this).addClass('active')
  )

  $('#questions-list-closed .question').on('click', ->
    $('#questions-list-closed .question').removeClass('active')
    $(this).addClass('active')
  )

  #validation of login form
  $('#loginForm').validate
    errorPlacement: (error, element) ->
      $(element).closest('form').find('input[name=\'' + element.attr('id') + '\']').parent().append error
      return
    errorElement: 'span'
    messages:
      username:
        required: 'Обязательное поле'
        minlength: 'Имя должно иметь не менее 3 символов'
        maxlength: 'Имя должно иметь не менее 3 символов'
      password:
        required: 'Обязательное поле'
        minlength: 'Введите не менее 5 символов и не более 20'
        maxlength: 'Введите не менее 5 символов и не более 20'

  $('#signupForm').validate
    errorPlacement: (error, element) ->
      $(element).closest('form').find('label[for=\'' + element.attr('id') + '\']').parent().append error
      return
    errorElement: 'span'
    messages:
      username:
        required: 'Обязательное поле'
        minlength: 'Имя должно иметь не менее 3 символов'
      password:
        required: 'Обязательное поле'
        minlength: 'Введите не менее 5 символов и не более 20'
        maxlength: 'Введите не менее 5 символов и не более 20'
      email:
        required: 'Обязательное поле',
        minlength: 3,
        maxlength: 255
        message: 'Неверный формат E-mail'
      terms:
        required: 'Обязательное поле',

      regexp:
        regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',


  $('#profile-block').hover ->
    $(this).find('#user-progress').slideToggle(200)
  $('.user_block').on('mouseover', ->
    $('#indicators > li').find('.dropdown').removeClass('visible')
    $('#profile-info').show()
  )
  $('.user_block').on('mouseleave', ->
    $('#profile-info').hide()
  )

  $('#indicators > li').click ->
    $(this).find('.dropdown').toggleClass('visible')
    $(this).siblings().find('.dropdown').removeClass('visible')
    return false

  $("#tabs").tabs()

  return
) jQuery
