

const prodcutsMaxCount = 5;
const categoryListMaxCount = 7;


let prevArrow = '<svg class="left-arrow" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M685.248 104.704C697.246 116.706 703.986 132.981 703.986 149.952C703.986 166.923 697.246 183.198 685.248 195.2L368.448 512L685.248 828.8C696.906 840.871 703.357 857.037 703.211 873.818C703.065 890.598 696.334 906.65 684.468 918.516C672.602 930.383 656.55 937.113 639.77 937.259C622.989 937.405 606.822 930.954 594.752 919.296L232.704 557.248C220.706 545.246 213.966 528.971 213.966 512C213.966 495.029 220.706 478.754 232.704 466.752L594.752 104.704C606.754 92.7059 623.029 85.9657 640 85.9657C656.97 85.9657 673.246 92.7059 685.248 104.704V104.704Z" fill="black"/></svg>'
let nextArrow = '<svg class="right-arrow"  viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M338.752 919.296C326.754 907.294 320.014 891.018 320.014 874.048C320.014 857.077 326.754 840.802 338.752 828.8L655.552 512L338.752 195.2C327.094 183.129 320.643 166.963 320.789 150.182C320.935 133.402 327.665 117.35 339.532 105.484C351.398 93.6174 367.45 86.8867 384.23 86.7408C401.011 86.595 417.177 93.0459 429.248 104.704L791.296 466.752C803.294 478.754 810.034 495.029 810.034 512C810.034 528.97 803.294 545.246 791.296 557.248L429.248 919.296C417.246 931.294 400.97 938.034 384 938.034C367.029 938.034 350.754 931.294 338.752 919.296V919.296Z" fill="black"/></svg>'





// User Dashboard


// Dashboard Header Icons Click 
let headerIcons = Array.from(document.getElementById('user-dashboard-header').children);
let dashBoardDropwDownState = -1
for (let index = 0; index < headerIcons.length; index++) {
    headerIcons[index].onclick = () => {


        $('.user-dashboard-body').fadeIn(
            {
                duration: 1000,
                start: () => {
                    $('.warning-list').slick('refresh')
                },
                complete: () => {
                    $('.warning-list').slick('refresh')
                }
            }

        )



        $('.user-dashboard-body').slick('slickGoTo', index);
        for (let subIndex = 0; subIndex < headerIcons.length; subIndex++) {
            $(headerIcons[subIndex]).removeClass('selected')
        }
        $(headerIcons[index]).addClass('selected')
    }
}

$('.user-dashboard-body').slick({
    dots: false,
    speed: 300,
    infinite: true,
    arrows: false,
    prevArrow: '',
    nextArrow: nextArrow,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 10000
});

$('.user-dashboard-body').slick('slickGoTo', 0);




// Shopping Cart - Summary - Left - Warning 
$('.warning-list ').slick({
    dots: true,
    speed: 500,
    infinite: true,
    arrows: false,
    prevArrow: '',
    nextArrow: nextArrow,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 5000
});



// Main Page

// Products Slider
$('.prodcuts-section-list').slick({
    dots: false,
    speed: 300,
    infinite: true,
    arrows: true,
    prevArrow: 'none',
    nextArrow: nextArrow,
    lazyLoad: 'ondemand',
    slidesToShow: prodcutsMaxCount,
    slidesToScroll: prodcutsMaxCount,
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: false,
    autoplay: false,
    autoplaySpeed: 10000,
    responsive: [


        {
            breakpoint: 1450,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },

        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 2,

            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 2,

            }
        }

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});


// Category Slider
$('.category-list').slick({
    dots: true,
    speed: 300,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: false,
    autoplay: false,
    autoplaySpeed: 10000,
    rtl: false,
    rows: 2,
    responsive: [


        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});


// Article Slider
$('.article-list').slick({
    dots: true,
    speed: 300,
    infinite: true,
    arrows: true,
    prevArrow: '',
    nextArrow: nextArrow,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 10000,
    // lazyLoad : 'ondemand',
    responsive: [


        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,

            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,

            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,

            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,

            }
        }

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});




// others 


// Warranty 

$('.warranty-body').slick({
    dots: true,
    speed: 300,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 15000
});
