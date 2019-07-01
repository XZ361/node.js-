// 管道流
var fs = require('fs')

// 创建读取流
var readStream = fs.createReadStream('./fsDemo/input.txt')
    // 创建写入流
var wrriteStream = fs.createWriteStream('./fsDemo/output.txt')

readStream.pipe(wrriteStream)

console.log('程序执行结束！')