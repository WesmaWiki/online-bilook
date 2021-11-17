document.addEventListener(
	"DOMContentLoaded",
	function () {
        const swiper8 = new Swiper('.main-galery-slider', {
            slidesPerView: "auto",
            spaceBetween: 15,
            centeredSlides: true,
            initialSlide: 1,
            loop: true,
            watchOverflow: true,
    
            navigation: {
                nextEl: document.querySelector(".main-galery__next"),
                prevEl: document.querySelector(".main-galery__prev"),
            },
            pagination: {
                el: document.querySelector(".main-galery__pagination"),
                clickable: true,
            },
            // Responsive breakpoints
        });

        let cinemaSlider = document.querySelectorAll(".js-slider-cinema");

        if (cinemaSlider.length > 0) {
            cinemaSlider.forEach(element => {
                let elSlider = element.querySelector(".slider-cinema");
                let elSliderArrowPrev = element.querySelector(".slider-cinema-prev");
                let elSliderArrowNext = element.querySelector(".slider-cinema-next");
                const swiperCinema = new Swiper(elSlider, {
                    slidesPerView: 5,
                    spaceBetween: 15,
                    watchOverflow: true,
            
                    navigation: {
                        nextEl: elSliderArrowNext,
                        prevEl: elSliderArrowPrev,
                    },

                        // Responsive breakpoints
                    breakpoints: {
                        // when window width is <= 480px
                        1550: {
                        slidesPerView: 5,
                        spaceBetween: 20
                        },
                        900: {
                        slidesPerView: 4,
                        spaceBetween: 20
                        },
                        700: {
                        slidesPerView: 3,
                        spaceBetween: 20
                        },
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 20
                            },
                        // when window width is <= 320px
                        300: {
                        slidesPerView: 1,
                        spaceBetween: 10
                        }
                    }
                });
            });
        }
    })

$(document).ready(function () {

    $(".cinema-card__showOther").on("click", function() {
        $(this).slideUp();
        $(this).next(".cinema-card__other-block").slideDown();
    });

    if ($(window).width() > 1200) {
        $(".search-box__item").css({width: `${$(".header__menu").innerWidth() + $(".search-box").innerWidth()}`})
    } else {
        $(".search-box__item").css({width: "initial"});
    }

    $(window).on("resize", function() {
        if ($(window).width() > 1200) {
            $(".search-box__item").css({width: `${$(".header__menu").innerWidth() + $(".search-box").innerWidth()}`})
        } else {
            $(".search-box__item").css({width: "initial"});
        }
    });

    $(document).mouseup(function (e) {
        var container = $(".search-box__item");
        if (container.has(e.target).length === 0){
            $(".search-box__show-block").removeClass("--hidden");
            container.slideUp();
        }
    });

    $(".search-box__show-block").on("click", function() {
        $(this).addClass("--hidden");
        $(".search-box__item").slideDown();
    });

    if ($(".online-crew__list-item").length > 7) {
        $(".online-crew__list").append("<a class='online-crew__more'><span>Ещё</span></a>");

        $.each($(".online-crew__list-item"), function(index, val) {
            if (index > 6) {
                $(val).css({display: "none"});
            }
        });

        $(".online-crew__more").on("click", function(e) {
            e.preventDefault();
            let button = $(this);
            $.each($(".online-crew__list-item"), function(index, val) {
                if (index > 6) {
                    if ($(val).is(":hidden")) {
                        $(val).fadeIn();
                        button.find("span").text("Скрыть");
                    } else {
                        $(val).fadeOut();
                        button.find("span").text("Еще");
                    }
                }
            });
        });
    }


    // let gallerySliders = Array.prototype.slice.call(document.querySelectorAll(".main-galery"));

    // if (gallerySliders.length > 0) {
    //     gallerySliders.forEach((element) => {
    //         let slidesGallery = element.querySelectorAll(".main-galery__list-item");

    //         let slidesPer = "auto";
    //         let initSlide = 1;
    //         let centerSlide = true;
    //         let sliderLoop = true;

    //         let sliderMainGalery = new Swiper(element.querySelector(".main-galery-slider"), {
    //             slidesPerView: slidesPer,
    //             spaceBetween: 15,
    //             centeredSlides: centerSlide,
    //             initialSlide: initSlide,
    //             loop: sliderLoop,
    //             watchOverflow: true,

    //             navigation: {
    //                 nextEl: element.querySelector(".main-galery__next"),
    //                 prevEl: element.querySelector(".main-galery__prev"),
    //             },
    //             pagination: {
    //                 el: element.querySelector(".main-galery__pagination"),
    //                 clickable: true,
    //             },
    //         });
    //     });
    // }

});