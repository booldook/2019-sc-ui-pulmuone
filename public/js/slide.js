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

var k2 = -100;
var wid2 = 0;
var interval2 = setInterval(ani2, 3000);
function ani2() {
	wid2 += k2;	//wid2 = wid2 + k2 -> wid2 = 0 - 100
	$("#slides2").stop().animate({"left": wid2+"%"}, 500, function(){
		if(wid2 == 0) k2 = -100;
		if(wid2 == -400) k2 = 100;
	});
}
$("#slides2").mouseover(function(){
	clearInterval(interval2);
});
$("#slides2").mouseleave(function(){
	interval2 = setInterval(ani2, 3000);
});