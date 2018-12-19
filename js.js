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
            width: '520px',
            opacity: 1
        }, 400).css({
            display: 'inline-block'
        }
        );
        $('.menuLogoLiA').animate({
            width: '80px'
        }, 400).css({
            cursor: 'pointer'
        });
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
        }, 400);
        $('.menuLogoLiA').animate({
            width: '0'
        }, 400).css({
            cursor: 'default'
        });
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



