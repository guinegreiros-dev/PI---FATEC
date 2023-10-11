$(document).ready(function() {
    $(".toggle-button").click(function() {
        $(".barra").removeClass("open");
    });
    $(".fecha-barra").click(function() {
        $(".barra").toggleClass("open")
    })
});