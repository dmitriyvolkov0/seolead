$(document).ready(()=>{
    new WOW().init();
});

// Открытие/закрытие спойлера
let spoilerFlag = false;
let spoilers = document.querySelectorAll('.spoiler');
function hideAllSpoilers(){
    spoilers.forEach(e => {
        $('#'+e.id+' .spoiler__content').animate({ height: 'hide' })
    });
}
function toggleSpoiler(id){
    hideAllSpoilers();
    spoilerFlag = !spoilerFlag;
    if(spoilerFlag){
        $('#'+id+' .spoiler__header span').text('Свернуть описание');
        $('#'+id+' .spoiler__content').animate({ height: 'show' });
    }else{$('#'+id+' .spoiler__header span').text('Развернуть описание');}
}

// slick slider настройки
$('.steps__items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-arrows left-arrow"><img src="img/left-arrow.svg" alt="Назад"></button>',
    nextArrow: '<button class="slick-arrows right-arrow"><img src="img/right-arrow.svg" alt="Вперед"></button>',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 2
    }
},
{
    breakpoint: 710,
    settings: {
        arrows: true,
        slidesToShow: 1
      }
    }
  ]
});


// sliders settings
let activeSanctionsSlick = false;
let activeAdvantagesSlick = false;
let clientWidth = window.innerWidth;
$(window).resize(function() {
    clientWidth = window.innerWidth;
    resizeSanctionsSlider(clientWidth);
    resizeAdvantagesSlider(clientWidth);
});

resizeSanctionsSlider(clientWidth);
resizeAdvantagesSlider(clientWidth);


// sanctions slider
function resizeSanctionsSlider(clientWidth) {
    if (clientWidth < 575 && !activeSanctionsSlick) {
        activeSanctionsSlick = true;
        $('.sanctions__items').slick({
            arrows: false,
            dots: true,
        });
    } else if(clientWidth >= 575 && activeSanctionsSlick) {
        activeSanctionsSlick = false;
        $('.sanctions__items').slick("unslick");
    }
}
  

//offer slider
$('.offer__slider').slick({
    slidesToShow: 4,
    arrows: false,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        dots: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        dots: true,
        slidesToShow: 1
      }
    }
  ]
});

// advantages slider
function resizeAdvantagesSlider(clientWidth) {
    if (clientWidth <= 1280 && !activeAdvantagesSlick) {
        activeAdvantagesSlick = true;
        $('.advantages__slider').slick({
            slidesToShow: 2,
            prevArrow: '<button class="slick-arrows left-arrow"><img src="img/left-arrow.svg" alt="Назад"></button>',
            nextArrow: '<button class="slick-arrows right-arrow"><img src="img/right-arrow.svg" alt="Вперед"></button>',
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        
    } else if(clientWidth > 1280 && activeAdvantagesSlick) {
        activeAdvantagesSlick = false;
        $('.advantages__slider').slick("unslick");
    }
}

// price slider
$('.price__slider').slick({
    slidesToShow: 2,
    prevArrow: '<button class="slick-arrows left-arrow"><img src="img/left-arrow.svg" alt="Назад"></button>',
    nextArrow: '<button class="slick-arrows right-arrow"><img src="img/right-arrow.svg" alt="Вперед"></button>',
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// plan accordeon
function hideAllPlanItems(){
    let accordeonItems = document.querySelectorAll('.plan__accordeon-item');
    accordeonItems.forEach(e => {
        $('#'+e.id + ' .plan__content').animate({ height: 'hide' });
        $('#'+e.id + ' #accordeon-but').css({ transform: 'scale(1, 1)' })
    });
    
}

let flag = false;
function planAccordeon(id){
    if(!flag){
        $('#'+id + ' .plan__content').animate({ height: 'show' });
        $('#'+id + ' #accordeon-but').css({ transform: 'scale(1, -1)' });
    }else{
        hideAllPlanItems();
    }
    flag = !flag;
}

hideAllPlanItems();
