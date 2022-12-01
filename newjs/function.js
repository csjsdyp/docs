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