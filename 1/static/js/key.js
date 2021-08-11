//QWERTASDFZXCV
var leftkeys = [81,87,69,82,84,65,83,68,70,90,88,67,86];
//UIOPJKL;NM,.
var rightkeys = [85,73,79,80,74,75,76,187,78,77,188,190];
//YGHB
var centerkeys = [89,71,72,66];

function KeyDownFunc(e){
	// キーコード
    var key_code = e.keyCode;

    if(key_code == 37 || key_code == 38 || key_code == 39 || key_code == 40){//cursors
       console.log("cur"); 
    }
    if(key_code == 65){
        ketFont($("#ketv0"), 0);
    }
    if(key_code == 79){
        ketFont($("#ketv0"), 1);
    }
    if(key_code == 69){
        ketFont($("#ketv0"), 4);
    }
    if(key_code == 85){
        ketFont($("#ketv0"), 3);
    }
    if(key_code == 73){
        ketFont($("#ketv0"), 2);
    }
    if(leftkeys.indexOf(key_code) != -1){
        //btt1ac();
    }

    
    if(key_code == 32){//SPACE 
        ststTimer();
    }
}

// イベントリスナーに対応している
if(document.addEventListener){

	// キーボードを押したときに実行されるイベント
	document.addEventListener("keydown" , KeyDownFunc);

// アタッチイベントに対応している
}else if(document.attachEvent){

	// キーボードを押したときに実行されるイベント
	document.attachEvent("onkeydown" , KeyDownFunc);

}
