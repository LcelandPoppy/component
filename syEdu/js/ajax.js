//获得的提交格式
function subDate(token,data,back){
	$.ajax({
		type:"get",
		url:"http://jilizuo.sie.edu.cn:8080/SYSmart/works/basic/v1/format",
		data:{
			data:JSON.stringify(data),
			token:token
		},
		success:function(d){
			back(d);
			
		},
		error:function(e){
			console.log(e);
		}
	})
}
//图片视频音频提交
function imgVideoAudioSub(formdate,back){
	$.ajax({
		type:"post",
		url:"http://jilizuo.sie.edu.cn:8080/SYSmart/file/basic/v1/upload",
		data:formdate,
		processData: false,
		contentType: false,
		success:function(d){
			back(d);
		},
		error:function(e){
			console.log(e);
		}
	})
}
//作品提交
function workInforSubmit(account,data,token,back){
	$.ajax({
		type:"get",
		url:"http://jilizuo.sie.edu.cn:8080/SYSmart/works/interface/v1/submit",
		data:{
			data:JSON.stringify(data),
			token:token,
			account:account
		},
		success:function(d){
			back(d);
			
		},
		error:function(e){
			console.log(e);
		}
	})
}

//作品详情、
function worksDetail(token,data,account,back){
	$.ajax({
		type:"get",
  		url:"http://jilizuo.sie.edu.cn:8080/SYSmart/works/basic/v1/detail",
		// url:"http://192.168.31.116:8080/works/basic/v1/detail",
		data:{
			data:JSON.stringify(data),
			token:token,
			account:account
		},
		success:function(d){
			back(d);
			
		},
		error:function(e){
			console.log(e);
		}
	})
}
