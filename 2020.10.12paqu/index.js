var request = require('request');
var path = require('path');
var config = require('./config.js');
var analyze = require('./analyze.js');
var fs = require("fs")

function start() {
	request(config.url, function(err,res,body){
		console.log('start...')
		if(!err && res){
			console.log("请求网页成功，开始获取数据");
			analyze.findImg(body,downLoad);
		}
	});
}

function downLoad(imgUrl,i) {
	let ext = imgUrl.split('.').pop();
	request(imgUrl).pipe(fs.createWriteStream(path.join(config.imgDir,i + '.' +ext),{
		'encoding':'utf8'
	}))
	console.log(i);
}

start();