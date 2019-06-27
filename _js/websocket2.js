
// websocket 测试


// 登录
// {"ctype":202,"data":{"group_id":1,"username":"test","idnumber":25,"grade_name":"一班","uid":25}}
// modelx 1200*1920
// model3 1920*1200
// 荣威ERX5 1920*1280
// 蔚来ES6  1600*1400
// 蔚来ES8 1600*1200
// 选车型 选车 119 modelx ,120 model3 ,407 ERX5,408 腾势500,409 蔚来ES8
// {"ctype":"205","data":{"selectcartype":119}}

// 操作
// {"ctype":"204","data":{"operation_id":"BatteryGroup"}}  .Rw_BatteryGroup
// 
// {"ctype":"201","data":{"type":uniqueid,"state":0}}

//1： 未处理问题：第一次登陆还没选车型，已有登陆信息 ，页面上不显示



// 连接服务端
var ws;
var indexBool = true;

function connect() {
    // 创建websocket
    ws = new WebSocket("ws://172.16.0.222:7000");
    // 当socket连接打开时，输入用户名
    ws.onopen = onopen;
    // 当有消息时根据消息类型显示不同信息
    ws.onmessage = onmessage;
    ws.onclose = function () {
        console.log("连接关闭，定时重连");
        connect();
    };
    ws.onerror = function () {
        console.log("出现错误");
    };
}

function onopen() {
    console.log('已连接');
    localStorage.removeItem("info");
    
    // removeLocalStorage('info')
    ws.send('{"ctype":202,"data":{}}');
}

function onmessage(event) {
    var data = JSON.parse(event.data);
    console.log(data);
    // console.log(data.ctype);
    switch(''+data.ctype){
        case '201':
            console.log(123);
            
        break

        case '202':
            // 登录信息// 第一步 登录 ----> 接收消息 -----> 进入对应车的中控
            // console.log("=====>" , getLocalStorage("info"));

            if(data.data.client_type == 1) {
                
            } else {
                var info = {
                    ctype:data.ctype,
                    grade_name:data.data.grade_name,
                    group_id:data.data.group_id,
                    place_name:data.data.place_name,
                    uid:data.data.uid,
                    username:data.data.username,
                    selectcartype:data.data.selectcartype,
                    operation_id:data.data.operation_id?data.data.operation_id:''
                }
                // 把信息加入localStorage中
                setLocalStorage('info', JSON.stringify(info))

                
                if(parseInt(info.selectcartype) >0 ){
              
                    
                    goToHtml(info.selectcartype)
                  
                    
                    if(info.operation_id) {
                        ajaxGetData('.list1')
                    }
                }
                    
            }
            
            setConputerList(data.data.client_list)
      
            
        break;
        case "203":
            // 操作步骤 高亮
            $('.listItem').eq(data.data.curstep-1).addClass('listItemLine').siblings().removeClass('listItemLine')
   
            var h =0;
            for(let i=0;i< (data.data.curstep-1);i++){
                h = h + $('.listItem').eq(i).height()
            }
            if( (data.data.curstep-1) < $('.listItem').length){
                $(".list1").animate({ scrollTop:  h}, 1500); 
            }
            
        break;
        case '204':
            //第三步 操作
            var oinfo = getLocalStorage('info');
            oinfo.operation_id = data.data.operation_id
            setLocalStorage('info', JSON.stringify(oinfo))
            $('.tab2').fadeIn()
            $('.sousuoList').fadeOut()

            ajaxGetData('.list1')
          
                
        break;
        case '205':
            // 第二步 接收车型  -----> 进入对应车的中控
            // 选车 119 modelx ,120 model3 ,407 ERX5,408 腾势500,409 蔚来ES8 
            $('.login').fadeOut(0)
            $('.list1').html('')
            $('.list2').html('')
            $('.list1').fadeOut(0)
            $('.list2').fadeOut(0)
            $('.btnTabSBtn1').fadeOut(0)
            $('.btnTabSBtn2').fadeOut(0)
            $('.btnTabSBtn2').removeClass('active')


            var num = data.data.selectcartype;
            
            var oinfo = getLocalStorage('info');
            oinfo.selectcartype = num
            oinfo.operation_id = ''
            setLocalStorage('info', JSON.stringify(oinfo))
            
            goToHtml(num);
            setConputerList(data.data.client_list)
        break; 
        case 'logout':
            // 清除localStorage
            // localStorage.removeItem("info");
            console.log('===>',data);
            
            $('.login').fadeIn(0)
            var oinfo = getLocalStorage('info');

            if(oinfo.place_name == data.data.place_name) {
                $('.iframe').attr('src','')
                $('#'+data.data.place_name).attr('src','modelx/img/home/icon10.png')
                $('#'+data.data.place_name).attr('data-state','0')
                $('.footerTab').html('')
                $('.footerTabOvlayorTab').fadeOut();
                $('.Logo').html('')
            } else {
                // console.log(3333)
                $('#'+data.data.place_name).attr('src','modelx/img/home/icon10.png')
                $('#'+data.data.place_name).attr('data-state','0')
            }
            
        break;
    }

    
}



connect();

// 跳转页面

function goToHtml(num){
    ww = document.body.clientWidth
    console.log('ww',ww);
    
    $('.login').fadeOut(0)
    switch(num){
        case 119:
            $('.iframe').attr('src','modelx/model.html')
            $('.Logo').html('特斯拉 Model X')
            setBgWidthHeight('90%','80%','100% 100%','3% auto','1.2% 1.5% 1.8% 1.5%')
        break;
        case 120:
            $('.iframe').attr('src','model3/index.html')
            $('.Logo').html('特斯拉 Model 3')
            
            if(ww > 1080){
                setBgWidthHeight('80%','80%','100% 100%','5% 0 0 17%','1.2% 1.5% 1.8% 1.5%')
            }else{
                setBgWidthHeight('90%','80%','100% 100%','3% auto','1.2% 1.5% 1.8% 1.5%')
            }
        break;
        case 407:
            $('.iframe').attr('src','erx5/index.html')
            $('.Logo').html('荣威 E-Rx5')
            // setBgWidthHeight('73%','65%','100% 100%','12% auto','1.1% 1.1% 1.5% 1.3%')
        break;
        case 408:
            
            $('.Logo').html('腾势 500')
        break;
        case 409:
            $('.iframe').attr('src','wles8/index.html')
            $('.Logo').html('蔚来 ES8')
        break;
    }
    addFooterTab();
    ajaxConputer();
    ajaxTool();
    ajaxVideo();
    ajaxGetData('.list2')
    $('.footerTabOvlayorTab').fadeOut();
    
    
}

// 设置 电脑 页面的数据效果
function setConputerList(data){
    for(let p in data){
        //console.log('===>>>',data);
        
        if(data[p].length == 0) {

        } else if(data[p].uid != null) {
            //console.log('===>>>111',);
            $('#'+data[p].place_name).attr('src','modelx/img/home/icon14.png')
            $('#'+data[p].place_name+'-'+data[p].place_name).attr('disabled',false)
            $('.infos .name span').html(data[p].username)
            $('.infos .studentId span').html(data[p].idnumber)
            $('.infos .classNum span').html(data[p].room_id)
           
        }
    }
}

// 设置宽高
function setBgWidthHeight(width,height,background,margin,padding){
    $('.bg').css({
        width: width,
        height: height,
        backgroundSize:background,
        margin: margin,
        padding: padding
    })
}


window.onresize = function(){
    //location.reload()
    ww = document.body.clientWidth
    var oinfo = getLocalStorage('info');
    
    
    
    if(oinfo.selectcartype != null && oinfo !=null){ 
        console.log(oinfo);
        addFooterTab()
    }
    
    
    
    // console.log(window.HTMLPackHelper);
    if(window.HTMLPackHelper != undefined){
        window.HTMLPackHelper.maximize()
    }

    $('.bg').css({
        width:'90%',
        height:'80%'
    })
    // $('.iframe').css({
    //     width:'100%',
    //     height:'100%'
    // })
}