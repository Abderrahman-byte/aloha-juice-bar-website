const slideshowContainer = document.getElementById('slideshow-container')
const nextBtn = document.getElementById('slideshow-next-btn')
const prevBtn = document.getElementById('slideshow-prev-btn')
const slideshowIndex = document.getElementById('slideshow-index-div')

const nextTimeout = 3 * 1000
let index = 0
let nextSlideTimer = null

const setIndexBar = () => {
    Array.from(slideshowIndex.children).forEach((elt, i) => {
        if (i == index) elt.classList.add('active')
        else elt.classList.remove('active')
    })
}


const showSlideWithIndex = () => {
    const slideshowWidth = Number.parseFloat(getComputedStyle(slideshowContainer.parentElement).width)
    slideshowContainer.style.transform = `translateX(-${slideshowWidth * index}px)`
}

const adjustSlideshow = () => {
    const slideshowWidth = Number.parseFloat(getComputedStyle(slideshowContainer.parentElement).width)

    Array.from(slideshowContainer.querySelectorAll('.slideshow')).forEach(elt => elt.style.width = slideshowWidth + 'px')
}

const nextSlideshow = () => {
    const slidesCount = slideshowContainer.querySelectorAll('.slideshow').length

    if (++index >= slidesCount) index = 0

    setIndexBar()
    showSlideWithIndex()
}

const prevSlideshow = () => {
    const slidesCount = slideshowContainer.querySelectorAll('.slideshow').length

    if (--index < 0) index = slidesCount - 1

    setIndexBar()
    showSlideWithIndex()
}

const setNextSlideTimeout = (n) => {
    nextSlideTimer = setTimeout(() => {
        nextSlideshow()
        setNextSlideTimeout(n)
    }, n)
}

const addIndexBar = () => {
    const slidesCount = slideshowContainer.querySelectorAll('.slideshow').length
    
    for (let i = 0; i < slidesCount; i++) {
        const sp = document.createElement('button')
        sp.addEventListener('click', () => {
            index = i
            showSlideWithIndex()
            setIndexBar()

            if (nextSlideTimer) clearTimeout(nextSlideTimer)

            setNextSlideTimeout(nextTimeout)
        })

        if (i == index) sp.classList.add('active')

        slideshowIndex.appendChild(sp)   
    }
}

window.addEventListener('DOMContentLoaded', () => {
    adjustSlideshow()
    setNextSlideTimeout(nextTimeout)
    addIndexBar()
})

window.addEventListener('resize', () => {
    adjustSlideshow()
    showSlideWithIndex()
})

nextBtn.addEventListener('click', () => {
    nextSlideshow()
    
    if (nextSlideTimer) clearTimeout(nextSlideTimer)

    setNextSlideTimeout(nextTimeout)
})
prevBtn.addEventListener('click', () => {
    prevSlideshow()
    
    if (nextSlideTimer) clearTimeout(nextSlideTimer)

    setNextSlideTimeout(nextTimeout)
})