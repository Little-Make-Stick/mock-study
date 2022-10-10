//返回一个函数
const proxy = {
    'POST /md': (req, res) => {
        console.log('请求=====>', req);
        // console.log('响应=====>', res);
        res.send({
            code: 200,
            status: 'success',
            data: req.body
        });
    },
    'GET /md': (req, res) => {
        console.log('请求=====>', req);
        console.log('响应=====>', res);
        res.send({
            code: 200,
            status: 'success',
            data: '请求成功'
        });
    }
}
module.exports = proxy