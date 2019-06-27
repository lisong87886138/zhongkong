mui.plusReady(function () {
    plus.screen.lockOrientation("portrait-primary");
});
// ajaxUrl
var ajaxUrl = 'http://car.volin.com.cn/socket';
var ajaxheader = {
    "Content-Type": "application/json; charset=utf-8"
};
var ajaxPost = 'POST';
// 定义变量
var clickHoodState = 1; //前备箱状态
var clickTrunkState = 1; //后备箱状态
var carDoorLeft2State = 1; //主驾驶状态
var carDoorRight2State = 1; //副驾驶状态
var frontLight = 1; //前灯状态状态
var afterLight = 1; //后灯状态
// 			//实现图片的预加载
var imgar1 = [];
var imgar2 = [];
var imgar3 = [];
var imgar4 = [];
var imgar5 = [];
var imgar6 = [];

// 设置高度
// var footH = dq('.footerSeeting').clientHeight 
// dq('.mui-content').style.marginBottom = footH+'px'

function eightimg() {
    for (let o = 0; o < 60; o++) {
        if (o < 10) {
            o = "0" + o;
        } else {
            o = o;
        }
        $('.car1').append('<img style="display:none" src="img/wish/hood/yinqinggai00'+o+'.png" alt="">')
        $('.car2').append('<img style="display:none" src="img/wish/left/leftwingdoor00'+o+'.png" alt="">')
        $('.car3').append('<img style="display:none" src="img/wish/right/rightwingdoor00'+o+'.png" alt="">')
        $('.car5').append('<img style="display:none" src="img/wish/trunk/houbeixiang00'+o+'.png" alt="">')
        $('.car6').append('<img style="display:none" src="img/wish/drive/zuoqianmien00'+o+'.png" alt="">')
        $('.car7').append('<img style="display:none" src="img/wish/copilot/youqianmen00'+o+'.png" alt="">')
    }
}
eightimg();

// 切换车门座椅tab...
mui('.carTitleUl').on('tap', 'li', function () {
    $(this).addClass('navActive').siblings().removeClass('navActive');
    var name = $(this).attr("data-name");
    $('.' + name).fadeIn().siblings(".box").fadeOut(0);
});

var t = 0.025;
var tl1 = new TimelineMax({});
var tl2 = new TimelineMax({});
var tl3 = new TimelineMax({});
var tl4 = new TimelineMax({});
var tl10 = new TimelineMax({});
var tl11 = new TimelineMax({});
// 引擎盖
for (let i = 0; i < 60; i++) {
    if (i < 10) {
        i = "0" + i;
    } else {
        i = i;
    }
    // tl3.to($('.car1'), t, {
    //     "background-image": "url('img/wish/hood/yinqinggai00" + i + ".png')"
    // });
    tl3.to($('.car1 img').eq(i), t, {
        display:'block',
        onStart:function(){
            $(".car1 img").eq(i).siblings().fadeOut(0);
        }
    });
}
tl3.stop();

function clickHood() {
    var params = {};
    params.state = clickHoodState;
    params.type = "CtrlEngineCover";
    params.action = "revice";
    // console.log(params)

    $.ajax({
        headers: ajaxheader,
        type: ajaxPost,
        url: ajaxUrl,
        dataType: 'json',
        data: JSON.stringify(params),
        success: function (data) {
            // console.log(data);
            if (clickHoodState == 1) {
                tl3.play();
                clickHoodState = 0;
            } else {
                tl3.reverse();
                clickHoodState = 1;
            }
            // console.log(JSON.stringify(params))
        },
        error: function (data) {
            console.log(data)
        }
    });

}
// 后备箱
for (let i = 0; i < 60; i++) {
    if (i < 10) {
        i = "0" + i;
    } else {
        i = i;
    }
    // tl4.to($('.car5'), t, {
    //     "background-image": "url('img/wish/trunk/houbeixiang00" + i + ".png')"
    // });
    tl4.to($('.car5 img').eq(i), t, {
        // display:'block',
        onStart:function(){
            $(".car5 img").eq(i).siblings().fadeOut(0);
        }
    });
}
tl4.stop();

function clickTrunk() {
    var params = {};
    params.state = clickTrunkState;
    params.type = "CtrlTrunk";
    params.action = "revice";
    // console.log(params)
    $.ajax({
        headers: ajaxheader,
        type: ajaxPost,
        url: ajaxUrl,
        dataType: 'json',
        data: JSON.stringify(params),
        success: function (data) {
            if (clickTrunkState == 1) {
                tl4.play();
                clickTrunkState = 0;
            } else {
                tl4.reverse();
                clickTrunkState = 1;
            }
            // console.log(JSON.stringify(params))
        },
        error: function (data) {
            console.log(data)
        }
    });
}
// 左门动画
for (let i = 0; i < 60; i++) {
    if (i < 10) {
        i = "0" + i;
    } else {
        i = i;
    }
    tl1.to($('.car2 img').eq(i), t, {
        display:'block',
        onStart:function(){
            $(".car2 img").eq(i).siblings().fadeOut(0);
        }
    });
    
    
}
tl1.stop();

function clickLeftOpen() {
    // ajax 打开主驾驶 后左门
    var params = {};
    params.action = "revice";
    params.type = "CtrlLeftBehindDoor";
    params.state = 1;
    // console.log(params)
    $.ajax({
        headers: ajaxheader,
        type: ajaxPost,
        url: ajaxUrl,
        dataType: 'json',
        data: JSON.stringify(params),
        success: function (data) {
            tl1.play();
            $(".carDoorLeft").fadeOut();
            $(".left_dotted,.carDoorLeftClose").fadeIn();
            // console.log(data);
            // console.log(JSON.stringify(params))
        },
        error: function (data) {
            console.log(data)
        }
    });
}

function clickLeftClose() {
    // ajax 关闭左门
    var params = {};
    params.state = 0;
    params.type = "CtrlLeftBehindDoor";
    params.action = "revice";
    // console.log(params)
    $.ajax({
        headers: ajaxheader,
        type: ajaxPost,
        url: ajaxUrl,
        dataType: 'json',
        data: JSON.stringify(params),
        success: function (data) {
            // console.log(data);
            tl1.reverse();
            $(".carDoorLeft").fadeIn();
            $(".left_dotted,.carDoorLeftClose").fadeOut();
            // console.log(JSON.stringify(params))
        },
        error: function (data) {
            console.log(data)
        }
    });
}
// 左门动画

// 右门动画

for (let k = 0; k < 60; k++) {
    if (k < 10) {
        k = "0" + k;
    } else {
        k = k;
    }
    // tl2.to($('.car3'), t, {
    //     "background-image": "url('img/wish/right/rightwingdoor00" + k + ".png')"
    // });
    tl2.to($('.car3 img').eq(k), t, {
        display:'block',
        onStart:function(){
            $(".car3 img").eq(k).siblings().hide();
        }
    });
}
tl2.stop();

function clickRightOpen() {
    // ajax 打开右门
    var params = {};
    params.state = 1;
    params.type = "CtrlRightBehindDoor";
    params.action = "revice";
    // console.log(params)
    $.ajax({
        headers: ajaxheader,
        type: ajaxPost,
        url: ajaxUrl,
        dataType: 'json',
        data: JSON.stringify(params),
        success: function (data) {
            // console.log(data);
            tl2.play();
            $(".carDoorRight").fadeOut();
            $(".right_dotted,.carDoorRightClose").fadeIn();
            // console.log(JSON.stringify(params))
        },
        error: function (data) {
            console.log(data)
        }
    });
}

function clickRightClose() {
    // ajax 关闭右门
    var params = {};
    params.state = 0;
    params.type = "CtrlRightBehindDoor";
    params.action = "revice";
    // console.log(params)
    $.ajax({
        headers: ajaxheader,
        type: ajaxPost,
        url: ajaxUrl,
        dataType: 'json',
        data: JSON.stringify(params),
        success: function (data) {
            // console.log(data);
            tl2.reverse();
            $(".carDoorRight").fadeIn();
            $(".right_dotted,.carDoorRightClose").fadeOut();
            // console.log(JSON.stringify(params))
        },
        error: function (data) {
            console.log(data)
        }
    });
}
// 右门动画
// 主驾驶carDoorLeft2
for (let k = 0; k < 60; k++) {
    if (k < 10) {
        k = "0" + k;
    } else {
        k = k;
    }
    // tl10.to($('.car6'), t, {
    //     "background-image": "url('img/wish/drive/zuoqianmien00" + k + ".png')"
    // });
    tl10.to($('.car6 img').eq(k), t, {
        display:'block',
        onStart:function(){
            $(".car6 img").eq(k).siblings().hide();
        }
    });
}
tl10.stop();

function carDriverDoor() {
    var params = {};
    params.state = carDoorLeft2State;
    params.type = "CtrlLeftFountDoor";
    params.action = "revice";
    // console.log(params)
    $.ajax({
        headers: ajaxheader,
        type: ajaxPost,
        url: ajaxUrl,
        dataType: 'json',
        data: JSON.stringify(params),
        success: function (data) {
            // console.log(data);

            if (carDoorLeft2State == 1) {
                tl10.play();
                carDoorLeft2State = 0;
            } else {
                tl10.reverse();
                carDoorLeft2State = 1;
            }
            // console.log(JSON.stringify(params))
        },
        error: function (data) {
            console.log(data)
        }
    });
};
// 副驾驶carDoorRight2
for (let k = 0; k < 60; k++) {
    if (k < 10) {
        k = "0" + k;
    } else {
        k = k;
    }
    // tl11.to($('.car7'), t, {
    //     "background-image": "url('img/wish/copilot/youqianmen00" + k + ".png')"
    // });
    tl11.to($('.car7 img').eq(k), t, {
        display:'block',
        onStart:function(){
            $(".car7 img").eq(k).siblings().hide();
        }
    });
};
tl11.stop();

function carDoorRight2() {
    var params = {};
    params.state = carDoorRight2State;
    params.type = "CtrlRightFountDoor";
    params.action = "revice";
    // console.log(params)
    $.ajax({
        headers: ajaxheader,
        type: ajaxPost,
        url: ajaxUrl,
        dataType: 'json',
        data: JSON.stringify(params),
        success: function (data) {
            // console.log(data);
            if (carDoorRight2State == 1) {
                tl11.play();
                carDoorRight2State = 0;
            } else {
                tl11.reverse();
                carDoorRight2State = 1;
            }
            // console.log(JSON.stringify(params))
        },
        error: function (data) {
            console.log(data)
        }
    });
};

// 全部关闭
function allClose() {
    var params = {};
    params.state = 0;
    params.type = "CtrlAll";
    params.action = "revice";
    // console.log(params)
    $.ajax({
        headers: ajaxheader,
        type: ajaxPost,
        url: ajaxUrl,
        dataType: 'json',
        data: JSON.stringify(params),
        success: function (data) {
            // console.log(data);
            tl1.reverse();
            tl2.reverse();
            tl3.reverse();
            tl4.reverse();
            tl10.reverse();
            tl11.reverse();

            clickHoodState = 1;
            clickTrunkState = 1;
            carDoorLeft2State = 1;
            carDoorRight2State = 1;

            $(".carDoorLeft").fadeIn();
            $(".left_dotted,.carDoorLeftClose").fadeOut();
            $(".carDoorRight").fadeIn();
            $(".right_dotted,.carDoorRightClose").fadeOut();
        },
        error: function (data) {
            console.log(data)
        }
    });
}

// 第三块区域
// 灯的封装方法
function deng(className, imgclose, imgopen) {

    var deng01 = document.getElementsByClassName(className);
    if (deng01[0].className.indexOf('dengActive') == -1) {
        deng01[0].classList.add("dengActive");
        // console.log(deng01[0].children[0].src)
        deng01[0].children[0].src = "img/wish/" + imgopen + ".png";
    } else {
        deng01[0].classList.remove("dengActive");
        deng01[0].children[0].src = "img/wish/" + imgclose + ".png";
    }

    if (className == "deng06") {
        var params = {};
        params.state = afterLight;
        params.type = "CtrlBehindLight";
        params.action = "revice";

        $.ajax({
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            type: ajaxPost,
            url: ajaxUrl,
            dataType: 'json',
            data: JSON.stringify(params),
            success: function (data) {
                // console.log(data);
                if (afterLight == 1) {
                    afterLight = 0;
                    $('.car4 img').attr("src", "img/wish/yuanguangdeng.png");
                } else {
                    afterLight = 1;
                    $('.car4 img').attr("src", "img/wish/car2.png");
                }
                // console.log(JSON.stringify(params))

            },
            error: function (data) {
                console.log(data)
            }
        });
    }

    if (className == "deng05") {

        var params = {};
        params.state = frontLight;
        params.type = "CtrlLeftLight";
        params.action = "revice";
        $.ajax({
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            type: ajaxPost,
            url: ajaxUrl,
            dataType: 'json',
            data: JSON.stringify(params),
            success: function (data) {
                // console.log(data);
                if (frontLight == 1) {
                    frontLight = 0;
                } else {
                    frontLight = 1;
                }
                // console.log(JSON.stringify(params))
            },
            error: function (data) {
                console.log(data)
            }
        });
    }

}
// 灯08切换的方法
mui('.deng08').on("tap", "li", function () {
    $(this).children().addClass('dengActive2').parent().siblings().children().removeClass('dengActive2');
    switch ($(this).index()) {
        case 0:
            $(this).siblings().find('img').eq(0).attr("src", "img/wish/deng06.png");
            $(this).siblings().find('img').eq(1).attr("src", "img/wish/deng05.png");
            break;
        case 1:
            $(this).find('img').attr("src", "img/wish/deng06o.png");
            $(this).siblings().find('img').attr("src", "img/wish/deng05.png");
            // $('.car4 img').attr("src","img/wish/yuanguangdeng.png");
            break;
        case 2:
            $(this).find('img').attr("src", "img/wish/deng05o.png");
            $(this).siblings().find('img').attr("src", "img/wish/deng06.png");
            // $('.car4 img').attr("src","img/wish/jinguangdeng.png");
            break;
        case 3:
            $(this).siblings().find('img').eq(0).attr("src", "img/wish/deng06.png");
            $(this).siblings().find('img').eq(1).attr("src", "img/wish/deng05.png");
            break;
    }
});


// 悬架jq

mui('.suspensionBox1Ul-in').on("tap", "li", function () {
    $(this).addClass("suspensionBox1UlAstive").siblings().removeClass("suspensionBox1UlAstive");
    var tl5 = new TimelineMax({});
    tl5.to($('.carHarf'), 0.5, {
        "bottom": "28%"
    });
    var tl6 = new TimelineMax({});
    tl6.to($('.carHarf'), 0.5, {
        "bottom": "27%"
    });
    var tl7 = new TimelineMax({});
    tl7.to($('.carHarf'), 0.5, {
        "bottom": "26%"
    });
    var tl8 = new TimelineMax({});
    tl8.to($('.carHarf'), 0.5, {
        "bottom": "25%"
    });
    var tl9 = new TimelineMax({});
    tl9.to($('.carHarf'), 0.5, {
        "bottom": "24%"
    });

    tl5.pause();
    tl6.pause();
    tl7.pause();
    tl8.pause();
    tl9.pause();
    var y = 0;
    var clickSuspension = 2;

    switch ($(this).index()) {
        case 0:
            clickSuspension = 0;
            tl6.kill();
            tl7.kill();
            tl8.kill();
            tl9.kill();
            tl5.play();
            break;
        case 1:
            clickSuspension = 1;
            tl5.kill();
            tl7.kill();
            tl8.kill();
            tl9.kill();
            tl6.play();
            break;
        case 2:
            clickSuspension = 2;
            tl5.kill();
            tl6.kill();
            tl8.kill();
            tl9.kill();
            tl7.play();
            break;
        case 3:
            clickSuspension = 3;
            tl5.kill();
            tl6.kill();
            tl7.kill();
            tl9.kill();
            tl8.play();
            break;
        case 4:
            clickSuspension = 4;
            tl5.kill();
            tl6.kill();
            tl7.kill();
            tl8.kill();
            tl9.play();
            break;
    }
    var params = {};
    params.state = clickSuspension;
    params.type = "CtrlSuspensionSystem";
    params.action = "revice";
    $.ajax({
        headers: ajaxheader,
        type: ajaxPost,
        url: ajaxUrl,
        dataType: 'json',
        data: JSON.stringify(params),
        success: function (data) {
            console.log(params)
        },
        error: function (data) {
            console.log(data)
        }
    });

    // tl5.to($('.carHarf'), 0.5, { "bottom":y});
});
mui('.suspensionBox1Ul2,.driveBox1UlRight,.showBox1Ul2').on("tap", "li", function () {
    if ($(this).hasClass('suspensionBox1UlAstive')) {
        $(this).removeClass("suspensionBox1UlAstive");
    } else {
        $(this).addClass("suspensionBox1UlAstive");
    }
});
// 悬架js

// 驾驶
mui('.driveBox1UlClick').on("tap", "li", function () {
    $(this).addClass("driveBoxActive").siblings().removeClass("driveBoxActive");
});

// 旅程重置
mui(".journeyBoxUl").on("tap", "li", function () {
    if ($(this).index() == 0) {
        $(".numNow").html("0");
    }
    if ($(this).index() == 1) {
        $(".numA").html("0");
    }
    if ($(this).index() == 2) {
        $(".numB").html("0");
    }
});