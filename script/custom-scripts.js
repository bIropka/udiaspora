$(document).ready(function () {    

    /*******************************************************************************************************************
     * buttons, clicks, hovers
     */

    $('.btn-sign-up').click(function() {
        $('.dropdown-sign-up').addClass('visible');
    });

    $('.btn-sign-in').click(function() {
        $('.dropdown-sign-in').addClass('visible');
    });

    $('.btn-callback').click(function() {
        $('.dropdown-callback').addClass('visible');
        return false;
    });

    $('.close-button').click(function () {
        $(this).parents('.large-popup').removeClass('visible');
    });


    /*******************************************************************************************************************
     * custom select
     */

    $('.current-lang').click(function() {
        $('.nav-lang').slideToggle(200);
    });

    $('.be-custom-select').chosen({
        no_results_text: "Такої країни немає",
        width: "100%",
    });

    $('.select-country').on('change', function() {
        $(this).parents('.select-wrapper').find('.select-city').css('visibility', 'visible');
    });

    /*******************************************************************************************************************
     * loader
     */

    $(window).load(function(){
        $(".be-loader").fadeOut("slow");
    });

    /*******************************************************************************************************************
     * map
     */

    $("#map-italy").CSSMap({
        size: 430,
        tooltips: "visible",
        responsive: "auto",
        disableClicks: true
    });


});
