const fs = require('fs')

//同步操作读取文件
fs.unlinkSync('./tmp/hello');
console.log('successfully deleted /tmp/hello');

//重命名hello文件为world文件
fs.rename('./tmp/hello','./tmp/world',(err)=> {
	if (err) throw err;
	console.log('renamed complete');
});

//获取world文件的信息
fs.stat('./tmp/world',(err, stats) =>{
	if (err) throw err;
	console.log('stats:${JSON.stringify(stats)}');
});

fs.rename('./tmp/hello','./tmp/world',(err)=>{
	if (err) throw err;
	fs.stat('./tmp/world',(err,stats)=>{
		if (err) throw err;
		console.log('stats:${JSON.stringify(stats)}');
	})
})