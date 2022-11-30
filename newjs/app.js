let router = new Router()

function create(url,callback) {
    this.success = callback
    this.fail = fail
    ajax({
        url: url,
        type: "GET",
        success: this.success,
        fail: this.fail
    })
    // function success(res, xml) {
    //     // alert('vectiry')
    //     document.getElementById(ele).innerHTML = res
    //     if (js) {
    //         window.loadjs(js)
    //     }

    // }
    function fail() {
        alert('后台有误，获取数据失败')
    }
    // loadjs = (e) => {
    //     // alert('vectiry')
    //     for (i = 0; i < e.length; i++) {
    //         var domScript = document.createElement('script');
    //         domScript.src = e[i]
    //         var first = document.getElementsByTagName('script');
    //         var here = first[first.length - 1];
    //         here.parentNode.appendChild(domScript);
    //         console.log(e[i], '已被加载')
    //     }

    // }
}
// 为字符串创建format方法，用于字符串格式化
String.prototype.format = function (args) {
    return this.replace(/\{(\w+)\}/g, function (s, i) {
        return args[i];
    });
};

create('./view/lib.json', (res,xml) => {
    var arr = JSON.parse(res)
    type = arr.type
    content = arr.content
    html = '<h3>csj的代码库</h3>\n<ul>'
    for (i = 0; i < content.length; i++) {
        item = content[i]
        html += '<li><a href="{0}">{1}</a></li>'.format([item.path, item.name])
    }
    html += '</ul>'
    document.getElementById('lib').innerHTML = html
})


router.add([
    // { path: '', render: () => create('./view/index.html',[],'app') },
    // { path: '#/', render: () => create('./view/home.html',[],'app') },
    { path: '#/home', render: () => create('./view/home.html',[],'app') },
    { path: '#/code', render: () => create('./view/code.html',['./newjs/function.js'],'app') },
    { path: '#/English', render: () => create('./view/English.json')}
])
// router.listen()