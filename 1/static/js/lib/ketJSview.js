//body's client sizes, inner-sizes
var clWH, inWH
/*$(function(){
    clinWH();
});
$(window).resize(function(){
    console.log("");
    clinWH();
});*/
//synced.

function clinWH(){
    clWH = get_clWH();
    inWH = get_inWH();
}
function get_clWH(){
    var wh = {height: 0, width:0};
    wh.width = document.body.clientWidth;
    wh.height = document.body.clientHeight;
    return wh;
}
function get_inWH(){
    var wh = {height: 0, width:0};
    wh.width = window.innerWidth;
    wh.height = window.innerHeight;
    wh.ratio = wh.width / wh.height;
    return wh;
}


//based on top-left corner
function arng_xy(obj, xy){
    console.log(obj);
    obj.offset({
        left: xy.left,
        top: xy.top
    });
}
//based on the center, with percentage
function arng_xyV(obj, p_xy){
    var xy = {
        left: (p_xy[0]/100) * inWH.width,
        top: (p_xy[1]/100) * inWH.height
    }
    var xyV= {
        left: xy.left - obj.width() / 2,
        top: xy.top - obj.height() / 2
    };
    arng_xy(obj, xyV);
}
//change font fam of a DOM elem
function ketFont(obj, a){
    var fstr = [
        'monospace',
        'Noto Serif JP',
        'Roboto Mono',
        'Langar',
        'Ubuntu Mono'
    ];
    obj.css({'font-family': fstr[a]});
    //obj.css("font-size", "10px");
    //obj.style.fontFamily = "";
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
