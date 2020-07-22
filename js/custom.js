$('.slider_wrap').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true

});
$('.menu_btn').on('click',function(){
	 $('.menu ul').slideToggle();
});