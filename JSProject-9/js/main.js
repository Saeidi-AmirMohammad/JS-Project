(function (window) {
    let defineLibrary = () => ({
        init: function (galleryId) {
            let container = document.querySelector(galleryId);

            if (!container) {
                console.error('please add the correct element')
                return;
            }

            let firstImage = container.querySelector('img');
            let zoomedImage = container.querySelector('.zoomed-image');

            if (!zoomedImage) {
                console.error("please add .zoomedImage tag")
                return;
            }

            if (!firstImage) {
                console.error("please add image with img tag")
                return;

            }

            zoomedImage.style.backgroundImage = `url(${firstImage.src})`;

            let images = container.querySelectorAll('img');
            if (images) {
                images.forEach(image => {
                    image.addEventListener('click', () => {

                        zoomedImage.style.backgroundImage = `url(${image.src})`;

                    })
                });
            }

            zoomedImage.addEventListener('mouseenter', function () {
                this.style.backgroundSize = '250%'
            })

            zoomedImage.addEventListener('mousemove', function (e) {
                let dimentions = this.getBoundingClientRect()

                let x = e.clientX - dimentions.left
                let y = e.clientY - dimentions.top

                x = Math.round(100 / (dimentions.width / x));
                y = Math.round(100 / (dimentions.width / y));

                this.style.backgroundPosition = `${x}% ${y}%`

            })

            zoomedImage.addEventListener('mouseleave', function () {
                this.style.backgroundSize = '100%';
                this.style.backgroundPosition = 'center';
            })

        }
    })

    if (typeof (vanillaZoom) == 'undefined') {
        window.vanillaZoom = defineLibrary();
    } else {
        console.log('library already defined.')
    }
})(window)