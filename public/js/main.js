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

/***** 광고 노출 *****/
var sbBan = ['sb_ban2.jpg', 'sb_ban3.jpg'];
var sbColor = ['#8bc43f', '#625042'];
var sbNum = Math.round(Math.random());
$(".sb_choi").attr("src", "../img/"+sbBan[sbNum]);
$(".sb_choi").parent().css({"background-color": sbColor[sbNum]});