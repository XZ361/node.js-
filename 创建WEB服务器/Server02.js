/* 
    通过nodejs 中的  
    HTTP模块、URL模块、fs模块、Path模块
    来构建静态资源服务器
*/
// 引入HTTP模块来创建web服务器
var http = require('http')
    // 引入fs模块来进行文件操作
var fs = require('fs')
    // 引入path模块，可以拿到请求文件的后缀名
var path = require('path')

var url = require('url')

// 引入自定义模块,获取`得到后缀名`的函数

var mimeModel = require('./model/getmime.js');

http.createServer((req, res) => {


    // res.write('hello node.js')
    // http://localhost:8001/news.html       /news.html
    // http://localhost:8001/index.html      /index.html

    var pathname = req.url;

    // 过滤请求
    if (pathname == '/') {
        pathname = 'index.html'; //默认加载首页
    }
    // 获取文件的后缀名，根据不同的后缀名返回不同的信息
    var extname = path.extname(pathname);

    if (pathname != '/favicon.ico') {

        // 通过文件操作来获取static下面的index.html

        fs.readFile('./创建WEB服务器/static/' + pathname, (err, result) => {

            if (err) {
                fs.readFile('./创建WEB服务器/static/404.html', (error, data) => {
                    if (error) {
                        console.log(error)
                        return
                    }
                    res.writeHead(404, { "Content-Type": "text/html;charset='utf-8' " });

                    res.write(data);
                    res.end() //结束响应
                })
            } else {
                // 这就实现了最基本的静态web服务

                // 响应头
                var mime = mimeModel.getMime(extname); //获取文件类型
                console.log(mime)
                res.writeHead(200, { "Content-Type": +mime + ";charset='utf-8' " });

                res.write(result);
                res.end() //结束响应
            }
        })


    }



}).listen('8001')