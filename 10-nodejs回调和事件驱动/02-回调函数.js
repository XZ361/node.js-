/* 
    1、可以通过回调函数的方式解决异步函数无法直接拿到数据的问题

*/
/* var fs = require('fs');

function getMime(callback) {


    fs.readFile('./10-nodejs回调和事件驱动/mime.json', function(err, data) {
        // data.toStrign()方法将读取的数据转换为json字符串
        // console.log(data.toString());
        // return data;
        // 当异步执行完成时，将data传到callback中
        callback(data);
    })
}

getMime(function(result) {

    console.log(result.toString());

}) */

/* 
    1、可以通过nodejs中Events模块来处理异步
    
*/
var events = require('events');

// 实例化EventEmitter
var EventEmitter = new events.EventEmitter();

// 广播和接收广播（事件驱动）也叫订阅和通知

// 监听to_mime
EventEmitter.on('to_mime', function(data) {
        // console.log('接收到了这个广播事件');
        console.log(data);
    })
    // 监听toparent的广播
EventEmitter.on('toparent', function(data) {
    // console.log('接收到了这个广播事件');
    console.log(data);
    EventEmitter.emit('to_mime', '向mime发水平数据！');
})

// 广播toparent
setTimeout(function() {
    console.log('开始广播...');

    EventEmitter.emit('toparent', '发送广播数据！');

}, 1000);