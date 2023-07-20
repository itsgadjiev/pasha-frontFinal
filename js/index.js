// @ts-nocheck
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


$(document).ready(function () {
    $(".detailed-btn-2").on("click", function () {
        const card = $(this).closest(".online-business-card");
        card.find(".detailed-section").toggleClass("d-none");
    });
});