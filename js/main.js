$(document).ready(function () {
    // ======= navbar shrink =======
    $(window).on("scroll", function() {
        if($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink")
        } else {
            $(".navbar").removeClass("navbar-shrink")
        }
    });

    // Video Popup and closing button
    const videoSrc = $("#player").attr("src");
    $(".video-play-btn, .video-popup").on("click", function () {
        if($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player").arrt("src", "")
        }
        else {
            $(".video-popup").addClass("open");
            if($("#player").attr("src")=="") {
                $("#player").attr("src", videoSrc)
            }
        }
    });

    // ======= Features Carousel, Screenshots Carousel, Testimoial =======
    $(".features-carousel, .screenshots-carousel, .testimonials-carousel, .team-carousel").owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });

})