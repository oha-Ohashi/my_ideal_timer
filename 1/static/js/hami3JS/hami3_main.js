console.log("main02");

//メニュー表示ボタン
var menu_disped = false;
btts[0].onclick = menu_tapped;
function menu_tapped(){
    if(!menu_disped){                               
        document.getElementsByClassName("menuL")[0].style.display ="block";
        if(!landscape){
            btts[25].style.width = 200*dr + "px";
            arangeaimage(25, 0, [500, 400], 0);   //メニューリスト
        }else{
            btts[25].style.width = 100*dr + "px";
            arangeaimage(25, 0, [500, 500], 0);   //メニューリスト
        }
        menu_disped = true;
    }else{
        document.getElementsByClassName("menuL")[0].style.display ="none";
        menu_disped = false;
    }
    
    if(HM_touch > 0) STorST();
}
//メニュー内容
var mMembers = document.getElementsByClassName("mMember");
mMembers[0].onclick = function(){
    document.getElementsByClassName("menuL")[0].style.display ="none";
    menu_disped = false;
    if(HM_touch > 0) STorST();
}
mMembers[1].onclick = function(){
    location.href = "./.";
}
mMembers[2].onclick = function(){
    location.href = "/";
}
mMembers[3].onclick = function(){
    location.href = "about.php";
}
/////////////ペース変更ボタン/////////////////
var pacemode = 0;
const paceptt = [88, 3, 4, 5, 6];
const pacenormtxt = ["&nbsp;&nbsp;", "13s", "17s", "21s", "26s"];
btts[30].onclick = function(){
    pacemode++;
    if(pacemode > paceptt.length-1) pacemode = 0;
    //if(pacemode == 1)mainT_pre_value = mainT_value;  
    wacka_forward();
    btts[30].src = "image/pace"+ paceptt[pacemode] +".png";
    btts[31].innerHTML = pacenormtxt[pacemode];
    console.log("pace: " + paceptt[pacemode]);

    //if(HM_touch == 0) touched();
}

/////////////14の並び替え/////////////////フィッシャーイェーツ
const ttharray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
let r, temp;
for(let i = ttharray.length - 1; i >= 0; i--){
  r = Math.floor(Math.random()*( i + 1));
  temp = ttharray[i];
  ttharray[i] = ttharray[r];
  ttharray[r] = temp;
}
console.log(ttharray)


/////////////////
/*タッチ系グロ変*/   var HM_touch = 0;
/////////////////


var touchA = document.getElementById("toucharea");
touchA.onclick = function(){
    console.log("touchA");
    if(!menu_disped && (pacemode == 0 || HM_touch == 0)){
        touched(); 
    }
}
function touched(){            //n回目で歯[n-1]を消して、歯[n]を点灯
    if(HM_touch >= 15) return;

    if(HM_touch == 0){           //最初でなければ宿題済ます
        STorST();
    }else{
        toothtooth(ttharray[HM_touch -1], "g");
        total_forward(HM_touch -1);
    }

    if(HM_touch < 14){          //最後でなければ宿題だして続行 
        wacka_flash();  
        wacka_forward(0);  
        toothtooth(ttharray[HM_touch], "o");   
        mainT_pre_value = mainT_value;    
    }else{
        clearInterval(wackaTimer); 
        stopTimer();
        setTimeout(function(){
            erashtter();
        }, 400);        
    }
    HM_touch++;
    change_saying(HM_touch);
    console.log(HM_touch);
}



var HL10ms = 10;
///////////////////////////////////////////////
///////////////タイマーー///////////////////////
///////////////////////////////////////////////
var mainT_value = 0;
var mainT_pre_value = 0;
var mainT_state = false;
var mainTimer;
function startTimer(){
    mainTimer=setInterval(function(){
        mainT_value++;
        timetime(0, timeCalc(true, mainT_value, mainT_pre_value));
        timetime(1, timeCalc(false, mainT_value, 0));
    } , HL10ms);
}
function stopTimer(){
    clearInterval(mainTimer);
}
function STorST(){
    if(HM_touch >= 15) return;
    if(!mainT_state){
        console.log("あざす");
        startTimer();
        mainT_state = !mainT_state;
    }else{
        console.log("とまる");
        stopTimer();        
        mainT_state = !mainT_state;
    }
}
///////////タイム整形///////////
function timeCalc(split, after, before){
    if(split){            
        if(pacemode == 0){
            var s = Math.floor((after - before) / 100);
            var cs =  Math.floor((after - before) % 100/10);
        }else{
            var norm_splt = paceptt[pacemode] *60*100 /14;
            var s = Math.floor((norm_splt-(after - before)) / 100);
            var cs =  Math.floor((norm_splt-(after - before)) % 100/10);
        }
        var res = ('000' + s).slice(-3) + '.' + ('0' + cs).slice(-1);
        return res;
    }else{
        var m = Math.floor((after - before)/6000);
        var s = Math.floor(((after - before)%6000) / 100);
        var res = ('00' + m).slice(-2) + ':' + ('00' + s).slice(-2);
        return res;
    }
}

/////////////////////////////////////
////////////わっかアニメ//////////////
//tryit();
function tryit(){
    var counter = 0;
    var cycle = [1000, 13];
    var timer=setInterval(function(){
        console.log(counter);
        total_forward(counter);
        if(counter < cycle[1]){
            counter++;    
        }else{
            clearInterval(timer);    
        }
    } , cycle[0]);
}

function total_forward(step14){  
    var counter = 0;
    var cycle = [30, 20];
    var timer=setInterval(function(){
        //console.log("a");
        circlecircle(1, "#eea60c", 
            [0, step14*(360/14) + (360/14)*mySin(counter,cycle[1])]);

        if(counter >= cycle[1]){
            clearInterval(timer);
            var n = Math.floor((step14+1)*7 *100/98);
            btts[28].innerHTML 
                    = ('00' + n).slice(-2);            
        }else{
            counter++;
        }
    } , cycle[0]);
}
var wackaTimer;
function wacka_forward(){  
    if(paceptt[pacemode] > 80){
        clearInterval(wackaTimer);  
        var colors = ["#4ed6ffff", "#0ff256ff", "#d4ed3aff",
                    "#ff9e48ff", "#ff7571ff"];
        var cycle = 5;
        wackaTimer = setInterval(function(){
            var diff = mainT_value - mainT_pre_value;
            circlecircle(0, colors[Math.floor(diff/1000)%5], 
                [0, 360*(diff%1000/1000)]);
        } , cycle);
    }else{
        clearInterval(wackaTimer);  
        var color = "#4ed6ffff";
        var cycle = 5;
        var norm = paceptt[pacemode] * 60*100 /14;
        wackaTimer = setInterval(function(){
            var diff = mainT_value - mainT_pre_value;
            if(diff < norm){
                circlecircle(0, color, [360*(diff/norm), 0]);
            }else{
                touched(); 
            }
        } , cycle);
    }
}
//setTimeout(wacka_flash, 500);
function wacka_flash(){
    var counter = 0;
    var cycle = [3, 100];
    var timer=setInterval(function(){
        //console.log("a");
        var ang = calcF(counter, cycle[1]); 
        circlecircle(4, "#ffffff", [ang, ang+20]);

        if(ang+20 >= 360){            
            clearInterval(timer);   
            circlecircle(4, "#ffffff", [0, 0]);
        }else{
            counter++;
        }
    } , cycle[0]);
}
function calcF(cnt, cyc){
    return mySin(cnt, cyc)*360;
}

///////////////////////////////////////////////
/////////////////えらいアニメ///////////////////
//setTimeout(erashtter, 500);
var doors = document.getElementsByClassName("eraback");
function erashtter(){
    eraicentdisp();
    erabk_disp(10);
    for(var i=0; i<2; i++)
        doors[i].style.display = "block";
    erai.style.display = "block";
    var eraiB = document.getElementById("eraiB");
        eraiB.style.display = "block";

    var counter = 0;
    var cycle = [3, 300, 500];
    var timer=setInterval(function(){
        //console.log(counter);
        if(counter < 300){
            erabk_disp(mySin(counter, cycle[1])*100);
            erai.style.opacity = mySin(counter, cycle[1])*100 + "%";
        }
        if(counter >= 200)
            eraiB.style.opacity = mySin(counter-200, cycle[2])*100+"%";
        if(counter < cycle[2]){
            counter++;    
        }else{
            clearInterval(timer);  
        }
    } , cycle[0]);
}
function erabk_disp(x){    
    if(!landscape){
        for(var i=0; i<2; i++)
            doors[i].style.cssText += 
                "width: 100%;  height:"+ x +"%;";
    }else{
        for(var i=0; i<2; i++)
            doors[i].style.cssText += 
                "width:"+ x +"%;  height: 100%;";
    }
}
/////////えらえらジャンプ//////////////
erai.onclick = function(){location.href="./."};
doors[0].onclick = function(){location.href="./."};
doors[1].onclick = function(){location.href="./."};
////////////ガチ関数たち//////////////
function mySin(x, y){
    return Math.sin(x/y * Math.PI/2);
}
function parab(x, y){
    return Math.pow(x,2) / Math.pow(y,2);
}

