const manualSliders = document.querySelectorAll('.manual-slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function showImage(index) {
    manualSliders.forEach((slider, i) => {
        if (i === index) {
            slider.classList.add('active');
        } else {
            slider.classList.remove('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showImage(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < manualSliders.length - 1) {
        currentIndex++;
        showImage(currentIndex);
    }
});

showImage(currentIndex);

