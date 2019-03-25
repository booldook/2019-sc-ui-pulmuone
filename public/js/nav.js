$("#navs1 > li").mouseover(function(){
	$(this).find(".subs").slideDown(1000);
});
$("#navs1 > li").mouseleave(function(){
	$(this).find(".subs").slideUp(1000);
});

$("#navs2 > ul > li").mouseover(function(){
	$(".subs2").slideDown(1000);
});
$("#navs2").mouseleave(function(){
	$(".subs2").slideUp(1000);
});

$("#navs3 .mn_nav").mouseover(function(){
	$(".subs3").slideDown(1000);
});
$("#navs3 > ul").mouseleave(function(){
	$(".subs3").slideUp(1000);
});
