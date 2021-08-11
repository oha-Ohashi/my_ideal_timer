console.log("dispiii");
//alert("sto");

$(function(){
    ketFont($("#ketv0"), 1);
    create_digits(8);
});

///////////////////////////////
$(disp_recet);
$(window).resize(disp_recet);
function disp_recet(){
    setTimeout(function(){
        clinWH();
        arrange_all()
    }, 10);
}
function arrange_all(){
    arrange_ketv0();
}

function arrange_ketv0(){
    //if(inWH.ratio > 16/8){

    //}else if(inWH.ratio > 8/16){
        var elem = $("#ketv0");
        elem.width(inWH.width * 0.8);
        elem.height(elem.width() * 1/5);
        var h = elem.height()*1 + "px";
        console.log("h: "+ h);
        elem.css("font-size", h);
        elem.css("line-height", h);
        arng_xyV(elem, [50,50]);
    //}else{

    //}
}

//KETV0/////////////////////
//id: d7 d6 d5 d4 d3 d2 d1 d0
function create_digits(n){
    var str = toBinary(sie);
    console.log("bin: "+ str);
    var BinArr = toArray(str, true);
    console.log(BinArr);
    for(var i = 0; i < n; i++){
        var index = ((n-1) - i);
        if(i == 4){
            $('<span>', {
                class: 'space',
                text: ' '
            }).appendTo('#ketv0');
        }
        $('<span>', {
            id: 'd'+ index,
            class: 'digit',
            text: BinArr[index]
        }).appendTo('#ketv0');
    }
}
function refresh_digits(){
    var BinArr = toArray(
        toBinary(sie)
    , true);
    var target = $(".digit");
    //console.log(typeof target);
    var len = target.length;
    target.map(function(ind, elem){
        //console.log(elem);
        elem.innerText 
            = BinArr[(len-1)-ind];
    });
}
//toBinary = (n) => parseInt(n.toString(2));
function toBinary(n){
    var str = n.toString(2);
    str = ('00000000'+ str ).slice(-8);
    //console.log(str);
    return str;
}
//small first, large last
function toArray(str, rvs){
    var strarr = str.split("");
    if(rvs){
        return strarr.reverse();
    }
}    
