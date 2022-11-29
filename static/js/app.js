// 侧边栏展开控制事件
document.getElementsByClassName('sidebar-toggle')[0].addEventListener('click', function () {
    if (!document.body.classList.length) {
        document.body.className = 'close'
        console.log('折叠侧边栏')
    } else {
        document.body.className = ''
        console.log('展开侧边栏')
    }
    // 
})
new md('./list.json').init()