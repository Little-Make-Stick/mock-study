/******************
 * 基础 - md - mock
 *****************/

export default {
    /**
     * 基础 - md
     * @param： {}
     * @returns：Promise {<pending>}
     **/
    'post|md': (option) => {
        console.log('请求==>', option)
        // console.log('请求==>', req)
        // console.log('响应==>', res)
        res.send({
            status: 'success',
            code: 200,
            data: '请求成功',
        })
    },

    /**
     * 基础 - md
     * @param： {}
     * @returns：Promise {<pending>}
     **/
     'get|md': (option) => {
        console.log('请求==>', option)
        // console.log('请求==>', req)
        // console.log('响应==>', res)
        res.send({
            status: 'success',
            code: 200,
            data: '请求成功',
        })
    },
}
