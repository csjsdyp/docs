function create(url, callback, key) {
    this.success = callback
    this.fail = fail
    if (sessionStorage.getItem(key) != null) {
        this.success(sessionStorage.getItem(key))
    } else {
        ajax({
            url: url,
            type: "GET",
            success: this.success,
            fail: this.fail
        })
    }
    function fail() {
        h=location.hash
        h=decodeURI(h)
        h=h.replace(/^(#\/|#)/g, '')
        alert('后台有误，获取'+h+'数据失败')
    }
  }
  function getlist(res) {
    sessionStorage.setItem('list', res)
    var item = JSON.parse(res)
    list = document.getElementById('mylist')
    for (i = 0; i < item.length; i++) {
        li = document.createElement('li')
        a = document.createElement('a')
        a.innerText = item[i].note
        li.id = "list" + item[i].id
        a.className = "list-a"
        a.id = "link" + item[i].id
        a.setAttribute("onclick", 'abc(this.id)')
        // a.addEventListener('click', abc())
        // a.attachEvent('onclick','abc')
        li.appendChild(a)
        list.appendChild(li)
        create('./view/' + item[i].filename, getul, item[i].filename)
    }
  }
  function getul(res) {
    var item = JSON.parse(res)
    id = 'list' + item.id
    sessionStorage.setItem(id, res)
    li = document.getElementById(id)
    item1 = item.children
    ul = document.createElement('ul')
    ul.style = 'display:none;'
    ul.className = 'sub'
    ul.id = 'ul' + item.id
    li.appendChild(ul)
    for (i = 0; i < item1.length; i++) {
        li = document.createElement('li')
        a = document.createElement('a')
        li.appendChild(a)
        a.href = '#' + item1[i].path + '/' + item1[i].filename
        a.innerText = item1[i].innerText
        ul.appendChild(li)
    }
  }
  function abc(e) {
    t = document.getElementById('ul' + e.slice(-1))
    if (t.style.display == 'none') {
        t.style = 'display:block;'
    } else {
        t.style = 'display:none;'
    }
  
  }
  create('./view/index.json', getlist, 'list')
  hashold = null
  out = document.getElementById('out')
  function getmd(res) {
    z = marked.parse(res);
    out.style.display = 'block'
    document.getElementById('app').innerHTML = z
    cls = document.getElementById('menu-icon')
    cls.addEventListener('click', function () {
        out.style.display = 'none'
        location.hash = ''
    })
  }
  
  function hashchange() {
    hash = location.hash
    hash = decodeURI(hash)
    console.log('路由变化', hashold, '=>', hash)
    path = hash.replace(/^(#\/|#)/g, '')
    console.log(path)
    if (path) { create('./docs/' + path, getmd) }
    // 根据路由加载相应md
    hashold = hash
  }
  hashchange()
  window.onhashchange = hashchange