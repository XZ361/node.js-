/* 
    从文件中获取文件格式，并返回对应的文件类型
 */

exports.getMime = function(fs, extname) {
    // 异步获取后缀名的方法

    /*  fs.readFile('./创建WEB服务器/mime.json', (err, data) => {
         // console.log(1)
         if (err) {
             console.log('mime.json不存在！')
             console.log(err)
         }
         // 把json字符串转换成json对象
         var Mimes = JSON.parse(data.toString())

         // 这样就能拿到extname的扩展名
         return Mimes[extname] || 'text/html'

     }) */

    // 把异步读取数据改为同步读取数据
    var data = fs.readFileSync('./创建WEB服务器/mime.json');
    var Mimes = JSON.parse(data.toString());

    return Mimes[extname] || 'text/html'
}