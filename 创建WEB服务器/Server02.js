/* 
    通过nodejs 中的  
    HTTP模块、URL模块、fs模块、Path模块
    来构建静态资源服务器
*/
// 引入HTTP模块来创建web服务器
var http = require('http')
    // 引入fs模块来进行文件操作
var fs = require('fs')
var path = require('path')
var url = require('url')

http.createServer((req, res) => {


    // res.write('hello node.js')
    // http://localhost:8001/news.html       /news.html
    // http://localhost:8001/index.html      /index.html

    var pathname = req.url;

    // 过滤请求
    if (pathname == '/') {
        pathname = 'index.html'; //默认加载首页
    }
    if (pathname != '/favicon.ico') {

        // 通过文件操作来获取static下面的index.html

        fs.readFile('./创建WEB服务器/static/' + pathname, (err, result) => {

            if (err) {
                res.writeHead(404, { "Content-Type": 'text/html;charset=utf8' });
                fs.readFile('./创建WEB服务器/static/404.html', (error, data) => {
                    if (error) {
                        console.log(error)
                        return
                    }
                    res.write(data)
                })
            } else {
                // 这就实现了最基本的静态web服务

                // 响应头
                res.writeHead(200, { "Content-Type": 'text/html;charset=utf8' });

                res.write(result);
                res.end() //结束响应
            }
        })
        console.log(pathname);


    }



}).listen('8001')