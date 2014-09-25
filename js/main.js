$('.openAbout').click(function click1() {
	$('#overlay').fadeIn('slow');
	$('#popupBox').fadeIn('slow');
	$('#popupContent').fadeIn('slow');    
});


	$('#overlay, .closeoverlay').click(function () {
		$('#overlay').fadeOut('slow');
		$('#popupBox').fadeOut('slow');
    	$('#popupContent').fadeOut('slow');   
	});

	$('.openGal').click(function click1() {
	$('#overlay').fadeIn('slow');
	$('#popupBox2').fadeIn('slow');
	$('#popupContent2').fadeIn('slow');    
});


$('#overlay, .closeoverlay').click(function () {
		$('#overlay').fadeOut('slow');
		$('#popupBox2').fadeOut('slow');
		$('#popupContent2').fadeOut('slow');   
});

$('.openProj').click(function click1() {
	$('#overlay').fadeIn('slow');
	$('#popupBox3').fadeIn('slow');
	$('#popupContent3').fadeIn('slow');    
});


$('#overlay, .closeoverlay').click(function () {
		$('#overlay').fadeOut('slow');
		$('#popupBox3').fadeOut('slow');
		$('#popupContent3').fadeOut('slow');   
});


$(window).scroll(function(){
  $("#head2").stop().animate({"marginTop": ($(window).pageTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" );
});

$(".hammenu").click(function(){
   $(".links").removeClass('.displaynone');
});


