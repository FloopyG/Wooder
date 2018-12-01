$('.menuButton').click(function () {
    if ($(this).hasClass('noReady')) {
        $('.menuButtonLine1').animate({
            top: '10px'
        }, 300)
            .transition({
                transform: 'rotate(45deg)'
            }, 400);
        $('.menuButtonLine3').animate({
            top: '10px'
        }, 300).transition({
            transform: 'rotate(-45deg)'
        }, 400);
        $('.menuButtonLine2').animate({
            opacity: 0
        }, 300);
        $('.menuLogoUl').animate({
            display: 'inline-block'
        }, 300).animate({
            width: '500px',
            opacity: 1
        }, 400);
        $('.menuButton').addClass('ready').removeClass('noReady');
    } else if ($(this).hasClass('ready')) {
        $('.menuButtonLine1').transition({
            transform: 'rotate(0deg)'
        }, 400).animate({
            top: '0px'
        }, 300);

        $('.menuButtonLine3').transition({
            transform: 'rotate(0deg)'
        }, 400).animate({
            top: '20px'
        }, 300);
        $('.menuButtonLine2').animate({
            opacity: 1
        }, 300);
        $('.menuLogoUl').animate({
            width: '0',
            opacity: 0
        }, 400).animate({
            display: 'none'
        }, 300);
        $('.menuButton').addClass('noReady').removeClass('ready');
    }
});
$('.languageChange').click(function () {
    $('.languageChangeText2').toggleClass('activeLanguage');
    $('.languageChangeRectangle').toggleClass('activeRectangle');
});

$('.headerSlider').slick({
    dots: true,
    arrows: false
});



