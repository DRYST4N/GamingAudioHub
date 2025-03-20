document.addEventListener("DOMContentLoaded", () => {
    const sliderContainer = document.querySelector(".Apple_world__container");
    const slides = document.querySelectorAll(".Apple_body");
    const prevBtn = document.getElementById("before");
    const nextBtn = document.getElementById("next");
    
    let currentIndex = 0;
    let touchStartX = 0;
    let touchEndX = 0;
    
    function updateSlider(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("Apple_body--show", i === index);
        });
    }

    function goToNextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Reiniciar al primer slide si está en el último
        }
        updateSlider(currentIndex);
    }

    function goToPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // Ir al último si está en el primero
        }
        updateSlider(currentIndex);
    }

    // Botones de navegación
    nextBtn.addEventListener("click", goToNextSlide);
    prevBtn.addEventListener("click", goToPrevSlide);

    // Eventos táctiles para dispositivos móviles
    sliderContainer.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    sliderContainer.addEventListener("touchmove", (e) => {
        touchEndX = e.touches[0].clientX;
    });

    sliderContainer.addEventListener("touchend", () => {
        if (touchStartX - touchEndX > 50) {
            goToNextSlide(); // Deslizar a la izquierda
        } else if (touchStartX - touchEndX < -50) {
            goToPrevSlide(); // Deslizar a la derecha
        }
    });

    updateSlider(currentIndex); // Mostrar la primera imagen al cargar
});
