$(function(){



    var tl1 = new TweenMax({});
    tl1.to($(".box1"), 1, {left:'100px',ease: Linear.easeNone});
    tl1.to($(".box1"), 2, {left:'0px',yoyo:true,repeat:-1,ease:Linear.easeNone});
    tl1.pause();
   
    //场景1
    function secen1(){
        tl1.play();
    }

    secen1();

    // 场景2
    function secen2(){
        tl1.pause();
    }


});