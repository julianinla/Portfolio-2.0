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

$(window).scroll(function(){
  $("#head2").stop().animate({"marginTop": ($(window).pageTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" );
});

$(".hammenu").click(function(){
   $(".links").removeClass('.displaynone');
});


