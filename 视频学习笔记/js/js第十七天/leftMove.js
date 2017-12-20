function move(obj,fn){
	var step=obj.offsetLeft;
	var timer=setInterval(function(){
		step++;
		obj.style.left=step+'px';
		if(step>=500){
			if(fn){
				//判断存不存在
				fn();
			}
			
			clearInterval(timer);
		}
	},10)
}