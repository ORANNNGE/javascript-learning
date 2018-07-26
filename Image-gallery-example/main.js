var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
/* 遍历相片 */
function setDisImg(imgsrc){//img的单击事件
		displayedImage.setAttribute('src', imgsrc);
  	console.log(imgsrc+'newImg');
	}
for (var i=1;i<=5;i++) {
	//拼接图片地址
	var imgsrc = 'images/pic'+i+'.jpg';
	console.log(imgsrc);
	//创建img元素
	var newImage = document.createElement('img');
	//给src属性赋值
  newImage.setAttribute('src', imgsrc);
  thumbBar.appendChild(newImage);
	//给img添加单击事件
  newImage.setAttribute('onclick',"setDisImg('"+imgsrc+"')");
}

/* Wiring up the Darken/Lighten button */
/* 单击按钮使图片变亮/变暗 */
btn.onclick=function(){
	if(btn.textContent === 'Darken'){
		//给div设置背景色，将透明度设为0.2
		overlay.style.backgroundColor = "rgba(0,0,0,0.2)";
		btn.textContent='Lighten';

	}else{
		overlay.style.backgroundColor = "rgba(0,0,0,0)";
		btn.textContent='Darken';
	}
}
