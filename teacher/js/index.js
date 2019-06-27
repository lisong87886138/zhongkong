// 获取cookie
function getLocalStorage(key) {
  return $.parseJSON(localStorage.getItem(key));
}
// 设置cookie
function setLocalStorage(key, data) {
  return localStorage.setItem(key, data);
}
// 移除cookie
function removeLocalStorage(key) {
  return localStorage.removeItem(key);
}



var selectVal;
var actionFault = 'getlist'
var conputerList = [];
var conputerHtml = '';
var ajaxheader = {
  "Content-Type": "application/json;charset=utf-8",
  "Authorization": 'Token 5b60f3e0114a14cb7a5ff6104e7f1eb2'
}
var ajaxFaultUrl = ApiUrl + '/place?client=3'
// 故障设置
// ajax电脑列表
function ajaxConputer() {
  var paramsFault = {
    "action": actionFault
  };
  $.ajax({
    headers: ajaxheader,
    type: "POST",
    url: ajaxFaultUrl,
    async: false,
    data: JSON.stringify(paramsFault),
    success: function (response) {
      conputerList = response

      //console.log(conputerList)
      var stations = '';
      conputerHtml = "";
      for (let i = 0; i < conputerList.data.length; i++) {
        conputerHtml += `
                  <div class="conputer" data-id="${conputerList.data[i].id}">
                      <img id="${conputerList.data[i].place_name}" data-state="0" src="../images/icon10.png" alt="">
                      <div>
                          <span class="point"></span><span>${conputerList.data[i].place_name}</span>
                      </div>
                  </div>
              `
        stations += `
                  <span><input type="checkbox" id="${conputerList.data[i].place_name}-${conputerList.data[i].place_name}" disabled="true" data-id="${conputerList.data[i].place_name}"><label for="${conputerList.data[i].place_name}-${conputerList.data[i].place_name}">${conputerList.data[i].place_name}</label></span>
              `
      }
      $('.fault').html(conputerHtml);
      var faults = `
              <div>驻车系统故障</div>
              <div>驻车系统故障2</div>
              <div>驻车系统故障3</div>
              <div>驻车系统故障4</div>
              <div>驻车系统故障5</div>
              <div>驻车系统故障6</div>
          `
      $('.selectFaults').html(faults)
      $('.stationFaults').html(stations)

    },
    error: function (response) {
      console.log('fail', response)
    }
  });
}

ajaxConputer()

// 点击电脑
var x, y;
var ww = document.body.clientWidth
var wh = document.body.clientHeight
$('.fault').click(function () {
  $('.selectFaults').fadeOut(0)
  $('.stationFaults').fadeOut(0)
})
$('.fault').on('click', '.conputer img', function () {
  var _this = this
  // console.log(_this.getAttribute('data-state'));
  $('.selectFaults').fadeOut(0)
  $('.stationFaults').fadeOut(0)

  $('.infos .title').html(selectVal)

  var name = _this.getAttribute('data-name')
  var idNumber = _this.getAttribute('data-idnumber')
  var grade_name = _this.getAttribute('data-grade_name')
  var login = _this.getAttribute('data-login')

  $('.name span').html(name)
  $('.studentId span').html(idNumber)
  $('.classNum span').html(grade_name)

  

  if (_this.getAttribute('data-state') == "1") {
    $('.conputer-info').fadeOut(0)
    x = $(this).offset().left;
    y = $(this).offset().top;
    console.log('----', ww, wh, x, y)
    $('.conputer-info').css({
      'top': y < (wh / 2) ? y + 30 : y - 180,
      'left': x < (ww / 2) ? x + 40 : x - 250
    })
    $('.conputer-info').fadeIn(500)
  } else {
    $('.conputer-info').fadeOut(0)
    mui.alert(login>0?'该电脑未设置故障':'该电脑未登录', '', function () {});
    return
  }



})

$('.infoClose').click(function () {
  $('.conputer-info').fadeOut(0)
})

// 选择故障 ，选择工位 确认
$('.selectFault .disJianTou').click(function () {

  $('.selectFaults').fadeIn(500);
  $('.stationFaults').fadeOut(0);
});

$('.station .disJianTou').click(function () {
  $('.stationFaults').fadeIn(500);
  $('.selectFaults').fadeOut(0);
});

$('.selectFaults').on('click', 'div', function () {

  // console.log($(this).context.innerText)
  $(this).addClass('active').siblings().removeClass('active')
  $('.selectFault .disJianTou').children().eq(0).html($(this).context.innerText)
  $('.selectFaults').fadeOut(500);
});


Array.prototype.indexOf = function (val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};

Array.prototype.remove = function (val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};
var selectConputerInput = [];
$('.stationFaults').on('change', 'input', function () {
  // console.log(selectConputerInput);
  if ($(this).context.checked) {
    selectConputerInput.push($(this).data('id'))
  } else {
    selectConputerInput.remove($(this).data('id'))
  }
  // console.log(selectConputerInput);
});

// 确定
$('.selectOk').click(function (e) {

  selectVal = $('.selectFault .disJianTou')[0].innerText


  console.log(selectVal)

  if (selectVal == '选择故障类型') {
    mui.alert('请选择故障类型', '', function () {});
    return
  }

  if (selectConputerInput.length == 0) {
    mui.alert('请选择工位', '', function () {});
    return
  }

  for (let i = 0; i < selectConputerInput.length; i++) {
    $('#' + selectConputerInput[i]).attr('src', '../images/icon11.png')
    $('#' + selectConputerInput[i]).attr('data-state', '1')
  }
  // // var textVal = $('.selectFault .disJianTou').children().eq(0).html($(this).context.innerText)
  // $('.stationFaults').fadeOut(500);




  $('.stationFaults').fadeOut(0)
  $('.selectFaults').fadeOut(0)

});

// 取消故障
$('.conputer-info .faultBtn').click(function () {
  $('.conputer-info').fadeOut(0)
})