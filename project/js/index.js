const btnOpen = document.querySelector('.btn-open img')
const navList = document.querySelector('.nav-list')
const arrow = document.querySelector('.arrow')
function activeMenu() {
    navList.classList.toggle('active')
    if (navList.classList.contains('active')) {
        btnOpen.src = "images/icon-close.svg"
    } else {
        btnOpen.src = "images/icon-hamburger.svg"
    }
}
btnOpen.addEventListener('click', activeMenu)

const copy = document.querySelector('.copy')
copy.innerHTML = new Date().getFullYear()
