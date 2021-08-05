
const hamburger = document.getElementsByClassName('hamburger')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

hamburger.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})