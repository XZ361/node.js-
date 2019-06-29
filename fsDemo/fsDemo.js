var fs = require('fs')

/* 1. fs.stat()的日常用处

        （1）可用于图片上传的判断过程--判断服务器上有没有upload目录,没有就创建这个目录
        （2）找出某个目录下的所有目录，并打印出来
*/

// fs.stat('./fsDemo/upload', (err, stats) => {
//     if (err) return err
//     console.log(stats)
//     console.log(stats.isDirectory())
// })
// fs.writeFile('./fsDemo/upload/1.html', 'hello,node.js', (err) => {
//     if (err) return err
//     console.log('写入成功！')
// })

// fs.appendFile('./fsDemo/upload/1.css', '*{margin:0}', (err) => {
//     if (err) return err
//     console.log('追加成功！')
// })
fs.readdir('./fsDemo/upload', (err, data) => {
    if (err) return err
    console.log('读取目录成功！' + data)
})