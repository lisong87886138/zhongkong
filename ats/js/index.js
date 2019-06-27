$(function () {

    // 闪烁动画
    var tl1 = new TimelineMax({
        repeat: -1
    })
    var tl2 = new TimelineMax({
        repeat: -1
    })
    var tl3 = new TimelineMax({
        repeat: -1
    })
    var tl4 = new TimelineMax({
        repeat: -1
    })
    tl1.to($('._X0902'), 0.8, {
        autoAlpha: 0,
        ease: Power0.easeNone
    });
    tl1.pause();
    tl2.to($('._X0914'), 0.8, {
        autoAlpha: 0,
        ease: Power0.easeNone
    });
    tl2.pause();
    tl3.to($('._X0904'), 0.8, {
        autoAlpha: 0,
        ease: Power0.easeNone
    });
    tl3.pause();
    tl4.to($('._X0916'), 0.8, {
        autoAlpha: 0,
        ease: Power0.easeNone
    });
    tl4.pause();

 
    

    $('._X0914,._X0904,._X0902,._X0916').click(function(){
        changeLight($(this).data("id"));
    })
    
    
    var btnState
    var curState = 0 ;
    var allList = ['._X0902','._X0914','._X0904','._X0916'];
    var classList = [
                        ['._X0902','._X0914','._X0916'],
                        ['._X0914','._X0902','._X0904'],
                        ['._X0904','._X0914','._X0916'],
                        ['._X0916','._X0902','._X0904']
                    ];

    /**
     * 
     * @param {*} obj  
     * _X0902=1
     * _X0912=2
     * _X0904=3
     * _X0916=4
     */
    function changeLight(obj) {
        clearBg()
        if(verifyState(obj)) {
                
            
            btnState = parseInt($(allList[obj-1]).attr('data-state'));

            setState(btnState , obj);

            curState = obj;
        }

    }

    /**
     * 
     * @param {*} state 
     * @param obj
     */
    function setState(state , obj) {
        
        var allClass = classList[obj-1].join(',');

        $("._dengBottom,._dengTop").attr({'data-state':'0'});
        switch(state) {
            case 0:
                $(allClass).attr({'data-state':'1'});
                objPlay(obj);
            break;
            case 1:
                var select = allList[obj-1] + ',' + allList[curState-1];
                console.log(select)
                $(select).attr({'data-state':'2'});  
                var num = getDataState()
                changeBg(num);
                tl3.stop();
                tl1.stop();
                tl2.stop();
                tl4.stop();
                $('._X0902,._X0914,._X0904,._X0916').css('opacity','1');
            break;
            case 2:
                $(allClass).attr({'data-state':'0'});
                curState = 0;
            break;
        }
    }

    /**
     * 验证是否可点
     */
    function verifyState(nowState) {
        if(nowState == curState) {
            curState = 0;
            $("._dengBottom,._dengTop").attr({'data-state':'0'});
            return false;
        }

        return true;
    }

    /**
     * 播放动画
     */
    function objPlay(obj) {
        var list = classList[obj-1];
        for(var i=0 ;i < list.length;i++) {
            switch(list[i]) {
                case '._X0904' :
                    tl3.play();
                break;
                case '._X0914' :
                    tl2.play();
                break;
                case '._X0916' :
                    tl4.play();
                break;
                case '._X0902' :
                    tl1.play();
                break;
            }
        }
    }

    // 数组对象 
    var arr = [
        ['.G11C','.G13C','.G15C','.G17C'],
        ['.G11C','.lineVertical','.G29C','.G31C_1','.lineVertical5','.G34C_2','.lineVertical4','.G18C'],
        ['.G17C','.G15C','.G13C','.G11C'],
        ['.G17C','.lineVertical2','.G33C_2','.lineVertical6','.G32C_1','.G30C','.lineVertical3','.G12C'],
        ['.G12C','.G14C','.G16C','.G18C'],
        ['.G12C','.lineVertical3','.G30C','.G32C','.lineVertical6','.G33C','.lineVertical2','.G17C'],
        ['.G16C','.G14C','.G12C','.G18C'],
        ['.G18C','.lineVertical4','.G34C','.lineVertical5','.G31C','.G29C','.lineVertical','.G11C']
    ];

    // 修改颜色
    function changeBg(num){
        for(var o = 0;o<arr[num].length;o++ ){
            $(arr[num][o]).addClass('bgColorWhite')
        }
    }
    // 返回选中状态
    // var btn1State ;
    // var btn2State ;
    // var btn3State ;
    // var btn4State ;
    function getDataState(){
        var num;
        var btn1State = $('._X0902').attr('data-state')
        var btn2State = $('._X0914').attr('data-state')
        var btn3State = $('._X0904').attr('data-state')
        var btn4State = $('._X0916').attr('data-state')
        console.log(btn1State,btn2State,btn3State,btn4State);
        
        if(btn1State == 2 && btn2State == 2){
            num = 0
        }
        if(btn1State == 2 && btn4State == 2){
            num = 1
        }

        if(btn2State == 2 && btn3State == 2){
            num = 3
        }
        if(btn3State == 2 && btn4State == 2){
            num = 4
        }
        return num
        
    }
    // 清除背景
    function clearBg(){
        for(var k = 0; k<arr.length;k++){
            var allClass = arr[k].join(',')
            $(allClass).removeClass('bgColorWhite')
        }
    }
    // 引导进路
    function quickPick(dataName){
        var num ;
        switch(dataName){
            case 'X0902':
                num = 1
                clearBg()
                changeBg(num)
            break
            case 'X0914':
                num = 3
                clearBg()
                changeBg(num)
            break
            case 'X0904':
                num = 3
                clearBg()
                changeBg(num)
            break
            case 'X0916':
                num = 1
                clearBg()
                changeBg(num)
            break
        }
    }
    $('footer .X0902,footer .X0914,footer .X0904,footer .X0916').click(function(){
        // console.log($(this).attr('data-name'));
        quickPick($(this).attr('data-name'))
    })

});
