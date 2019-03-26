$("#navs1 > li").mouseover(function(){
	$(this).find(".subs").stop().slideDown(100);
});
$("#navs1 > li").mouseleave(function(){
	$(this).find(".subs").stop().slideUp(100);
});

$("#navs2 > ul > li").mouseover(function(){
	$(".subs2").stop().slideDown(100);
});
$("#navs2").mouseleave(function(){
	$(".subs2").stop().slideUp(100);
});

$("#navs3 .mn_nav").mouseover(function(){
	$(".subs3").stop().slideDown(100);
});
$("#navs3 > ul").mouseleave(function(){
	$(".subs3").stop().slideUp(100);
});

$("#navs4 > li").mouseover(function(){
	$(this).find(".subs").stop().slideDown(200);
});
$("#navs4 > li").mouseleave(function(){
	$(this).find(".subs").stop().slideUp(200);	
});

$("#navs4-1 > li").click(function(){
	$(this).find(".subs").stop().slideToggle(200);
});

$("#navs4-2 > li").click(function(){
	$("#navs4-2").find(".subs").stop().slideUp(200);
	$(this).find(".subs").stop().slideToggle(200);
});