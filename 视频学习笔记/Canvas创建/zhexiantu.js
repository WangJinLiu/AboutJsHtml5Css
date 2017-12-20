//折线图的构造函数
function Line_chart(canvas,myArr,obj) {
	var content=canvas.getContext("2d");
	this.canvasWidth=canvas.width;
	this.canvasHeight=canvas.height;
	this.arr=[];
	this.arr1=[];
	//坐标轴
	this.zuobiao=function(){
		content.beginPath();
		content.moveTo(50,50);
		content.lineTo(50,this.canvasHeight-50);
		content.lineTo(this.canvasWidth-50,this.canvasHeight-50);
		content.stroke();
		content.closePath();
	}
	//计算出坐标放到一个数组里
	this.Point=function(){
		var maxValue=this.max();

		var width=(this.canvasWidth-110)/myArr.length;
		var bili=(this.canvasHeight-100-10)/maxValue;
		console.log(bili);
		for(var i=0;i<myArr.length;i++){
			var x=(i+1)*width+50;
			var y=this.canvasHeight-bili*myArr[i].value-50;
			var y1=this.canvasHeight-bili*myArr[i].value-50+30;
			var p=new this.xy(x,y);
			var p1=new this.xy(x,y1);
			this.arr1.push(p1);
			this.arr.push(p);

		}

		this.drow();

	}
	//画内容
	this.drow=function(){

		content.beginPath();
		content.moveTo(this.arr[0].x,this.arr[0].y);
		console.log(this.arr[0].x,this.arr[0].y);	
		for(var i=1;i<this.arr.length;i++){
			content.lineTo(this.arr[i].x,this.arr[i].y);

		}
		content.font=obj.font1;
		//加字体
		for(var i=0;i<this.arr1.length;i++){
			content.strokeText(myArr[i].name,this.arr1[i].x-13,this.arr1[i].y);

		}

		content.lineWidth=obj.width;

		content.stroke();

		content.closePath();

	}
	//求出数据中最大的那个值
	this.max=function(){
		for(var i=0;i<myArr.length;i++){
			var max=myArr[0].value;
			if(myArr[i].value>max){
				max=myArr[i].value;
			}

		}
		return max;
	}
	//坐标
	this.xy=function(x,y){
		this.x=x;
		this.y=y;
	}
	
}