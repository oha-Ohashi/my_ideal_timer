console.log("hami05");

//ウィンドウノータッチ
/*
window.addEventListener("mousedown", function(e) { e.preventDefault(); }, false);
window.addEventListener("mousemove", function(e) { e.preventDefault(); }, false);
window.addEventListener("mouseup", function(e) { e.preventDefault(); }, false);
window.addEventListener("touchstart", function(e) { e.preventDefault(); }, false);
window.addEventListener("touchmove", function(e) { e.preventDefault(); }, false);
window.addEventListener("touchend", function(e) { e.preventDefault(); }, false);
*/

no_scroll();
// スクロール禁止
function no_scroll() {
    // PCでのスクロール禁止
    document.addEventListener("mousewheel", scroll_control, { passive: false });
    // スマホでのタッチ操作でのスクロール禁止
    document.addEventListener("touchmove", scroll_control, { passive: false });
}
// スクロール関連メソッド
function scroll_control(event) {
    event.preventDefault();
}

////////////////////////////////////////////////
////////////////////////////////////////////////
///////////グローバル関数倉庫/////////
var btts;
var www;
var hhh;
var dr;    //device ratio
var landscape = false;
var rr;

///////////ウインドウリサイズで初期配置///////////////
window.addEventListener( 'resize', function(){
    if(timecheck()){arangement();};
}, false );

///////////初期配置関数///////////////
arangement();
function arangement(){
    /////////idふりふり//////////
    btts = document.getElementsByClassName("btt");
    for(var i = 0; i < btts.length; i++){
        //console.log(i);
        btts[i].setAttribute("id", "btt"+i);
    }
    ////////各種サイズ取得
    var waku = document.getElementById("waku");
    waku.style.width = "100%";
    waku.style.height = "100%";
    www = waku.clientWidth;
    hhh = waku.clientHeight;
    console.log("\n測定: waku 幅/高さ:" + www/hhh)
    if(www/hhh > 9/16){
        if(www/hhh > 1.3){                ////横長にするか矯正するか
            //www = hhh * 16/9;
            //waku.style.width = www +"px"; 
            landscape = true;
        }else{
            hhh *= 0.97
            waku.style.height = "97%";
            www = hhh * 9/16;
            waku.style.width = www +"px";  
            landscape = false;  
        }    
    }else{
        landscape = false;
    }
    console.log("確定: waku 幅:" + www +"   高さ:" + hhh)
    dr = www / 375;
    /////////やっちゃえ日産/////////
    setTimeout(function(){
        if(!landscape){
            arangethemall();
        }else{
            arangethemall_landscape();
        }
    }, 20); 
}

/////////////////////////////////////////////////////////
/////////////////画像描画まつり///////////////////////////
/////////////////////////////////////////////////////////

///////////////////まとめ役////////////////////
function arangethemall(){    
    arangemenu(0, 45);
    for(var i = 0; i < 14; i++){
        var tp = toothpos(i);
        arangeaimage(i+1, 50*dr, [tp.left, tp.top], tp.rot);
    }
    btts[15].style.maxWidth = "65%";
    btts[15].style.fontSize = 18*dr+"px";
    arangeaimage(15, 0, [500, 130], 0);   //ナビ
    arangeaimage(16, 0, [210, 980], 0);　 //signature
    btts[17].style.fontSize = 50*dr+"px";
    arangeaimage(17, 0, [650, 730], 0);   //タイム
    btts[18].style.fontSize = 50*dr+"px";
    arangeaimage(18, 0, [650, 880], 0);   //タイム
    //arangeaimage(19, 80, [900, 90], 0);   //こうしん
    btts[19].onclick = function(){
        location.href = './.';
    };
    rr = [70*dr, 250, 740, 150];
    arangeacanvas(20, 70*dr, [250, 740], "#404040", 0, 360);
    arangeacanvas(21, 70*dr, [250, 890], "#404040", 0, 360);
    arangeacanvas(22, 70*dr, [250, 740], "#eea60c", 0, 0);
    arangeacanvas(26, 70*dr, [250, 740], "#ffffff", 0, 0);
    arangeacanvas(23, 70*dr, [250, 890], "#cc22cc", 0, 0);
    arangeacanvas(29, 55*dr, [251, 740], "#151515", 0, 360);
    arangeacanvas(27, 55*dr, [251, 890], "#151515", 0, 360);
    btts[28].style.fontSize = 28*dr+"px";
    arangeaimage(28, 0, [255, 890], 0);   //％

    btts[25].style.width = 200*dr + "px";
    arangeaimage(25, 0, [500, 400], 0);   //メニューリスト
    arangemenu(30, 45);
    btts[30].style.top = 70*dr+"px";       //ペース
    btts[31].style.fontSize = 24*dr+"px"; 
    arangeaimage(31, 0, [255, 740], 0);    //ペース数字
    btts[31].innerHTML = " ";
    btts[31].style.color = "#ffffffee";
    //可視化
    for(var i = 0; i < btts.length; i++){
        btts[i].style.opacity = 100;
    }
}


function arangemenu(index, siz){
    btts[index].width = siz*dr;
    btts[index].style.cssText = "position:absolute; left:1px;top:8px;";
}
function arangeaimage(index, siz, pos, rot){ 
    //画像のインデックス, 幅, ポジション(100分率、配列), 角度(deg)
    btts[index].width = siz;
    var w = btts[index].clientWidth;
    var h = btts[index].clientHeight;
    //console.log(w + ' ' + h);
    
    btts[index].style.left = (pos[0]/1000 * www) - w/2 + "px";
    btts[index].style.top = (pos[1]/1000 * hhh) - h/2 + "px";
    btts[index].style.transform = "rotate("+rot+"deg)"
}
function toothpos(x){
    var res = new Object;
    res.left = 100+ (800* (x%7)/6);
    if(x < 7){
        res.top = 300 + 7*Math.pow(Math.abs(x%7-3), 2);
    }else{
        res.top = 580 - 7*Math.pow(Math.abs(x%7-3), 2);
    }
    //console.log(res.top);
    res.rot = Boolean(x < 7) * 180;
    return res;
}

function arangeacanvas(index ,siz, pos, col, st, en){
    ///// imageと一緒////////////
    btts[index].style.width = siz+"px";
    btts[index].style.height = siz+"px";
    var w = btts[index].clientWidth;
    var h = btts[index].clientHeight;    
    btts[index].style.left = (pos[0]/1000 * www) - w/2 + "px";
    btts[index].style.top = (pos[1]/1000 * hhh) - h/2 + "px";
    btts[index].style.transform = "rotate(-90deg)"
    /////////////////////////////
    var canvas = btts[index];
    var x = pos[0]* www/1000;
    var y = pos[1]* hhh/1000;
    var kaizou = 4;
    canvas.width = siz*kaizou;
    canvas.height = siz*kaizou;

    var context = canvas.getContext("2d");
    context.scale(kaizou,kaizou);
    context.beginPath();
    context.moveTo(siz/2, siz/2);
    context.fillStyle = col;
    context.arc(siz/2, siz/2, siz/2, st * Math.PI/180, en * Math.PI/180, false);
    context.fill();
}

//えらいさん
var erai = document.getElementById("erai");
eraicentdisp();
function eraicentdisp(){
    erai.style.fontSize = 70*dr + "px";
    erai.style.lineHeight = hhh + "px";
}

//////////////タイマー///////////////
var timemark = new Date().getTime();
function timecheck(){                         //input: [-20~20, -20~20]
    ////////////待ち設定//////////////
    var machi = 50;
    /////////////////////////////////
    var timenow = new Date().getTime();
    if(timenow - timemark > machi){
        timemark = timenow;
        return true;
    }else{
        return false;
    }
}


//////////////////////////////////////////////////
////////////////操作用関数/////////////////////////
//////////////////////////////////////////////////
// 1-14 15 17 18
function texttext(value){
    btts[15].innerHTML = value;
    if(!landscape){
        arangeaimage(15, 0, [500, 130], 0);
    }else{
        arangeaimage(15, 0, [340, 500], 0); 
    }
}
function toothtooth(tooth, color){
    btts[tooth + 1].src = "image/tooth3_"+ color +".png";
}
function timetime(time, value){
    btts[time + 17].innerHTML = value;
}
/*
arangeacanvas(20, 70, [250, 740], "#eea60c", 0, 300);
arangeacanvas(21, 70, [250, 890], "#cc22cc", 0, 330);
arangeacanvas(22, 55, [250, 740], "#151515", 0, 360);
arangeacanvas(23, 55, [250, 890], "#151515", 0, 360);
*/
function circlecircle(circle, color, sten){
    arangeacanvas(circle + 22, rr[0], [rr[1], rr[2]+circle*rr[3]], 
        color, sten[0], sten[1]);
    if(circle == 4){
        arangeacanvas(circle + 22, rr[0], [rr[1], rr[2]+ 0*rr[3]], 
            color, sten[0], sten[1]);
    }
}
function perper(value){
    btts[24].innerHTML = value;
}