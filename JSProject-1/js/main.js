let start = document.querySelector('#start-btn');
let input = document.querySelector('#input-textbox');
let errorMessage = document.querySelector('#error-message');
let form = document.querySelector('.form');
let progressBar = document.querySelector('.pie-wrapper');
let seconds = document.querySelector('.pie-wrapper > span');
let loading = document.querySelector('div.message .loading');
let success = document.querySelector('div.message .success');

start.addEventListener('click', function (e) {
    let val = parseInt(input.value);
    if (isNaN(val)) {
        errorMessage.classList.add('active');
        errorMessage.textContent = "*لطفا ثانیه را به درستی وارد کنید";
    }

    else {
        errorMessage.classList.remove('active');
        form.style.display = "none";
        progressBar.style.display = "block";
        seconds.textContent = Math.abs(val);
        loading.style.display = "block";

        let clear = setInterval(() => {
            if (val <= 0) {
                clearInterval(clear);
                form.style.display = "block";
                progressBar.style.display = "none";
                input.value = "";
                loading.style.display = "none";
                success.style.display = "block"

            }
            val -= 1;
            seconds.textContent = val;
        }, 1000);
    }

})

