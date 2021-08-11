console.log("saying");
setTimeout(function(){
    //texttext("oooooooo");
},500);

setInterval(function(){
    //texttext("oooooooo");
    //console.log(HM_touch);
},50);


//0: さいしょ　　　1-14:はみ中　　　15:さいご
function change_saying(n){
    //console.log(n);
    //texttext(n + "番目のことば");
    if(n == 1){
        texttext("オレンジで表示されている歯を磨いてください。");        
        setTimeout(function(){
            if(n == HM_touch)
            texttext("磨き終わりましたか？<br>"
                    +"画面をタップして次に進みましょう！");
        },5000);        
    }else if( n == 2){
        texttext("グッジョブ！");
        setTimeout(function(){
            if(n == HM_touch)
            texttext("2本ずつ磨いていきます(親知らずがあるところは3本)。<br>"
                    +"menuで一時停止、paceで手動/自動を切り替え。");
        },1500);
    }else if( n == 3){
        texttext("その調子です！");
        setTimeout(function(){
            if(n == HM_touch)
            texttext("「今日の格言」でも読みながら楽しく歯磨きしましょう！");
        },3000);
    }else if( n == 7){
        texttext("お見事です...！");
        setTimeout(function(){
            if(n == HM_touch)
            texttext("ここが終わればちょうど半分ですよ！");
        },5000);        
    }else if( n == 11){
        texttext("歯磨きの天才ですか？？");
        setTimeout(function(){
            if(n == HM_touch)
            texttext("ラストスパート、いっちゃいましょう！！");
        },5000);  
    }else if( n == 15){
        texttext("おつかれさまでした。");
    }else{
        if(n < 7){
            texttext(saying[0]);
        }else if(n < 11){
            texttext(saying[1]);
        }else{
            texttext(saying[2]);
        }        
    }
}

var saying = ["あああああ","いいいいい","ううううう"];

setTimeout(function(){
    let r_saying, temp_saying;
    for(let i = sayingstorage.length - 1; i >= 0; i--){
    r_saying = Math.floor(Math.random()*( i + 1));
    temp_saying = sayingstorage[i];
    sayingstorage[i] = sayingstorage[r_saying];
    sayingstorage[r_saying] = temp_saying;
    }
    //console.log(sayingstorage);
    for(var i = 0; i < 3; i++){
        saying[i] = sayingstorage[i];
    }
},10);

var sayingstorage = [
    "Alter ipse amicus.  友はもう一人の自分である。",
    "Spem metus sequitur.   恐れは望みの後ろからついてくる。",
    "In vino veritas.  真実は酒の中にある。",
    "Deliberando saepe perit occasio.   好機は熟考することによってしばしば消滅する。",
    "Festina lente.  ゆっくりと急げ",
    "Usus est magister optimus.   実践は最良の教師。",    
    "輝くもの、必ずしも金ならず。",
    "情けは人の為ならず。",
    "二兎を追う者は一兎をも得ず。",
    "政府とは、合法的な暴力を独占的に行う権利を持つ団体だ。",
    "生きることは病であり、眠りは緩和剤であり、死は根治療法なのである。",
    "正しい側に組しないものはすべて悪の側に結局は加担することになる。",
    
    "Волка ноги кормят.　　脚が狼を養う。(自分から動かなければ、良いものは得られない。)",    
    "Горе не море, выпьешь до дна.　悲しみは海ではないから、すっかり飲み干してしまえる。",
    "Чему быть, того не миновать.  起こることは避けられないこと。",

    "Paradise on earth is where I am. 私がいるところ、それが地上の楽園だ。",
    "Prejudice is an opinion without judgment. 偏見は、判断を持たない意見である",
    "真実を愛せ。ただし過ちは許せ。",
    "人間は言うことが無くなると、必ず悪口を言う。"
];