



// Orders List
$('.state').on('click', (e) => {
    console.log(e.currentTarget)
    $(e.currentTarget).parents('.orders-card-container').children('.state-info').fadeIn(
        500
    );
})
$('.state-info-close').on('click', (e) => {
    // console.log(e.currentTarget)
    $(e.currentTarget).parents('.state-info').fadeOut(
        500
    )
})
$('.state-info-key').on('click', (e) => {
    let value = $(e.currentTarget).children('p').children('span').text()
    navigator.clipboard.writeText(value)


    let textString = 'شناسه خرید شما با موفقیت در کیبورد شما کپی شد'
    let textStatus = 'green'
    let textIcon = '<i class="fa-solid fa-check"></i>'

    // <i class="fa-solid fa-check"></i> Status green Icon
    // <i class="fa-solid fa-xmark"></i> Status red Icon
    // <i class="fa-solid fa-triangle-exclamation"></i> Status yellow Icon
    $.toast({
        heading: '',
        text: `'<div class="toast-container ${textStatus}"> <div class="right"> ${textIcon} </div> <div class="left"> <div class="toast-body">${textString}</div> </div> </div>'`,
        textAlign: "right",
        icon: 'none',
        hideAfter: 3000,
        showHideTransition: 'fade',
        position: 'bottom-right',
        allowToastClose: false,
        loader: true,        // Change it to false to disable loader
        loadAfter: true,
        loaderBg: 'red'  // To change the background
    })
})







// User Account
let userAccountImageInput = document.getElementById("user-image-input");
let userAccountImage = document.getElementById("user-image")

userAccountImageInput.onchange = function (e) {
    let file = this.files[0];
    let fileReader = new FileReader();

    if (file) {
        fileReader.readAsDataURL(file);
    }

    fileReader.onload = () => {
        userAccountImage.src = fileReader.result;
    }


}


// Shopping Cart 
$('#form-owner-name-family').slideUp(200)
$('#form-owner-email').slideUp(200)
$('#summary-owner-self').change(() => {

    $('#summary-owner-form').animate({ opacity: 0 }, 250, () => {
        $('#form-owner-name-family').slideUp(0)
        $('#form-owner-email').slideUp(0)
    });
    $('#summary-owner-form').animate({ opacity: 1 }, 500);
    $('#owner-self').addClass('selected')
    $('#owner-others').removeClass('selected')
})
$('#summary-owner-others').change(() => {
    $('#summary-owner-form').animate({ opacity: 0 }, 250, () => {
        $('#form-owner-name-family').slideDown(200)
        $('#form-owner-email').slideDown(200)
    });
    $('#summary-owner-form').animate({ opacity: 1 }, 500);
    $('#owner-others').addClass('selected')
    $('#owner-self').removeClass('selected')


})



