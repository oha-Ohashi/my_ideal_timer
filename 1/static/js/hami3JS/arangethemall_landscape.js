/////////////////////////////////////////////////////////
/////////////////画像描画まつり///////////////////////////
/////////////////////////////////////////////////////////

///////////////////まとめ役////////////////////
function arangethemall_landscape(){    
    arangemenu_ls(0, 28);
    for(var i = 0; i < 14; i++){
        var tp = toothpos_ls(i);
        arangeaimage(i+1, 38*dr, [tp.left, tp.top], tp.rot);
    }
    btts[15].style.maxWidth = "50%";
    btts[15].style.fontSize = 10*dr+"px";
    arangeaimage(15, 0, [340, 500], 0);   //ナビ    
    arangeaimage(16, 0, [210, 980], 0);　 //signature
    btts[17].style.fontSize = 24*dr+"px";
    arangeaimage(17, 0, [890, 460], 0);   //タイム
    btts[18].style.fontSize = 24*dr+"px";
    arangeaimage(18, 0, [890, 850], 0);   //タイム
    arangeaimage(19, 80, [900, 90], 0);   //こうしん
    btts[19].onclick = function(){
        location.href = './.';
    };
    rr = [34*dr, 760, 340, 400];
    arangeacanvas(20, 34*dr, [760, 340], "#404040", 0, 360);
    arangeacanvas(21, 34*dr, [760, 740], "#404040", 0, 360);
    arangeacanvas(22, 34*dr, [760, 340], "#eea60c", 0, 0);
    arangeacanvas(26, 34*dr, [760, 340], "#ffffff", 0, 0);
    arangeacanvas(23, 34*dr, [760, 740], "#cc22cc", 0, 0);
    arangeacanvas(29, 26*dr, [760, 340], "#151515", 0, 360);
    arangeacanvas(27, 26*dr, [760, 740], "#151515", 0, 360);
    btts[28].style.fontSize = 14*dr+"px";
    arangeaimage(28, 0, [760, 743], 0);   //％

    btts[25].style.width = 100*dr + "px";
    arangeaimage(25, 0, [500, 500], 0);   //メニューリスト
    arangemenu_ls(30, 28);
    btts[30].style.right = 40*dr+"px";       //ペース
    btts[31].style.fontSize = 12*dr+"px";
    arangeaimage(31, 0, [760, 340], 0);    //ペース数字
    btts[31].innerHTML = " ";
    btts[31].style.color = "#ffffffee";

    //可視化
    for(var i = 0; i < btts.length; i++){
        btts[i].style.opacity = 100;
    }
}

function arangemenu_ls(index, siz){
    btts[index].width = siz*dr;
    btts[index].style.cssText = "position:absolute; right:8px;top:8px;";
}

function toothpos_ls(x){
    var res = new Object;
    res.left = 60+ (560* (x%7)/6);
    if(x < 7){
        res.top = 120 + 13*Math.pow(Math.abs(x%7-3), 2);
    }else{
        res.top = 880 - 13*Math.pow(Math.abs(x%7-3), 2);
    }
    //console.log(res.top);
    res.rot = Boolean(x < 7) * 180;
    return res;
}