const galleryImages = document.querySelectorAll('.gallery .gallery-images img')
const fullImage = document.getElementById('full-image')

galleryImages.forEach(img => {
    img.addEventListener('click', e => {
        const src = e.target.src

        fullImage.setAttribute('src', src)

        galleryImages.forEach(i => i.classList.remove('current'))
        e.target.classList.add('current')
    })
})