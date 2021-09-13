class Slider {
    slideIndex = 1;
    constructor(options) {
        this.options = options;
        this.initialStuff();
        this.createNextAndPrevBtns();
        this.createDots();
        this.showSlides(1);
    }

    initialStuff() {
        let { element: sliderElement, slideClass, autoRun } = this.options;
        if (!sliderElement) throw Error('slider is not exists');
        if (!Number.isInteger(autoRun)) {
            this.autoRun = 0
        } else {
            this.autoRun = autoRun
        }

        this.sliders = [...sliderElement.children].filter(elm => elm.classList.contains(slideClass));
    }

    createNextAndPrevBtns() {
        let { element: sliderElement } = this.options;
        sliderElement.insertAdjacentHTML('beforeend', `
        <a class="next-btn">&#10094;</a>
        <a class="prev-btn">&#10095;</a>

        `);

        sliderElement.querySelector('.next-btn').addEventListener('click', () => this.nextAndPrevSlide(this.slideIndex += 1));
        sliderElement.querySelector('.prev-btn').addEventListener('click', () => this.nextAndPrevSlide(this.slideIndex -= 1));

    }

    nextAndPrevSlide = (n) => {
        this.resetInterval();
        this.showSlides(n);
    }
    currentSlide = n => this.showSlides(this.slideIndex = n);

    createDots() {
        let { element: sliderElement } = this.options;
        let dotElement = [... this.sliders].map((slider, index) => `<span class="dot" data-slide="${index + 1}"></span>`);
        let dots = document.createElement('div');
        dots.classList.add('dots');
        dots.innerHTML = `${dotElement.join('')}`

        // sliderElement.after(dots)

        this.dots = dots.querySelectorAll('.dot');
        this.dots.forEach(dot => dot.addEventListener('click', e => this.currentSlide(parseInt(e.target.dataset.slide))))
        // console.log(dots)
    }

    showSlides(number) {
        let { element: sliderElement, slideClass } = this.options;
        if (number > this.sliders.length) this.slideIndex = 1;
        if (number < 1) this.slideIndex = this.sliders.length;
        // console.log(this.slideIndex);

        sliderElement.querySelector('.slider.active').classList.remove('active');
        this.dots.forEach(dot => dot.classList.remove('active'));

        this.sliders[this.slideIndex - 1].classList.add('active');
        this.dots[this.slideIndex - 1].classList.add('active');
    }

    setInterval() {
        if (this.autoRun !== 0) {
            this.intervalID = setInterval(() => this.showSlides(this.slideIndex += 1), this.autoRun)
        }
    }

    resetInterval() {
        clearInterval(this.intervalID);
        this.setInterval();
    }

}