$(document).ready(function() {
    if ($('body').hasClass('light')) {
        $('.dark-mode i').addClass('fa-moon')
    } else {
        $('.dark-mode i').addClass('fa-sun')
    }
    $('.dark-mode i').click(function() {
        $(".dark-mode i").toggleClass('fa-sun');
        $(".dark-mode i").toggleClass('fa-moon');
        $('body').toggleClass('light');
    });
});