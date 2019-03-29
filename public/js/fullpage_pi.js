new IScroll('#wrapper', { mouseWheel: true });

$("#wrapper").onepage_scroll({
	sectionContainer: ".pages",
	easing: "ease",
	animationTime: 300, 
	pagination: true, 
	updateURL: false, 
	beforeMove: function (index) {}, 
	afterMove: function (index) {}, 
	loop: false, 
	keyboard: false, 
	responsiveFallback: false, 
	direction: "vertical" 
});