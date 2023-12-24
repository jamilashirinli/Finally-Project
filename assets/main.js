let burgerButton = document.querySelector(".header__burger");
let menuLinks = document.querySelectorAll(".header__link");
let menuList = document.querySelector(".header__list");
burgerButton.addEventListener("click", function() {
    burgerButton.classList.toggle("active");
    menuList.classList.toggle("active");
});


menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        burgerButton.classList.remove("active");
        menuList.classList.remove("active");
    });
});


let introHeight = document.getElementById("intro").offsetHeight;
let scrollOffset = window.pageYOffset;
checkScroll(scrollOffset);

window.addEventListener("scroll", function() {
    scrollOffset = window.pageYOffset;
    checkScroll(scrollOffset);
});

function checkScroll(scrollOffset) {
    let header = document.querySelector(".header");
    let headerLogo = document.querySelector(".header__logo");
    let headerLinks = document.querySelectorAll(".header__link");
    let navigationUpper = document.querySelector(".navigation-upper");

    if (scrollOffset >= introHeight) {
        header.style.background = "#212529";
        headerLogo.style.width = "175px";
        headerLinks.forEach(function(link) {
            link.style.fontSize = "13px";
        });
    } else {
        headerLogo.style.width = "200px";
        headerLinks.forEach(function(link) {
            link.style.fontSize = "16px";
        });
        header.style.background = "transparent";
    }

    if (scrollOffset <= introHeight || scrollOffset === 0) {
        navigationUpper.classList.add("navigation-hidden");
    } else {
        navigationUpper.classList.remove("navigation-hidden");
    }
}

// // Owl-Carousel --------------------------
$('.slider__carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    dots: true,
    responsive:{ 
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

$('.product__carousel').owlCarousel({
    margin:10,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    dots: true,
    responsive:{ 
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

//Aos --------------------------
AOS.init({
    duration: 1200,
    once: true
});




Fancybox.bind('[data-fancybox="gallery"]', {
    caption: function (fancybox, carousel, slide) {
      return (
        `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
      );
    },
});

Fancybox.bind('[data-fancybox="fancy-carousel"]', {
    caption: function (fancybox, carousel, slide) {
      return (
        `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
      );
    },
});


var modalAnimate = $(".modal");

modalAnimate.addClass(modalAnimate.attr("data-animate-in"));

modalAnimate.on("hide.bs.modal", function(ev) {
    if(!$(this).attr("is-from-animation-end")) {
        ev.preventDefault();
        $(this).addClass($(this).attr("data-animate-out"));
        $(this).removeClass($(this).attr("data-animate-in"));
    }
    !$(this).removeAttr("is-from-animation-end");
})
.on("animationend", function() {
    if($(this).hasClass($(this).attr("data-animate-out"))) {
        $(this).attr("is-from-animation-end", true);
        $(this).modal("hide");
        $(this).removeClass($(this).attr("data-animate-out"));
        $(this).addClass($(this).attr("data-animate-in"));
    }
})