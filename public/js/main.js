/***** Main 네비게이션 *****/
var sbMedal = ['gnb_sec01_img0_on.png', 'gnb_sec01_img1_on.png', 'gnb_sec01_img2_on.png', 'gnb_sec01_img3_on.png', 'gnb_sec01_img4_on.png', 'gnb_sec01_img5_on.png'];
$(".mn_navs > li").mouseover(function(){
	$(".sb_navs_wraps").show();
	$(".sb_hover").find("i").hide();
	$(".sb_hover").eq($(this).index()).find("i").show();
	$(".sb_medal").attr("src", "../img/"+sbMedal[$(this).index()]);
});
$(".navs_wraps").mouseleave(function(){
	$(".sb_navs_wraps").hide();
});

$(".sb_hover").mouseover(function(){
	$(this).css({"background-color":"#f9fbf6"});
	$(".sb_hover").find("i").hide();
	$(this).find("i").show();
	$(".sb_medal").attr("src", "../img/"+sbMedal[$(this).index() - 1]);
});
$(".sb_hover").mouseleave(function(){
	$(this).css({"background-color":"#fff"});
	$(".sb_hover").find("i").hide();
});

/***** Page2 *****/
$("#page2 .camps").find(".camp").mouseover(function(){
	$(this).children("img").hide();
	var src = $(this).children(".camp_cont").find("img").data("hover");
	$(this).children(".camp_cont").find("img").attr("src", src);
	$(this).children(".camp_cont").find("li").eq(1).stop().animate({"opacity": 1}, 500);
	$(this).children(".camp_cont").find("li").eq(2).stop().animate({"opacity": 1}, 500);
});
$("#page2 .camps").find(".camp").mouseleave(function(){
	$(this).children("img").show();
	var src = $(this).children(".camp_cont").find("img").data("src");
	$(this).children(".camp_cont").find("img").attr("src", src);
	$(this).children(".camp_cont").find("li").eq(1).stop().animate({"opacity": 0}, 500);
	$(this).children(".camp_cont").find("li").eq(2).stop().animate({"opacity": 0}, 500);
});


/***** Page 5 *****/
//var bgSrc = ['../img/s04_list_img1.jpg', '../img/s04_list_img2.jpg', '../img/s04_list_img3.jpg', '../img/s04_list_img4.jpg'];
//var n = $(this).index();
//$(this).css({"background-image": "url("+bgSrc[n]+")"});

$("#page5").children(".page_rt").children("li").mouseover(function(){
	$(this).css({"background-image": "none"});
	$(this).children(".info_tit").children("li").stop().hide();
	$(this).children(".info_tit").children("li").eq(0).css({"border-bottom": "5px solid #fff"});
	$(this).children(".info_tit").children("li").stop().fadeIn(500);
});
$("#page5").children(".page_rt").children("li").mouseleave(function(){
	$(this).css({"background-image": "url("+$(this).data("bg")+")"});
	$(this).children(".info_tit").children("li").stop().hide();
	$(this).children(".info_tit").children("li").eq(0).css({"border-bottom": "none"});
	$(this).children(".info_tit").children("li").eq(0).stop().fadeIn(500);
});


/***** 광고 노출 *****/
var sbBan = ['sb_ban2.jpg', 'sb_ban3.jpg'];
var sbColor = ['#8bc43f', '#625042'];
var sbNum = Math.round(Math.random());
$(".sb_choi").attr("src", "../img/"+sbBan[sbNum]);
$(".sb_choi").parent().css({"background-color": sbColor[sbNum]});

/***** 팝업관리 *****/
$("#bt_pop_close").click(function(){
	if(	$("#today_show").is(":checked")	) {
		Cookies.set('popup_ignore', 'Y', { expires: 1 });
	}
	$(".pops").hide();
	$(".yt_video")[0].contentWindow.postMessage('{"event":"command","func":"'+'stopVideo'+'"}', '*');
});

if(Cookies.get("popup_ignore") == "Y") {
	$(".pops").hide();
}
