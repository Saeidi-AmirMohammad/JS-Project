let videoBox = document.querySelector('.video-box');
let video = videoBox.querySelector('video');
let videoControler = videoBox.querySelector('.video-controler');

let playBtn = videoControler.querySelector('.fas.fa-play');
let backwardBtn = videoControler.querySelector('.fa-backward');
let forwardBtn = videoControler.querySelector('.fa-forward');

let timer = videoControler.querySelector('.timer');
let nowTime = timer.querySelector('.current-time');
let videoTime = timer.querySelector('.video-time');

let fullScreen = videoControler.querySelector('.fa-expand');

playBtn.addEventListener("click", function () {
    videoTime.textContent = getTime(video.duration)
    if (video.paused) {
        changeIcon();
        video.play()
    }
    else {
        changeIcon();
        video.pause()
    }


})

forwardBtn.addEventListener('click', function () {
    video.currentTime = video.currentTime + 5
})

backwardBtn.addEventListener('click', function () {
    video.currentTime = video.currentTime - 5
})

function changeIcon() {
    let playIcon = videoControler.querySelector('i');

    playIcon.classList.toggle('fa-play');
    playIcon.classList.toggle('fa-pause');

    //  if (playIcon.classList.contains('fa-play')) {
    //     playIcon.classList.remove('fa-play')
    //      playIcon.classList.add('fa-pause')
    //  }

    //  else{
    //     playIcon.classList.remove('fa-pause')
    //     playIcon.classList.add('fa-play')
    //  }
}

video.addEventListener("timeupdate", function () {
    nowTime.textContent = getTime(video.currentTime)
})

fullScreen.addEventListener('click', function () {
    if (!document.fullscreenElement) {
        if (videoBox.requestFullscreen) {

            videoBox.requestFullscreen();

        } else if (videoBox.mozFullScreenElement) {

            videoBox.mozFullScreenElement();

        }
        else if (videoBox.webkitFullscreenElement) {

            videoBox.webkitFullscreenElement();
        }
        else if (videoBox.msFullscreenElement) {

            videoBox.msFullscreenElement();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullscreen) {
            document.mozCancelFullscreen();
        }
        else if (document.msCancelFullscreen) {
            document.msCancelFullscreen();
        }
        else if (document.webkitCancelFullscreen) {
            document.webkitCancelFullscreen();
        }
    }
})

function getTime(time) {
    let minute = Math.floor(time / 60);
    let second = Math.floor(time - (minute * 60));

    let mainMinute;
    let mainSecond;

    if (minute < 10) {
        mainMinute = "0" + minute
    } else {
        mainMinute = minute
    }

    if (second < 10) {
        mainSecond = "0" + second
    } else {
        mainSecond = second
    }
    return mainMinute + ":" + mainSecond
}


