let content = document.querySelector('.content');
let text = content.querySelector('h1');
let wlak = 500 //500px
content.addEventListener('mousemove', function (event) {
    let location = {
        offsetWidth: width,
        offsetHeight: height
    } = content;

    let xy = {
        offsetX: x,
        offsetY: y
    } = event;

    x += event.target.offsetLeft;
    y += event.target.offsetTop;

const xWalk = Math.round((x / width * wlak) - (wlak / 2));
const yWalk = Math.round((y / height * wlak) - (wlak / 2));

text.style.textShadow = `
${xWalk}px ${yWalk}px 0 rgba(238 , 82 , 83 , .7),
${xWalk * -1}px ${yWalk}px 0 rgba(52 , 31 , 151 , .7),
${yWalk}px ${xWalk * -1}px 0 rgba(243 , 104 , 224 , .7),
${yWalk * -1}px ${xWalk}px 0 rgba(254 , 202 , 87 , .7)

`


})