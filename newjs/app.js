let router = new Router()
// ajax({
//     url: "./TestXHR.aspx",             //请求地址
//     type: "POST",                       //请求方式
//     data: { name: "super", age: 20 },        //请求参数
//     dataType: "json",
//     success: function (response, xml) {
//         // 此处放成功后执行的代码
//     },
//     fail: function (status) {
//         // 此处放失败后执行的代码
//     }
// });
function create(url,js) {
    this.success = success
    this.fail = fail
    js=js || ''
    ajax({
        url: url,
        type: "GET",
        success: this.success,
        fail: this.fail
    })
    function success(res, xml) {
        // alert('vectiry')
        document.getElementById('app').innerHTML = res
        if(js){
            window.loadjs(js)
        }
        
    }
    function fail() {
        alert('后台有误，获取数据失败')
    }
    loadjs=(e)=>{
        // alert('vectiry')
        for(i=0;i<e.length;i++){
            var domScript = document.createElement('script');
            domScript.src=e[i]
            var first = document.getElementsByTagName('script');
            var here = first[first.length - 1];
            here.parentNode.appendChild(domScript);
            console.log(e[i],'已被加载')
        }
        
    }
}
router.add([
    { path: '', render: () => create('./view/home.html') },
    { path: '#/', render: () => create('./view/home.html') },
    { path: '#/home', render: () => create('./view/home.html') },
    { path: '#/code', render: () => create('./view/code.html',['./newjs/function.js']) },
    { path: '#/English', render: () => create('./view/English.html',['./newjs/function.js']) }
])

router.listen()