class Router {
    constructor(){
        this.routers = []
        this.renderCallback = null
    }
 
    add(route,callback){
        this.routers.push({
            path:route,
            render:callback
        })
    }
 
    pushState(path,data={}){
        window.history.pushState(data,'',path)
        this.renderHtml(path)
    }
 
    listen(callback){
        this.renderCallback = callback
        this.changeA()
        window.onpopstate = ()=>this.renderHtml(this.getCurrentPath())
        this.renderHtml(this.getCurrentPath())
    }
 
    changeA(){
        document.addEventListener('click', (e)=> {
            if(e.target.nodeName==='A'){
                e.preventDefault()
                let path = e.target.getAttribute('href')
                this.pushState(path)
            }
 
        })
    }
 
    getCurrentPath(){
        return location.pathname
    }
 renderHtml(path){
        for(let i=0;i<this.routers.length;i++){
            let route = this.routers[i]
            if(path===route.path){
                this.renderCallback(route.render())
                return
            }
        }
    }
 
 
}
  
let router = new Router()
router.add('/index',()=>{
    return '<h1>这是首页内容</h1>'
})
router.add('/news',()=>{
    return  '<h1>这是新闻内容</h1>'
})
router.add('/user',()=>{
    return  '<h1>这是个人中心内容</h1>'
})
router.add('/English',()=>{
    return  '<h1>这是个人中心内容</h1>'
})
router.listen((renderHtml)=>{
    let app = document.getElementById('app')
    app.innerHTML = renderHtml
})