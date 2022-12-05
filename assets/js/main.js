$(function () {
    $('[data-bs-toggle="tooltip"]');
});

$(document).scroll(function () {
    const y = $("html").scrollTop();

    y > 300 ? $("nav").addClass("nav-gris") : $("nav").removeClass("nav-gris")


})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))