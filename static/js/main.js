//md对象
function md(file) {
    this.file = file;
    this.init = init;
    this.load = load;
    function init() {
        xhr = new XMLHttpRequest();
        xhr.open('get', this.file);
        xhr.send('')
        xhr.onload = function () {
            txts = xhr.response
            var obj = JSON.parse(txts);
            document.title = obj['title']
            path=obj.path
            first=obj.conent[0]['connet'][0].link
            var html = '<ul>'
            $.each(obj.conent, function (index, item) {
                
                html += "<li>" + item.h3 + "<ul>";
                $.each(item.connet, function (index1, item1) {
                    html += "<li><a id="+item1.link+" href=#" + item1.link + ">" + item1.li + "</a></li>";
                });
                html += "</li></ul>";
            });
            html += "</ul>"
            document.getElementsByClassName('sidebar-nav')[0].innerHTML = html
            reader()
        }
        
    }

    function load() {
        xhr = new XMLHttpRequest();
        xhr.open('get',path+this.file);
        xhr.send('')
        xhr.onload = function () {
            txts = xhr.response
            document.getElementsByClassName('content')[0].innerHTML =
            marked.parse(txts);

        }
    }
}
function reader() {
    e= window.location.hash.replace('#','')
    if(!e){
        e=first
    }
    console.log('reader加载',e)
    if($(".active").length){
        $(".active")[0].classList.remove('active')
    }
    document.getElementById(e).classList.add("active")
    new md(e).load()
}
window.addEventListener('hashchange', reader)
