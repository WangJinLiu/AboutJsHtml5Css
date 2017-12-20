//创建一个构造函数，hero所有的行为动作都在里面
function Hero(obj){
	//获取标签
	this.element=document.querySelector(obj.element);
	this.deriction="right";
	this.maxTop=obj.maxTop?obj.maxTop:150;
	this.gudingTop=this.element.offsetTop;
	//点击空格次数
	this.step=0;
	//人物左右移动函数
	this.move=function(){
		clearInterval(this.timer);
		var temp=this;
		var value=this.deriction=="right"?2:-2;

		this.timer=setInterval(function(){
			var moveDistance=temp.element.offsetLeft;
			temp.element.style.left=value+moveDistance+'px';
			if(obj.moveFn){
				//没改变this指向之前它指向obj,用call改变其指向
				obj.moveFn.call(temp);

			}

		},10)

	}
	this.stop=function(){
		clearInterval(this.timer);
	}
	this.jump=function(){
		this.step++;
		if(this.step>2){
			return;
		}
		clearInterval(this.jumperTimer);
		var value=-5;
		var temp=this;
		var n=this.element.offsetTop;
		this.jumperTimer=setInterval(function(){
			var moveTop=temp.element.offsetTop;
			temp.element.style.top=moveTop+value+'px';
			if(Math.abs(temp.element.offsetTop-n)>=temp.maxTop){
				value=5;


			}
			if(value>0&&temp.element.offsetTop==temp.gudingTop){
				temp.step=0;
				clearInterval(temp.jumperTimer);

			}


		},10)
	}

	

}