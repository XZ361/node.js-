var fs = require('fs');

/* console.log(1);

fs.readFile('mime.json', function(err, data) {
    // console.log(data)
    console.log(2);
})

console.log(3); */

/* 由于上述程序异步执行，故打印出结果1-3-2 */

// 结合readFile封装一个读取数据的方法

/* function getMime() {
    fs.readFile('./10-nodejs回调和事件驱动/mime.json', function(err, data) {
        // data.toStrign()方法将读取的数据转换为json字符串
        console.log(data.toString());
    })
}

getMime(); */

function getMime() {

    console.log(1);

    fs.readFile('./10-nodejs回调和事件驱动/mime.json', function(err, data) {
        // data.toStrign()方法将读取的数据转换为json字符串
        // console.log(data.toString());
        return data;
    })
    console.log(2)
}

console.log(getMime());

/* 结果输出1-2-undefined
这证明通过异步函数无法直接的拿到数据，所以需要修改异步函数 */