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