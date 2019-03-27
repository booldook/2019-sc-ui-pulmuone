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

/*
var st = 0;
var ed = $("#slides4 > .slide").length - 1;
for(var i=0; i<=ed; i++) {
	$("#slides4 > .slide").eq(i).css({"top":(i*100)+"%"});
}
var interval4 = setInterval(ani4, 3000);
function ani4() {
	st++;	//st = st + 1; st = st + 10 => st += 10
	var top = $("#slides4 > .slide").eq(0).outerHeight() * -st;
	$("#slides4").stop().animate({"top": top+"px"}, 500, function(){
		if(st == ed) {
			st = 0;
			$("#slides4").css({"top": 0});
		}
	});
}
*/

/***** 세로형 1번 ******/
var tar4 = 0;
var st = 0;
var ed = $("#slides4 > .slide").length - 1;
for(var i=0; i<=ed; i++) {
	$("#slides4 > .slide").eq(i).css({"top":(i*100)+"%"});
}
var interval4 = setInterval(ani4, 3000);
function ani4() {
	st++;	//st = st + 1;
	tar4 = $("#slides4").find(".slide").eq(0).outerHeight() * -st;
	$("#slides4").stop().animate({"top": tar4+"px"}, 800, function(){
		if(st == ed) {
			st = 0;
			$("#slides4").css({"top": 0});
		}
	});
}

/***** 세로형 1번 - Pause ******/
var tar5 = 0;
var st5 = 0;
var ed5 = $("#slides5 > .slide").length - 1;
for(var i=0; i<=ed5; i++) {
	$("#slides5 > .slide").eq(i).css({"top":(i*100)+"%"});
}
var interval5 = setInterval(ani5, 3000);
function ani5() {
	st5++;	//st = st + 1;
	tar5 = $("#slides5").find(".slide").eq(0).outerHeight() * -st5;
	$("#slides5").stop().animate({"top": tar5+"px"}, 800, function(){
		if(st5 == ed5) {
			st5 = 0;
			$("#slides5").css({"top": 0});
		}
	});
}
$("#slides5").mouseover(function(){
	clearInterval(interval5);
});
$("#slides5").mouseleave(function(){
	interval5 = setInterval(ani5, 3000);
});


/***** 세로형 1번 - Pager ******/
var tar6 = 0;
var st6 = 0;
var ed6 = $("#slides6 > .slide").length - 1;
for(var i=0; i<=ed6; i++) {
	$("#slides6 > .slide").eq(i).css({"top":(i*100)+"%"});
	if(i < ed6) {
		$(".pager_vert").append('<li><i class="fas fa-circle"></i></li>');
	}
}
var interval6 = setInterval(ani6, 3000);
function ani6() {
	st6++;	//st = st + 1;
	tar6 = $("#slides6").find(".slide").eq(0).outerHeight() * -st6;
	$("#slides6").stop().animate({"top": tar6+"px"}, 800, function(){
		if(st6 == ed6) {
			st6 = 0;
			$("#slides6").css({"top": 0});
		}
		$(".pager_vert > li").css({"color":"beige"});
		$(".pager_vert > li").eq(st6).css({"color":"brown"});
	});
}
$(".pager_vert > li").click(function(){
	clearInterval(interval6);
	if($(this).index() > 0) st6 = $(this).index() - 1;
	else st6 = ed6 - 1;
	ani6();
	interval6 = setInterval(ani6, 3000);
});
