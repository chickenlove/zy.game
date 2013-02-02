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
	title	   : '快乐地鼠',
	width      : 320,
	height     : 480,
	fullscreen : 0
};

var src=['bg.jpg','unit.jpg','hole.jpg','button_normal.jpg','button_down.jpg','button_disabled.jpg','0123456789.png'];
zyGame.load.load(src,gameStart);

var fps=new zyGame.pls.fps(10,70);

var imgBg=new zyGame.cls.image(0,0,320,480);
imgBg.src='bg.jpg';

var imgUnit=new zyGame.cls.image(10,10,50,50);
imgUnit.src='unit.jpg';
var txtUnit=new zyGame.cls.text(22,30);
txtUnit.text='第1关';

var txtFarmHP=new zyGame.cls.text(70,20);
txtFarmHP.text='农场破坏值：100';
var txtGold=new zyGame.cls.text(70,40);
txtGold.text='金币：';
var nifGold=new zyGame.pls.numberImgFont(130,40,8,13);
nifGold.src='0123456789.png';
nifGold.number=9876543210;

var imgWeather=new zyGame.cls.image(260,10,50,50);
imgWeather.src='unit.jpg';
var txtWeather=new zyGame.cls.text(280,30);
txtWeather.text='晴';
var txtScore=new zyGame.cls.text(250,70);
txtScore.text='积分：1000';

var imgWater=new zyGame.cls.image(10,420,50,50);
imgWater.src='unit.jpg';
var txtWater=new zyGame.cls.text(25,440);
txtWater.text='水缸';

var btnProp1=new zyGame.cls.button(80,430,30,30);
btnProp1.setsrc('button_normal.jpg','button_down.jpg','button_disabled.png');
btnProp1.onClick=function(){
	console.log('click');
};
btnProp1.onMousedown=function(){
	console.log('down');
};
btnProp1.onMouseup=function(){
	console.log('up');
};

var imgProp2=new zyGame.cls.image(120,430,30,30);
imgProp2.src='unit.jpg';
var imgProp3=new zyGame.cls.image(160,430,30,30);
imgProp3.src='unit.jpg';
var imgProp4=new zyGame.cls.image(200,430,30,30);
imgProp4.src='unit.jpg';

var imgTool=new zyGame.cls.image(260,420,50,50);
imgTool.src='unit.jpg';
var txtTool=new zyGame.cls.text(275,440);
txtTool.text='工具';

var imgHole=[];
for (var i=0;i<16;i++){
	imgHole[i]=new zyGame.cls.image(5+80*(i%4),100+80*Math.floor(i/4),70,70);
	imgHole[i].src='hole.jpg';
}



function gameStart(){
	//alert('game loaded');
	
	imgBg.show();
	fps.show();
	
	imgUnit.show();
	txtUnit.show();
	
	txtFarmHP.show();
	txtGold.show();
	nifGold.show();
	
	imgWeather.show();
	txtWeather.show();
	txtScore.show();
	
	imgWater.show();
	txtWater.show();
	btnProp1.show();
	imgProp2.show();
	imgProp3.show();
	imgProp4.show();
	imgTool.show();
	txtTool.show();
	
	for (var i=0;i<16;i++){
		imgHole[i].show();
	}
}









