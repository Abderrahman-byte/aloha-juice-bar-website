const navToggleBtn = document.getElementById('nav-toggle-btn')
const headerNavBarMobile = document.getElementById('header-nav-bar-mobile')

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
