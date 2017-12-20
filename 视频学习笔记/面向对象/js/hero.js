// 目的：创建一个英雄类的构造函数，在这个函数里拥有所有马里奥的功能
// ——————————————————————————————————————————————————————————
// 形参说明
// selector:英雄选择器 required（必选的）
// moveFn:移动监听函数 optional(可选的)
// maxTop跳动的最大高度（距离现在英雄的高度）
// ——————————————————————————————————————————————————————————
// Hero 属性说明
// element代表标签  
// timer 左右移动计时器，
// direction 移动方向默认向右   
// move(fn)移动计时器函数开始  
// stop(fn)停止左右移动计时器
// maxTop跳动的最大高度（距离现在英雄的高度）
//jump(fn):跳动函数
//jumpTimer:跳动定时器
function Hero(obj){
	this.element = document.querySelector(obj.selector);
	this.timer=null;
	this.direction="right";//left代表向左，right代表向右
	this.maxTop=obj.maxTop?obj.maxTop:100;
	this.currentTop=this.element.offsetTop;
	this.tapCapCount=0;//点击空格的次数
	this.move=function(){
		this.stop();
		var offValue=this.direction=="right"?5:-5;
		var temp=this;
		this.timer=setInterval(function(){
			var offLeft=temp.element.offsetLeft;
			temp.element.style.left=offLeft+offValue+"px";
			if(obj.moveFn){
				// obj.moveFn(temp);
				obj.moveFn.call(temp);//改变this指向

			}
		},10);

	}
	this.stop=function(){
		clearInterval(this.timer);
	}
	this.jump=function(){
		this.tapCapCount++;
		if(this.tapCapCount>2){
			return;
		}
		clearInterval(this.jumpTimer);
		var temp=this;
		var value=-5;
		var currentTop=this.element.offsetTop;
		this.jumpTimer=setInterval(function(){
			var nowTop=temp.element.offsetTop;
			temp.element.style.top=nowTop+value+'px';
			if(Math.abs(temp.element.offsetTop-currentTop)>=temp.maxTop){
				value=5;

			}
			if(temp.element.offsetTop==temp.currentTop&&value>0){
				temp.tapCapCount=0;
				clearInterval(temp.jumpTimer);


			}
		},10);
	}
	
}