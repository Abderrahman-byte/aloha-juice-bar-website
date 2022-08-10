const navToggleBtn = document.getElementById('nav-toggle-btn')
const headerNavBarMobile = document.getElementById('header-nav-bar-mobile')
const header = document.getElementById('header-main')

const toggleNav = (e) => {
    const isOpen = navToggleBtn.classList.toggle('close')
    
    if (isOpen) {
        headerNavBarMobile.classList.add('show')
        document.body.classList.add('no-scroll')
    } else {
        headerNavBarMobile.classList.remove('show')
        document.body.classList.remove('no-scroll')
    }
}

navToggleBtn.addEventListener('click', toggleNav)

window.addEventListener('scroll', () => {
    const headerHeigth = Number.parseFloat(getComputedStyle(header).height)
    
    if (window.scrollY >= headerHeigth / 2) header.classList.add('header-main-collapse')
    else header.classList.remove('header-main-collapse')
    
})