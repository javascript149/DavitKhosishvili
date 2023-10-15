const automaticSliders = document.querySelectorAll('.automatic-slider');

let currentAutomaticIndex = 0;

function showAutomaticImage(index) {
    automaticSliders.forEach((slider, i) => {
        if (i === index) {
            slider.classList.add('active');
        } else {
            slider.classList remove('active');
        }
    });
}

function autoSlide() {
    if (currentAutomaticIndex < automaticSliders.length - 1) {
        currentAutomaticIndex++;
    } else {
        currentAutomaticIndex = 0;
    }
    showAutomaticImage(currentAutomaticIndex);
}

showAutomaticImage(currentAutomaticIndex);
setInterval(autoSlide, 3000); 

