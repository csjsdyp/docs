class Router {
  constructor() {
    this.routers=[]
    this.hashold=null
  }
  add(e){
    this.routers=e
  }
  listen() {
    // window.addEventListener('hashchange',()=>{return this.onHashChange})
    window.onhashchange = this.onHashChange
    // console.log(window)
    this.onHashChange()
  }
  onHashChange=()=> {
    let hash = location.hash
    console.log('路由变化', this.hashold, '=>', hash)
    let i = 0
    for(; i < this.routers.length; i++) {
      if (hash == this.routers[i].path) {
        this.routers[i].render()
        break
      }
    }
    i == this.routers.length && this.routers[0].render()
    this.hashold = hash
  }
}
