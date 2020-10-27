// 获取系统时间---年月
 function formatMouth(){
	var date = new Date()
	return [date.getFullYear(), date.getMonth() + 1].map(formatNumber).join('-')
}

// 获取系统时间---年月日
function formatDate(){
	var date = new Date()
	return [date.getFullYear(), date.getMonth() + 1, date.getDate()].map(formatNumber).join('-')
}

// 获取系统时间---年月日时分秒
const formatTime = date => {
  var date = new Date()
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].map(formatNumber).join('-') + ' ' + [date.getHours(),date.getMinutes(),date.getSeconds()].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 将时间戳转换成时间
function timestampToTime(timestamp) {
  var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = (date.getDate() + 1 < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
  var h = (date.getHours() + 1 < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
  var m = (date.getMinutes() + 1 < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
  var s = date.getSeconds() + '0';
  return Y + M + D + h + m + s;
}

// 解决跳转按钮点击多次跳转多次的问题
function buttonClicked(self) {
  self.setData({
    buttonClicked: true
  });
  setTimeout(function () {
    self.setData({
      buttonClicked: false
    })
  }, 3000);
}

function log(msg) {
  if (!msg) return;
  if (getApp().settings['debug'])
    console.log(msg);
  let logs = wx.getStorageSync('logs') || [];
  logs.unshift(msg)
  wx.setStorageSync('logs', logs)
}
function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// 通过这个方法通过面向对象的方式模型输出
module.exports = {
  buttonClicked: buttonClicked,
}

function swichNav() {
  // this.setData({
  //   'IndexControlInfo.currentTab': e.target.dataset.current
  // })
  return false;
}

/**
 * @param {Function} func 接口
 * @param {Object} options 接口参数
 * @returns {Promise} Promise对象
*/
function promiseHandle(func, options) {
  options = options || {};
  return new Promise((resolve, reject) => {
    if (typeof func !== 'function')
      reject();
    options.success = resolve;
    options.fail = reject;
    func(options);
  });
}

// 检测手机号加身份证号
function check_phoneid(num) {
  // 电话号码正则表达式
  var myphone = /^1(3|4|5|7|8|9)\d{9}$/;
  // 身份证号正则表达式
  var myid = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
  // 判断电话输入是否为空
  if (num.length == 0) {
    // 判断如果为失去焦点事件则弹窗
    // if(isToast){
    //   wx.showToast({
    //     title: '请输入手机号！',
    //     image: '../../img/error.png',
    //     duration: 1000
    //   })
    // }
    return false;
  }
  // 判断输入的号码是否满足正则表达式
  else if (!myphone.test(num) && !myid.test(num)) {
    // // 判断如果为失去焦点事件则弹窗
    // if (isToast) {
    //   wx.showToast({
    //     title: '手机号有误！',
    //     image: '../../img/error.png',
    //     duration: 1000
    //   });-
    // }
    return false;
  }
  else {
    return true;
  }
}

// 校验民族
function check_nation(num) {
  // 名字正则表达式
  var myname = /^[\u4E00-\u9FA5]{1,20}$/; //验证姓名正则
  // 判断名字输入是否为空 判断输入的名字是否满足正则表达式
  if (!myname.test(num) || num.length == 0) {
    return false;
  }
  else {
    return true;
  }
}

// 身份证号验证
function check_id(IDcard) {
  var city = {
    11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ",
    31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ",
    43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ",
    61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外 "
  };
  var tip = "";
  var pass = true;

  //检查身份证格式是否正确（前17位为数字，后一位为数字或字母x）
  if (!(/(^[0-9]{17}([0-9]|X)$)/.test(IDcard))) {
    tip = "身份证格式错误";
    pass = false;
  }
  else if (!city[IDcard.substr(0, 2)]) {
    tip = "地址编码错误";
    pass = false;
  }
  else {
    var re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
    var arrSplit = IDcard.match(re);
    //检查生日日期是否正确
    var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
    var bGoodDay;
    bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
    if (!bGoodDay) {
      tip = "输入的身份证号里出生日期不对";
      pass = false;
    }
    //18位身份证需要验证最后一位校验位
    else {
      IDcard = IDcard.split('');
      //∑(ai×Wi)(mod 11)
      //加权因子
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      //校验位
      var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
      var sum = 0;
      var ai = 0;
      var wi = 0;
      for (var i = 0; i < 17; i++) {
        ai = IDcard[i];
        wi = factor[i];
        sum += ai * wi;
      }
      var last = parity[sum % 11];
      if (parity[sum % 11] != IDcard[17]) {
        tip = "校验位错误";
        pass = false;
      }
    }
  }
  // if (!pass) console.log(tip);
  return pass;
}

// 校验名字
function check_name(num) {
  // 名字正则表达式
  var myname = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/; //验证姓名正则
  // 判断名字输入是否为空 判断输入的名字是否满足正则表达式
  if (!myname.test(num) || num.length == 0) {
    return false;
  }
  else {
    return true;
  }
}

// 检测手机号
function check_phone(num) {
  // 电话号码正则表达式
  var myphone = /^1(3|4|5|7|8|9)\d{9}$/;
  // 判断电话输入是否为空 判断输入的号码是否满足正则表达式
  if (!myphone.test(num) || num.length == 0) {
    return false;
  }
  else {
    return true;
  }
}

// 检测邮箱
function check_email(num) {
  // 电话号码正则表达式
  var myemail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  // 判断电话输入是否为空 判断输入的号码是否满足正则表达式
  if (!myemail.test(num) || num.length == 0) {
    return false;
  }
  else {
    return true;
  }
}

// 检测密码
function check_password(num) {
  // 判断密码输入是否为空
  // var password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
  var password = /^(?![^a-zA-Z]+$)(?!\D+$).{6,32}$/;
  // 判断密码输入是否为空 判断输入的密码是否满足正则表达式
  if (!password.test(num) || num.length == 0) {
    return false;
  }
  else {
    return true;
  }
}

// 检测验证码
function check_vc(num,length) {
  var myvc = '/^[0-9]{' + length + '}$/';
  if (!myvc.test(num) || num.length < length) {
    return false;
  }
}

// 检测单位
function check_unit(num) {
  // 判断单位输入是否为空
  var myunit = /(^[\u4e00-\u9fffa-zA-Z\d\-_]{0,}([\u4e00-\u9fffa-zA-Z])$)/;
  // if (!myunit.test(num)) {
  // return false;
  // }else {
  return myunit.test(num);
  // }
}

// 检测推广码码输入是否正确函数
function check_pc(num) {
  // 判断推广码输入是否为空
  var myvc = /^[A-Z 0-9]{5}$/;
  if (!myvc.test(num) && !num.length == 0) {
    // wx.showToast({
    //   title: '请输入验证码！',
    //   icon: 'success',
    //   image: '../../img/error.png',
    //   duration: 1000
    // })
    return false;
  }
  // 判断推广码码输入长度是否为五位
  else if (num.length < 5 && num.length > 0) {
    // wx.showToast({
    //   title: '验证码至少4位',
    //   icon: 'success',
    //   image: '../../img/error.png',
    //   duration: 1000
    // })
    return false;
  }
  else {
    return true;
  }
}


// 检测绑定码输入是否正确函数
function check_bc(num) {
  // 判断绑定码输入是否为空
  var mybc = /^[A-Z a-z 0-9]{6}$/;
  if (!mybc.test(num) || num.length == 0) {
    // wx.showToast({
    //   title: '请输入绑定码！',
    //   icon: 'success',
    //   image: '../../img/error.png',
    //   duration: 1000
    // })
    return false;
  }
  // 判断绑定码输入长度是否为四位
  else if (num.length < 6) {
    // wx.showToast({
    //   title: '绑定码至少4位',
    //   icon: 'success',
    //   image: '../../img/error.png',
    //   duration: 1000
    // })
    return false;
  }
  else {
    return true;
  }
}

// 检测工号输入是否正确函数
function check_jobCode(num) {
  // 判断绑定码输入是否为空
  var mybc = /^[A-Z a-z 0-9]{0,20}$/;
  if (!mybc.test(num) || num.length == 0) {
    // wx.showToast({
    //   title: '请输入绑定码！',
    //   icon: 'success',
    //   image: '../../img/error.png',
    //   duration: 1000
    // })
    return false;
  }
  // 判断绑定码输入长度是否为四位
  else if (num.length < 6) {
    // wx.showToast({
    //   title: '绑定码至少4位',
    //   icon: 'success',
    //   image: '../../img/error.png',
    //   duration: 1000
    // })
    return false;
  }
  else {
    return true;
  }
}

// 字符串转json
function stringToJson(jsonStr) {
  jsonStr = jsonStr.replace(" ", "");
  if (typeof jsonStr != 'object') {
    jsonStr = jsonStr.replace(/\ufeff/g, "");//重点
    var jj = JSON.parse(jsonStr);
    return jj;
  }
}

// 图片地址转base64
function urlToBase(url) {
  var jj;
  wx.getFileSystemManager().readFile({
    filePath: url, //选择图片返回的相对路径
    encoding: 'base64', //编码格式
    success: res => { 
      
       jj = res.data;
      return jj;
    }
  })
  console.log(jj)
  // return jj;
}



module.exports = {
  formatTime: formatTime,
  formatMouth: formatMouth,
  formatDate: formatDate,
  buttonClicked: buttonClicked,
  check_phoneid: check_phoneid,
  check_phone: check_phone,
  check_email: check_email,
  check_id: check_id,
  check_password: check_password,
  check_vc: check_vc,
  check_bc: check_bc,
  check_name: check_name,
  stringToJson: stringToJson,
  urlToBase: urlToBase,
  check_pc: check_pc,
  check_unit: check_unit,
  check_jobCode: check_jobCode,
  check_nation: check_nation,

  guid: guid,
  log: log, 
  promiseHandle: promiseHandle,
  formatNumber: formatNumber,
  timestampToTime: timestampToTime,
}
