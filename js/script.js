// window.alert("Hello")    //Test



// $(function () {
// 	let scroll = $(document).scrollTop();
// 	let navHeight = $('.navbar').outerHeight();

// 	$(window).scroll(function () {
// 		var scrolled = $(document).scrollTop();

// 		if (scrolled > navHeight) {
// 			$('.navbar').addClass('animate');
// 		} else {
// 			$('.navbar').removeClass('animate');
// 		}

// 		if (scrolled > scroll) {
// 			$('.navbar').removeClass('sticky');

// 		} else {
// 			$('.navbar').addClass('sticky');
// 		}
// 		scroll = $(document).scrollTop();
// 	});
// });


var wstick = $(window);
wstick.on('scroll',function() {    
   var scroll = wstick.scrollTop();
   if (scroll < 150) {
	$("#sticky-header").removeClass("sticky");
   }else{
	$("#sticky-header").addClass("sticky");
   }
});



















