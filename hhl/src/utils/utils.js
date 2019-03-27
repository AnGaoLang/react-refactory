function getfirstueditor(str) {
	var str1 = str.indexOf(" ", 1);
	var str2 = str.substr(1, str1 - 1);
	var str3 = str2 + ">";
	var str4 = "/" + str2 + ">";
	var str5 = "</" + str2 + ">";
	var str6 = str.indexOf(str5, str1);
	var str7 = str.substr(0, str6);
	var str8 = str7 + str5;
	return str8;
}

//ajax提交统一错误
function error(result) {
	errorAlert("系统错误！");
}
//验证是否是验证码
function isVerify(str){
    var reg=/^[0-9]{4}$/;  
	return reg.test(str);
}
//验证是否是手机号
function isMobile(sMobile){
    var reg=/^1[0-9]{10}$/;  
	return reg.test(sMobile);
}
/*密码字母或者是数字，也可以是组合，6-20位*/
function isPassword(str){
    var reg =/^[A-Za-z0-9]{6,20}$/;
    return reg.test(str);
}
/*校验是否中文名称组成 */
function isZhName(str) {
    var reg=/^[\u4E00-\u9FA5]{2,10}$/;   /*定义验证表达式*/
    return reg.test(str);     /*进行验证*/
}
/*校验是否是链接 */
function isUrl(str) {
	var reg = /^(http:\/\/|^https:\/\/|^\/\/)((\w|=|\?|\.|\/|&|-)+)/g;   /*定义验证表达式*/
    return reg.test(str);     /*进行验证*/
}
//阻塞js
function sleep(n) {
	var start = new Date().getTime();
	while (true)
		if (new Date().getTime() - start > n)
			break;
}
//是否是Json字符串
function isJsonString(str) {  
    try {  
        if (typeof(JSON.parse(str)) == "object") {  
            return true;  
        }  
    } catch(e) {  
    }  
    return false;  
}
function objectDateToString(obj, type) {
	switch (type) {
	case "onlyDate":
		return obj.year + "-" + obj.monthValue + "-" + obj.dayOfMonth;
		break;
	case "dateTime":
		return obj.year + "-" + obj.monthValue + "-" + obj.dayOfMonth + " " + obj.hour + ":" + obj.minute;
		break;
	case "dateTimeSecond":
		return obj.year + "-" + obj.monthValue + "-" + obj.dayOfMonth + " " + obj.hour + ":" + obj.minute + ":" + obj.second;
		break;
	default:
		return obj.year + "-" + obj.monthValue + "-" + obj.dayOfMonth + " " + obj.hour + ":" + obj.minute;
		break;
	}
}

function fileSizeToString(fileSize) {
	if (fileSize >= 1024 * 1024 * 1024 * 1024) {
		return (fileSize / 1024 / 1024 / 1024 / 1024).toFixed(2)+'T';
	} else if (fileSize >= 1024 * 1024 * 1024) {
		return (fileSize / 1024 / 1024 / 1024).toFixed(2)+'G';
	} else if (fileSize >= 1024 * 1024) {
		return (fileSize / 1024 / 1024).toFixed(2)+'M';
	} else if (fileSize >= 1024) {
		return (fileSize / 1024).toFixed(2)+'K';
	} else {
		return fileSize+'字节';
	}
}

function showLoading(){
    var d = document.createElement("DIV");
    d.id = "shadowDiv";
    document.body.insertBefore(d, document.body.firstChild);
    d.innerHTML='<div class="loadingbg" >\n' +
    ' <svg version="1.1" id="loader-1" xmlns="s="http://www.w3.org/2000/svg" xm" xmlns:xlink="k="http://www.w3.org/1999/xlink" x=" x="0px" y="0px"'+
    ' width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">'+
    ' <path opacity="0.2" fill="#fff" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946'+
    ' s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634'+
    ' c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>'+
    ' <path fill="#fff" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0'+
    ' C22.32,8.481,24.301,9.057,26.013,10.047z">'+
    ' <animateTransform attributeType="xml"'+
    '  attributeName="transform"'+
    '  type="rotate"'+
    '  from="0 20 20"'+
    '  to="360 20 20"'+
    '  dur="0.5s"'+
    '  repeatCount="indefinite"/>'+
    ' </path>'+
    ' </svg>'+
    ' </div>';
    d.style.display='flex';
    d.style.height=$(window).height();
}
function hideLoading(){
    var shadowDiv = document.getElementById("shadowDiv");
    shadowDiv.parentNode.removeChild(shadowDiv);
}

export { getfirstueditor, error, isVerify, isMobile, isPassword, isZhName, isUrl, sleep, isJsonString, objectDateToString, fileSizeToString, showLoading, hideLoading}