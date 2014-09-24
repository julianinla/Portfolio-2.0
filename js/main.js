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

// $(window).scroll(function(){
//   $(".back").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" );
// });

$(".hammenu").click(function(){
   $(".links").removeClass('.displaynone');
});

var more = document.getElementById("more");

window.onload=function(){
	more.addEventListener('click', textChange, false);
};

function textChange(){
	document.getElementByClass("aboutme").innerHTML="I am a comic book lover. ";
}