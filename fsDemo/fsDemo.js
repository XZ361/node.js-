var fs = require('fs')

/* 1. fs.stat()的日常用处

        （1）可用于图片上传的判断过程--判断服务器上有没有upload目录,没有就创建这个目录
        （2）找出某个目录下的所有目录，并打印出来
*/

fs.stat('./fsDemo/upload', (err, stats) => {
    if (err) return err
    console.log(stats)
    console.log(stats.isDirectory())
})