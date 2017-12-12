$(function() {

	var mobileOffset = 0;

	$( ".cross" ).hide();
	$( ".menu-mobile").css('display',"none");
	$( ".hamburger" ).click(function() {
		$( ".menu-mobile" ).slideToggle( "slow", function() {
			$( ".hamburger" ).hide();
			$( ".cross" ).show();
		});
	});

	$( ".cross" ).click(function() {
		$( ".menu-mobile" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
		});
	});



	$(".menu-mobile a").click(function(){
		$(".cross").click();
		mobileOffset = $(".menu-mobile").outerHeight()
	});


	$('.nav a, .menu-mobile a ').click(function (event) {
		event.preventDefault();

		elementClick = $(this).attr("href");
		destination = $(elementClick).position().top - mobileOffset;
		$('html,body').stop().animate( { scrollTop: destination }, 1100 );
		mobileOffset = -30;


	});


});
