var swiper = new Swiper('.swiper-container-tabbox', {
    slidesPerView: 4.5,
    spaceBetween: 10,
});
var swiper1 = new Swiper('.swiper-container-ye', {
    pagination: {
        el: '.swiper-pagination',
    },
});
window.onload = function (){
    const bodyW = document.body.clientWidth;
    console.log(bodyW)
    if(bodyW <= 520){
        var swiper = new Swiper('.swiper-container-mjjt', {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    }else if(bodyW <= 992){
        var swiper = new Swiper('.swiper-container-mjjt', {
            slidesPerView: 1.4,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    }else{
        var swiper = new Swiper('.swiper-container-mjjt', {
            slidesPerView: 1.8,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            responsive: {
                0: {
                    items: 2
                }
            }
        });
    }
}