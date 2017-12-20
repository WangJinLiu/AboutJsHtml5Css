//判断两个标签其中一个是否超出范围
function judgeBorder(son,father){
	if(son.offsetLeft<=0){
		son.style.left=0;
	}
	// father.offsetWidth-son.offsetWidth
	if(son.offsetLeft>=500){
		son.style.left=500+"px";
		changeBackPosition(father);
	}


}
function changeBackPosition(element){
	//获取当前的背景图片位置(获得计算后样式获得)
	var a=getValue(element,"backgroundPosition");
	console.log(a);//a是一个字符串
	// element.style.backgroundPosition=
	var value=a.replace(/px/g,"");
	var arr=value.split(" ");
	var v_x=Number(arr[0]);
	v_x-=5;
	element.style.backgroundPosition=v_x+"px 0";


}
function getValue(element,key){
	if(element.currentStyle){
		return element.currentStyle[key];

	}else{
		return getComputedStyle(element,null)[key];
	}
}