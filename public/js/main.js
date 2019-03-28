/***** Main 네비게이션 *****/
$(".mn_navs > li").mouseover(function(){
	$(".sb_navs_wraps").show();
	$(".sb_hover").find("i").hide();
	$(".sb_hover").eq($(this).index()).find("i").show();
});
$(".navs_wraps").mouseleave(function(){
	$(".sb_navs_wraps").hide();
});

$(".sb_hover").mouseover(function(){
	$(this).css({"background-color":"#f9fbf6"});
	$(".sb_hover").find("i").hide();
	$(this).find("i").show();
});
$(".sb_hover").mouseleave(function(){
	$(this).css({"background-color":"#fff"});
	$(".sb_hover").find("i").hide();
});