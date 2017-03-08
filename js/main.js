$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.slider').slider();
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYear: 17
    });
    $('.modal').modal();
    $('select').material_select();
    $('ul.tabs').tabs();
});