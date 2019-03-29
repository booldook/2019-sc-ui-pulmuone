$(".thumbs img").click(function(){
	var src = $(this).attr("src");
	$("#bpic").attr("src", src);
});
$(".thumbs img").eq(0).trigger("click");


$("#bpic").click(function(e){
	var src = $(this).attr("src");
	$(".modal_cont img").attr("src", src);
	$(".modal_wrap").show();
});
$(".bt_close").click(function(){
	$(".modal_wrap").hide();
});

$("#bt_popup").click(function(){
	window.open("win.html", "popup", "width=600, height=300, top=100, left=100");
});