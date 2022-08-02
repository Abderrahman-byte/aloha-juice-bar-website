const navToggleBtn = document.getElementById('nav-toggle-btn')
const headerNavBarMobile = document.getElementById('header-nav-bar-mobile')

const toggleNav = (e) => {
    const isOpen = navToggleBtn.classList.toggle('close')
    
    if (isOpen) headerNavBarMobile.classList.add('show')
    else headerNavBarMobile.classList.remove('show')
}

navToggleBtn.addEventListener('click', toggleNav)
