const hamburger = document.getElementsByClassName('hamburger')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const nav1 = document.getElementsByClassName("navbar-a")[1]
const nav2 = document.getElementsByClassName("navbar-a")[2]
const nav3 = document.getElementsByClassName("navbar-a")[3]

hamburger.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

nav1.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
nav2.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
nav3.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

