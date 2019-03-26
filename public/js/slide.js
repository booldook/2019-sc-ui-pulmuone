var wid = 0;
var interval = setInterval(ani1, 3000);
function ani1(){
	wid -= 100; // wid = wid - 100;
	$("#slides1").stop().animate({"left": wid+"%"}, 500, function(){
		if(wid == -500) {
			wid = 0;
			$(this).css({"left": 0});
		}
	});
}
$("#slides1").mouseover(function(){
	clearInterval(interval);
});
$("#slides1").mouseleave(function(){
	interval = setInterval(ani1, 3000);
});

var wid2 = 0;
var interval2 = setInterval(ani2, 3000);
function ani2() {
	
}