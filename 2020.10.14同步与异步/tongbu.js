const fs = require('fs');

//异步操作读取文件
fs.unlink('D:\\projects\\NodeApp\\2020.10.14同步与异步\\tmp', (err)) =>{
	if (err) throw err;
	console.log('successfully deleted  file');
};