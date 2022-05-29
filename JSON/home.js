function hideAllMenu(list) {
            document.querySelector('#top-course').style.display = 'none';
            document.querySelector('#discount').style.display = 'none';
            document.querySelector('#menu-top_course').classList.remove('active');
            document.querySelector('#menu-discount').classList.remove('active');

            list.style.display = 'flex';
}
hideAllMenu(document.getElementById("discount"));
document.querySelector("#menu-discount").classList.add("active");
//
document.getElementById("menu-discount").addEventListener("click", () => {
            hideAllMenu(document.getElementById("discount"));
            document.querySelector("#menu-discount").classList.add("active");
});
hideAllMenu(document.getElementById("top-course"));
document.querySelector("#menu-top_course").classList.add("active");
//
document.getElementById("menu-top_course").addEventListener("click", () => {
            hideAllMenu(document.getElementById("top-course"));
            document.querySelector("#menu-top_course").classList.add("active");
});

$(document).ready(function () {
            $(".video-slide").slick({
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        autoplay: false,
                        autoplaySpeed: 2000,
                        draggable: false,
                        dots: true,
                        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
                        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
            });
});                           