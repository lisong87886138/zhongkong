// JS淡出
function fadeOut(el, speed) {
    el.style.opacity = 1;
    //el.style.display="";
    var last = +new Date();
    var tick = function () {
        el.style.opacity = +el.style.opacity - (new Date() - last) / speed;
        last = +new Date();
        if (+el.style.opacity > 0) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
    tick();
}

function dqA(selector) {
    return document.querySelectorAll(selector);
};

function dq(selector) {
    return document.querySelector(selector);
};

HTMLElement.prototype.show = function () {
    this.style.display = "block";
    return this;
};
HTMLElement.prototype.hide = function () {
    this.style.display = "none";
    return this;
};


var jtFn = {
    // 跳转页面
    successJump: function (url, mothed) {
        window.location[mothed || "replace"](url || "./");
    },
    openWindow: function (url) {
        mui.openWindow({
            url: url,
            id: url
        });
    }
}


// 初始化底部组件
function footer() {
    var foot = `
        <ul class="footerSeetingUl flexRow">
            <li class="li1">
                <span class="iconfont icon-che"></span>
            </li>
            <li class="li2">
                <span class="iconfont icon-yinle"></span>
            </li>
            <li class="li3 fontSize" data-state="false">
                <span class="iconfont icon-jiantou _rotateFu90"></span>
            </li>
            <li class="li4 fontSize ">
                <span class="iconfont icon-zuoyiseat"></span>
            </li>
            <li class="li5  fontSize flexRow">
                <span class="iconfont icon-arrow-up _rotateFu90" onclick="temperature('leftAirconditionTemperature','add')"></span>
                <div class="flexRow alignItemsBaseline"><span class="leftAirconditionTemperature">21</span>.0°</div>
                <span class="iconfont icon-arrow-up _rotate90" onclick="temperature('leftAirconditionTemperature','reduce')"></span>
            </li>

            <li class="li6 fontSize">
                <span class="iconfont icon-fengshan"></span>
            </li>

            <li class="li7 flexRow">
                <span class="iconfont icon-arrow-up _rotateFu90" onclick="temperature('rightAirconditionTemperature','add')"></span>
                <div class="flexRow alignItemsBaseline"><span class="rightAirconditionTemperature">21</span>.0°</div>
                <span class="iconfont icon-arrow-up _rotate90" onclick="temperature('rightAirconditionTemperature','reduce')"></span>
            </li>
            <li class="li8">
                <span class="iconfont icon-zuoyiseat _rotateY180"></span>
            </li>
            <li class="li9">
                <img class="icon09" src="img/footer/icon09.png">
            </li>
            <li class="li10">
                <img class="icon07" src="img/footer/icon07.png">
            </li>
            <li class="li11 ">
                <span class="iconfont icon-arrow-up _rotateFu90"></span>
                <span class="iconfont icon-yinliang"></span>
                <span class="iconfont icon-arrow-up _rotate90"></span>
            </li>
        </ul>
        
    `
    dq('.footerSeeting').innerHTML = foot
}
footer()

// 设置内容高度
var wh = document.body.clientHeight
var footH = dq('.footerSeeting').clientHeight


dq('.mui-content').style.height = (wh-footH) +'px'
console.log(dq('.mui-content').clientHeight);

// 增加温度, 降低温度封装方法
function temperature(className, state) {
    // console.log(state)
    var temp = document.getElementsByClassName(className);
    var num = parseFloat(temp[0].innerHTML);
    if (state == "add") {
        num++;
    } else {
        num--;
    }
    temp[0].innerText = num;
}


// 关闭钥匙感应 ,感应钥匙动画

var keyDown = new TimelineMax({repeat:-1})
keyDown.from($('.card img'),1,{rotation: "-90deg",transformOrigin: "-50% 50%",ease: Power0.easeNone})

mui('.keyShow ').on('tap','.icon-guanbi',function(){
    keyDown.pause()
    dq('.keyShow').classList.add('dn')
})

// 点击底部
mui('.footerSeeting').on('tap','li',function(){
    console.log(this.classList[0]);


    for(let i =0;i<dqA('.rightBox').length;i++){
        dqA('.rightBox')[i].classList.add('dn')
    }

    switch(this.classList[0]){
        case 'li1':
            //打开作控制页面 config-setting
            dq('.setSetting').classList.remove('dn')
        break;
        case 'li2':
            //打开音乐页面 
            dq('.radio').classList.remove('dn')
        break;
        case 'li3':
            //第3个箭头按钮
            dq('.li3List').classList.remove('dn')
        break;
        case 'li6':
        //第3个箭头按钮
        dq('.air-chair').classList.remove('dn')
    break;
    }
   
})

// 点击li3List 
mui('.li3List').on('tap',' .li3ListBtn',function(){
    
    let _this = this
    let li3list = dq('.li3ListBox').children.length
    dq('.li3List').classList.add('dn')

    for(let i=0;i<li3list;i++){
        dq('.li3ListBox').children[i].classList.add('dn')
    }

    switch(_this.getAttribute('data-name')){
        case 'calendar':
            //打开作控制页面 config-setting
            dq('.calendar').classList.remove('dn')
        break;
        case 'expend':
            dq('.expend').classList.remove('dn')
        break;
        case 'camera':
            dq('.camera').classList.remove('dn')
        break;
        case 'charge':
            dq('.charge').classList.remove('dn')
        break;
        case 'callPhone':
            dq('.callPhone').classList.remove('dn')
        break;
        case '':
            return
        break;
    }
   
})

