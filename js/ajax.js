class Ajax {
    constructor() {
    }
    create() {
        if (window.XMLHttpRequest) {
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            return new XMLHttpRequest();
        } else {
            // IE6, IE5 浏览器执行代码
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    get(url) {
        let res = this.create()
        res.open("GET", url, false);//同步
        res.send();
        // res.onload=function (){}
        // res.onreadystatechange=function (){}
        const data = res.responseText
        return this.load(data)
    }

    load(data) {
        var js = data.match(/<script[^>]*>[\s\S]*?<\/script>/ig);
        var body = data.match(/<body[^>]*>([\s\S]*)<\/body>/ig)
        // console.log(body)
        // console.log(js)
        return body[0]
    }
}






 // function loadXML() {
    //     var xmlhttp;
    //     if (window.XMLHttpRequest) {
    //         //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    //         xmlhttp = new XMLHttpRequest();
    //     }
    //     else {
    //         // IE6, IE5 浏览器执行代码
    //         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    //     }
    //     xmlhttp.onreadystatechange = function () {
    //         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

    //             // document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
    //             var domScript = document.createElement('script');
    //             domScript.innerText=xmlhttp.responseText;
    //             console.log('1',xmlhttp.responseText)
    //             // document.getElementsByTagName('head')[0].appendChild(domScript);
    //         }
    //     }
    //     xmlhttp.open("GET", "./page/a.txt", true);
    //     // xmlhttp.open("GET", "./js/aaa.js", true);
    //     xmlhttp.send();
    // }