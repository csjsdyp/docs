// const flexible = document.querySelector(".flexible");
// const bar = document.querySelector(".flexible .bar");
// let startX, startWidth;
// bar.addEventListener("mousedown", start);
// function start(e) {
//     startX = e.clientX;
//     startWidth = parseInt(getComputedStyle(flexible, null).width);
//     document.documentElement.addEventListener("mousemove", move);
//     document.documentElement.addEventListener("mouseup", end);
// }
// function move(e) {
//     flexible.style.width = `${startWidth + e.clientX - startX}px`;
// }
// function end(e) {
//     document.documentElement.removeEventListener("mousemove", move);
//     document.documentElement.removeEventListener("mouseup", end);
// }

function create(url,callback) {
    this.success = callback
    this.fail = fail
    ajax({
        url: url,
        type: "GET",
        success: this.success,
        fail: this.fail
    })
    function fail() {
        alert('后台有误，获取数据失败')
    }
}
// 为字符串创建format方法，用于字符串格式化
String.prototype.format = function (args) {
    return this.replace(/\{(\w+)\}/g, function (s, i) {
        return args[i];
    });
};
  //ajax 动态添加文件列表
  function getlib(res) {
    var item = JSON.parse(res)
    lib = document.getElementById('lib')
    //添加标题
    title = document.createElement('h3')
    title.innerText = '我的文件列表'
    lib.appendChild(title)
    for (i = 0; i < item.length; i++) {
      li = document.createElement('li')
      a = document.createElement('a')
      a.innerText = item[i].note
      li.appendChild(a)
      lib.appendChild(li)

      // 创建文件集
      create('./view/' + item[i].filename, getlist)
    }
    // document.getElementById('temp').innerText=res
  }
  function getlist(res) {
    var item = JSON.parse(res)
    list = document.getElementById('list')
    list_ul = document.createElement('ul')
    for (i = 0; i < item.length; i++) {
      list_li = document.createElement('li')
      list_li_a = document.createElement('a')

      list_li_a.innerText = item[i].innerText
      list_li_a.href = '#' + item[i].path + '/' + item[i].filename
      list_li.appendChild(list_li_a)
      list_ul.appendChild(list_li)
    }
    list.appendChild(list_ul)
  }
  create('./view/index.json', getlib)
  
  //jquery 制作折叠展开操作

  //路由监听路由变化
  // 文件打开执行路由改变函数
  function getmd(res){
    // var item = JSON.parse(res)
    app = document.getElementById('app')
    app.innerText=res
  }
  hashold=null
  function hashchange() {
    hash = location.hash
    hash = decodeURI(hash)
    console.log('路由变化',hashold,'=>', hash)
    path=hash.replace(/^(#\/|#)/g,'')
    console.log(path)
    if(path){create('./docs/'+path,getmd)}
    
    // 根据路由加载相应md
    hashold=hash
  }
  hashchange()
  window.onhashchange = hashchange
//button侧边栏折叠张开