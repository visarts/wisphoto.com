$(function(){
    $('.main_header').data('size','big');
    $('.logo').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('.main_header').data('size') == 'big')
        {
            $('.main_header').data('size','small');
            $('.logo').data('size','small');
            $('.main_header').stop().animate({
                height:'100px'
            },600);
            $('.logo').stop().animate({
                height:'90px'
            },600);
        }
    }
    else
    {
        if($('.main_header').data('size') == 'small')
        {
            $('.main_header').data('size','big');
            $('.logo').data('size','big');
            $('.main_header').stop().animate({
                height:'150px'
            },600);
            $('.logo').stop().animate({
                height:'120'
            },600);
        }  
    }
});