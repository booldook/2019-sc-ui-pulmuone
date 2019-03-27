/***** 가로형 1번 ******/
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


/***** 가로형 2번 ******/
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


/***** 가로형 3번 ******/
var page = 0;
var wid3 = 0;
var interval3 = setInterval(ani3, 3000);
function ani3(){
	wid3 -= 100; // wid = wid - 100;
	$("#slides3").stop().animate({"left": wid3+"%"}, 500, function(){
		page = Math.abs(wid3/100);
		if(wid3 == -500) {
			wid3 = 0;
			page = 0;
			$(this).css({"left": 0});
		}
		$(".pager > li").css({"color": "white"});
		$(".pager > li").eq(page).css({"color": "red"});
	});
}
$("#slides3").mouseover(function(){
	clearInterval(interval3);
});
$("#slides3").mouseleave(function(){
	interval3 = setInterval(ani3, 3000);
});
$("#pager3 > li").click(function(){
	clearInterval(interval3);
	var k = $(this).index();
	wid3 = (k * -100) + 100;
	ani3();
});

/***** 세로형 1번 ******/
var tar4 = 0;
var interval4 = setInterval(ani4, 3000);
function ani4() {
	tar4 -= $("#slides4").find(".slide").eq(0).outerHeight();
	$("#slides4").stop().animate({"top": tar4+"px"}, 800, function(){});
}