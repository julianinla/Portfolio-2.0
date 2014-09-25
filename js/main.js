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
	$('#overlay').fadeOut('slow');
	$('#popupBox').fadeOut('slow');
    $('#popupContent').fadeOut('slow');
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
	$('#overlay').fadeOut('slow');
	$('#popupBox2').fadeOut('slow');
	$('#popupContent2').fadeOut('slow'); 
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

function loadplaylist() {
         current++;
         var songs = Array("../Portfolio 2.0/music/charliebrown.m4a", "../Portfolio 2.0/music/dontpanic.mp3", "../Portfolio 2.0/music/lifeintechnicolor.m4a", "../Portfolio 2.0/music/askyfullofstars.m4a", '../Portfolio 2.0/music/magic.m4a');
         playlist = songs.length;
         if (current == playlist) {
           //do nothing or stop
         } else {
           this.playOptions = document.getElementById("audio");
           this.playOptions.src = songs[current];
           this.playOptions.play();
         }
     }
