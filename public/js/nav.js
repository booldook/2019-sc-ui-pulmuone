$("#navs1 > li").click(function(){
	$(this).find(".subs").slideToggle(100);
});

$("#navs1 > li").hover(function(){
	$(this).find(".subs").slideDown(100);
}, function(){
	$(this).find(".subs").slideUp(100);
});
