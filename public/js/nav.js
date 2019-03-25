$("#navs1 > li").click(function(){
	$(this).find(".subs").slideToggle(100);
});

$("#navs1 > li").hover(function(){
	$(this).find(".subs").slideDown(100);
}, function(){
	$(this).find(".subs").slideUp(100);
});

$("#navs2 > ul > li").mouseover(function(){
	$(".subs2").slideDown(100);
});
$("#navs2").mouseleave(function(){
	$(".subs2").slideUp(100);
});

$("#navs3 .mn_nav").mouseover(function(){
	$(".subs3").slideDown(100);
});
$("#navs3 > ul").mouseleave(function(){
	$(".subs3").slideUp(100);
});
