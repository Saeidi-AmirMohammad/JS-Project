let nowPlaying = document.querySelector('.nowplaying');
let keys = document.querySelectorAll('.key');
let keyText = document.querySelectorAll('div.key span');

window.addEventListener('keydown', function (e) {

    const key = document.querySelector(`div.key[data-key = "${e.keyCode}"]`)
    // console.log(key)

    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    // console.log(audio)

    if (!key) {
        return;
    }

    const note = key.getAttribute('data-note');
    // console.log(note);


    nowPlaying.innerHTML = note;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('active');
    key.addEventListener('transitionend', function () {
        key.classList.remove('active');

    })

})

keyText.forEach(function (element, index) {
    // element.style = `transition-delay : ${index * 50}ms`
    element.setAttribute('style', `transition-delay : ${index * 50}ms`)
})




// keys.forEach(xxx => xxx.addEventListener('transitionend' , function(){
//     xxx.classList.remove('active');
// }))
