var myScroll = new IScroll('#wrapper', {mouseWheel: true});

$(window).on("mousewheel DOMMouseScroll", function(){
	console.log("HI");
});