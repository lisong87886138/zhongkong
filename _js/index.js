//获取localStorage
var info;
var ww = document.body.clientWidth
// info.group_id 1学生 没有故障设置


//info.group_id 2 老师 有故障设置
// 获取cookie
function getLocalStorage(key){
    return $.parseJSON(localStorage.getItem(key));
}
// 设置cookie
function setLocalStorage(key,data){
    return localStorage.setItem(key,data);
}
// 移除cookie
function removeLocalStorage(key){
    return localStorage.removeItem(key);
}


// 底部tab切换
var footerTab = '';
indexBool = false;

function addFooterTab() {
    info = getLocalStorage('info');
    footerTab ='';
    if(ww >1080){

    }else{
        footerTab += `
            <img class="footerTabImg" src="modelx/img/home/icon5.png" alt="">
        `
    }

    footerTab += `
        
        <div class="swiper-container footerTabUl">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="modelx/img/home/icon1.png" alt=""></div>
                <div class="swiper-slide"><img src="modelx/img/home/icon2.png" alt=""></div>
                <div class="swiper-slide"><img src="modelx/img/home/icon3.png" alt=""></div>
                <div class="swiper-slide"><img src="modelx/img/home/icon4.png" alt=""></div>
        `
        if(info.group_id == 2){
            footerTab += `    
                <div class="swiper-slide"><img src="modelx/img/home/icon6.png" alt=""></div>
            `
        }
        footerTab += `
               
            </div>
        </div>
    `
    // <div class="swiper-button-next"></div>
    // <div class="swiper-button-prev"></div>
    dq('.footerTab').innerHTML = footerTab

   

    
    if(ww > 1080){
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: info.group_id>1?5:4,
            // loop: true,
            direction: 'vertical',
            // nextButton: '.swiper-button-next',
            // prevButton: '.swiper-button-prev',
        });
    }else{
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: info.group_id>1?5:4,
            // loop: true,
            // nextButton: '.swiper-button-next',
            // prevButton: '.swiper-button-prev',
        });
    }
}

$('.footerTab').on('click', '.swiper-slide', function () {
    
    info = getLocalStorage('info')
    // let _this = this
    // let index = _this.getAttribute('data-swiper-slide-index')
    let index = $(this).index()
    console.log(index);
    
    switch (index) {
        case 0:
            $('.footerTabOvlayorTab').fadeOut(500);
            player.videoPause()
            break;
        case 1:
            $('.footerTabOvlayorTab').eq(0).fadeIn(500).siblings().fadeOut(500);
           
            if(info.operation_id){
                console.log('------)(------',info.operation_id);
                
                $('.list1').show()
                $('.sousuoList').hide()
                $('.btnTabSBtn1').addClass('active')
            }else{
                $('.sousuoList').show()
                // $('.btnTabSBtn').fadeOut(0)
            }
            player.videoPause()
            break;
        case 2:
            $('.footerTabOvlayorTab').eq(1).fadeIn(500).siblings().fadeOut(500);
            break;
        case 3:
            $('.footerTabOvlayorTab').eq(2).fadeIn(500).siblings().fadeOut(500);
            $('.tab4Box3').removeClass('dn')
            player.videoPause()
            break;
        case 4:
            $('.footerTabOvlayorTab').eq(3).fadeIn(500).siblings().fadeOut(500);
            player.videoPause()
            break;
      
    }

})




// 页面加载 操作手册数据
var ajaxBookUrl = ApiUrl + '/steps?client=3'
var ajaxToolUrl = ApiUrl + '/tools?client=3'
var ajaxFaultUrl = ApiUrl + '/place?client=3'

var actionBook = 'getsteps'
var actionVideo = 'getvideo'
var actionTool = 'gettools'
var actionFault = 'getlist'

// var operation_id = info.operation_id
// var cartype = info.selectcartype
var operation_id = ''
var cartype = ''
var ajaxheader = {
    "Content-Type": "application/json;charset=utf-8",
    "Authorization": 'Token 5b60f3e0114a14cb7a5ff6104e7f1eb2'
}





var dataList = [];
var dataList2 = [];
var videoList = [];
var toolList = [];
var dataHtml = '';
var dataHtml2 = ''
var videoHtml = '';
var videoUrl = '';
var toolHtml = '';
var tab4btns = '';
var operationList = '';
var btnTabSList = '';
var conputerList = [];
var conputerHtml = '';


function ajaxGetData(className){

    // info = $.parseJSON(getLocalStorage("info"));
    info = getLocalStorage('info');
    var params = {
        "action": actionBook,
        "operation_id": info.operation_id,
        "cartype": info.selectcartype
    };

    $.ajax({
        headers: ajaxheader,
        type: "POST",
        url: ajaxBookUrl,
        async:false, 
        data: JSON.stringify(params),
        success: function (response) {
            dataList = response
            // console.log('==>',dataList);
            addDataInHtml(className, dataList)
        },
        error: function (response) {
            console.log('fail', response)
        }
    });
}



function addDataInHtml(className, data) {
    dataHtml = `<div class="tab-title">${data.title}</div>`;
    operationList = '';
    btnTabSList = '';
    for (let i = 0; i < data.manual.length; i++) {
        dataHtml += `
            <div class="listItem listItem-first highlight" data-index="${i}">
                
                <div class="listItemContent">
                    <div class="listItemContent-content">
                        <div class="titleBox">
                            <div class="text815">${i<9? '0'+(i+1):i+1}</div>
                            <div class="textBottom"></div>
                            <div class="time-title">${data.manual[i].steps[0].title}</div>
                        </div>
                        <div class="time-contont">
        `
        for (let j = 0; j < data.manual[i].steps.length; j++) {
            if (data.manual[i].steps.length == 0) {
                break
            }
            dataHtml += `
                ${data.manual[i].steps[j].content}
            `
        }
        dataHtml += `  
                </div>
                <div class="time-img">  
        `
        for (let k = 0; k < data.manual[i].steps.length; k++) {
            for (let l = 0; l < data.manual[i].steps[k].images.length; l++) {
                if (data.manual[i].steps[k].images.length == 0) {
                    break
                }
                dataHtml += `  
                    <img src="${data.manual[i].steps[k].images[l]}" />
                `
            }
        }
        dataHtml += `  
                </div>
                </div>
            </div>
        </div>
        `
    }
   

    for (let i = 0; i < data.operation.length; i++) {
        operationList += `
                <li>
                <div>${data.operation[i].class_name}</div>
                <div class="sousuoListBtns">
        `
        for (let j = 0; j < data.operation[i].lists.length; j++) {
            if(info.operation_id == data.operation[i].lists[j].operation_id){
                operationList += `
                    <div data-operation="${data.operation[i].lists[j].operation_id}" data-index="${j}">${data.operation[i].lists[j].name}</div>
                `
            }else{
                operationList += `
                    <span class="sousuoListBtn" data-operation="${data.operation[i].lists[j].operation_id}" data-index="${j}">${data.operation[i].lists[j].name}</span>
                `
            }
            
        }
        operationList += `
                </div>
            </li>
        `
    }
    
    
    btnTabSList += `
        ${data.operation[0].lists[0].name}
    `

    $('.sousuoList ul').html(operationList)
    if(className == '.list2'){
        $('.btnTabSBtn2').html(btnTabSList)
    }else{
        $(className).html(dataHtml);
        $(className).fadeIn(500).siblings().fadeOut(0);
        $('.btnTabSBtn1').html(btnTabSList)
        $('.btnTabSBtn1').fadeIn(500)
        $('.btnTabSBtn1').addClass('active').siblings().removeClass('active')
    }
    

    
}


$('.btnTab').on('click', '.icon-sousuo', function () {
    $('.sousuoList').fadeIn()
})

$('.sousuoList').on('click', '.sousuoListBtn', function () {
    
    $('.btnTabSBtn2').html($(this).context.innerText)
    $('.btnTabSBtn2').fadeIn(500)
    $('.sousuoList').fadeOut(0)
    $('.list2').fadeIn(500).siblings().fadeOut(0)
    $('.btnTabSBtn2').addClass('active').siblings().removeClass('active')
    info = getLocalStorage('info');
    var params2 = {
        "action": actionBook,
        "operation_id": $(this).data('operation'),
        "cartype": info.selectcartype
    };

    $.ajax({
        headers: ajaxheader,
        type: "POST",
        url: ajaxBookUrl,
        async:false, 
        data: JSON.stringify(params2),
        success: function (response) {
            dataList2 = response
            // console.log(dataList2)
            addDataInHtml2('.list2', dataList2)
        },
        error: function (response) {
            console.log('fail', response)
        }
    });

})
mui('.btnTabS').on('tap', '.btnTabSBtn', function () {
    $(this).addClass('active').siblings().removeClass('active')
    $('.list').eq($(this).index()).fadeIn(500).siblings().fadeOut(0)
})


function addDataInHtml2(className, data) {
    dataHtml2 = `<div class="tab-title">${data.title}</div>`;
    for (let i = 0; i < data.manual.length; i++) {
        dataHtml2 += `
            <div class="listItem listItem-first highlight" data-index="${i}">
                <div class="listItemContent">
                    <div class="listItemContent-content">
                        <div class="titleBox">
                            <div class="text815">${i<9? '0'+(i+1):i+1}</div>
                            <div class="textBottom"></div>
                            <div class="time-title">${data.manual[i].steps[0].title}</div>
                        </div>
                        <div class="time-contont">
        `
        for (let j = 0; j < data.manual[i].steps.length; j++) {
            if (data.manual[i].steps.length == 0) {
                break
            }
            dataHtml2 += `
                ${data.manual[i].steps[j].content}
            `
        }
        dataHtml2 += `  
                </div>
                <div class="time-img">  
        `
        for (let k = 0; k < data.manual[i].steps.length; k++) {
            for (let l = 0; l < data.manual[i].steps[k].images.length; l++) {
                if (data.manual[i].steps[k].images.length == 0) {
                    break
                }
                dataHtml2 += `  
                    <img src="${data.manual[i].steps[k].images[l]}" />
                `
            }
        }
        dataHtml2 += `  
                </div>
                </div>
            </div>
        </div>
        `
    }
    $(className).html(dataHtml2);
}

$('.sousuoListClose').click(function(){
    console.log($('.list2').css('display'));
    if($('.list2').css('display') == "none"){
        $('.sousuoList').fadeOut(0)
        $('.tab2').fadeOut(0)
    }else{
        $('.sousuoList').fadeOut(0)
    }
    
})


// 视频tab
//切换视频
var player;
$('.videoList').on('click', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active')
})
function ajaxVideo(){
    info = getLocalStorage('info');
    var videoParams = {
        "action": actionVideo,
        "operation_id": info.operation_id,
        "cartype": info.selectcartype
    }

    $.ajax({
        headers: ajaxheader,
        type: "POST",
        url: ajaxBookUrl,
        data: JSON.stringify(videoParams),
        success: function (response) {
            videoList = response
            // console.log('--->',videoList)
            videoUrl = ApiUrl + videoList.video[0].video
            addVideoHtml(videoList)
        },
        error: function (response) {
            console.log('fail', response)
        }
    });
}


function addVideoHtml(data) {
    videoHtml = '';
    for (let i = 0; i < data.video.length; i++) {
        if (i == 0) {
            videoHtml += `
                <li class="active" data-src="${data.video[i].video}">${data.video[i].name}</li>
            `
        } else {
            videoHtml += `
                <li class="" data-src="${data.video[i].video}">${data.video[i].name}</li>
            `
        }
    }
    $('.videoListUl').html(videoHtml)



    var videoObject = {
        container: '.video', //“#”代表容器的ID，“.”或“”代表容器的class
        variable: 'player', //该属性必需设置，值等于下面的new chplayer()的对象
        // poster:'pic/wdm.jpg',//封面图片
        video: videoUrl //视频地址
    };
    player = new ckplayer(videoObject);
}
$('.videoListUl').on('click', 'li', function () {
    videoUrl = ApiUrl + $(this).data('src')
    var videoObject = {
        container: '.video', //“#”代表容器的ID，“.”或“”代表容器的class
        variable: 'player', //该属性必需设置，值等于下面的new chplayer()的对象
        // poster:'pic/wdm.jpg',//封面图片
        video: videoUrl //视频地址
    };
    player = new ckplayer(videoObject);
})


// 工具清单

$('.tab4Btns').on('click', 'div', function () {
    $(this).addClass('active').siblings().removeClass('active')
    $('.tab4Box').children().eq($(this).index()).fadeIn(500).siblings().fadeOut(0)
})

function ajaxTool(){
    var toolParams = {
        "action": actionTool
    }
    $.ajax({
        headers: ajaxheader,
        type: "POST",
        url: ajaxToolUrl,
        data: JSON.stringify(toolParams),
        success: function (response) {
            toolList = response.data
            addToolHtml(toolList)
    
        },
        error: function (response) {
            console.log('fail', response)
        }
    });
}




function addToolHtml(data) {
    tab4btns='';
    toolHtml='';
    for (let i = 0; i < data.length; i++) {
        if (i == 0) {
            tab4btns += `
                <div class="active">${data[i].title}</div>
            `
        } else {
            tab4btns += `
            <div class="">${data[i].title}</div>
        `
        }

        toolHtml += `
            <div class="tab4Box${i+1} dn">
            <ul>
        `
        for (let j = 0; j < data[i].value.length; j++) {
            toolHtml += `
                    <li class="">
                    <div class="imgBox">
                        <img src="${data[i].value[j].path}" alt="">
                        <span>${data[i].value[j].title}</span>
                    </div>
                    <div class="textBox">
                        <span class="material">材质</span>
                        <div class="method-text">${data[i].value[j].content}</div>
                        <span class="use-method">使用方法</span>
                        <div class="method-text">${data[i].value[j].content}</div>
                    </div>
                </li>
                `
        }

        toolHtml += `        
            </ul>
        </div>
        `
    }
    $('.tab4Btns').html(tab4btns)
    $('.tab4Box').html(toolHtml)
}


// 故障设置
// ajax电脑列表
function ajaxConputer(){
    var paramsFault = {
        "action": actionFault
    };
    $.ajax({
        headers: ajaxheader,
        type: "POST",
        url: ajaxFaultUrl,
        async:false, 
        data: JSON.stringify(paramsFault),
        success: function (response) {
            conputerList = response
            
            // //console.log(conputerList)
            // var stations ='';
            // conputerHtml="";
            // for (let i = 0; i < conputerList.data.length; i++) {
            //     conputerHtml += `
            //         <div class="conputer" data-id="${conputerList.data[i].id}">
            //             <img id="${conputerList.data[i].place_name}" data-state="0" src="modelx/img/home/icon10.png" alt="">
            //             <div>
            //                 <span class="point"></span><span>${conputerList.data[i].place_name}</span>
            //             </div>
            //         </div>
            //     `
            //     stations +=`
            //         <span><input type="checkbox" id="${conputerList.data[i].place_name}-${conputerList.data[i].place_name}" disabled="true" data-id="${conputerList.data[i].place_name}"><label for="${conputerList.data[i].place_name}-${conputerList.data[i].place_name}">${conputerList.data[i].place_name}</label></span>
            //     `
            // }
            // $('.fault').html(conputerHtml);
            // var faults = `
            //     <div>驻车系统故障</div>
            //     <div>驻车系统故障2</div>
            //     <div>驻车系统故障3</div>
            //     <div>驻车系统故障4</div>
            //     <div>驻车系统故障5</div>
            //     <div>驻车系统故障6</div>
            // `
            // $('.selectFaults').html(faults)
            // $('.stationFaults').html(stations)

        },
        error: function (response) {
            console.log('fail', response)
        }
    });
}





// 切换
var selectIndex = 0
$('.tab5 .selectBox').on('click','div',function(){
    $(this).addClass('active').siblings().removeClass('active')
    selectIndex = $(this).index()
})

// 确定
$('.selectOk').click(function () { 

    console.log($('.selectBox div')[selectIndex].innerText);
    

});

// 取消故障
$('.conputer-info .faultBtn').click(function(){

})


