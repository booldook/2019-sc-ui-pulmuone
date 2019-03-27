// .slide_wrap > .slides > .slide > img
// var interval = setInterval(함수, 간격(시간)); 함수를 간격마다 반복 실행함.
// animate({css명령}, 시간(애니메이션 시간), 움직임, 끝나고 실행되는 함수);

var inha = 0;
var interval = setInterval(ani, 3000);
function ani(){
	inha = inha - 100;
	$(".slides").stop().animate({"left": inha+"%"}, 500, function(){
		
	});
}