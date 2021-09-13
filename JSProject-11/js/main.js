// code of loading element

let loading = document.getElementById('preloader');
let mainPage = document.getElementById('content');

document.addEventListener('DOMContentLoaded' , function(){
loading.style.display = 'none';
mainPage.style.display = 'block';

})

// code of back to top icon

const backToTop = document.getElementById('back-to-top');

backToTop.addEventListener('click' , function(){
    scrollTop(0 , 1000)
})

document.addEventListener('scroll' , function(){
     if(document.documentElement.scrollTop > '250'){
         backToTop.style.display = 'flex';
     }else{
        backToTop.style.display = 'none';

     }
     
})

function scrollTop (scroll , duration){
    let doc = document.documentElement;
    let currentTime = duration;
    let speed = 4;

    let animate = () => {
        if(currentTime < 0) return;
        setTimeout(() => {
            doc.scrollTop -= doc.scrollTop / (currentTime / speed);
            currentTime -= speed;
            animate();
        }, speed);
    }

    animate();
}