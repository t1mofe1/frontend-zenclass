const controller = new ScrollMagic.Controller();

/* Navbar */
const anim1 = anime({
	duration: 3000,
	autoplay: false,
	direction: 'alternate',
	easing: 'linear',
	targets: '.navbar',
	backgroundColor: ['transparent', 'rgba(237,76,92,.85)'],
	top: [17, 0],
});

const navbarScene = new ScrollMagic.Scene({
	triggerElement: '#overview',
	triggerHook: 0,
	duration: 100,
	offset: -175,
})
	.on('progress', (event) => {
		if (window.innerWidth > 850) anim1.seek(anim1.duration * event.progress);
	})
	.addTo(controller);
/* ====== */

/* Scroll */
document.querySelector('nav .logo')?.addEventListener('click', () => document.querySelector('.header')?.scrollIntoView({ behavior: 'smooth' }));
document.querySelectorAll(`a[data-href]`).forEach((a) => a.addEventListener('click', () => document.querySelector(a.dataset.href)?.scrollIntoView({ behavior: 'smooth' })));
/* ====== */

/* Burger */
document.querySelector('#hamburger').addEventListener('click', () => {
	document.querySelector('#hamburger').classList.toggle('opened');
	document.body.classList.toggle('lock');
	document.querySelector('nav').classList.toggle('show');
});
/* ====== */
