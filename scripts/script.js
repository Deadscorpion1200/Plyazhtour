// JS
// анимация меню-гамбургера
$('.header-mobile-menu__btn').on('click', function(e){
  e.preventDefault();
  $(this).toggleClass('header-mobile-menu__btn_active');
  $('.adaptive-menu').toggleClass('adaptive-menu_active');
});
// Анимация многоуровневых списков
$('.adaptive-navigation-item__more-one').on('click', function(e){
  e.preventDefault();
  console.log(1)
  $('.adaptive-navigation__sublist').toggleClass('adaptive-navigation__sublist_active');
});
$('.adaptive-navigation-item__more-two').on('click',function(e){
  e.preventDefault();
  $('.adaptive-navigation__sublist-two').toggleClass('adaptive-navigation__sublist-two_active');
});

// jquery
$(document).ready(function(){
  $('.main-slider').slick({
    fade: true,
    prevArrow: '.main-arrows__left',
    nextArrow: '.main-arrows__right',
  });
});