


//  Side Bar
let menuPng = document.getElementById("menu");
let slideMenu = document.getElementById("slide-menu");
let menuBack = document.getElementById("menu-back");
let searchBar = document.getElementById("search-bar");


// searchBar.style.zIndex = '1';
menuPng.addEventListener("click", () => {
    slideMenu.style.transform = "translateX(-120%)";
});

menuBack.addEventListener("click", () => {
    slideMenu.style.transform = "translateX(0%)";
});


$('#side-menu-category').on ('click' , () => {
    // alert('clicked')
    $('#slide-menu').css ('transform' , 'translateX(0%)')
    $('html').animate({
        scrollTop: eval($('.category').offset().top - 70)
    }, 1000);
})





// Header Account Avatar
$('#primary-header-account').click(
    () => {
        $('#primary-header-account-drop-down').toggle(200)
    }
)

$('#account-drop-down-button').click ( ()=> {
   $('#dashboard-user-info').click()

} )