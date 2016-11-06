$(document).ready(function () {

    /*******************************************************************************************************************
     * window resize
     */

    if ($(window).width() < '992'){
        
    } else {

    }

    $(window).resize(function(){
        if ($(window).width() < '992'){

        } else {

        }
    });

    /*******************************************************************************************************************
     * buttons, clicks, hovers
     */
    

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

    $('.select-main').on('change', function() {
        $(this).parents('.select-wrapper').find('.select-hidden').fadeIn();
    });

    /*******************************************************************************************************************
     * function on page load
     */

    $(window).load(function(){
        $(".be-loader").fadeOut("slow");
    });

    /*******************************************************************************************************************
     * map
     */

    $("#map-italy").CSSMap({
        "size": 430,
        "tooltips": "visible",
        "responsive": "auto",
        disableClicks: true
    });


});
