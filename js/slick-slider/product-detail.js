

// Product Show 
$('.main-slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover : true ,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots :true ,
  infinite : true ,
  asNavFor: '.sub-slider'
});
$('.sub-slider').slick({
  slidesToShow: 3,
  slidesToScroll :  1 ,
  pauseOnHover : true ,
  asNavFor: '.main-slider',
  dots: false,
  arrows : false ,
  infinite : true ,
  centerMode: false,
  focusOnSelect: true ,
  adaptiveHeight : true , 


});

// Product - info - header click Events
let contentPage = $('.content-page').slick({
  speed: 300,
  slidesToShow: 1,
  dots: false,
  arrows: false,
  adaptiveHeight: true,
  focusOnSelect: true,
  swipe : false ,
  rtl: false,
  infinite: true 
});


$('#item-0').click(() => {
  contentPage.slick('slickGoTo', 2);
  $('#item-0').addClass("selected");
  $('#item-1').removeClass("selected");
})

$('#item-1').click(() => {
  contentPage.slick('slickGoTo', 1);
  $('#item-1').addClass("selected");
  $('#item-0').removeClass("selected");
})



// Comments List
let commentsList = document.getElementById("comments-list") ;
let count = commentsList.children.length


// Product Info - Header - Comments - Count
let commentsCount = document.getElementById('comments-count');
commentsCount.innerHTML = count ;



















