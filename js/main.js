document.addEventListener('DOMContentLoaded', () => {

    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const prevBtn = document.querySelector(`.carousel-btn.prev[data-target="${carousel.id}"]`);
        const nextBtn = document.querySelector(`.carousel-btn.next[data-target="${carousel.id}"]`);

        if (!track || !prevBtn || !nextBtn) return;

        const getScrollAmount = () => {
            return carousel.clientWidth * 0.8;
        };

        const updateButtonStates = () => {

            const maxScrollLeft = track.scrollWidth - carousel.clientWidth;

            if (carousel.scrollLeft <= 0) {
                prevBtn.disabled = true;
            } else {
                prevBtn.disabled = false;
            }

            if (carousel.scrollLeft >= maxScrollLeft - 5) {
                nextBtn.disabled = true;
            } else {
                nextBtn.disabled = false;
            }
        };

        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });

        let scrollTimeout;
        carousel.addEventListener('scroll', () => {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(updateButtonStates, 50);
        });

        setTimeout(updateButtonStates, 100);

        window.addEventListener('resize', () => {
            updateButtonStates();
        });
    });

    const showMoreBtns = document.querySelectorAll('.show-more');

    showMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const extraContainer = document.getElementById(targetId);

            if (extraContainer) {
                if (extraContainer.classList.contains('hidden')) {

                    extraContainer.classList.remove('hidden');
                    btn.innerHTML = 'Show Less <span class="arrow-down" style="transform: rotate(180deg)">∨</span>';
                    btn.classList.add('active');
                } else {

                    extraContainer.classList.add('hidden');
                    btn.innerHTML = 'Show More <span class="arrow-down">∨</span>';
                    btn.classList.remove('active');
                }
            }
        });
    });

    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.style.position = 'fixed';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.position = 'absolute';
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
});
