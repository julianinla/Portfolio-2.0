$('.openAbout').click(function () {
$('#overlay').fadeIn('slow');
$('#popupBox').fadeIn('slow');
$('#popupContent').fadeIn('slow');    
});



$('#overlay, .exitButton').click(function () {
$('#overlay').fadeOut('slow');
$('#popupBox').fadeOut('slow');
    $('#popupContent').fadeOut('slow');    
});
