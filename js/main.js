

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
