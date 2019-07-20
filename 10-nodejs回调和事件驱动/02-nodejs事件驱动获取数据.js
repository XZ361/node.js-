var fs = require('fs');
var events = require('events');


var EventEmitter = new events.EventEmitter();

function getMime() {

    console.log(1);

    fs.readFile('./10-nodejs回调和事件驱动/mime.json', function(err, data) {
        // data.toStrign()方法将读取的数据转换为json字符串
        // console.log(data.toString());
        // 触发广播
        EventEmitter.emit('data', data);
    })
    console.log(2)
}

// 执行方法
getMime();

// 监听广播
EventEmitter.on('data', function(mime) {
    // 监听广播数据
    console.log(mime.toString());

})