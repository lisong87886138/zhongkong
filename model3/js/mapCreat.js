
//选择器
function dq(selector) {
    return document.querySelector(selector);
};
var ww = document.documentElement.clientWidth;
var wh = document.documentElement.clientHeight;
dq('#container').style.width = ww+'px';
dq('#container').style.height = (wh)+'px';


var map,route,geocoder,nowAddres,driving,routePlanningPoints,polyline,passedPolyline;
var windowsArr = [];
var marker,lineArr = [];

map = new AMap.Map('container', {
    resizeEnable: true,
    center:[121.506436,31.099885],
    zoom:18
});

var m3 = new AMap.Marker({
    position: [121.506436,31.099885],
    icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png"
});
AMap.plugin(["AMap.ToolBar"],function(){
    //加载工具条
    map.addControl(new AMap.ToolBar({
        // 简易缩放模式，默认为 false
        liteStyle: true,
        position:'RT',
        offset:new AMap.Pixel(18, 100)
    }));  
});

map.add(m3);

// nowLocation();
inputSearch();



// 定位
function nowLocation(){
    AMap.plugin(['AMap.Geolocation'], function() {
        var geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 20000,          //超过10秒后停止定位，默认：5s
            buttonPosition:'RB',    //定位按钮的停靠位置
            buttonOffset: new AMap.Pixel(14, 130),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
            // noGeoLocation:3,
            // GeoLocationFirst:true
        });
        map.addControl(geolocation);
        console.log(geolocation);
        

        geolocation.getCurrentPosition(function(status,result){
            console.log(status,result);
            
            if(status=='complete'){
                nowAddres = result;
                // onComplete(result)
            }else{
                // onError(result)
            }
        });
    });
    //解析定位结果
    function onComplete(data) {
        document.getElementById('status').innerHTML='定位成功'
        var str = [];
        str.push('定位结果：' + data.position);
        str.push('定位类别：' + data.location_type);
        if(data.accuracy){
            str.push('精度：' + data.accuracy + ' 米');
        }//如为IP精确定位结果则没有精度信息
        str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
        document.getElementById('result').innerHTML = str.join('<br>');
    }
    //解析定位错误信息
    function onError(data) {
        document.getElementById('status').innerHTML='定位失败'
        document.getElementById('result').innerHTML = '失败原因排查信息:'+data.message;
    }


    //实时路况图层
    var trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 10
    });

    trafficLayer.setMap(map);

    var isVisible = false;
    function toggle() {
        if (isVisible) {
            trafficLayer.hide();
            isVisible = false;
        } else {
            trafficLayer.show();
            isVisible = true;
        }
    }
}

// 搜索input
function inputSearch(){
    var autoOptions = {
        input: "tipinput"
    };
    var auto = new AMap.Autocomplete(autoOptions);
    var placeSearch = new AMap.PlaceSearch({
        map: map
    });  
    //构造地点查询类
    AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
    function select(e) {
        
        placeSearch.setCity(e.poi.adcode);
        placeSearch.search(e.poi.name);  //关键字查询查询
        
        drivingPointPoute(e.poi.location.lng,e.poi.location.lat)
    }
}

//地点 驾车路线规划
function drivingPoute(address){
    if(driving){
        driving.clear();
    }
    //构造路线导航类
    driving = new AMap.Driving({
        map: map
    }); 

    // 根据起终点名称规划驾车导航路线
    driving.search([
        {keyword: `${nowAddres.formattedAddress}`},
        {keyword: `${address}`}
    ], function(status, result) {
        console.log(status,result);
        
        // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
        if (status === 'complete') {
            console.log('绘制驾车路线完成')
        } else {
            console.log('获取驾车数据失败：' + result)
        }
    });

}

//地点 经纬度 驾车路线规划
function drivingPointPoute(lng,lat){
    if(driving){
        driving.clear();
        stopAnimation();
        map.clearMap()
    }
    //构造路线导航类
    driving = new AMap.Driving({
        map: map,
        policy: AMap.DrivingPolicy.LEAST_TIME
    }); 
    // 根据起终点经纬度规划驾车导航路线
    driving.search(
        new AMap.LngLat(nowAddres.position.lng,nowAddres.position.lat), //当前位置
        new AMap.LngLat(lng, lat), //终点

        function(status, result) {
            console.log("=====>",status,result);
            
            // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
            routePlanningPoints = result.routes[0].steps
            // console.log(routePlanningPoints);
        
            if (status === 'complete') {
                    console.log('绘制驾车路线完成')
                    
                    drivingSimulate(routePlanningPoints)
                } else {
                    console.log('获取驾车数据失败：' + result)
                }
            }
        
        
    );
    
}

//声控方法
function voicePlan(address){
    var list = document.getElementsByClassName('amap-sug-result');
    list[0].innerHTML = "";
    var autoOptions = {
        city: '全国'
    }
    var autoComplete = new AMap.Autocomplete(autoOptions);
    autoComplete.search(address, function(status, result) {
        console.log(status,result);
        searchData = result;
        var searchHtml ="";
        for(let i=0;i<result.tips.length;i++){
            searchHtml += `<div class="auto-item" id="amap-sug${i}" data-lng="${result.tips[i].location.lng},${result.tips[i].location.lat}">${result.tips[i].name}<span class="auto-item-span">${result.tips[i].district}</span></div>`
        }
        //console.log(searchHtml);
        
        // 搜索成功时，result即是对应的匹配数据
        list[0].classList.add('db');
        list[0].innerHTML = searchHtml;
    })
}





// 模拟实时路线
function drivingSimulate(position){  
    lineArr = [];
    for(let i = 0; i<position.length;i++){

        for(let j=0;j<position[i].path.length;j++){
            var path = [position[i].path[j].lng,position[i].path[j].lat];
            
            
            // lineArr 定义模拟导航路线  
            lineArr.push(path)
        }
        
    }
    // console.log(lineArr);

    marker = new AMap.Marker({
        map: map,
        position: [lineArr[0][0],lineArr[0][1]],
        icon: "https://webapi.amap.com/images/car.png",
        offset: new AMap.Pixel(-26, -13),
        autoRotation: true,
        angle:-90,
        extData:{
            id:2
        }
    });

    // 绘制轨迹
    polyline = new AMap.Polyline({
        map: map,
        path: lineArr,
        showDir:true,
        strokeColor: "#28F",  //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6,      //线宽
        // strokeStyle: "solid"  //线样式
    });

    passedPolyline = new AMap.Polyline({
        map: map,
        // path: lineArr,
        strokeColor: "#AF5",  //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6,      //线宽
        // strokeStyle: "solid"  //线样式
        extData:{
            id:1
        }
    });
    let i=0;
    marker.on('moving', function (e) {
        // console.log('=====>',e);
        // console.log('=====>',(i++),e.passedPath[e.passedPath.length-1].lng,e.passedPath[e.passedPath.length-1].lat);
        passedPolyline.setPath(e.passedPath);
    });
    map.setFitView();
    
    
}

function startAnimation () {
    marker.moveAlong(lineArr, 200);
}

function pauseAnimation () {
    marker.pauseMove();
}

function resumeAnimation () {
    marker.resumeMove();
}


function stopAnimation () {
    marker.stopMove();
}


function monitor(lng,lat){

}