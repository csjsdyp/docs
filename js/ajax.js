function ajax(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";
    var params = formatParams(options.data);
    //创建 - 非IE6 - 第一步
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else { //IE6及其以下版本浏览器
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //接收 - 第三步
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.fail && options.fail(status);
            }
        }
    }

    //连接 和 发送 - 第二步
    if (options.type == "GET") {
        // xhr.open("GET", options.url + "?" + params, true);
        xhr.open("GET", options.url+'?v='+Math.random(), true);
        xhr.send(null);
    } else if (options.type == "POST") {
        xhr.open("POST", options.url, true);
        //设置表单提交时的内容类型
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
}
//格式化参数
function formatParams(data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    arr.push(("v=" + Math.random()).replace("."));
    return arr.join("&");
}


// class Ajax {
//     create(url, element) {
//         var res;
//         if (window.XMLHttpRequest) {
//             //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
//             res = new XMLHttpRequest();
//         } else {
//             // IE6, IE5 浏览器执行代码
//             res = new ActiveXObject("Microsoft.XMLHTTP");
//         }
//         // res.onload = function () { }
//         res.open("GET", url, false);
//         res.send();
//         if (res.readyState == 4 && res.status == 200) {
//             let html = res.responseText
//             document.getElementById(element).innerHTML = html
//         } else {
//             alert('数据获取失败')
//         }
//     }
//     // loadjs(html){
//     //     var js = html.match(/<script[^>]*>[\s\S]*?<\/script>/ig);
//     //     for(let i=0;i<js.length;i++){
//     //         var domScript = document.createElement('script');
//     //         var j=js[i].replace(/<[\/]?script[^>]*>/g,'')
//     //         var first  = document.getElementsByTagName('script'); 
//     //         var here = first[first.length-1];
//     //         domScript.innerText=j;
//     //         here.parentNode.appendChild(domScript);
            
//     //     }
//     //     console.log()
//     // }
// }

