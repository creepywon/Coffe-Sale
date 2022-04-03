let dropwDownState = false;
let dropDownMenu = $('#drop-down-menu')
let categoryButton = $('#secondary-header-category')
let animationDuration = 400;
let animationEndDuration = 400;
let mainCategoryList = $('#main-category-list').children()
let subCategoryList = $('#sub-category').children()

categoryButton.on('click', () => {
    categoryButton.css('pointer-events', 'none')
    if (dropwDownState == false) {
        dropDownMenu.animate({ opacity: 0 }, 0);
        hideAll(subCategoryList, 0)
        $(mainCategoryList[0]).addClass('selected')
        $('html, body').animate({ scrollTop: 170 }, animationDuration / 2);
        dropDownMenu.slideDown(animationDuration, () => {
            dropDownMenu.animate({ opacity: 1 }, animationDuration, () => {
                categoryButton.css('pointer-events', 'all')
            })
        })
        dropDownMenu.css('display', 'flex')
        dropwDownState = !dropwDownState
    }
    else {
        dropDownMenu.animate({ opacity: 0 }, animationEndDuration, () => {
            dropDownMenu.slideUp(
                animationEndDuration,
                () => {
                    categoryButton.css('pointer-events', 'all'),
                        dropwDownState = !dropDownMenu
                })
        })
    }

})


mainCategoryList.each((index) => {
    $(mainCategoryList[index]).hover(
        () => {
            hideAll(subCategoryList, index)
            $(mainCategoryList[index]).addClass('selected')
            $(mainCategoryList[0]).removeClass('selected')
        }
        ,
        () => {
            $(mainCategoryList[index]).removeClass('selected')

        }
    )
})



function test(text) {
    console.log(text)
}

function hideAll(subCategoryList, index) {
    Array.from(subCategoryList).forEach(item => {
        $(item).hide();
    })

    $(subCategoryList[index]).fadeIn(500);

}


