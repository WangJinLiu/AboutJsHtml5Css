//添加的兼容写法
	function addListener(ele,event,Fn,useCapture){
		if(ele.addEventListener){
			ele.addEventListener(event,Fn,useCapture);
		}else{
			ele.attachEvent('on'+event,Fn,useCapture);
		}

	}
	removeListener(wrap,'click',n,false);
	//删除的兼容写法
	function removeListener(ele,event,Fn,useCapture){
		if(ele.removeEventListener){
			ele.removeEventListener(event,Fn,useCapture)
		}else{
			ele.detachEvent('on'+event,Fn,useCapture);
		}

	}
