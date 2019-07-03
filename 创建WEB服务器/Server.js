/* 
    通过nodejs 中的  
    HTTP模块、URL模块、fs模块、Path模块
    来构建静态资源服务器
*/

var fs = require('fs')
var http = require('http')
var path = require('path')
var url = require('url')

http.createServer((req, res) => {

    res.writeHead(200, { "content-type": 'text/html;charset=utf8' })

    // res.write('hello node.js')
    // http://localhost:8001/news.html       /news.html
    // http://localhost:8001/index.html      /index.html

    var pathname = req.url

    // 过滤请求
    if (pathname == '/') {
        pathname = 'index.html' //默认加载首页
    }
    if (pathname != 'favicon.ico') {
        console.log(pathname)
    }



    res.end() //结束响应

}).listen('8001')