
let ajax=new Ajax()
let router = new Router()

router.add('', () => {
    return ajax.get('./view/home.html')
})
router.add('#English', () => {
    return ajax.get('./view/English.html')
})

router.listen((renderHtml) => {
    let app = document.getElementById('app')
    app.innerHTML = renderHtml
})
function abc(e){
    console.log('测试',e)
    return false
}