var fs = require('fs')

/* 1. fs.stat()的日常用处

        （1）可用于图片上传的判断过程--判断服务器上有没有upload目录,没有就创建这个目录
        
*/

/* fs.stat('./fsDemo/upload', (err, stats) => {
    if (err) {
        fs.mkdir('./fsDemo/upload', (error) => {
            if (error) {
                console.log(error)
                return false
            }
            console.log('创建目录成功！')
        })
    } else {
        console.log('目录已经存在！')
        console.log(stats.isDirectory())

    }
}) */

/* 

    （2）找出某个目录下的所有目录，并打印出来
*/
var filesArr = [];
fs.readdir('fsDemo', (err, files) => {
    if (err) {
        console.log(err)
    } else {
        // 判断是文件还是文件夹
        console.log(files);

        (function getFile(i) {
            if (i == files.length) {
                console.log(filesArr)
                return false
            }
            fs.stat('./fsDemo/' + files[i], (error, stats) => {
                // 异步函数只有在上步程序完成后才会执行
                if (error) {
                    console.log(error)
                } else {
                    if (stats.isDirectory()) {
                        // 判断当前是一个目录还是文件，若果是目录就加入数组
                        filesArr.push(files[i])
                    }
                }
                // console.log(files[i])
                // 递归调用
                getFile(i + 1)

            })
        })(0)
    }
})