document.addEventListener("DOMContentLoaded", function() {
    
    // Offers block 
    
    $('.offers_button').on('click', function() {
        $(this).parents('.offers-block__item').children('.offers__list-wrapper').removeClass('active');
        $(this).parents('.offers__list-wrapper').addClass('active');
    });
    
    // let content = $('.offers__list-wrapper.active .content');
    // let list = $('.offers__list-wrapper.active .offers__list');
    
    // for(var i = 0; list.length > i; i++) {
    //     console.log(content[i].offsetHeight)
    //     if(content[i].offsetHeight - list[i].offsetHeight < 0) {
    //         $(this).parents()
    //     }
    // }
    
    $('.offers-block__item .main-button').on('click', function(){
        let title = $(this).parents('.offers-block__item').find('.caption').text();
        let mainTitle = $(this).parents('.offers-block__wrapper').find('.main_caption').text();
    
        $(".popup__consultation .title").val(mainTitle + "/" + title);
    });
    
    $('.buy-furniture__item .main-button').on('click', function(){
        let title = $(this).parents('.buy-furniture__item').find('.caption').text();
        let mainTitle = $(this).parents('.buy-furniture__description').find('.main_caption').text();
        
        $(".popup__consultation .title").val(mainTitle + "/" + title);
    });

    init();
});

if($(window).width() < 768) {
    $('.our-works__caption').on('click',function(){
        $(this).toggleClass('active');
    });
}

// Resize 
$(window).on('resize', function() {
    rangeSlider();
});

// /Resize

// Touch 

function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent({
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
    }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
}

function init() {
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
}

// /Touch

  
function scrollLeft(elem) {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        elem.scrollLeft -= (delta*40);
        // elem.scrollLeft = 150;
        // Multiplied by 40
        e.preventDefault();
    }
    if (elem.addEventListener) {
        // IE9, Chrome, Safari, Opera
        elem.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        elem.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        elem.attachEvent("onmousewheel", scrollHorizontally);
    }
};

let offersFirst = document.querySelector('.offers-block__list');
let offersSecond = document.getElementById('offers-1');
scrollLeft(offersFirst);
scrollLeft(offersSecond);
// Scroll to block

$('.js-link').on('click',function(){
    let id = $(this).attr('href');
    let top = $(id).offset().top;
    
    $('html,body').animate({scrollTop: top},700);
});

// File load

var fileButton;

$('.main-form__file').on('click', function() {
    fileButton = this;
});
function previewFile() {
    var file = fileButton.querySelector('.offers-file').files[0].name;
    $(fileButton).addClass('active');
    $(fileButton).find('.main-form__name p').text(file);
}

$('.main-form__name span').on('click', function(){
    fileButton.querySelector('.offers-file').value = null;
    $(fileButton).removeClass('active');
});

// /File load

// Slider our project

function addItemsSlider () {
    $('.our-project__grid__item').each(function(key, item) {
        var startIndex = $('.our-project__slider-list .our-project__slider-item.active.start').index();
        var trueStart = startIndex + key;
        
        var totalLength = $('.our-project__slider-list .our-project__slider-item').length - 1;
        var offset = trueStart - totalLength;
        
        if(offset > 0)
            trueStart = offset - 1;  
            
        $(item).append($('.our-project__slider-list .our-project__slider-item').eq(trueStart).clone());
        setTimeout(function() {
            $(document).find('.our-project__grid .our-project__slider-item').removeClass('opacity');
        },100);
    });
}

addItemsSlider();

$('.slider-button__wrapper .prev').on('click', function(){
    var prevThree = $('.our-project__slider-list .our-project__slider-item.start').prev().prev().prev();
    
    if(prevThree.length){
        prevThree.addClass('start');
        
        $(document).find('.our-project__slider-list .our-project__slider-item.start').last().removeClass('start').prevAll('.our-project__slider-item').removeClass('active');
        
        $(document).find('.our-project__slider-list .our-project__slider-item.active').slice(6,9).removeClass('active');
    }else{
        $(document).find('.our-project__slider-list .our-project__slider-item.start').removeClass('start');
        $(document).find('.our-project__slider-list .our-project__slider-item.active').slice(-3).removeClass('start active');
        
        $('.our-project__slider-list .our-project__slider-item').slice(-3).first().addClass('start');
    }
    
    var startIndex = $('.our-project__slider-list .our-project__slider-item.start').index();
    var itemLength = $('.our-project__slider-list .our-project__slider-item').length;
    var offset = startIndex - itemLength;
    
    $('.our-project__slider-list .our-project__slider-item.start').nextAll('.our-project__slider-item').addBack().slice(0, 8).addClass('active');

    addItemsSlider();    
});

$('.slider-button__wrapper .next').on('click', function(){

    var nextThree = $('.our-project__slider-list .our-project__slider-item.start').next().next().next();
    
    if(nextThree.length){
        nextThree.addClass('start');
        
        $(document).find('.our-project__slider-list .our-project__slider-item.start').first().nextAll('.our-project__slider-item').addBack().slice(0, 3).removeClass('active start');
    }else{
        
        $('.our-project__slider-list .our-project__slider-item.active').first().addClass('start');
        
        $(document).find('.our-project__slider-list .our-project__slider-item.start').last().nextAll('.our-project__slider-item').addBack().slice(0, 3).removeClass('active start');
    }
        
    
    var startIndex = $('.our-project__slider-list .our-project__slider-item.start').index();
    var itemLength = $('.our-project__slider-list .our-project__slider-item').length;
    var offset = startIndex + 9 - itemLength;
    
    if(offset > 0)
        $('.our-project__slider-list .our-project__slider-item').slice(0, offset).addClass('active');
    else
        $('.our-project__slider-list .our-project__slider-item.active').last().nextAll('.our-project__slider-item').slice(0, 3).addClass('active');
    
    addItemsSlider();
});

// /Slider our project

// Slider implementation


$('.implementation .next').on('click', function() {
    let itemShow = $('.implementation__slider-item.show');
    
    if(!$('.implementation__slider-item.show').nextAll('.implementation__slider-item').length) {
        $('.implementation__slider-item').last().removeClass('show');
        $('.implementation__slider-item').first().addClass('show')
    }else {
        itemShow.next().addClass('show');
        itemShow.removeClass('show');
    }
    
    $('.implementation__slider-item').removeClass('return-value');

});

$('.implementation .prev').on('click', function() {
    let itemShow = $('.implementation__slider-item.show');
    $('.implementation__slider-item').removeClass('return-value');

    if(!$('.implementation__slider-item.show').prevAll('.implementation__slider-item').length) {
        $('.implementation__slider-item').first().removeClass('show');
        $('.implementation__slider-item').last().addClass('show')
    }else {
        itemShow.prev().addClass('show');;
        itemShow.removeClass('show');
    }
});

function rangeSlider() {
    let widthContainer = $('.implementation__slider-item.show').width();

	$('.implementation__range').draggable({
        axis: "x",
        distance: 5,
        stop: function() {
            $(this).parents('.implementation__slider-item.show').addClass('return-value');
        },
        drag : function() {
            $(this).parents('.implementation__slider-item.show').removeClass('return-value');
            var leftCord = $(this).position().left + 40;
            var leftImage = $(this).parents('.implementation__slider-item.show').find('.implementation__slider-img.range');
            var rightImage = $(this).parents('.implementation__slider-item.show').find('.implementation__slider-img:not(".range")');
            if(leftCord > widthContainer / 2) {
                leftImage.css('width', leftCord + "px");
                var cord = leftCord - widthContainer / 2;
                
                rightImage.css('width', widthContainer / 2 - cord + "px");
            } else {
                cord = leftCord - widthContainer / 2;
                leftImage.css('width', leftCord + "px");
                rightImage.css('width', (widthContainer / 2) + (widthContainer / 2 - leftCord) + "px");
            }
        }
    });

};

rangeSlider();

// /Slider implementation

// Main Form Slider


$('.main-form__button .next').on('click', function(){
    let showElem = $('.main-form.show');
    let index = showElem.next().attr('data-index');
    $('.main-form__counter .current').html(index);
    
    showElem.next().addClass('show');
    showElem.removeClass('show');
    
    $('.main-form__button .prev').addClass('show');
    
    if(!$('.main-form.show').nextAll('.main-form').length) {
        $(this).removeClass('show');
        $('.main-form__button .main-button').addClass('show');
    }
});

$('.main-form__button .prev').on('click', function(){
    let showElem = $('.main-form.show');
    let index = showElem.prev().attr('data-index');
    $('.main-form__counter .current').html(index);
    
    showElem.prev().addClass('show');
    showElem.removeClass('show');
    
    $('.main-form__button .prev').addClass('show');
    $('.main-form__button .next').addClass('show');
    $('.main-form__button .main-button').removeClass('show');
    
    if(!$('.main-form.show').prevAll('.main-form').length) {
        $(this).removeClass('show');
    }
});

// /Main Form Slider

// General button

$('.js-button').on('click',function() {
    let target = $(this).attr('data-target');
    $('.popup[data-target= ' + target + ']').addClass('show');
    $('.overlay').addClass('show');
    $('html').addClass('overflow')
});

$(".js-close,.overlay").on('click',function(){
    $('.popup,.overlay').removeClass('show');
    $('html').removeClass('overflow')
});

$('.our-project__grid__item').on("click", "button", function(){
    let target = $(this).attr('data-target');
    let index = $(this).parents('.our-project__slider-item').attr('data-index');
    
    $(".popup__portfolio__wrapper").removeClass('show');
    $('.popup__portfolio__wrapper[data-index= ' + index + ']').addClass('show');
    
    $('.popup[data-target= ' + target + ']').addClass('show');
    $('.overlay').addClass('show');
    $('html').addClass('overflow');
    
});

// /General button

// Popup portfolio

$('.portfolio-slider__arrow.next').on('click', function(){
    let mainImg = $('.popup__portfolio__wrapper.show .portfolio-slider__img-item.show');
    let smallImg = $('.popup__portfolio__wrapper.show .portfolio-slider__item.active');
    let smallImgList = $('.popup__portfolio__wrapper.show .portfolio-slider__list');
    let textDescription = $('.popup__portfolio__wrapper.show .popup__portfolio-information__item.show');
    
    if(!$('.popup__portfolio__wrapper.show .portfolio-slider__img-item.show').nextAll().length) {
        $(this).addClass('disable')
        return;
    }
    
    $('.portfolio-slider__arrow.prev').removeClass('disable');
    textDescription.next().addClass('show');
    textDescription.removeClass('show');
    mainImg.next().addClass('show');
    mainImg.removeClass('show');
    smallImg.next().addClass('active');
    smallImg.removeClass('active');
    
    if(smallImg.next().index() % 4 === 0) {
        let lengthItem = $('.popup__portfolio__wrapper.show .portfolio-slider__item.active').nextAll('.popup__portfolio__wrapper.show .portfolio-slider__item').length;
        if(Math.floor(lengthItem) > 4) {
            lengthItem = 3;
        }
        let margin = 0;
        margin = smallImg.width() * (Math.floor(lengthItem) + 1);
        smallImgList.css('margin-left', '-=' + margin + "px");
    }
});

$('.popup__portfolio__wrapper.show .portfolio-slider__arrow.prev').on('click', function(){
    let mainImg = $('.popup__portfolio__wrapper.show .portfolio-slider__img-item.show');
    let smallImg = $('.popup__portfolio__wrapper.show .portfolio-slider__item.active');
    let smallImgList = $('.popup__portfolio__wrapper.show .portfolio-slider__list');
    let textDescription = $('.popup__portfolio__wrapper.show .popup__portfolio-information__item.show');
    
    if(!$('.popup__portfolio__wrapper.show .portfolio-slider__img-item.show').prevAll().length) {
        $(this).addClass('disable')
        return;
    }
    
    $('.portfolio-slider__arrow.next').removeClass('disable');
    textDescription.prev().addClass('show');
    textDescription.removeClass('show');
    mainImg.prev().addClass('show');
    mainImg.removeClass('show');
    smallImg.prev().addClass('active');
    smallImg.removeClass('active');
    
    if(smallImg.index() % 4 === 0) {
        let lengthItem = $('.popup__portfolio__wrapper.show .portfolio-slider__item.active').nextAll('.popup__portfolio__wrapper.show .portfolio-slider__item').length;
        
        if(Math.floor(lengthItem) > 4) {
            lengthItem = 4;
        }
        
        let margin = 0;
        margin = smallImg.width() * (Math.floor(lengthItem));
        smallImgList.css('margin-left', '+=' + margin + "px");
    }
});

$('.popup__portfolio-information .main-button').on('click', function() {
    let title = $(this).parents('.popup__portfolio-information').find('.main_caption').text();
    
    $('.popup__portfolio-form .title').val(title);
    
    $('.popup__portfolio-form').addClass('show');
    $(this).addClass('disable');
});

$('.popup__portfolio-form .popup-close').on('click', function(){
    $('.popup__portfolio-form').removeClass('show');
    $('.popup__portfolio-information .main-button').removeClass('disable');
});
 
$('.popup__portfolio-arrow.next').on('click', function(){
    let item = $('.popup__portfolio__wrapper.show');
    
    $('.popup__portfolio-arrow.prev').removeClass('disable');
    item.next().addClass('show');
    item.removeClass('show');
    
    if(!$('.popup__portfolio__wrapper.show').nextAll().length) {
        $(this).addClass('disable');
        return;
    }
});

$('.popup__portfolio-arrow.prev').on('click', function(){
    let item = $('.popup__portfolio__wrapper.show');
    
    $('.popup__portfolio-arrow.next').removeClass('disable');
    item.prev().addClass('show');
    item.removeClass('show');
    
    if(!$('.popup__portfolio__wrapper.show').prevAll().length) {
        $(this).addClass('disable');
        return;
    }
});


