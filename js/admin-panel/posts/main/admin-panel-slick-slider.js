

let tableContainer = $('.table-container')
tableContainer.slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  swipe: false,
  centerMode: false,
  adaptiveHeight: true,
  variableWidth: false
});




let nextButtons = $('.control-buttons').children('.left').children('.go-next')
nextButtons.on('click', (e) => {
  let slickCurrentSlide = tableContainer.slick('slickCurrentSlide')
  if (slickCurrentSlide == 0) {



    // Main Slide Id
    let mainSlideRow = $(e.currentTarget).parents('tr')
    let mainSlideRowId = $(mainSlideRow).find('#id').html()



    // Detail Slide Id
    let detailSlideID = $(tableContainer).find('#detail').find('#id')

    Array.from(detailSlideID).forEach(item => {
      if (item.innerHTML == mainSlideRowId) {
        console.log('true')
        let topPosition = $(item).parents('tr').offset().top - 20
        $('html').scrollTop(topPosition)
      }

    })



    tableContainer.slick('slickNext')


  } else {
    tableContainer.slick('slickPrev')
  }



})







function print(testObject) {
  console.log(testObject)
}


function test(element) {
  element.css('background-color', 'red')
}


