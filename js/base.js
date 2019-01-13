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
    $('.navbar-toggle').click(function(){
        console.log(1111)
        $('#mobileNav').slideToggle();
        $(this).toggleClass("expanded")
    })
    $('.is-er-nav').hover(function(){
        var name = $(this).attr("data-name");
        $(".er-nav."+name+"").show()
    },function(){
        var name = $(this).attr("data-name");
        $(".er-nav."+name+"").hide()
    })
    $('.er-nav').hover(function(){
        $(this).show();
    },function(){
        var name = $(this).attr("data-name");
        $(this).hide();
    })
    $('.fixed-Bridge .weixin').hover(function(){
        $('.fixed-Bridge .weixin-erweima').show()
    },function(){
        $('.fixed-Bridge .weixin-erweima').hide()
    })
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
        var swiperZjfc =  new Swiper('.swiper-container-zjfc', {
            slidesPerView: 1,
            spaceBetween: 26,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
        new Swiper('.swiper-home-yqhz', {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
        new Swiper('.swiper-xyfc1', {
            slidesPerView: 1,
            spaceBetween: 0,
            // centeredSlides: true,
            // loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
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
        new Swiper('.swiper-container-zjfc', {
            slidesPerView: 1.4,
            spaceBetween: 26,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
        new Swiper('.swiper-home-yqhz', {
            slidesPerView: 1.8,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
        new Swiper('.swiper-xyfc1', {
            slidesPerView: 3,
            spaceBetween: 0,
            // centeredSlides: true,
            // loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    }else{
        console.log(1)
        new Swiper('.swiper-container-mjjt', {
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
        new Swiper('.swiper-container-zjfc', {
            slidesPerView: 2,
            spaceBetween: 26,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
        new Swiper('.swiper-home-yqhz', {
            slidesPerView: 1.8,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
        new Swiper('.swiper-xyfc1', {
            slidesPerView: 4,
            spaceBetween: 0,
            // centeredSlides: true,
            // loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    }
}