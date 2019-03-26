var wid = 0;
setInterval(function(){
	wid -= 100; // wid = wid - 100;
	$("#slides1").stop().animate({"left": wid+"%"}, 500, function(){
		if(wid == -500) {
			wid = 0;
			$(this).css({"left": 0});
		}
	});
}, 3000);