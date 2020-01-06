$(document).ready(function(){
	$('.navbar .navbar').clone().appendTo('#menuMobile');
});

$(document).on("click", ".open-menu", function(){
    $('#menuMobile').toggle();
    $('#menuMobile .navbar').slideToggle();
	$('.open-menu').addClass('close-menu');
	$('.open-menu').removeClass('open-menu');
});

$(document).on("click", ".close-menu", function(){
	$('#menuMobile').slideToggle();
	$('.close-menu').addClass('open-menu');
	$('.close-menu').removeClass('close-menu');
    $('#menuMobile .navbar').slideToggle();
});

$('.videos .video').click(function() {
    $('.videoCiee iframe').attr('src', $('.videoCiee iframe').attr('src') + '&autoplay=1'); 
});

// $('.videoCiee .close').click(function() {
//     $('.videoCiee iframe').attr('src', $('.videoCiee iframe').attr('src') + '&autoplay=1'); 
// });


$('.box-login .remember').click(function(){
	$('.form-login').slideToggle();
	$('.form-remember').slideToggle();
});




function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
  $('.open-close-search').click(function(){
	$('.busca-rapida input.form-control').toggle().focus();
	$('.login-busca .bt-login').toggle();
  });
}else{
  $('.open-close-search').click(function(){
	$('.busca-rapida input.form-control').fadeToggle('low').focus();
  });
}