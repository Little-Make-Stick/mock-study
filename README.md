# jszf

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

接口文档： http://113.98.62.87:18080/doc.html#/

## mock:

https://github.com/nuysoft/Mock

### 数据语法:
https://github.com/nuysoft/Mock/wiki/Syntax-Specification

'属性名|生成规则': 属性值(可以是正则表达式)
'name|min-max': value
'name|count': value
'name|min-max.dmin-dmax': value
'name|min-max.dcount': value
'name|count.dmin-dmax': value
'name|count.dcount': value
'name|+step': value


### mock():

```js
Mock.mock(url, type, template | function(options))
```
```js
url: 请求路径

type: 'post' | 'get'

template: { code: 200, msg: 'success', data: [{
    id|+1: 1, 
    name|1-3: 'admin'
}]}

function(options): (options)=>{ return options.body }
```

### setup():

```js
Mock.setup({
    //  400 毫秒 后才会返回响应内容
    timeout: 400,
    //  200-600 毫秒 内会返回响应内容
    // timeout: '200-600',
    // default '10-100'
})
```

### valid()

校验真实数据 data 是否与数据模板 template 匹配

```js
var template = {
    name: 'value1'
}
var data = {
    name: 'value2'
}
Mock.valid(template, data)
// =>
[
    {
        "path": [
            "data",
            "name"
        ],
        "type": "value",
        "actual": "value2",
        "expected": "value1",
        "action": "equal to",
        "message": "[VALUE] Expect ROOT.name'value is equal to value1, but is value2"
    }
]
```

### toJSONSchema（）

把 Mock.js 风格的数据模板 template 转换成 JSON Schema
```js
var template = {
    'list|1-10': [{}]
}
Mock.toJSONSchema(template)
// =>
{
    "name": undefined,
    "path": ["ROOT"],
    "type": "object",
    "template": {
        "list|1-10": [{}]
    },
    "rule": {},
    "properties": [{
        "name": "list",
        "path": ["ROOT", "list"],
        "type": "array",
        "template": [{}],
        "rule": {
            "parameters": ["list|1-10", "list", null, "1-10", null],
            "range": ["1-10", "1", "10"],
            "min": 1,
            "max": 10,
            "count": 6,
            "decimal": undefined,
            "dmin": undefined,
            "dmax": undefined,
            "dcount": undefined
        },
        "items": [{
            "name": 0,
            "path": ["data", "list", 0],
            "type": "object",
            "template": {},
            "rule": {},
            "properties": []
        }]
    }]
}
```


### Random

|Type	|Method| Function | Usage |
|---------|---------|------------|--------------|
|[Basic](https://github.com/nuysoft/Mock/wiki/Basic)	| boolean | 返回一个随机的布尔值 | Random.boolean( min?, max?, current? ) |
|       | natural | 返回一个随机的自然数（大于等于 0 的整数） | Random.natural( min?, max? ) |
|       | integer | 返回一个随机的整数 | Random.integer( min?, max? ) |
|       | float | 返回一个随机的浮点数 | Random.float( min?, max?, dmin?, dmax? ) |
|       | character | 返回一个随机字符 | Random.character( pool? ) |
|       | string | 返回一个随机字符串 | Random.string( pool?, min?, max? ) |
|       | range | 返回一个整型数组 | Random.range( start?, stop, step? ) |
|       | date | 返回一个随机的日期字符串 | Random.date( format? ) |
|       | time | 返回一个随机的时间字符串 | Random.time( format? ) |
|       | datetime | 返回一个随机的日期和时间字符串 | Random.datetime( format? ) |
|       | now | 返回当前的日期和时间字符串 | Random.now( unit?, format? ) |
|Image	| image | 生成一个随机的图片地址 | Random.image( size?, background?, foreground?, format?, text? ) |
|       | dataImage | 生成一段随机的 Base64 图片编码 | Random.dataImage( size?, text? ) |
|Color	| color | 随机生成一个有吸引力的颜色，格式为 '#RRGGBB' | Random.color() |
|       | hex | 随机生成一个有吸引力的颜色，格式为 '#RRGGBB' | Random.hex() |
|       | rgb | 随机生成一个有吸引力的颜色，格式为 'rgb(r, g, b)' | Random.rgb() |
|       | rgba | 随机生成一个有吸引力的颜色，格式为 'rgba(r, g, b, a)' | Random.rgba() |
|       | hsl | 随机生成一个有吸引力的颜色，格式为 'hsl(h, s, l)' | Random.hsl() |
|Text	| paragraph | 随机生成一段文本 | Random.paragraph( min?, max? ) |
|       | cparagraph | 随机生成一段中文文本 | Random.cparagraph( min?, max? ) | 
|       | sentence | 随机生成一个句子，第一个单词的首字母大写 | Random.sentence( min?, max? ) | 
|       | csentence | 随机生成一个中文句子，第一个单词的首字母大写 | Random.csentence( min?, max? ) | 
|       | word | 随机生成一个单词 | Random.word( min?, max? ) | 
|       | cword | 随机生成一个中文词语 | Random.cword( min?, max? ) | 
|       | title | 随机生成一句标题，其中每个单词的首字母大写 | Random.title( min?, max? ) |
|       | ctitle | 随机生成一句中文标题 | Random.ctitle( min?, max? ) |
|Name	| first | 随机生成一个常见的英文名 | Random.first() | 
|       | last | 随机生成一个常见的英文姓 | Random.last() | 
|       | name | 随机生成一个常见的英文姓名 | Random.name( middle? ) |
|       | cfirst | 随机生成一个常见的中文名 | Random.cfirst() | 
|       | clast | 随机生成一个常见的中文姓 | Random.clast() | 
|       | cname | 随机生成一个常见的中文姓名 | Random.cname() | 
|Web	| url  | 随机生成一个 URL | Random.url( protocol?, host? ) |
|       | protocol | 随机生成一个 URL 协议 | Random.protocol() | 
|      | domain | 随机生成一个域名 | Random.domain() |
|      | tld | 随机生成一个顶级域名（Top Level Domain） | Random.tld() |
|      | email | 随机生成一个邮件地址 | Random.email( domain? ) |
|      | ip | 随机生成一个 IP 地址 | Random.ip() |
|Address	| area | | |
|          | region | 随机生成一个（中国）大区 | Random.region() |
|          | province | 随机生成一个（中国）省（或直辖市、自治区、特别行政区） | Random.province() |
|          | city | 随机生成一个（中国）[?省]市 | Random.city( prefix? ) |
|          | county | 随机生成一个（中国）[?省][?市]县 | Random.county( prefix? ) |
|          | zip | 随机生成一个邮政编码（六位数字） | Random.zip() |
|Helper	| capitalize | 把字符串的第一个字母转换为大写 | Random.capitalize( word ) |
|       | upper | 把字符串转换为大写 | Random.upper( str ) |
|       | lower | 把字符串转换为小写 | Random.lower( str ) | 
|       | pick | 从数组中随机选取一个元素，并返回 | Random.pick( arr ) |
|       | shuffle | 打乱数组中元素的顺序，并返回 | Random.shuffle( arr ) |
|Miscellaneous	| guid | 随机生成一个 GUID | Random.guid() |
|    	| id | 随机生成一个 18 位身份证 | Random.id() |
|       | increment | 生成一个全局的自增整数 | Random.increment( step? ) |

```js
var Random = Mock.Random
Random.extend({
    constellation: function(date) {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    }
})
Random.constellation()
// => "水瓶座"
Mock.mock('@CONSTELLATION')
// => "天蝎座"
Mock.mock({
    constellation: '@CONSTELLATION'
})
// => { constellation: "射手座" }
```
