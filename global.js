

//公共函数库

/**
 * 将那些页面加载完毕时执行的函数创建为一个队列
 * 
 * @param function func  页面加载完所需要执行的函数
 * 
 */ 
function addLoadEvent(func) {
	var oldonload = window.onload;
	//判断队列中是否有函数了
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}