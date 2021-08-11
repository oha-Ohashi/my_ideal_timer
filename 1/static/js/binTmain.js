console.log("mainaaa");
//alert("iconicon");
var sie = 0;
var speed = 1000 / 2;

    //register Events
$(function(){
    $("#ketv0").on('click', function(){
        console.log("ii");
    });

    $("#ketv0").click({mi: 0}, function(){
        console.log("click");
    });
});

///////////CLIIICK////////////
$(document).on('click', function(){
    console.log("document clicked");
    ststTimer();
});
$(document).on('click', '#ketv0', function(){
    console.log("#ketv0 clicked");
});

//////TIMER////////////
var timer0;
var ststFlag = false;
function ststTimer(){
    if(!ststFlag){
        startTimer();
    }else{
        stopTimer();
    }
}
function startTimer(){
    console.log("start");
    timer0 = setInterval(function(){
        sie++;
        console.log(sie);
        refresh_digits(8);
    }, speed);
    ststFlag = !ststFlag;
}
function stopTimer(){
    console.log("stop");
    clearInterval(timer0);
    ststFlag = !ststFlag;
}
