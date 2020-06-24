// анимация меню-гамбургера
$('.header-mobile-menu__btn').on('click', function(e){
  e.preventDefault();
  $(this).toggleClass('header-mobile-menu__btn_active');
  $('.adaptive-menu').toggleClass('adaptive-menu_active');
});
