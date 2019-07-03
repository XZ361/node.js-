/* 
    暴露函数，将函数暴露出去，让外部可以调用当前函数
*/
// 获取后缀名的方法

exports.getMime = function(extname) {

    // 便利当前extname
    switch (extname) {

        case '.html':
            return 'text/html';

        case '.css':
            return 'text/css';

        case '.js':
            return 'text/javascript';

        default:
            return 'text/html';
    }
}