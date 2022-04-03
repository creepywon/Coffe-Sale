$('.footer-list-header').on ('click' , (e)=> {
    let viewParent = $(e.currentTarget).parents('.footer-menu')
    let list = viewParent.children('.list')

    list.slideToggle(100)
})