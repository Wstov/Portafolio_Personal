// CARDS
function initializeSwiperRANDOMID() {
    const swiper = new Swiper(".mySwiper-RANDOMID", {
        slidesPerView: 1,
        grabCursor: true,
        spaceBetween: 30,

        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });
}

window.onload = initializeSwiperRANDOMID;