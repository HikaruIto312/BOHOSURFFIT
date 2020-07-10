var currentItemNum = 1;

var $slideContainer = $('.slider__container');

var slideItemNum = $('.slider__item').length;

var slideItemWidth = $('.slider__item').innerWidth();

var slideContainerWidth = slideItemWidth * slideItemNum;

var DURATION = 1000;

$slideContainer.attr('style', 'width:' + slideContainerWidth + 'px');

function autoSlide(){
    if(currentItemNum < slideItemNum){
        $slideContainer.animate({left: '-='+slideItemWidth+'px'}, DURATION);
        currentItemNum++;
    }else if(currentItemNum = slideItemNum){
        $slideContainer.css('left', '+='+slideItemWidth*(slideItemNum-1)+'px');
        currentItemNum = 1;
    }
}

setInterval(autoSlide, 5000);
