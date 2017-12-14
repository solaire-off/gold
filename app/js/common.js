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


	$('.nav a, .menu-mobile a, .anchor ').click(function (event) {
		event.preventDefault();
		
		if (mobileOffset === 0) mobileOffset = -30;
		
		elementClick = $(this).attr("href");
		
		destination = $(elementClick).position().top - mobileOffset;
		
		$('html,body').stop().animate( { scrollTop: destination }, 1100 );
		
		mobileOffset = -30;
	});

	$(".room-gallery").hide();
	$(".room-gallery.active").addClass('used').fadeIn();

	$(".room").click(function(){

		$(".room").removeClass('active');
		$(this).addClass('active');

		var idActiveGallery = $(this).data('gallery');

		$(".room-gallery.active").hide();

		$(".room-gallery.active").removeClass('active');
		$("#"+idActiveGallery).addClass('active').fadeIn();

		if (!$("#"+idActiveGallery).hasClass('used')){
			$("#"+idActiveGallery).addClass('used')
			$("#"+idActiveGallery+" .slick-next").click();	
		}
		
		
	});

	// $(".room").each(function(){

	// 	setTimeout($(this).click(),200);
	// })



});
