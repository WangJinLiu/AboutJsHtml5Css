//一个函数，既可以添加事件，又能根据上下移动进行自己的修改
	function mousewheel(obj,Fn1,Fn2){
		obj.onmousewheel=function(ev){
			var ev=ev||window.event;
			judge(ev,Fn1,Fn2);

		}

	}
	function judge(e,fn,fn1){
		if(e.wheelDelta>0){
			if(fn){
				fn();
			}
		}else{
			if(fn1){
				fn1();
			}
		}
	}