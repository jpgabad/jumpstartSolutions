
// WOW JS
new WOW().init();
var scroll = new SmoothScroll('a[href*="#"]', {
    ignore: '[data-scroll-ignore]'
});

$(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
        $('.z-navbar1').removeClass('onscroll-show');
        $('.z-navbar1').addClass('onscroll-hide');
        $('.z-navbar2').removeClass('onscroll-hide');
        $('.z-navbar2').addClass('onscroll-show');

        $('.z-navbar2[animate="nav2"]').addClass('wow animate__animated animate__fadeInDown');

    } else {
        $('.z-navbar1').removeClass('onscroll-hide');
        $('.z-navbar1').addClass('onscroll-show');

        $('.z-navbar2').removeClass('onscroll-show');
        $('.z-navbar2').addClass('onscroll-hide');
        $('.z-navbar1[animate="nav1"]').addClass('wow animate__animated animate__fadeInDown');
    }
});




//<!-------------------Captcha Script------------------------------>

    //Refresh Captcha
    function refreshCaptcha(){
        var img = document.images['captcha_image'];
        img.src = img.src.substring(
            0,img.src.lastIndexOf("?")
        )+"?rand="+Math.random()*1000;
    }
