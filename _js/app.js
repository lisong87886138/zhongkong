var ApiUrl = 'http://172.16.0.222:4689';
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









