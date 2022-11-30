const flexible = document.querySelector(".flexible");
const bar = document.querySelector(".flexible .bar");
let startX, startWidth;
bar.addEventListener("mousedown", start);
function start(e) {
    startX = e.clientX;
    startWidth = parseInt(getComputedStyle(flexible, null).width);
    document.documentElement.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseup", end);
}
function move(e) {
    flexible.style.width = `${startWidth + e.clientX - startX}px`;
}
function end(e) {
    document.documentElement.removeEventListener("mousemove", move);
    document.documentElement.removeEventListener("mouseup", end);
}