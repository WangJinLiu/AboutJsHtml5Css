
//hero的函数
function Hero(obj){
	this.element=document.getElementById(obj.ele);
	this.deriction="left";
	this.maxTop=obj.maxTop?obj.maxTop:150;
	this.gudingTop=this.element.offsetTop;
	//点击空格次数
	this.step=0;
	this.move=function(){
		this.stop();
		var temp=this;
		var value=this.deriction=="right"?2:-2;
		this.timer=setInterval(function(){
			var moveleft=temp.element.offsetLeft;
			// console.log(moveleft);
			temp.element.style.left=value+moveleft+'px';
			if(obj.moveFn){
				obj.moveFn.call(temp);

			}
		})
	}
	this.stop=function(){
		clearInterval(this.timer);
	}
	//跳的函数
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