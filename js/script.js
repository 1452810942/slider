//封装一个getElementById方法
function byId(id){
	if(typeof(id) === "string"){
		return document.getElementById(id);
	}else{
		return id;
	}
}
//全局变量
var timer=null,
	timer1=null,
    index = 0,
	banner = byId("banner").getElementsByTagName("div"),
	span = byId("dots").getElementsByTagName("span"),
	content = byId("menu-content"),
	menu = content.getElementsByClassName("menu-inner"),
	sideBar = byId("sideBar").getElementsByTagName("div"),
	sideBar1 = byId("sideBar"),
	first = document.getElementsByClassName("button")[0],
	second = document.getElementsByClassName("button")[1],
	len = banner.length;
	len1 = sideBar.length;
//3秒后换图
function slideImg(){
	// 上一张按钮
	first.onclick = function(){
		index --;
		if(index < 0){
			index = 2;
		}
		changeImg();
	}
	// 下一张按钮
	second.onclick = function(){
		index ++;
		if(index >= len){
			index = 0;
		}
		changeImg();
	}
	// 圆点
	var main = byId("main");
	for (var j = 0; j < len; j++){
		span[j].id = j;
		span[j].onclick = function(){
			index = this.id;
			changeImg();
		}
	
	}
	main.onmouseover = function(){
		if(timer) clearInterval(timer);
	}
	main.onmouseout = function(){
		timer = setInterval(function(){
			index++;
			if(index >= len){
				index = 0;
			}
			changeImg();
		},3000);
	}
	main.onmouseout();
	// 弹出菜单
	for(var i = 0;i < len1;i ++){
		sideBar[i].setAttribute("data-index",i);
		sideBar[i].onmouseover = function(){
			var index1 = this.getAttribute("data-index");
			for(var j=0;j < len1;j++){
				menu[j].style.display = "none";
			}
			content.className = "menu-content";
			menu[index1].style.display = "block";
		}
		sideBar[i].onmouseout = function(){
			
				content.className = "hide";

		}

		
	}


}
function changeImg(){

	for (var i = 0; i < len; i++) {
		banner[i].style.display = "none";
		span[i].className = "";
	}	
	banner[index].style.display = "block";
	span[index].className = "active";
}
slideImg();
