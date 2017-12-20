//饼的创建
function Pie(obj){
	var content=obj.canvas.getContext("2d");
	this.sum=0;
	this.arr=obj.myarr;
	this.bili=0;
	//计算比例
	this.scale=function(){
		var sum=0;
		for(var i=0;i<this.arr.length;i++){
			sum+=this.arr[i].value;
		}
		this.bili=360/sum;//每个单位所占的角度 
	}
	//画圆饼图
	this.drowCircle=function(start,end,color){
		var x = obj.canvas.width / 2;
        var y = obj.canvas.height / 2;
        console.log(content.width);
		content.beginPath();
		var deg=Math.PI/180;
		content.moveTo(x,y);
		content.arc(x,y,obj.radius,start*deg,end*deg);
		content.fillStyle=color;
		content.fill();
		content.stroke();
		content.closePath();
	}
	//遍历画圆
	this.drow=function(){
		this.scale();
		var endValue=0;
		for(var i=0;i<this.arr.length;i++){
			var m=this.arr[i].value*this.bili;
			this.drowCircle(endValue,m+endValue,this.arr[i].color);
			endValue=m+endValue;

		}
		console.log(content.width);
	}
	this.drow();


}