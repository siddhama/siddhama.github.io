var images = [];
        if (window.matchMedia("(min-width: 492px)").matches) {
  images=[
  'images/bg/2-1.jpg',
  'images/bg/prasher3.jpg',
  'images/bg/8-1.jpg',
  'images/bg/5-1.jpg',
'images/bg/prashar.jpg',
'images/bg/mtb4.jpg'];
} else {
  images=[
  'images/bg/2-1_s.jpg',
  'images/bg/prasher3.jpg',
  'images/bg/8-1_s.jpg',
  'images/bg/5-1_s.jpg',
'images/bg/prashar_s.jpg',
'images/bg/mtb4_s.jpg'];
}
$(document).ready(function(){
  $(".header").onload(function(){
    $("header").fadeOut(1000); 
  });
  $(".header").onload(function(){
    $("header").fadeIn(1000);
  });
});
var slider = setInterval(function() {
  document.getElementsByClassName('header')[0].setAttribute('style', 'background-image: url("'+images[0]+'")');
  images.splice(images.length, 0, images[0]);
  images.splice(0, 1);
}, 2000);
