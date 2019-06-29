// fs.stat 用来检测是文件还是目录

// var fs = require('fs')

// fs.stat('./html/1.html', (error, stats) => {
//     // 参数stats代表文件的信息
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(stats)
//             // 是个文件
//         console.log("文件：" + stats.isFile())
//             // 是个目录
//         console.log("目录：" + stats.isDirectory())
//     }
// })

// 2. fs.mkdir 创建目录

// path  将创建的目录的路径
// mode  目录的权限（读写权限）
// callback  回调 传递异常err参数

// var fs = require('fs')

// fs.mkdir('html5', (err) => {
//     if (err) console.log(err)

//     console.log('创建目录成功！')
// })

// 3. fs.writeFile 写入文件
// 写入文件的参数：
// path:要写入文件的路径
// data:要写入的数据
// options:设置的参数
// callback:回调 传回异常参数（err)

var fs = require('fs')

// fs.writeFile('index1.txt', 'hello, node.js ,你好!', (err) => {
//     if (err) console.log(err);
//     console.log('写入文件成功！')

// })

// 4.fs.appendFile 追加文件
/* 如果t.txt不存在，函数执行后直接创建文件添加内容
如果t.txt已经存在，则每次执行函数后，都会在原有的内容后追加内容 */

// fs.appendFile('./fs/t.txt', '\n这是追加的句子\n', 'utf-8', (err) => {
//     if (err) console.log(err);
//     console.log('写入文件成功！')
// })

/* 
    5. fs.readFile() 读取文件

*/
// fs.readFile('index.txt', (err, data) => {
//     if (err) console.log(err)
//     console.log('读取成功！' + data)
// })

/* 6. fs.readdir() 读取目录

*/

fs.readdir('./fs/html', (err, data) => {
    if (err) console.log(err)
    console.log('读取目录成功！' + data)
})