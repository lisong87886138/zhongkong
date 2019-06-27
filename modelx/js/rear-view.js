// 设置高度
var ww = document.body.clientWidth
var wh = document.body.clientHeight
dq('body').style.width = ww+'px'
dq('body').style.height = wh+'px'
var footH = dq('.footerSeeting').clientHeight 
dq('.mui-content').style.height = (wh - footH)+'px'

var yinyue = true;
// 点击音乐按钮 切换 音乐开关
mui('.rear-img').on('tap','.yinyue',function(){

    if(yinyue){
        dq('.yinyue').classList.remove('icon-yinliang')
        dq('.yinyue').classList.add('icon-guanbiyinliang')
    }else{
        dq('.yinyue').classList.add('icon-yinliang')
        dq('.yinyue').classList.remove('icon-guanbiyinliang')  
    }
    yinyue = !yinyue
})

var topNum 
var leftTopNum 
var rightTopNum 
var bottomNum 
var leftbottomNum 
var rightbottomNum 
// var randomNum =   Math.floor(Math.random()*100);

// console.log(randomNum);

setInterval(function(){

    topNum = Math.floor(Math.random()*100);
    leftTopNum = Math.floor(Math.random()*100);
    rightTopNum = Math.floor(Math.random()*100);
    bottomNum = Math.floor(Math.random()*100);
    leftbottomNum = Math.floor(Math.random()*100);
    rightbottomNum = Math.floor(Math.random()*100);

    resizeColor(topNum,'.s1')
    resizeColor(leftTopNum,'.s2')
    resizeColor(rightTopNum,'.s3')
    resizeColor(bottomNum,'.s4')
    resizeColor(leftbottomNum,'.s5')
    resizeColor(rightbottomNum,'.s6')

    // resizeColor2(topNum,'.s1')
    // resizeColor2(leftTopNum,'.s2')
    // resizeColor2(rightTopNum,'.s3')
    // resizeColor2(bottomNum,'.s4')
    // resizeColor2(leftbottomNum,'.s5')
    // resizeColor2(rightbottomNum,'.s6')
},100)

// 随机颜色
function getRandomColor () {
    const rgb = []
    for (let i = 0; i < 3; ++i) {
      let color = Math.floor(Math.random() * 256).toString(16)
      color = color.length == 1 ? '0' + color : color
      rgb.push(color)
    }
    return '#' + rgb.join('')
}

function resizeColor2(name,className){  
    if(name <= 30){
        dq(className).style.color = getRandomColor()
        dq(className).style.color = getRandomColor()
        dq(className).style.color = getRandomColor()
        dq(className).style.color = getRandomColor()
    }
    if(name >30 && name <= 50){
        dq(className).style.color = getRandomColor()
        dq(className).style.color = getRandomColor()
        dq(className).style.color = getRandomColor()
        dq(className).style.color = getRandomColor()
    }
    if(name > 50 && name <=100){
        dq(className).style.color = getRandomColor()
        dq(className).style.color = getRandomColor()
        dq(className).style.color = getRandomColor()
        dq(className).style.color = getRandomColor()
    }
    if(name >100){
        dq(className).style.color = getRandomColor()
        dq(className).style.color = getRandomColor()
        dq(className).style.color = getRandomColor()
        dq(className).style.color = getRandomColor()
        
    }
}

// 随机颜色
function resizeColor(name,className){   
    // switch(true){
    //     case name <= 30:
    //         dq(className).classList.add('activeRed')
    //     break;
    //     case name >30 && name <= 50:
    //         dq(className).classList.add('activeYellow')
    //     break;
    //     case name >50 && name <= 100:
    //         dq(className).classList.add('activeWhite')
    //     break;
    //     case name >100:
    //         dq(className).classList.add('opct0')
    //     break;
    // }

    if(name <= 30){
        dq(className).classList.add('activeRed')
        dq(className).classList.remove('activeYellow')
        dq(className).classList.remove('activeWhite')
        dq(className).classList.remove('opct0')
    }
    if(name >30 && name <= 50){
        dq(className).classList.add('activeYellow')
        dq(className).classList.remove('activeRed')
        dq(className).classList.remove('activeWhite')
        dq(className).classList.remove('opct0')
    }
    if(name > 50 && name <=100){
        dq(className).classList.add('activeWhite')
        dq(className).classList.remove('activeRed')
        dq(className).classList.remove('activeYellow')
        dq(className).classList.remove('opct0')
    }
    if(name >100){
        dq(className).classList.add('opct0')
        dq(className).classList.remove('activeRed')
        dq(className).classList.remove('activeYellow')
        dq(className).classList.remove('activeWhite')
        
    }
}