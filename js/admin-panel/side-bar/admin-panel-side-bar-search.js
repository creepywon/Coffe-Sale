let sideBarListParent = document.getElementById('side-bar-list')
let searchBarInput = document.getElementById('search-bar-input');
const sideBarListChilds = sideBarListParent.children


searchBarInput.onkeyup = inputHandler;

function inputHandler() {


    let inputData = searchBarInput.value;
    Array.from(sideBarListChilds).forEach(item => {
        if (item.innerText.toString().search(inputData) !== -1) {
            item.style = "display : unset";
        }
        else {
            item.style = "display : none";
        }
    })


    if (inputData.length == 0) {
        Array.from(sideBarListChilds).forEach(item => {
            item.style = 'display : unset ;'
        })
    }




}









// Admin Panel Side Bar Open And Closing Events
let menuIcon = document.getElementById('menu-icon');
let menuBackIcon = document.getElementById('menu-back-icon')
let sideBar = document.getElementById('side-bar');

menuIcon.onclick = () => {
    sideBar.style.transform = "translateX(0%)"
}

menuBackIcon.onclick = () => {
    sideBar.style.transform = "translateX(100%)";
}






