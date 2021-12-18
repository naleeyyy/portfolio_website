const nightToggle = document.getElementById('mode-toggle')
const navbar = document.getElementById('navbar')
const section = document.getElementById('main')
const toggleImage = document.getElementById('night-toggle-image')
const emailLabel = document.getElementById('emailLabel')
const messageLabel = document.getElementById('messageLabel')

let night = true

nightToggle.addEventListener('click', () => {

    section.classList.toggle('bg-dark')
    section.classList.toggle('bg-light')
    navbar.classList.toggle('navbar-dark')
    navbar.classList.toggle('navbar-light')
    emailLabel.classList.toggle('white')
    emailLabel.classList.toggle('black')
    messageLabel.classList.toggle('white')
    messageLabel.classList.toggle('black')


    if (night) {
        toggleImage.src = 'icons/sun-wireless-outline.png'
        night = false
    } else {
        toggleImage.src = 'icons/weather-night.png'
        night = true
    }
})