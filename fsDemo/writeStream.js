/* 创建写入流 */
var fs = require('fs')

var data = "hello, 我是被写入的数据！\n"
    // 创建写入流
var writeStream = fs.createWriteStream('./fsDemo/output.txt')
    // 写入data,写入格式为utf8

for (var i = 0; i < 100; i++) {
    writeStream.write(data, 'utf8')

}
// 标记写入结束，会触发finish事件，否则不会触发finish事件
writeStream.end()
    // 监听结束时的事件
writeStream.on('finish', () => {
        console.log('写入完成！')
    })
    // 监听error事件
writeStream.on('error', () => {
    console.log('写入失败！')
})