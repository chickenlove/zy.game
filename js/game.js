﻿/**********************************************************
引擎: zyGame_v1.0.0
声明: 不得擅自修改本引擎代码、注释等内容;
	  使用本引擎开发的游戏，未经许可不得发布到17h5.com以外的平台
网址: 17h5.com
信箱: 176206@qq.com
QQ群: 194563450
**********************************************************/


//参数设置
zyGame.config={
	title	   : 'zyGame_v1.0.0',
	width      : 480,
	height     : 320,
	fullscreen : 0
};


//txt=new zyGame.cls.text(10,100);
//zyGame.object.add(txt);


var fps=new zyGame.pls.fps(0,0);
fps.text.color='rgb(150,150,150)';
fps.show();



var src=['rect.jpg'];
zyGame.load.load(src,gameStart);

var txt2=new zyGame.cls.text(100,100);
txt2.text='22222222';
txt2.color='rgb(0,255,0)';
txt2.show();

var lay=new zyGame.cls.layer(0,0,200,200);
lay.show();



var txt=new zyGame.cls.text(100,100);
txt.text='test';
txt.color='rgb(150,150,150)';
txt.parent=lay;
txt.show();

var txt3=new zyGame.cls.text(100,100);
txt3.text='3333333';
txt3.color='rgb(0,255,0)';
txt3.show();

var img=new zyGame.cls.image(10,200,100,100);
img.src='rect.jpg';
//img.parent=lay;
img.click=function(){
	console.log(arguments);
};


function gameStart(){
	//alert('game loaded');
	img.show();
}









