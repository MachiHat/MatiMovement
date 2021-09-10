// NAVBAR RESPONSIVE BUTTON

//var defs
const hamburger = document.getElementsByClassName('hamburger')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const nav1 = document.getElementsByClassName('navbar-a')[1]
const nav2 = document.getElementsByClassName('navbar-a')[2]
const nav3 = document.getElementsByClassName('navbar-a')[3]

//events
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

// SIGNUP AND LOGIN FORMS

//var definitions
var suname = document.getElementById('suname');
var sumail = document.getElementById('sumail');
var supw = document.getElementById('supw');

//data storing function
function store() {
    localStorage.setItem('suname', suname.value);
    localStorage.setItem('sumail', sumail.value);
    localStorage.setItem('supw', supw.value);
}

//login data check
function check() {

  var storedName = localStorage.getItem('suname');
  var storedPw = localStorage.getItem('supw');

  var liname = document.getElementById('liname');
  var lipw = document.getElementById('lipw');

  if(liname.value == storedName && lipw.value == storedPw) {
    alert('You are loged in.');
  }else {
    alert('ERROR.');
  }
}