class Router {
    constructor() {
        this.routers = []  //存放我们的路由配置
    }
    add(route, callback) {
        this.routers.push({
            path: route,
            render: callback
        })
    }
    listen(callback) {
        window.onhashchange = this.hashChange(callback)
        this.hashChange(callback)()//首次进入页面的时候没有触发hashchange，必须要就单独调用一下
    }
    hashChange(callback) {
        let self = this
        return function () {
            let hash = location.hash
            console.log(hash)
            for (let i = 0; i < self.routers.length; i++) {
                let route = self.routers[i]
                if (hash === route.path) {
                    callback(route.render())
                    return
                }
            }
        }
    }

}
let router = new Router()

router.add('#index', () => {
    return '<h1>这是首页内容</h1>'
})
router.add('#/index', () => {
    return '<h1>这是首页内容2</h1>'
})
router.add('#news', () => {
    return '<h1>这是新闻内容</h1>'
})

router.add('#user', () => {
    return '<h1>这是个人中心内容</h1>'
})

router.listen((renderHtml) => {
    let app = document.getElementById('app')
    app.innerHTML = renderHtml
})