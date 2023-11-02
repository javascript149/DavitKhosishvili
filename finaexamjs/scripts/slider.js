const sliderImages = document.querySelectorAll('.slider-image');
let currentSlide = 0;
let autoSlideInterval;

function showSlide(index) {
    sliderImages.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderImages.length;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
    showSlide(currentSlide);
}

document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.prev-button').addEventListener('click', previousSlide);

function toggleAutomaticSlider() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    } else {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }
}

document.querySelector('.toggle-slider-button').addEventListener('click', toggleAutomaticSlider);

showSlide(currentSlide);
toggleAutomaticSlider();