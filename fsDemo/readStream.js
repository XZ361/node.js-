/* 
    读取文件流
 */
var fs = require('fs')


var readStream = fs.createReadStream('./fsDemo/input.txt')

// 读取时是通过一块一块的方式来读取的,每读到一块数据，会返回一个data，我们用’on‘来监听

var count = 0

var str = ''
readStream.on('data', (chunk) => {
        ++count
        str += chunk
    })
    // 读取完成，返回end事件，并执行回调函数
readStream.on('end', (chunk) => {
    console.log('读取结束! ' + str)
    console.log(count)

})

// 读取失败，返回error事件，并执行回调函数
readStream.on('error', (err) => {
    console.log('读取失败！' + err)
})