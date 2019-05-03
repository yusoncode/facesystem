

	    var document_index=0; //设置叠加关系
 	/*-----------------------------桌面系统-------------------------------*/
  
       //禁止浏览器自带的右键菜单
         document.oncontextmenu=function(){
			           return false;
			   
			   };
        $(document).mousedown(function(e){
			           var key=e.which;//右键盘3 鼠标滑动滚轮2 左键1
					   if(key==3){
					      var x=e.clientX;
						  var y=e.clientY;
						 //$(".test").html("X= " +x+  " Y= "+y);
                          $(".Menu").css({"left":x,"top":y}).show();
						  document_index++;
						  $(".Menu").css("zIndex",document_index);
					   }
			   });
			   //点击右键，不用时会消失
	        $(document).click(function(){
				   document_index++;
		           $(".Menu").hide();//隐藏	
                   $(".Menu").css("zIndex",document_index);
		
		});
		//当鼠标滑动到菜单时，背景变色
		$(".Menu ul li").mouseover(function(){
		  $(this).addClass("active").siblings("li").removeClass("active")						
		});
		    //点击菜单时,
			$(".Menu ul li").click(function(){
			   var _index=$(this).index();
			   if(_index==5){
			   document_index++;
			   $("#back").show(500);
               $("#back").css("zIndex",document_index);
			   
			   }			   
						
			})
			//点击关闭按钮 
			$("#back #b_title img").click(function(){
				document_index--;
			   $("#back").hide(300);
			   $("#back").css("zIndex",document_index);
			})
			//点击图片库
            $("#back").click(function(){
			      document_index++;
				  $(this).css("zIndex",document_index);
			
			})
			//点击图片，实现换肤
            $("#back ul li").click(function(){
			var bigSrc= $(this).find("img").attr("dataSrc");//找到大图地址
			$("body").css("background","url("+bigSrc+")");
			})
			//实现跟随鼠标移动
            var x;
	        var y;
	  var  yd=document.getElementById("back") 
	  document.getElementById("b_title").onmousedown=function(event){
		      var key=event.which;
			  if(key==1){
		      x=event.clientX-parseInt(yd.style.left);
			  y=event.clientY-parseInt(yd.style.top);
			 
	          document.onmousemove=mousemove;     //跟着鼠标移动
			  document.onmouseup=mouseup;       //鼠标弹起
	  
	  }
	  }
	  function mousemove(event){
	        yd.style.left=(event.clientX-x)+"px";
		    yd.style.top=(event.clientY-y)+"px";	  
		  	  
	     }

      function mouseup(){
	         
	   document.onmousemove=null;       //停止移动
	   
	   }	  
		
		/*--------------------------------桌面系统----------------------------------*/



   /*------------------------------------音乐播放器------------------------------------*/
        var musicSrc="Mp3/1.mp3";    //音乐地址
		var audio=creatMusic(musicSrc);
		var kf=1;
		var _index=0;//当前第一首歌
		$(".b_bon span.prev").css("cursor","pointer");/*创建上一曲手势图标*/
        $(".b_bon span.play").css("cursor","pointer");/*创建播放手势图标*/
		$(".b_bon span.next").css("cursor","pointer");/*创建下一曲手势图标*/
		//点击播放
        $(".b_bon span.play").click(function(){
			if(kf==1){
			$(this).css("background-position","-79px 0");
			       audio.play();
				   kf=2;
			}else{
			   $(this).css("background-position","-105px 0");
			       audio.pause();
				   kf=1;
			
			}
				
				 //实现标题跟着联动
	
	   var nameDom=$(".m_right ul li").eq(_index).find("a").attr("dataSrc1");
	   $("#music #m_left .l_title").html(nameDom);
		});
		//创建音乐
		function creatMusic(musicSrc){
		    var createMp3=$("<audio src="+musicSrc+"></audio>").get(0);
		    return createMp3;
		}
		var music_length=document.getElementById("m_sound").getElementsByTagName("li").length //定义li数组的长度
		
		//点击下一首通过序列号产生关系（0，1，2...）
		$(".b_bon span.next").click(function(){
                   if(_index>music_length-1){
					  _index=0
		              MusicPlay();
					  
				   }else{
				       _index++;
					   MusicPlay();				  			   
				   }	
	
				   	 //实现标题跟着联动
	
	   var nameDom=$(".m_right ul li").eq(_index).find("a").attr("dataSrc1");
	   $("#music #m_left .l_title").html(nameDom);
	               //实现图片跟着联动
				   /*var picture_index=-1;       //定义数组下标
				   function auto_Picture(){
				      var photoDom=$(".m_right ul li").eq(_index).find("a").attr("dataSrc2");
					  var photoDom01=$(".m_right ul li").eq(_index).find("a").attr("dataSrc3");
					  var photoDom02=$(".m_right ul li").eq(_index).find("a").attr("dataSrc4");
					  var picture=[photoDom,photoDom01,photoDom02];
                      if(picture_index<picture.length){
						  picture_index++;
					      $("#music #m_left").find("img.pic").attr("src",picture[picture_index]);

					  
					  }else{
					       picture_index=-1;
					  
					  }
	   
				   
				   }
				 
				    window.setInterval(auto_Picture,4000);    //周期性执行函数
					*/
                   var photoDom=$(".m_right ul li").eq(_index).find("a").attr("dataSrc2");
				   $("#music #m_left").find("img.pic").attr("src",photoDom);
	   
		
		});
		//点击上一首通过序列号产生关系（0，1，2...）
		$(".b_bon span.prev").click(function(){
		     if(_index<0){
			     _index=music_length-1;
			     MusicPlay();	
			 }else{
			     _index--;
				  MusicPlay();	
			 
			 }
			
			
				 //实现标题跟着联动
	
	   var nameDom=$(".m_right ul li").eq(_index).find("a").attr("dataSrc1");
	   $("#music #m_left .l_title").html(nameDom);
	              //实现图片跟着联动
				  /* var picture_index=-1;       //定义数组下标
				   function auto_Picture(){
				      var photoDom=$(".m_right ul li").eq(_index).find("a").attr("dataSrc2");
					  var photoDom01=$(".m_right ul li").eq(_index).find("a").attr("dataSrc3");
					  var photoDom02=$(".m_right ul li").eq(_index).find("a").attr("dataSrc4");
					  var picture=[photoDom,photoDom01,photoDom02];
                      if(picture_index<picture.length){
						  picture_index++;
					      $("#music #m_left").find("img.pic").attr("src",picture[picture_index]);

					  
					  }else{
					       picture_index=-1;
					  
					  }
	   
				   
				   }
				 
				    window.setInterval(auto_Picture,4000);    //周期性执行函数
					*/
					 var photoDom=$(".m_right ul li").eq(_index).find("a").attr("dataSrc2");
				    $("#music #m_left").find("img.pic").attr("src",photoDom);
		})

	  
		//点击右边实现播放
		$(".m_right ul li a").css("cursor","pointer");
		$(".m_right ul li").click(function(){
			_index=$(this).index();   //直接赋予序列号
			if(kf==1){
		     MusicPlay();
			 kf=2;
			}else{
            $(".m_right ul li").addClass("active").siblings("li").removeClass("active");
			audio.pause();
			 kf=1;
			}	
				 //实现标题跟着联动
	
	   var nameDom=$(".m_right ul li").eq(_index).find("a").attr("dataSrc1");
	   $("#music #m_left .l_title").html(nameDom);
	     //实现图片跟着联动
				   var picture_index=-1;       //定义数组下标
				   function auto_Picture(){
				      var photoDom=$(".m_right ul li").eq(_index).find("a").attr("dataSrc2");
					  var photoDom01=$(".m_right ul li").eq(_index).find("a").attr("dataSrc3");
					  var photoDom02=$(".m_right ul li").eq(_index).find("a").attr("dataSrc4");
					  var picture=[photoDom,photoDom01,photoDom02];
                      if(picture_index<picture.length){
						  picture_index++;
					      $("#music #m_left").find("img.pic").attr("src",picture[picture_index]);

					  
					  }else{
					       picture_index=-1;
					  
					  }
	   
				   
				   }
				 
				    window.setInterval(auto_Picture,4000);    //周期性执行函数
		
		})
		//定义一个函数，减少代码重复
		function MusicPlay(){
			//联动歌曲
		  $(".m_right ul li").eq(_index).addClass("active").siblings("li").removeClass("active");
		  //找到地址
		  musicSrc=
		  $(".m_right ul li").eq(_index).find("a").attr("dataSrc");
		  audio.src=musicSrc;
		  audio.play();
		}
  
		//关闭播放器 
		$("#music .m_right .r_title img").css("cursor","pointer");
		$("#music .m_right .r_title img.t_right").click(function(){
			document_index--;
	       audio.pause();          //暂停
		   audio.load();          //重新加载
          $("#m_left .l_button .l_box .l_bon .l_bon1").css("width","0"); //进度条恢复0
		   $("#music").fadeOut(1000);
		    $("#music").css("zIndex",document_index);
		   
		 
		})
		//最小化
		$("#music .m_right .r_title img.t_left").click(function(){
			document_index--;
		    $("#music").hide(1000);
			$("#music").css("zIndex",document_index);
		
		
		})
		//添加音乐播放器 
			
			$(".Menu ul li").click(function(){
				         //层叠关系
			   var _index=$(this).index();
			   if(_index==0){
				  document_index++; 
			     $("#music").show(500).css({"top":"100px","left":"300px","zIndex":document_index});
				}
				     
			}) 
			//点击播放器 层叠++
			$("#music").click(function(){
					        document_index++;
				            $("#music").css("zIndex",document_index);
							
				 
				 }) 
			
			
				//实现跟随鼠标移动
            var x2;
	        var y2;
	  var  yd2=document.getElementById("music"); 
	  document.getElementById("m_left").onmousedown=function(event){
		      var key2=event.which;
			  if(key2==1){
		      x2=event.clientX-parseInt(yd2.style.left);
			  y2=event.clientY-parseInt(yd2.style.top);
			 
	          document.onmousemove=mousemove2;     //跟着鼠标移动
			  document.onmouseup=mouseup2;       //鼠标弹起
	  
	  }
	  }
	  function mousemove2(event){
	        yd2.style.left=(event.clientX-x2)+"px";
		    yd2.style.top=(event.clientY-y2)+"px";	  
		  
		  
	     }

      function mouseup2(){
	         
	   document.onmousemove=null;       //停止移动
	   
	   } 
	   
	   var timeDom=$("#m_left .l_button .l_box span.l_time");
	     timeDom.css("color","gray");
	   //拿到总时间
	     audio.oncanplaythrough=function(){
         timeDom.html(getTime(this.duration));
   
   }

     //拿到播放时间
      
       audio.ontimeupdate=function(){
	       timeDom.html(getTime(this.currentTime)); 
		   //进度条
           var timemove=$("#m_left .l_button .l_box .l_bon .l_bon1");
           timemove.css("width",this.currentTime/this.duration*100+"%");
		   
	   
	   }
	   //鼠标移动得到剩余时间
      timeDom.click(function(){
		   
		 
	  })

	  
      //格式化时间
	   //得到时间
	 function getTime(time){
	 var m=parseInt(time/60);
	 var s=parseInt(time%60);
		 //补0
		 m= m<10?"0"+m:m;      
		 s= s<10?"0"+s:s;
		 return m+":"+s;
	 
	 }
	

       /*------------------------------------音乐播放器------------------------------------*/


          /*------------------------------------计算器------------------------------------*/
		 var resultDom=document.getElementById("result");
		 //操作符锁
         var operate=true;
         var xop=true;
         //点击计算器键盘
		 function command(num){
		 var str=resultDom.value;
		 //如果是0用“”填充
		 str=(str=="0"?"0":str);
         //拼接点击的数字    
         str+=num;
		 //赋给文本框
		 resultDom.value=str;
         operate=true;    
        
		 //播放音效
		 play(num);
		 }
		 //点击00键盘
		 function add(num){
		 var str=resultDom.value;
         str=(str=="0"?"":str);
		 str=str+"00";
		 resultDom.value=str;
		 operate=true;
		 play(num);
		 
		 }
		 //点击操作符
		 function tools(op,m){
		 if(operate){
		 var num =resultDom.value;
		 num=(num=="0"?"0":num);
		 //拼接操作符
		 resultDom.value=num+op;
		 operate= false;
		 xop = true;
		
		
	     }  //播放音效
		    play(m);
		 
		    }
          //点击小数点
		 
		  function dot(m){
		    if(xop){
			    var num =resultDom.value;
				num=num+".";
				resultDom.value=num;
				xop=false;
			
			
			}
			 play(m)
		  
		  
		  }
		  //计算等于
		   function equal(m){
		   play(m);
		   var result =resultDom.value;
		   //eval()函数自动运算
		   var r= eval(result);
		   resultDom.value=r;
		   operate=true;
		   var r=resultDom.value+"";
		   xop=r.indexOf(".")==-1?true:false;
		 
		   
		 }
		 //清空
		 function clearzero(m){
		    resultDom.value="";
			operate=true;
            xop=true;
			play(m);
		 
		 }
		 //移除
		 function remove1(m){    //不能使用保留字remove
		 var num=resultDom.value; 
		 var result=0;
		 if(num.length>=1){
		    result=num.substring(num.length-1,0);
		 
		 }else{
		    result=num+"";

		 }
		    resultDom.value=result;
		    operate=true;
            xop=true;
		    play(m);
		 
		 }
		 //播放键盘声音
		 function play(num){
		 var boxDom=document.getElementById("audioBox");
		 boxDom.innerHTML="<embed src='wav/"+num+".wav' width='0' height='0'></embed>";
		 
		 }
		 //添加计算器
		$(".Menu ul li").click(function(){  
			   
			   var _index=$(this).index();
			   if(_index==1){ 
				 document_index++;
			     $("#cac").show(500); $("#cac").css("zIndex",document_index);
				 
				 
				 }			
			
			})
	     	  //点击计算器层叠++
		   $("#cac").click(function(){
		           document_index++
		           $("#cac").css("zIndex",document_index);
		   
		      })
			   
		 //关闭计算器
		 $("#cac #c_title img").css("cursor","pointer");
		     $("#cac #c_title img").click(function(){
				    document_index--;                 //层叠
		            $("#cac").hide(300);
					$("#cac").css("zIndex",document_index);
		 })
		 	//实现跟随鼠标移动
            var x1;
	        var y1;
	  var  yd1=document.getElementById("cac") 
	  document.getElementById("c_title").onmousedown=function(event){
		      var key1=event.which;
			  if(key1==1){
		      x1=event.clientX-parseInt(yd1.style.left);
			  y1=event.clientY-parseInt(yd1.style.top);
			 
	          document.onmousemove=mousemove1;     //跟着鼠标移动
			  document.onmouseup=mouseup1;       //鼠标弹起
	  
	  }
	  }
	  function mousemove1(event){
	        yd1.style.left=(event.clientX-x1)+"px";
		    yd1.style.top=(event.clientY-y1)+"px";	  
		  
		  
	     }

      function mouseup1(){
	         
	   document.onmousemove=null;       //停止移动
	   
	   }	  
		     
   /*--------------------------------------计算器--------------------------------*/
   /*-------------------------------------笔记本----------------------------------*/
               //点击菜单，显示笔记本

	$(".Menu ul li").click(function(){
		      
			   var _index=$(this).index();
			   if(_index==2){
			       document_index++;  
			      document.getElementById("note").innerHTML="";
			   $("#read").fadeIn(500);
			   $("#read").css("zIndex",document_index);
			   }
			})
	//点击计算器 层叠++;
	$("#read").click(function(){
			document_index++;
			 $("#read").css("zIndex",document_index);
			
			})
			
			$("#read #r_title img").css("cursor","pointer");
   $("#read #r_title img").click(function(){
              $("#read").fadeOut(300);
              document.getElementById("note").innerHTML="";
             
   
   })
                   var x3;
				   var y3;
				   var yd3=document.getElementById("read");
	 document.getElementById("r_title").onmousedown=function(event){
	                    var key3=event.which;
						if(key3==1){
						   x3=event.clientX-parseInt(yd3.style.left);
						   y3=event.clientY-parseInt(yd3.style.top);
						document.onmousemove=function (event){
		        yd3.style.left=event.clientX-x3+"px";
				yd3.style.top=event.clientY-y3+"px";
		  
		  }
						document.onmouseup=function (){
		                document.onmousemove=null;
		  
		  }
						
						}
	    
	 
	                        }
        
         //点击按钮       
 		function mouseClick(){
			var noteDom=document.getElementById("note");
			var confirm=window.confirm("确定保存?");
			
			if(confirm==true){
			if(noteDom.value!=""){           //说明有内容
			   window.alert("恭喜,保存了");
               yd3.style.display="none";
               
			
			    }else{
				      
					window.alert("内容为空");
				    yd3.style.display="none";
				
				}
			}
		    
		}
 	
 	  
 		var timeElementDom=document.getElementById("speak_time");
 		//获取时间
 		function speakTime(){          //获取时间        把时间赋予隐藏域
 			     var date=new Date();
 				 var year=date.getFullYear();   //年
 				 var month=date.getMonth()+1;    //月
 				 var day=date.getDate();      //日
 				 var hour=date.getHours();   //时
 				 var min=date.getMinutes();  //分
 				 var second=date.getSeconds();//秒
 				 month=month<10?"0"+month:month;
 				 day=day<10?"0"+day:day;
 				 hour=hour<10?"0"+hour:hour;
 				 min=min<10?"0"+min:min;
 				 second=second<10?"0"+second:second;
 				 
 				 var time=year+""+month+""+day+""+hour+""+min+""+second;   //变成字符串
 				
 				 timeElementDom.value=time;
 			     
 			  }
 /*-------------------------------------笔记----------------------------------*/

   /*----------------------------表盘闹钟-------------------------------------- */
    function keMove(){
	     //得到刻度对象
		 var keduDom=document.getElementById("kedu");
		 var html="";
	     for(var i=0;i<60;i++){
		    html+="<li style='transform:rotate("+(6*i)+"deg)'></li>";
		    
		 }
		 keduDom.innerHTML=html;
       //秒针旋转 ，每6度的方式进行旋转
	     var secDom=document.getElementById("sec");
		 var minDom=document.getElementById("min");
		 var hourDom=document.getElementById("hour");
		 function drawDate(){
		    var date=new Date();
		    var sec=date.getSeconds();
			var min=date.getMinutes()+sec/60;//偏移量
			var hour=date.getHours()+min/60; //偏移量
			//秒针的旋转
		  	secDom.style.transform="rotate("+(sec*6)+"deg)";
		    minDom.style.transform="rotate("+(min*6)+"deg)";
			hourDom.style.transform="rotate("+(hour*30)+"deg)";
		 };
		
            
			//自动走动
			window.setInterval(drawDate,1000);

		 
	  };
	       keMove();     //调用方法
       /*----------------------------表盘闹钟----------------------------------- */

     /*-------------------------------------刷新页面----------------------------------*/
	 $(".Menu ul li").click(function(){
	     var _index=$(this).index();
		 if(_index==3){
		   window.location.reload(); //重新加载页面
		 
		 }
	 
	 
	 
	 })

	   /*-------------------------------------刷新页面----------------------------------*/



	   /*----------------------------百度地图------------------------------------*/ 
	   //点击显示地图，
     $(".Menu ul li").click(function(){
	      var _index=$(this).index();
		  if(_index==4){
		     document_index++;
		     $("#map").show(500);
              $("#map").css("zIndex",document_index);
		  }
	 
	  
	   })
	   $("#map").click(function(){
	     document_index++;
		 $("#map").css("zIndex",document_index);
	   
	   })
      $("#map img").css("cursor","pointer");
     $("#map img").click(function(){
		 document_index--;
	     $("#map").hide(300);
		 $("#map").css("zIndex",document_index);

	
	
	
	})

	var map = new BMap.Map("container");
    map.centerAndZoom("宁波", 12);
    map.enableScrollWheelZoom();    //启用滚轮放大缩小，默认禁用
    map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用

    map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件
    map.addControl(new BMap.OverviewMapControl()); //添加默认缩略地图控件
    map.addControl(new BMap.OverviewMapControl({ isOpen: true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));   //右下角，打开

    var localSearch = new BMap.LocalSearch(map);
    localSearch.enableAutoViewport(); //允许自动调节窗体大小
function searchByStationName() {
    map.clearOverlays();//清空原来的标注
    var keyword = document.getElementById("text_").value;
    localSearch.setSearchCompleteCallback(function (searchResult) {
        var poi = searchResult.getPoi(0);
        document.getElementById("result_").value = poi.point.lng + "," + poi.point.lat;
        map.centerAndZoom(poi.point, 13);
        var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat));  // 创建标注，为要查询的地方对应的经纬度
        map.addOverlay(marker);
        var content = document.getElementById("text_").value + "<br/><br/>经度：" + poi.point.lng + "<br/>纬度：" + poi.point.lat;
        var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>" + content + "</p>");
        marker.addEventListener("click", function () { this.openInfoWindow(infoWindow); });
        // marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    });
    localSearch.search(keyword);

} 
   
	
	/*----------------------------------百度地图---------------------------------------*/



	/*----------------------------------注销系统---------------------------------------*/

   $(".Menu ul li").click(function(){
       var _index=$(this).index();
       if(_index==6){
		   //跳转
		   
	      window.location.href="denglu.html";   //跳转页面
	   
	   }
   
   })


	/*----------------------------------注销系统---------------------------------------*/
	/*----------------------------------图片-------------------------------------------*/
     var picture_index;
	   var picture_length=$(".pict img.picture").length;//拿到长度
        $(".pict img.picture").click(function(){
			document_index++;
		     $(".shadow").show(100);$(".shadow").css("zIndex",document_index);
		     $(".show").show(1000); $(".show").css("zIndex",document_index+1);
			 var srcDom=$(this).attr("src");
             $(".show img.s_pic").attr("src",srcDom);
			picture_index=$(this).index();
			
		
		})
		
		//点击上一张
        $(".show img.s_left").css("cursor","pointer")
		$(".show img.s_left").click(function(){
			picture_index--;
			if(picture_index<0){picture_index=picture_length-1}
			 var picDom=$(".pict img.picture").eq(picture_index).attr("src");
             $(".show img.s_pic").attr("src",picDom);
			
		
		  
		
		})
         //点击下一张
		 $(".show img.s_right").css("cursor","pointer");
		$(".show img.s_right").click(function(){
		     
			picture_index++;
			
		    if(picture_index>picture_length-1){picture_index=0;}
			var picDom=$(".pict img.picture").eq(picture_index).attr("src");
            $(".show img.s_pic").attr("src",picDom);
			
		  
		
		})
		$(".shadow").click(function(){
		      $(".shadow").hide();
		      $(".show").hide();
		 
		})
		//点击关闭按钮
		$(".p_title .t_close").css("cursor","pointer");
     $(".p_title .t_close").click(function(){
		 document_index--;
	    $(".pict").hide(500);
        $(".pict").css("zIndex",document_index);
	    
	 })
	 //点击图片框
	 $(".pict").click(function(){
	     document_index++;
      $(".pict").css("zIndex",document_index);
	 
	 })
	 //移动图片框
	 var pictDom=$(".pict");
	 var ptitleDom =$(".pict .p_title");
	 ptitleDom.mousedown(function(e){
		  e=e||window.event;
	      var x=e.clientX-parseInt(pictDom.css("left"));
		  var y=e.clientY-parseInt(pictDom.css("top"));
		  document.onmousemove=function(ev){
		        ev=ev||window.event;
				pictDom.css({"left":ev.clientX-x,"top":ev.clientY-y});
		  
		  }
		  document.onmouseup=function(){
		  
		       document.onmousemove=null;
		  }
	 
	 })

	/*---------------------------------图片-------------------------------------------*/
	/*---------------------------------说说---------------------------------------------*/       
         $(" #containerSpeak .c_gif").find("img").click(function(){//点击图标，显示表情
			
				 $(" #containerSpeak .c_expression").toggle(500);  //制动显示隐藏	
				                  /*hide(),show()toggle()隐藏/显示 */
			                    /*fadeIn()fadeOut()fadeToggle()fadeTo()淡入淡出 */ 
								/*slideDown()slideUp()slideToggle()滑动*/
		 
		 })
		 //选中表情，添加到文本框
       $("#containerSpeak .c_expression").find("li").click(function(){
	               var speakimg= $(this).find("img").clone();         //克隆表情
				   $("#containerSpeak .c_tarea").append(speakimg);      //向输入框增加内容
	  
	   })
	   //发表说说
      $("#containerSpeak .c_bottom").click(function(){
		  var textDom=$("#containerSpeak .c_tarea").text();
		  if(textDom==""){                     //内容为空,不发布
		       $("#containerSpeak .c_tarea").focus();
			   return;
		  
		  }
		  // $("#speak").prepend("<div class='s_content'>"+$("#container .c_tarea").html()+"</div>")
		  document_index++;
		  $("#speak").slideDown(2000);          //向下滑动
		  $("#speak .s_content").append($("#containerSpeak .c_tarea").html());//往里面增加内容
		  $("#speak").css("zIndex",document_index);

		   /*
		    append() - 在被选元素的结尾插入内容 
            prepend() - 在被选元素的开头插入内容 
            after() - 在被选元素之后插入内容 
            before() - 在被选元素之前插入内容 
          */
	  
	  
	  })
	  //点击关闭
	  $("#containerSpeak .c_close").click(function(){
		      document_index--;
	          $("#containerSpeak").slideUp(400);       //向上滑动
	          $("#speak").slideUp(600);               //向上滑动
              $("#containerSpeak .c_tarea").html("");//关闭后内容清空
			  $("#speak .s_content").html("");       //关闭后清空内容;
			  $("#containerSpeak").css("zIndex",document_index);

	  })
     //点击说说
    $("#containerSpeak").click(function(){
             document_index++;
			  $("#containerSpeak").css("zIndex",document_index);
	})


	/*---------------------------------说说---------------------------------------------*/
	/*--------------------------------旋转体-------------------------------------------*/
	 var tranDom=document.getElementById("transform");
	 var rotate1Dom=document.getElementById("t_rotate1");    //第一个区块
	 var rotate2Dom=document.getElementById("t_rotate2");    //第二个区块
	 var rotate3Dom=document.getElementById("t_rotate3");     //第三个区块
	 var rotate4Dom=document.getElementById("t_rotate4");     //第四个区块
	 var dotOneDom=document.getElementById("b_one");         //第一个按钮
	 var dotTwoDom=document.getElementById("b_two");         //第二个按钮
	 var dotThreeDom=document.getElementById("b_three");         //第三个按钮
	 var dotFourDom=document.getElementById("b_four");         //第四个按钮
	     dotOneDom.onclick=function(){                 //点击第一个按钮
		     /* animation-duration:4s;
	            animation-timing-function:linear;
	            animation-iteration-count:infinite; 
		*/
		     rotate1Dom.style.animationName="myRotateTwo";
			 rotate1Dom.style.animationDuration="4s";
             rotate1Dom.style.animationTimingFunction="linear";
	         rotate1Dom.style.animationIterationCount="infinite"; 

			 rotate2Dom.style.animationName="myRotateTwo";
			 rotate2Dom.style.animationDuration="4s";
			 rotate2Dom.style.animationTimingFunction="linear";
			 rotate2Dom.style.animationIterationCount="infinite";

			 rotate3Dom.style.animationName="myRotateTwo";
			 rotate3Dom.style.animationDuration="4s";
			 rotate3Dom.style.animationTimingFunction="linear";
			 rotate3Dom.style.animationIterationCount="infinite";

			 rotate4Dom.style.animationName="myRotateTwo";
			 rotate4Dom.style.animationDuration="4s";
			 rotate4Dom.style.animationTimingFunction="linear";
			 rotate4Dom.style.animationIterationCount="infinite";
			 
		 }
    dotTwoDom.onclick=function(){               //点击第二个按钮
		     rotate1Dom.style.animationName="myRotateFour";
			 rotate1Dom.style.animationDuration="4s";
             rotate1Dom.style.animationTimingFunction="linear";
	         rotate1Dom.style.animationIterationCount="infinite"; 

			 rotate2Dom.style.animationName="myRotateFour";
			 rotate2Dom.style.animationDuration="4s";
			 rotate2Dom.style.animationTimingFunction="linear";
			 rotate2Dom.style.animationIterationCount="infinite";

			 rotate3Dom.style.animationName="myRotateFour";
			 rotate3Dom.style.animationDuration="4s";
			 rotate3Dom.style.animationTimingFunction="linear";
			 rotate3Dom.style.animationIterationCount="infinite";

			 rotate4Dom.style.animationName="myRotateFour";
			 rotate4Dom.style.animationDuration="4s";
			 rotate4Dom.style.animationTimingFunction="linear";
			 rotate4Dom.style.animationIterationCount="infinite";
	}
 
    dotThreeDom.onclick=function(){                        //点击第三个按钮
	         rotate1Dom.style.animationName="myRotateThree";
			 rotate1Dom.style.animationDuration="4s";rotate1Dom.style.animationDelay="0s";
			                                         //rotate1Dom.style.transitionDelay="2s";
             rotate1Dom.style.animationTimingFunction="linear";
	         rotate1Dom.style.animationIterationCount="infinite"; 

			 rotate2Dom.style.animationName="myRotateThree";
			 rotate2Dom.style.animationDuration="4s";rotate2Dom.style.animationDelay="0.3s";
			                                         //rotate2Dom.style.transitionDelay="2s";
			 rotate2Dom.style.animationTimingFunction="linear";
			 rotate2Dom.style.animationIterationCount="infinite";

			 rotate3Dom.style.animationName="myRotateThree";
			 rotate3Dom.style.animationDuration="4s";rotate3Dom.style.animationDelay="0.4s";
			                                          //rotate3Dom.style.transitionDelay="5s";
			 rotate3Dom.style.animationTimingFunction="linear";
			 rotate3Dom.style.animationIterationCount="infinite";

			 rotate4Dom.style.animationName="myRotateThree";
			 rotate4Dom.style.animationDuration="4s";rotate4Dom.style.animationDelay="0.6s";
			                                         //rotate4Dom.style.transitionDelay="6s";
			 rotate4Dom.style.animationTimingFunction="linear";
			 rotate4Dom.style.animationIterationCount="infinite";
	
	}
    dotFourDom.onclick=function(){                        //点击第四个按钮
	         rotate1Dom.style.animationName="myRotate";
			 rotate1Dom.style.animationDuration="4s";
             rotate1Dom.style.animationTimingFunction="linear";
	         rotate1Dom.style.animationIterationCount="infinite"; 

			 rotate2Dom.style.animationName="myRotate";
			 rotate2Dom.style.animationDuration="4s";
			 rotate2Dom.style.animationTimingFunction="linear";
			 rotate2Dom.style.animationIterationCount="infinite";

			 rotate3Dom.style.animationName="myRotate";
			 rotate3Dom.style.animationDuration="4s";
			 rotate3Dom.style.animationTimingFunction="linear";
			 rotate3Dom.style.animationIterationCount="infinite";

			 rotate4Dom.style.animationName="myRotate";
			 rotate4Dom.style.animationDuration="4s";
			 rotate4Dom.style.animationTimingFunction="linear";
			 rotate4Dom.style.animationIterationCount="infinite";
	  
	
	}

    tranDom.ondblclick=function(){                //清空所有运动状态
	         rotate1Dom.style.animationName="none";
			 rotate1Dom.style.animationDuration="0";
             rotate1Dom.style.animationTimingFunction="none";
	         rotate1Dom.style.animationIterationCount="0"; 

			 rotate2Dom.style.animationName="none";
			 rotate2Dom.style.animationDuration="0";
			 rotate2Dom.style.animationTimingFunction="none";
			 rotate2Dom.style.animationIterationCount="0";

			 rotate3Dom.style.animationName="none";
			 rotate3Dom.style.animationDuration="0";
			 rotate3Dom.style.animationTimingFunction="none";
			 rotate3Dom.style.animationIterationCount="0";

			 rotate4Dom.style.animationName="none";
			 rotate4Dom.style.animationDuration="0";
			 rotate4Dom.style.animationTimingFunction="none";
			 rotate4Dom.style.animationIterationCount="0";

			 function disp(){
			      var flag=window.confirm("确定关闭?");
				  if(flag){
				      $("#transform").fadeOut(1000);
				  }else{
				     
				      
				  }
			  
			 
			 }
			 window.setTimeout(disp,100);
	
	}
	/*--------------------------------旋转体-------------------------------------------*/	
	/*---------------------------------搜索--------------------------------------------*/
	 // 搜索移动 
	  var selDom=document.getElementById("select");
      var setitleDom=document.getElementById("se_title");
	    
	    setitleDom.onmousedown=function(e){
		     e=e||window.event; 
             var x=e.clientX-parseInt(selDom.style.left);        //得到x的差
			 var y=e.clientY-parseInt(selDom.style.top);         //得到y的差
			  document.onmousemove=function(ev){
			       ev=ev||window.event;
				   selDom.style.left=(ev.clientX-x)+"px";
				   selDom.style.top=(ev.clientY-y)+"px";
			  
			  
			  }
			  document.onmouseup=function(){
			      document.onmousemove=null;
			  
			  }
		
		}		
		//点击搜索窗口
		$("#select").click(function(){
			document_index++;
		    $(this).css("zIndex",document_index);
		
		
		})
		
          //关闭搜索窗口
       var selcloseDom=$("#select .sel_close");
	      selcloseDom.css("cursor","pointer");
	      selcloseDom.click(function(){
			       document_index--;	      
		         $("#select").slideUp(500);
                 $("#select").css("zIndex",document_index);
		  
		  
		  })
  /*------------------------------搜索-----------------------------------*/
  /*------------------------------腾讯视频-------------------------------*/
   //移动 
	  var tengxunDom=document.getElementById("tengxun_video");
      var txtitleDom=document.getElementById("tengxun_title");
	    txtitleDom.onmousedown=function(e){
		     e=e||window.event; 
             var x=e.clientX-parseInt(tengxunDom.style.left);        //得到x的差
			 var y=e.clientY-parseInt(tengxunDom.style.top);         //得到y的差
			  document.onmousemove=function(ev){
			       ev=ev||window.event;
				   tengxunDom.style.left=(ev.clientX-x)+"px";
                   tengxunDom.style.top=(ev.clientY-y)+"px";
			  
			  
			  }
			  document.onmouseup=function(){
			      document.onmousemove=null;
			  
			  }
		
		}
		    //放大缩小的实现
        var video_num=1;
	    var bodyHeightDom=document.body.scrollHeight;	  //获取浏览器实际高度
        var bodyWidthDom=document.body.clientWidth;	      //获取浏览器实际高度宽度
		
		var tengxunWidthDom=document.getElementById("tengxun_video").clientWidth; //得到元素的原本宽度
		var tengxunHeightDom=document.getElementById("tengxun_video").clientHeight;//得到元素的原本高度

		var tengxunBoxWidthDom=$("#tengxun_video .tenngxun_bottom").width();//JQ得到盒子的原本宽度
		var tengxunBoxHeightDom=$("#tengxun_video .tenngxun_bottom").height();//JQ得到盒子的原本高度

		var tengxunIframeWidthDom=$("#tengxun_video .tenngxun_bottom iframe").width();//JQ得到内联框架的原本宽度
		var tengxunIframeHeightDom=$("#tengxun_video .tenngxun_bottom iframe").height();//JQ得到内联框架的原本高度;
		
	 $("#tengxun_video a.big").click(function(){	 
		   //获取浏览器窗口的高度
		 if( video_num==1){
		     $(this).css({"width":"15px","height":"12px","top":"7px"}); //放大时候改变
	         tengxunDom.style.width=bodyWidthDom+"px";               //放大的宽度           
		     tengxunDom.style.height=bodyHeightDom+"px";             //放大的高度
             $("#tengxun_video .tenngxun_bottom").width(bodyWidthDom);     //JQ盒子的宽度
             $("#tengxun_video .tenngxun_bottom").height(bodyHeightDom-40); //JQ盒子的高度

	         $("#tengxun_video .tenngxun_bottom iframe").width(bodyWidthDom-5);   //JQ内联框架的宽度
             $("#tengxun_video .tenngxun_bottom iframe").height(bodyHeightDom-40);//JQ内联框架的高度
		      video_num=2;
		 }else{
		   $(this).css({"width":"30px","height":"18px","top":"4px"});
           $("#tengxun_video .tenngxun_bottom iframe").width(tengxunIframeWidthDom); //JQ内联框架的宽度度
		   $("#tengxun_video .tenngxun_bottom iframe").height(tengxunIframeHeightDom);//JQ内联框架的高度

		   $("#tengxun_video .tenngxun_bottom").width(tengxunBoxWidthDom);     //JQ盒子的宽度
           $("#tengxun_video .tenngxun_bottom").height(tengxunBoxHeightDom); //JQ盒子的高度

			tengxunDom.style.width=tengxunWidthDom+"px";                        //缩小宽度
			tengxunDom.style.height=tengxunHeightDom+"px";                      //缩小的高度 
			  video_num=1  
		 
		 }
	 })
  
		//点击腾讯窗口
		$("#tengxun_video").click(function(){
			document_index++;
		    $(this).css("zIndex",document_index);
		
		
		})
          //关闭腾讯窗口
       var tengxuncloseDom=$("#tengxun_video img.tengxun_close");
	      tengxuncloseDom.css("cursor","pointer");
	      tengxuncloseDom.click(function(){
			       document_index--;	      
		         $("#tengxun_video").slideUp(500);         
                 $("#tengxun_video").css("zIndex",document_index);
		  
		  
		  })

	 
  
  /*------------------------------腾讯视频-------------------------------*/
  /*-------------------------------WEBQQ----------------------------------*/
    //移动 
	  var webqqDom=document.getElementById("webqq");
      var webqqtitleDom=document.getElementById("webqq_title");
	    
	   webqqtitleDom.onmousedown=function(e){
		     e=e||window.event; 
             var x=e.clientX-parseInt(webqqDom.style.left);        //得到x的差
			 var y=e.clientY-parseInt(webqqDom.style.top);         //得到y的差
			  document.onmousemove=function(ev){
			       ev=ev||window.event;
				   webqqDom.style.left=(ev.clientX-x)+"px";
				   webqqDom.style.top=(ev.clientY-y)+"px";
			  
			  
			  }
			  document.onmouseup=function(){
			      document.onmousemove=null;
			  
			  }
		
		}
    /*
        var bodyHeightDom=document.body.scrollHeight;	  //获取浏览器实际高度
        var bodyWidthDom=document.body.clientWidth;	      //获取浏览器实际高度宽度
    */
        //放大缩小的实现
       
		var webqqDomWidthDom=document.getElementById("webqq").clientWidth; //得到元素的原本宽度
		var webqqDomHeightDom=document.getElementById("webqq").clientHeight;//得到元素的原本高度

		var webqqDomBoxWidthDom=$("#webqq .webqq_bottom").width();//JQ得到盒子的原本宽度
		var webqqDomBoxHeightDom=$("#webqq .webqq_bottom").height();//JQ得到盒子的原本高度

		var webqqDomIframeWidthDom=$("#webqq .webqq_bottom iframe").width();//JQ得到内联框架的原本宽度
		var webqqDomIframeHeightDom=$("#webqq .webqq_bottom iframe").height();//JQ得到内联框架的原本高度;
		 var webqq_num=1;
	 $("#webqq a.big").click(function(){	 
		   //获取浏览器窗口的高度
		 if(webqq_num==1){
			 $(this).css({"width":"15px","height":"12px","top":"7px"}); //放大时候改变
	         webqqDom.style.width=bodyWidthDom+"px";               //放大的宽度           
		     webqqDom.style.height=bodyHeightDom+"px";             //放大的高度

             $("#webqq .webqq_bottom").width(bodyWidthDom);     //JQ盒子的宽度
             $("#webqq .webqq_bottom").height(bodyHeightDom-40); //JQ盒子的高度

	         $("#webqq .webqq_bottom iframe").width(bodyWidthDom-5);   //JQ内联框架的宽度
             $("#webqq .webqq_bottom iframe").height(bodyHeightDom-40);//JQ内联框架的高度
		      webqq_num=2;
		 }else{
		   $(this).css({"width":"30px","height":"18px","top":"4px"});
           $("#webqq .webqq_bottom iframe").width(webqqDomIframeWidthDom); //JQ内联框架的宽度度
		   $("#webqq .webqq_bottom iframe").height(webqqDomIframeHeightDom);//JQ内联框架的高度

		   $("#webqq .webqq_bottom").width(webqqDomBoxWidthDom);     //JQ盒子的宽度
           $("#webqq .webqq_bottom").height(webqqDomBoxHeightDom); //JQ盒子的高度

			 webqqDom.style.width=webqqDomWidthDom+"px";                        //缩小宽度
			 webqqDom.style.height=webqqDomHeightDom+"px";                      //缩小的高度 
			  webqq_num=1  
		 
		 }
	 })
	 //点击webqq窗口
		$("#webqq").click(function(){
			document_index++;
		    $(this).css("zIndex",document_index);
		
		
		})
          //关闭webqq窗口
       var webqqcloseDom=$("#webqq .webqq_close");
	      webqqcloseDom.css("cursor","pointer");
	      webqqcloseDom.click(function(){
			       document_index--;	      
		         $("#webqq").slideUp(500);         
                 $("#webqq").css("zIndex",document_index);
		  
		  
		  })
     /*-------------------------------WEBQQ----------------------------------*/
	 /*----------------------------------------------W3Cschool--------------------------------------*/
	  //移动 
	  var W3CschoolDom=document.getElementById("W3Cschool");
      var w3ctitleDom=document.getElementById("w3c_title");
	    
	   w3ctitleDom.onmousedown=function(e){
		     e=e||window.event; 
             var x=e.clientX-parseInt(W3CschoolDom.style.left);        //得到x的差
			 var y=e.clientY-parseInt(W3CschoolDom.style.top);         //得到y的差
			  document.onmousemove=function(ev){
			       ev=ev||window.event;
				   W3CschoolDom.style.left=(ev.clientX-x)+"px";
				   W3CschoolDom.style.top=(ev.clientY-y)+"px";
			  
			  
			  }
			  document.onmouseup=function(){
			      document.onmousemove=null;
			  
			  }
		
		}
		  
		/*
        var bodyHeightDom=document.body.scrollHeight;	  //获取浏览器实际高度
        var bodyWidthDom=document.body.clientWidth;	      //获取浏览器实际高度宽度
		*/
        //放大缩小的实现
       
		var W3CschoolWidthDom=document.getElementById("W3Cschool").clientWidth; //得到元素的原本宽度
		var W3CschoolHeightDom=document.getElementById("W3Cschool").clientHeight;//得到元素的原本高度

		var W3CschoolBoxWidthDom=$("#W3Cschool .w3c_bottom").width();//JQ得到盒子的原本宽度
		var W3CschoolBoxHeightDom=$("#W3Cschool .w3c_bottom").height();//JQ得到盒子的原本高度

		var W3CschoolIframeWidthDom=$("#W3Cschool .w3c_bottom iframe").width();//JQ得到内联框架的原本宽度
		var W3CschoolIframeHeightDom=$("#W3Cschool .w3c_bottom iframe").height();//JQ得到内联框架的原本高度;
		 var W3Cschool_num=1;
	 $("#W3Cschool a.big").click(function(){	 
		   //获取浏览器窗口的高度
		 if(W3Cschool_num==1){
			 $(this).css({"width":"15px","height":"12px","top":"7px"}); //放大时候改变
	         W3CschoolDom.style.width=bodyWidthDom+"px";               //放大的宽度           
		     W3CschoolDom.style.height=bodyHeightDom+"px";             //放大的高度

             $("#W3Cschool .w3c_bottom").width(bodyWidthDom);     //JQ盒子的宽度
             $("#W3Cschool .w3c_bottom").height(bodyHeightDom-40); //JQ盒子的高度

	         $("#W3Cschool .w3c_bottom iframe").width(bodyWidthDom-5);   //JQ内联框架的宽度
             $("#W3Cschool .w3c_bottom iframe").height(bodyHeightDom-40);//JQ内联框架的高度
		      W3Cschool_num=2;
		 }else{
		   $(this).css({"width":"30px","height":"18px","top":"4px"});
           $("#W3Cschool .w3c_bottom iframe").width(W3CschoolIframeWidthDom); //JQ内联框架的宽度度
		   $("#W3Cschool .w3c_bottom iframe").height(W3CschoolIframeHeightDom);//JQ内联框架的高度

		   $("#W3Cschool .w3c_bottom").width(W3CschoolBoxWidthDom);     //JQ盒子的宽度
           $("#W3Cschool .w3c_bottom").height(W3CschoolBoxHeightDom); //JQ盒子的高度

			W3CschoolDom.style.width=W3CschoolWidthDom+"px";                        //缩小宽度
			W3CschoolDom.style.height=W3CschoolHeightDom+"px";                      //缩小的高度 
			  W3Cschool_num=1  
		 
		 }
	 })
	 //点击W3Cschool窗口
		$("#W3Cschool").click(function(){
			document_index++;
		    $(this).css("zIndex",document_index);
		
		
		})
          //关闭W3Cschool窗口
       var W3CschoolcloseDom=$("#W3Cschool .w3c_close");
	      W3CschoolcloseDom.css("cursor","pointer");
	      W3CschoolcloseDom.click(function(){
			       document_index--;	      
		         $("#W3Cschool").slideUp(500);         
                 $("#W3Cschool").css("zIndex",document_index);
		  
		  
		  })
	  /*------------------------------------------W3Cschool----------------------------------------*/  
    /*-------------------------------淘宝-------------------------------------*/
        //移动 
	  var taobaoDom=document.getElementById("taobao");
      var taobaotitleDom=document.getElementById("taobao_title");
	    
	taobaotitleDom.onmousedown=function(e){
		     e=e||window.event; 
             var x=e.clientX-parseInt(taobaoDom.style.left);        //得到x的差
			 var y=e.clientY-parseInt(taobaoDom.style.top);         //得到y的差
			  document.onmousemove=function(ev){
			       ev=ev||window.event;
				   taobaoDom.style.left=(ev.clientX-x)+"px";
				   taobaoDom.style.top=(ev.clientY-y)+"px";
			  
			  
			  }
			  document.onmouseup=function(){
			      document.onmousemove=null;
			  
			  }
		
		}
		
       
		
        var bodyHeightDom=document.body.scrollHeight;	  //获取浏览器实际高度
        var bodyWidthDom=document.body.clientWidth;	      //获取浏览器实际高度宽度
		
        //放大缩小的实现
       
		var taobaoDomWidthDom=document.getElementById("taobao").clientWidth; //得到元素的原本宽度
		var taobaoDomHeightDom=document.getElementById("taobao").clientHeight;//得到元素的原本高度

		var taobaoDomBoxWidthDom=$("#taobao .taobao_bottom").width();//JQ得到盒子的原本宽度
		var taobaoDomBoxHeightDom=$("#taobao .taobao_bottom").height();//JQ得到盒子的原本高度

		var taobaoDomIframeWidthDom=$("#taobao .taobao_bottom iframe").width();//JQ得到内联框架的原本宽度
		var taobaoDomIframeHeightDom=$("#taobao .taobao_bottom iframe").height();//JQ得到内联框架的原本高度;
		 var taobao_num=1;
	 $("#taobao a.big").click(function(){	 
		   //获取浏览器窗口的高度
		 if(taobao_num==1){
			 $(this).css({"width":"15px","height":"12px","top":"7px"}); //放大时候改变
	         taobaoDom.style.width=bodyWidthDom+"px";               //放大的宽度           
		     taobaoDom.style.height=bodyHeightDom+"px";             //放大的高度

             $("#taobao .taobao_bottom").width(bodyWidthDom);     //JQ盒子的宽度
             $("#taobao .taobao_bottom").height(bodyHeightDom-40); //JQ盒子的高度

	         $("#taobao .taobao_bottom iframe").width(bodyWidthDom-5);   //JQ内联框架的宽度
             $("#taobao .taobao_bottom iframe").height(bodyHeightDom-40);//JQ内联框架的高度
		      taobao_num=2;
		 }else{
		   $(this).css({"width":"30px","height":"18px","top":"4px"});
           $("#taobao .taobao_bottom iframe").width(taobaoDomIframeWidthDom); //JQ内联框架的宽度度
		   $("#taobao .taobao_bottom iframe").height(taobaoDomIframeHeightDom);//JQ内联框架的高度

		   $("#taobao .taobao_bottom").width(taobaoDomBoxWidthDom);     //JQ盒子的宽度
           $("#taobao .taobao_bottom").height(taobaoDomBoxHeightDom); //JQ盒子的高度

			 taobaoDom.style.width=taobaoDomWidthDom+"px";                        //缩小宽度
			 taobaoDom.style.height=taobaoDomHeightDom+"px";                      //缩小的高度 
			  taobao_num=1  
		 
		 }
	 })
	  //点击淘宝窗口
		$("#taobao").click(function(){
			document_index++;
		    $(this).css("zIndex",document_index);
		
		
		})
          //关闭淘宝窗口
       var taobaolcloseDom=$("#taobao .taobao_close");
	      taobaolcloseDom.css("cursor","pointer");
	      taobaolcloseDom.click(function(){
			       document_index--;	      
		         $("#taobao").slideUp(500);         
                 $("#taobao").css("zIndex",document_index);
		  
		  
		  })


   /*-------------------------------淘宝-----------------------------------*/
		  
  /*--------------------------------记事本----------------------------------*/
		     //移动 
	  var notebookDom=document.getElementById("notebook");
      var notebooktitleDom=document.getElementById("notebook_title");
	    
      notebooktitleDom.onmousedown=function(e){
		     e=e||window.event; 
             var x=e.clientX-parseInt(notebookDom.style.left);        //得到x的差
			 var y=e.clientY-parseInt(notebookDom.style.top);         //得到y的差
			  document.onmousemove=function(ev){
			       ev=ev||window.event;
			       notebookDom.style.left=(ev.clientX-x)+"px";
			       notebookDom.style.top=(ev.clientY-y)+"px";
			  
			  
			  }
			  document.onmouseup=function(){
			      document.onmousemove=null;
			  
			  }
		
		}
		
       
		
        var bodyHeightDom=document.body.scrollHeight;	  //获取浏览器实际高度
        var bodyWidthDom=document.body.clientWidth;	      //获取浏览器实际高度宽度
		
        //放大缩小的实现
       
		var notebookDomWidthDom=document.getElementById("notebook").clientWidth; //得到元素的原本宽度
		var notebookDomHeightDom=document.getElementById("notebook").clientHeight;//得到元素的原本高度

		var notebookDomBoxWidthDom=$("#notebook .notebook_bottom").width();//JQ得到盒子的原本宽度
		var notebookDomBoxHeightDom=$("#notebook .notebook_bottom").height();//JQ得到盒子的原本高度

		var notebookDomIframeWidthDom=$("#notebook .notebook_bottom iframe").width();//JQ得到内联框架的原本宽度
		var notebookDomIframeHeightDom=$("#notebook .notebook_bottom iframe").height();//JQ得到内联框架的原本高度;
		 var notebook_num=1;
	 $("#notebook a.big").click(function(){	 
		   //获取浏览器窗口的高度
		 if(notebook_num==1){
			 $(this).css({"width":"15px","height":"12px","top":"7px"}); //放大时候改变
			 notebookDom.style.width=bodyWidthDom+"px";               //放大的宽度           
			 notebookDom.style.height=bodyHeightDom+"px";             //放大的高度

             $("#notebook .notebook_bottom").width(bodyWidthDom);     //JQ盒子的宽度
             $("#notebook .notebook_bottom").height(bodyHeightDom-40); //JQ盒子的高度

	         $("#notebook .notebook_bottom iframe").width(bodyWidthDom-5);   //JQ内联框架的宽度
             $("#notebook .notebook_bottom iframe").height(bodyHeightDom-40);//JQ内联框架的高度
             notebook_num=2;
		 }else{
		   $(this).css({"width":"30px","height":"18px","top":"4px"});
           $("#notebook .notebook_bottom iframe").width(notebookDomIframeWidthDom); //JQ内联框架的宽度度
		   $("#notebook .notebook_bottom iframe").height(notebookDomIframeHeightDom);//JQ内联框架的高度

		   $("#notebook .notebook_bottom").width(notebookDomBoxWidthDom);     //JQ盒子的宽度
           $("#notebook .notebook_bottom").height(notebookDomBoxHeightDom); //JQ盒子的高度

           notebookDom.style.width=notebookDomWidthDom+"px";                        //缩小宽度
           notebookDom.style.height=notebookDomHeightDom+"px";                      //缩小的高度 
           notebook_num=1  
		 
		 }
	 })
	  //点击记事本窗口
		$("#notebook").click(function(){
			document_index++;
		    $(this).css("zIndex",document_index);
		
		
		})
          //关闭记事本窗口
       var notebooklcloseDom=$("#notebook .notebook_close");
	 notebooklcloseDom.css("cursor","pointer");
	 notebooklcloseDom.click(function(){
			       document_index--;	      
		         $("#notebook").slideUp(500);         
                 $("#notebook").css("zIndex",document_index);
		  
		  
		  })

/*----------------------------------记事本----------------------------------------------*/
/*--------------------------------- 图片上传-----------------------------------------------*/		  
		 
      //移动 

	  var pictureuploadDom=document.getElementById("pictureupload");
      var pictureuploadtitleDom=document.getElementById("pictureupload_title");
	    
      pictureuploadtitleDom.onmousedown=function(e){
		     e=e||window.event; 
             var x=e.clientX-parseInt(pictureuploadDom.style.left);        //得到x的差
			 var y=e.clientY-parseInt(pictureuploadDom.style.top);         //得到y的差
			  document.onmousemove=function(ev){
			       ev=ev||window.event;
			       pictureuploadDom.style.left=(ev.clientX-x)+"px";
			       pictureuploadDom.style.top=(ev.clientY-y)+"px";
			  
			  
			  }
			  document.onmouseup=function(){
			      document.onmousemove=null;
			  
			  }
		
		}
		
       
		
        var bodyHeightDom=document.body.scrollHeight;	  //获取浏览器实际高度
        var bodyWidthDom=document.body.clientWidth;	      //获取浏览器实际高度宽度
		
        //放大缩小的实现
       
		var pictureuploadDomWidthDom=document.getElementById("pictureupload").clientWidth; //得到元素的原本宽度
		var pictureuploadDomHeightDom=document.getElementById("pictureupload").clientHeight;//得到元素的原本高度

		var pictureuploadDomBoxWidthDom=$("#pictureupload .pictureupload_bottom").width();//JQ得到盒子的原本宽度
		var pictureuploadDomBoxHeightDom=$("#pictureupload .pictureupload_bottom").height();//JQ得到盒子的原本高度

		var pictureuploadDomIframeWidthDom=$("#pictureupload .pictureupload_bottom iframe").width();//JQ得到内联框架的原本宽度
		var pictureuploadDomIframeHeightDom=$("#pictureupload .pictureupload_bottom iframe").height();//JQ得到内联框架的原本高度;
		 var pictureupload_num=1;
	 $("#pictureupload a.big").click(function(){	 
		   //获取浏览器窗口的高度
		 if(pictureupload_num==1){
			 $(this).css({"width":"15px","height":"12px","top":"7px"}); //放大时候改变
			 pictureuploadDom.style.width=bodyWidthDom+"px";               //放大的宽度           
			 pictureuploadDom.style.height=bodyHeightDom+"px";             //放大的高度

             $("#pictureupload .pictureupload_bottom").width(bodyWidthDom);     //JQ盒子的宽度
             $("#pictureupload .pictureupload_bottom").height(bodyHeightDom-40); //JQ盒子的高度

	         $("#pictureupload .pictureupload_bottom iframe").width(bodyWidthDom-5);   //JQ内联框架的宽度
             $("#pictureupload .pictureupload_bottom iframe").height(bodyHeightDom-40);//JQ内联框架的高度
             pictureupload_num=2;
		 }else{
		   $(this).css({"width":"30px","height":"18px","top":"4px"});
           $("#pictureupload .pictureupload_bottom iframe").width(pictureuploadDomIframeWidthDom); //JQ内联框架的宽度度
		   $("#pictureupload .pictureupload_bottom iframe").height(pictureuploadDomIframeHeightDom);//JQ内联框架的高度

		   $("#pictureupload .pictureupload_bottom").width(pictureuploadDomBoxWidthDom);     //JQ盒子的宽度
           $("#pictureupload .pictureupload_bottom").height(pictureuploadDomBoxHeightDom); //JQ盒子的高度

           pictureuploadDom.style.width=pictureuploadDomWidthDom+"px";                        //缩小宽度
           pictureuploadDom.style.height=pictureuploadDomHeightDom+"px";                      //缩小的高度 
           pictureupload_num=1  
		 
		 }
	 })
	  //点击图片上传窗口
		$("#pictureupload").click(function(){
			document_index++;
		    $(this).css("zIndex",document_index);
		
		
		})
          //关闭图片上传窗口
       var pictureuploadlcloseDom=$("#pictureupload .pictureupload_close");
	 pictureuploadlcloseDom.css("cursor","pointer");
	 pictureuploadlcloseDom.click(function(){
			       document_index--;	      
		         $("#pictureupload").slideUp(500);         
                 $("#pictureupload").css("zIndex",document_index);
		  
		  
		  })

		  
/*--------------------------------- 图片上传-----------------------------------------------*/		  
		  
	/*--------------------------------展示大图片-----------------------------------------------*/		  
		    //移动 

	  var bigpictureDom=document.getElementById("bigpicture");
      var bigpicturetitleDom=document.getElementById("bigpicture_title");
	    
      bigpicturetitleDom.onmousedown=function(e){
		     e=e||window.event; 
             var x=e.clientX-parseInt(bigpictureDom.style.left);        //得到x的差
			 var y=e.clientY-parseInt(bigpictureDom.style.top);         //得到y的差
			  document.onmousemove=function(ev){
			       ev=ev||window.event;
			       bigpictureDom.style.left=(ev.clientX-x)+"px";
			       bigpictureDom.style.top=(ev.clientY-y)+"px";
			  
			  
			  }
			  document.onmouseup=function(){
			      document.onmousemove=null;
			  
			  }
		
		}
		
       
		
        var bodyHeightDom=document.body.scrollHeight;	  //获取浏览器实际高度
        var bodyWidthDom=document.body.clientWidth;	      //获取浏览器实际高度宽度
		
        //放大缩小的实现
       
		var bigpictureDomWidthDom=document.getElementById("bigpicture").clientWidth; //得到元素的原本宽度
		var bigpictureDomHeightDom=document.getElementById("bigpicture").clientHeight;//得到元素的原本高度

		var bigpictureDomBoxWidthDom=$("#bigpicture .bigpicture_bottom").width();//JQ得到盒子的原本宽度
		var bigpictureDomBoxHeightDom=$("#bigpicture .bigpicture_bottom").height();//JQ得到盒子的原本高度

		var bigpictureDomIframeWidthDom=$("#bigpicture .bigpicture_bottom iframe").width();//JQ得到内联框架的原本宽度
		var bigpictureDomIframeHeightDom=$("#bigpicture .bigpicture_bottom iframe").height();//JQ得到内联框架的原本高度;
		 var bigpicture_num=1;
	 $("#bigpicture a.big").click(function(){	 
		   //获取浏览器窗口的高度
		 if(bigpicture_num==1){
			 $(this).css({"width":"15px","height":"12px","top":"7px"}); //放大时候改变
			 bigpictureDom.style.width=bodyWidthDom+"px";               //放大的宽度           
			 bigpictureDom.style.height=bodyHeightDom+"px";             //放大的高度

             $("#bigpicture .bigpicture_bottom").width(bodyWidthDom);     //JQ盒子的宽度
             $("#bigpicture .bigpicture_bottom").height(bodyHeightDom-40); //JQ盒子的高度

	         $("#bigpicture .bigpicture_bottom iframe").width(bodyWidthDom-5);   //JQ内联框架的宽度
             $("#bigpicture .bigpicture_bottom iframe").height(bodyHeightDom-40);//JQ内联框架的高度
             bigpicture_num=2;
		 }else{
		   $(this).css({"width":"30px","height":"18px","top":"4px"});
           $("#bigpicture .bigpicture_bottom iframe").width(bigpictureDomIframeWidthDom); //JQ内联框架的宽度度
		   $("#bigpicture .bigpicture_bottom iframe").height(bigpictureDomIframeHeightDom);//JQ内联框架的高度

		   $("#bigpicture .bigpicture_bottom").width(bigpictureDomBoxWidthDom);     //JQ盒子的宽度
           $("#bigpicture .bigpicture_bottom").height(bigpictureDomBoxHeightDom); //JQ盒子的高度

           bigpictureDom.style.width=bigpictureDomWidthDom+"px";                        //缩小宽度
           bigpictureDom.style.height=bigpictureDomHeightDom+"px";                      //缩小的高度 
           bigpicture_num=1  
		 
		 }
	 })
	  //点击记事本窗口
		$("#bigpicture").click(function(){
			document_index++;
		    $(this).css("zIndex",document_index);
		
		
		})
          //关闭记事本窗口
       var bigpicturelcloseDom=$("#bigpicture .bigpicture_close");
	 bigpicturelcloseDom.css("cursor","pointer");
	 bigpicturelcloseDom.click(function(){
			       document_index--;	      
		         $("#bigpicture").slideUp(500);         
                 $("#bigpicture").css("zIndex",document_index);
		  
		  
		  })
		  
		  
/*--------------------------------展示大图片-----------------------------------------------*/
		  
		  
		  
/*---------------------------------网站信息-------------------------------------------------*/		
		  
	    //移动 

	  var websiteDom=document.getElementById("website");
      var websitetitleDom=document.getElementById("website_title");
	    
      websitetitleDom.onmousedown=function(e){
		     e=e||window.event; 
             var x=e.clientX-parseInt(websiteDom.style.left);        //得到x的差
			 var y=e.clientY-parseInt(websiteDom.style.top);         //得到y的差
			  document.onmousemove=function(ev){
			       ev=ev||window.event;
			       websiteDom.style.left=(ev.clientX-x)+"px";
			       websiteDom.style.top=(ev.clientY-y)+"px";
			  
			  
			  }
			  document.onmouseup=function(){
			      document.onmousemove=null;
			  
			  }
		
		}
		
       
		
        var bodyHeightDom=document.body.scrollHeight;	  //获取浏览器实际高度
        var bodyWidthDom=document.body.clientWidth;	      //获取浏览器实际高度宽度
		
        //放大缩小的实现
       
		var websiteDomWidthDom=document.getElementById("website").clientWidth; //得到元素的原本宽度
		var websiteDomHeightDom=document.getElementById("website").clientHeight;//得到元素的原本高度

		var websiteDomBoxWidthDom=$("#website .website_bottom").width();//JQ得到盒子的原本宽度
		var websiteDomBoxHeightDom=$("#website .website_bottom").height();//JQ得到盒子的原本高度

		var websiteDomIframeWidthDom=$("#website .website_bottom iframe").width();//JQ得到内联框架的原本宽度
		var websiteDomIframeHeightDom=$("#website .website_bottom iframe").height();//JQ得到内联框架的原本高度;
		 var website_num=1;
	 $("#website a.big").click(function(){	 
		   //获取浏览器窗口的高度
		 if(website_num==1){
			 $(this).css({"width":"15px","height":"12px","top":"7px"}); //放大时候改变
			 websiteDom.style.width=bodyWidthDom+"px";               //放大的宽度           
			 websiteDom.style.height=bodyHeightDom+"px";             //放大的高度

             $("#website .website_bottom").width(bodyWidthDom);     //JQ盒子的宽度
             $("#website .website_bottom").height(bodyHeightDom-40); //JQ盒子的高度

	         $("#website .website_bottom iframe").width(bodyWidthDom-5);   //JQ内联框架的宽度
             $("#website .website_bottom iframe").height(bodyHeightDom-40);//JQ内联框架的高度
             website_num=2;
		 }else{
		   $(this).css({"width":"30px","height":"18px","top":"4px"});
           $("#website .website_bottom iframe").width(websiteDomIframeWidthDom); //JQ内联框架的宽度度
		   $("#website .website_bottom iframe").height(websiteDomIframeHeightDom);//JQ内联框架的高度

		   $("#website .website_bottom").width(websiteDomBoxWidthDom);     //JQ盒子的宽度
           $("#website .website_bottom").height(websiteDomBoxHeightDom); //JQ盒子的高度

           websiteDom.style.width=websiteDomWidthDom+"px";                        //缩小宽度
           websiteDom.style.height=websiteDomHeightDom+"px";                      //缩小的高度 
           website_num=1  
		 
		 }
	 })
	  //点击记事本窗口
		$("#website").click(function(){
			document_index++;
		    $(this).css("zIndex",document_index);
		
		
		})
          //关闭记事本窗口
       var websitelcloseDom=$("#website .website_close");
	 websitelcloseDom.css("cursor","pointer");
	 websitelcloseDom.click(function(){
			       document_index--;	      
		         $("#website").slideUp(500);         
                 $("#website").css("zIndex",document_index);
		  
		  
		  })
/*---------------------------------网站信息--------------------------------------------------*/	
		  
/*---------------------------------网站信息URL-------------------------------------------------*/		
		  
	    //移动 

	  var websiteurlDom=document.getElementById("websiteurl");
      var websiteurltitleDom=document.getElementById("websiteurl_title");
	    
      websiteurltitleDom.onmousedown=function(e){
		     e=e||window.event; 
             var x=e.clientX-parseInt(websiteurlDom.style.left);        //得到x的差
			 var y=e.clientY-parseInt(websiteurlDom.style.top);         //得到y的差
			  document.onmousemove=function(ev){
			       ev=ev||window.event;
			       websiteurlDom.style.left=(ev.clientX-x)+"px";
			       websiteurlDom.style.top=(ev.clientY-y)+"px";
			  
			  
			  }
			  document.onmouseup=function(){
			      document.onmousemove=null;
			  
			  }
		
		}
		
       
		
        var bodyHeightDom=document.body.scrollHeight;	  //获取浏览器实际高度
        var bodyWidthDom=document.body.clientWidth;	      //获取浏览器实际高度宽度
		
        //放大缩小的实现
       
		var websiteurlDomWidthDom=document.getElementById("websiteurl").clientWidth; //得到元素的原本宽度
		var websiteurlDomHeightDom=document.getElementById("websiteurl").clientHeight;//得到元素的原本高度

		var websiteurlDomBoxWidthDom=$("#websiteurl .websiteurl_bottom").width();//JQ得到盒子的原本宽度
		var websiteurlDomBoxHeightDom=$("#websiteurl .websiteurl_bottom").height();//JQ得到盒子的原本高度

		var websiteurlDomIframeWidthDom=$("#websiteurl .websiteurl_bottom iframe").width();//JQ得到内联框架的原本宽度
		var websiteurlDomIframeHeightDom=$("#websiteurl .websiteurl_bottom iframe").height();//JQ得到内联框架的原本高度;
		 var websiteurl_num=1;
	 $("#websiteurl a.big").click(function(){	 
		   //获取浏览器窗口的高度
		 if(websiteurl_num==1){
			 $(this).css({"width":"15px","height":"12px","top":"7px"}); //放大时候改变
			 websiteurlDom.style.width=bodyWidthDom+"px";               //放大的宽度           
			 websiteurlDom.style.height=bodyHeightDom+"px";             //放大的高度

             $("#websiteurl .websiteurl_bottom").width(bodyWidthDom);     //JQ盒子的宽度
             $("#websiteurl .websiteurl_bottom").height(bodyHeightDom-40); //JQ盒子的高度

	         $("#websiteurl .websiteurl_bottom iframe").width(bodyWidthDom-5);   //JQ内联框架的宽度
             $("#websiteurl .websiteurl_bottom iframe").height(bodyHeightDom-40);//JQ内联框架的高度
             websiteurl_num=2;
		 }else{
		   $(this).css({"width":"30px","height":"18px","top":"4px"});
           $("#websiteurl .websiteurl_bottom iframe").width(websiteurlDomIframeWidthDom); //JQ内联框架的宽度度
		   $("#websiteurl .websiteurl_bottom iframe").height(websiteurlDomIframeHeightDom);//JQ内联框架的高度

		   $("#websiteurl .websiteurl_bottom").width(websiteurlDomBoxWidthDom);     //JQ盒子的宽度
           $("#websiteurl .websiteurl_bottom").height(websiteurlDomBoxHeightDom); //JQ盒子的高度

           websiteurlDom.style.width=websiteurlDomWidthDom+"px";                        //缩小宽度
           websiteurlDom.style.height=websiteurlDomHeightDom+"px";                      //缩小的高度 
           websiteurl_num=1  
		 
		 }
	 })
	  //点击记事本窗口
		$("#websiteurl").click(function(){
			document_index++;
		    $(this).css("zIndex",document_index);
		
		
		})
          //关闭记事本窗口
       var websiteurllcloseDom=$("#websiteurl .websiteurl_close");
	 websiteurllcloseDom.css("cursor","pointer");
	 websiteurllcloseDom.click(function(){
			       document_index--;	      
		         $("#websiteurl").slideUp(500);         
                 $("#websiteurl").css("zIndex",document_index);
		  
		  
		  })
/*---------------------------------网站信息URL--------------------------------------------------*/			  
		  
		  
		  
		  
		  
   /*---------------------------------途牛网----------------------------------*/
          //移动 
	  var tuniuDom=document.getElementById("tuniu");
      var tuniutitleDom=document.getElementById("tuniu_title");
	    
	   tuniutitleDom.onmousedown=function(e){
		     e=e||window.event; 
             var x=e.clientX-parseInt(tuniuDom.style.left);        //得到x的差
			 var y=e.clientY-parseInt(tuniuDom.style.top);         //得到y的差
			  document.onmousemove=function(ev){
			       ev=ev||window.event;
				   tuniuDom.style.left=(ev.clientX-x)+"px";
				   tuniuDom.style.top=(ev.clientY-y)+"px";
			  
			  
			  }
			  document.onmouseup=function(){
			      document.onmousemove=null;
			  
			  }
		
		}
            
        var bodyHeightDom=document.body.scrollHeight;	  //获取浏览器实际高度
        var bodyWidthDom=document.body.clientWidth;	      //获取浏览器实际高度宽度
		
        //放大缩小的实现
       
		var tuniuDomWidthDom=document.getElementById("tuniu").clientWidth; //得到元素的原本宽度
		var tuniuDomHeightDom=document.getElementById("tuniu").clientHeight;//得到元素的原本高度

		var tuniuDomBoxWidthDom=$("#tuniu .tuniu_bottom").width();//JQ得到盒子的原本宽度
		var tuniuDomBoxHeightDom=$("#tuniu .tuniu_bottom").height();//JQ得到盒子的原本高度

		var tuniuDomIframeWidthDom=$("#tuniu .tuniu_bottom iframe").width();//JQ得到内联框架的原本宽度
		var tuniuDomIframeHeightDom=$("#tuniu .tuniu_bottom iframe").height();//JQ得到内联框架的原本高度;
		 var tuniu_num=1;
	 $("#tuniu a.big").click(function(){	 
		   //获取浏览器窗口的高度
		 if(tuniu_num==1){
			 $(this).css({"width":"15px","height":"12px","top":"7px"}); //放大时候改变
	         tuniuDom.style.width=bodyWidthDom+"px";               //放大的宽度           
		     tuniuDom.style.height=bodyHeightDom+"px";             //放大的高度

             $("#tuniu .tuniu_bottom").width(bodyWidthDom);     //JQ盒子的宽度
             $("#tuniu .tuniu_bottom").height(bodyHeightDom-40); //JQ盒子的高度

	         $("#tuniu .tuniu_bottom iframe").width(bodyWidthDom-5);   //JQ内联框架的宽度
             $("#tuniu .tuniu_bottom iframe").height(bodyHeightDom-40);//JQ内联框架的高度
		      tuniu_num=2;
		 }else{
		   $(this).css({"width":"30px","height":"18px","top":"4px"});
           $("#tuniu .tuniu_bottom iframe").width(tuniuDomIframeWidthDom); //JQ内联框架的宽度度
		   $("#tuniu .tuniu_bottom iframe").height(tuniuDomIframeHeightDom);//JQ内联框架的高度

		   $("#tuniu .tuniu_bottom").width(tuniuDomBoxWidthDom);     //JQ盒子的宽度
           $("#tuniu .tuniu_bottom").height(tuniuDomBoxHeightDom); //JQ盒子的高度

			 tuniuDom.style.width=tuniuDomWidthDom+"px";                        //缩小宽度
			 tuniuDom.style.height=tuniuDomHeightDom+"px";                      //缩小的高度 
			 tuniu_num=1  
		 
		 }
	 })
	  //点击途牛网窗口
		$("#tuniu").click(function(){
			document_index++;
		    $(this).css("zIndex",document_index);
		
		
		})
          //关闭淘途牛网窗口
       var tuniucloseDom=$("#tuniu .tuniu_close");
	      tuniucloseDom.css("cursor","pointer");
	      tuniucloseDom.click(function(){
			       document_index--;	      
		         $("#tuniu").slideUp(500);         
                 $("#tuniu").css("zIndex",document_index);
		  
		  
		  })
   /*---------------------------------途牛网---------------------------------*/
	  /*-------------------------------------------win8-------------------------------------------*/
	    var content_num=1;
         var win8iconDom=document.getElementById("win8_icon");
		 var win8pageDom=document.getElementById("win8_page");
		   win8iconDom.onclick=function(){
			 
			  if(content_num==1){
		        win8pageDom.style.display="inline";
			     content_num=2; 
			  }else{
			    win8pageDom.style.display="none";
				
			     content_num=1;
			  }
		   
		      
		 }
   /*-------------------------------win8--------------------------------------*/
		   
		   
		   
		   
		   
  
	/*-----------------------------图标*-----------------------------------*/
	
     $("#picture_icon .i_icon").dblclick(function(){  //双击打开图库
		   document_index++;
	       $(".pict").show(100);
		    $(".pict").css("zIndex",document_index);
	   
	 })
	 $("#picture_speak .s_icon").dblclick(function(){  //双击打开说说
	     document_index++;
        $("#containerSpeak").slideDown(400);
         $("#containerSpeak").css("zIndex",document_index);
	 
	 })
    $("#picture_rotate .r_icon").dblclick(function(){   //双击打开3D图
	        document_index++;
	    rotate1Dom.style.animationName="none";
			 rotate1Dom.style.animationDuration="0";
             rotate1Dom.style.animationTimingFunction="none";
	         rotate1Dom.style.animationIterationCount="0"; 

			 rotate2Dom.style.animationName="none";
			 rotate2Dom.style.animationDuration="0";
			 rotate2Dom.style.animationTimingFunction="none";
			 rotate2Dom.style.animationIterationCount="0";

			 rotate3Dom.style.animationName="none";
			 rotate3Dom.style.animationDuration="0";
			 rotate3Dom.style.animationTimingFunction="none";
			 rotate3Dom.style.animationIterationCount="0";

			 rotate4Dom.style.animationName="none";
			 rotate4Dom.style.animationDuration="0";
			 rotate4Dom.style.animationTimingFunction="none";
			 rotate4Dom.style.animationIterationCount="0";
             $("#transform").fadeIn(2000);
			 $("#transform").css("zIndex",document_index);
	
	
	})
	$("#picture_select").dblclick(function(){         //双击搜索
		    document_index++;
	        $("#select").slideDown(300);
            $("#select").css("zIndex",document_index);
	
	})
	$("#picture_tengxunVideo").dblclick(function(){         //双击腾讯
		    document_index++;

	        tengxunDom.style.visibility="visible";         //搭配使用
			$("#tengxun_video").slideDown(300);          //与关闭相对应 
			     
			$("#tengxun_video").css("zIndex",document_index);
	
	})
	$("#picture_WEBQQ").dblclick(function(){         //双击WEBQQ
		    document_index++;
	        webqqDom.style.visibility="visible";         //搭配使用
			$("#webqq").slideDown(300);          //与关闭相对应 
            $("#webqq").css("zIndex",document_index);
	
	})
	$("#picture_notebook").dblclick(function(){    //双击noteBook
		    document_index++;
	        notebookDom.style.visibility="visible";         //搭配使用
			$("#notebook").slideDown(300);          //与关闭相对应 
         $("#notebook").css("zIndex",document_index);
		
		
	})
	$("#picture_pictureupload").dblclick(function(){    //双击pictureupload
		    document_index++;
		    pictureupload.style.visibility="visible";         //搭配使用
			$("#pictureupload").slideDown(300);          //与关闭相对应 
         $("#pictureupload").css("zIndex",document_index);
		
		
	})
	  $("#picture_bigpicture").dblclick(function(){    //双击bigpicture
		    document_index++;
		    bigpicture.style.visibility="visible";         //搭配使用
			$("#bigpicture").slideDown(300);          //与关闭相对应 
         $("#bigpicture").css("zIndex",document_index);
		
		
	})
	$("#picture_lookbigpicture").dblclick(function(){    //双击lookbigpicture
		    document_index++;
		    bigpicture.style.visibility="visible";         //搭配使用
			$("#bigpicture").slideDown(300);          //与关闭相对应 
         $("#bigpicture").css("zIndex",document_index);
		
		
	})
	
	$("#picture_website").dblclick(function(){    //双击website
		    document_index++;
		    website.style.visibility="visible";         //搭配使用
			$("#website").slideDown(300);          //与关闭相对应 
         $("#website").css("zIndex",document_index);
		
		
	})
	
	$("#picture_websiteurl").dblclick(function(){    //双击websiteurl
		    document_index++;
		    websiteurl.style.visibility="visible";         //搭配使用
			$("#websiteurl").slideDown(300);          //与关闭相对应 
         $("#websiteurl").css("zIndex",document_index);
		
		
	})	
	
	
	
	$("#win8_page ul li a img.win8_oneIcon").dblclick(function(){    //双击W3Cschool
	        document_index++;

            W3CschoolDom.style.visibility="visible";         //搭配使用
			$("#W3Cschool").slideDown(300);          //与关闭相对应 
			     
			$("#W3Cschool").css("zIndex",document_index);
	  
	
	})
	$("#win8_page img.win8_twoIcon").dblclick(function(){    //双击淘宝
	        document_index++;
            $("#taobao").slideDown(300);          //与关闭相对应 
            taobaoDom.style.visibility="visible";         //搭配使用
			
			     
			$("#taobao").css("zIndex",document_index);
	  
	
	})
	$("#win8_page img.win8_threeIcon").dblclick(function(){    //双击途牛网
	        document_index++;

            tuniuDom.style.visibility="visible";         //搭配使用
			$("#tuniu").slideDown(300);          //与关闭相对应 
			     
			$("#tuniu").css("zIndex",document_index);
	  
	
	})
      
/*----------------------------------图标*--------------------------------*/
  