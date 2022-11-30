class Router {
    constructor() {
        this.routers = []  //存放我们的路由配置
        this.hashbefore=location.hash
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
            hash =decodeURI(hash)
            console.log('路由变化',self.hashbefore,'=>',hash)
            self.hashbefore=hash
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