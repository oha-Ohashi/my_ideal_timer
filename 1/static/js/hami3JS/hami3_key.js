console.log("key01");

function KeyDownFunc(e){
	// キーコード
    var key_code = e.keyCode;
    
    if(key_code == 32 || key_code == 13){//SPACE  ||  ENTER
        if(!menu_disped){
            if(!menu_disped && pacemode == 0){
                touched(); 
            }
        }
        if(HM_touch >= 15){
            setTimeout(function(){
                location.href = "./.";
            },4000);            
        }
    }
    if(key_code == 16){//SPACE  ||  ENTER
        menu_tapped();
    }

    if(key_code == 65){// A
        console.log("107");
        
    }
    if(key_code == 79){// O
        //gensan();
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