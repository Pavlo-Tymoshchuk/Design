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

// File load

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



// let rangeButton = document.querySelector('.implementation__range .range');

// rangeButton.addEventListener('mousedown', function(){
//     startRange();
// })


// function startRange () {
//     let box = rangeButton.getBoundingClientRect();
    
//     let left =  box.left + pageXOffset;
//     console.log(pageXOffset);
// }

// var callbackBlock = {
//     top: $('#callback-section').offset().top,
//     bottom: $('#callback-section').offset().top + $('#callback-section').outerHeight(),   
// };

// $(window).on('scroll', function(event){
//     let windowTop = $(this).scrollTop();
    
//     let elements = {
//         stars1: $('.stars-1'),
//         stars2: $('.stars-2'),
//         small: $('.small_group'),
//         middle: $('.middle_group'),
//         large: $('.big_group')
//     };
    
//     let numberTop = 700;
//     let numberBottom = 400;
    
//     let betweenPositions = {
//         top: callbackBlock.top - numberTop,
//         bottom: callbackBlock.bottom + numberBottom,
//     };
    
//     let starGears = [0.5, 0.6, 0.4, 0.3];
    
//     if(windowTop > betweenPositions.top && windowTop < betweenPositions.bottom){
        
//         let diffHeight = callbackBlock.top - windowTop - $('#callback-section').outerHeight()/2;
        
//         $(elements.stars1).css('transform', 'translateY('+(diffHeight * starGears[0])+'px)');
//         $(elements.stars2).css('transform', 'translateY('+(diffHeight * starGears[0] * -1)+'px)');
//         $(elements.small).css('transform', 'translateY('+(diffHeight * starGears[1])+'px)');
//         $(elements.middle).css('transform', 'translateY('+(diffHeight * starGears[2])+'px)');
//         $(elements.large).css('transform', 'translateY('+(diffHeight * starGears[3])+'px)');
//     }
// });


$('.implementation .next').on('click', function() {
    let itemShow = $('.implementation__slider-item.show');
    let sliderList = $('.implementation__slider-list');
    
    itemShow.next().addClass('show');
    itemShow.removeClass('show');
    $('.implementation__slider-item').removeClass('return-value');
    setTimeout(function(){
        let newElem = itemShow;
        itemShow.remove();
        sliderList.append(newElem);
    },650);

});

$('.implementation .prev').on('click', function() {
    let itemShow = $('.implementation__slider-item.show');
    let sliderList = $('.implementation__slider-list');
    let lastElem = $('.implementation__slider-item').last();
    $('.implementation__slider-item').removeClass('return-value');
    sliderList.prepend(lastElem);
    
    setTimeout(function(){
        itemShow.prev().addClass('show');;
        itemShow.removeClass('show');
    },20)
});



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

$(function() {
    let widthContainer = $('.implementation__slider-item.show').width();

	$('.implementation__range').draggable({
        axis: "x",
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

});


$('.js-button').on('click',function() {
    let target = $(this).attr('data-target');
    console.log(target)
    $('.popup[data-target= ' + target + ']').addClass('show');
    $('.overlay').addClass('show');
    $('html').addClass('overflow')
});

$(".popup-close,.overlay").on('click',function(){
    $('.popup,.overlay').removeClass('show');
    $('html').removeClass('overflow')
});