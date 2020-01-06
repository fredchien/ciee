$(document).on("click", ".open-menu", function(){
    $('body').addClass('menu-dash-mobile');
	$('.open-menu').addClass('close-menu');
	$('.open-menu').removeClass('open-menu');
});

$(document).on("click", ".close-menu", function(){
	$('body').removeClass('menu-dash-mobile');
	$('.close-menu').addClass('open-menu');
	$('.close-menu').removeClass('close-menu');
});