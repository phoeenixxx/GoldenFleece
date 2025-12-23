document.addEventListener('DOMContentLoaded', () => {
    
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    if (slides.length > 0) {
        setInterval(nextSlide, slideInterval);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const burger = document.querySelector('.burger-menu');
    if(burger) {
        burger.addEventListener('click', () => {
            alert("მენიუ გახსნილია");
        });
    }

    const slider = document.querySelector('.collection-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (slider && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: 320, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -320, behavior: 'smooth' });
        });
    }
});