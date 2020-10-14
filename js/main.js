// const menuToggle = document.querySelector('#menu__toggle')

// menuToggle.onclick = function() {
// 	menuToggle.classList.toggle('menu__active');
// }

const mobileNav = document.querySelector('.nav')

document.querySelector('.menu__btn').onclick = function() {
	document.querySelector('.menu__icon').classList.toggle('menu__active');
	document.querySelector('.nav').classList.toggle('nav__active');
}