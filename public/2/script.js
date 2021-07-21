const navbar = document.querySelector('nav');
const navbarLogo = navbar.querySelector('.logo');
const navbarLinks = navbar.querySelector('ul');
const navbarBtn = navbar.querySelector('button');

const controller = new ScrollMagic.Controller();

/* navbar color */
// window.addEventListener('scroll', () => {
// 	const h = document.body.scrollTop || document.documentElement.scrollTop;

// 	navbar.style.backgroundColor = h > 740 ? '#ed4c5c' : 'transparent';
// 	navbar.style.top = '0';
// 	if (h >= 723 && h <= 740) {
// 		if (navbar.style.top > 0) navbar.style.top--;
// 	}
// });

/* Navbar */
const tl1 = anime.timeline({ autoplay: false });

tl1.add({
	direction: 'alternate',
	targets: '.navbar',
	opacity: 1,
	backgroundColor: ['transparent', '#ed4c5c'],
	top: ['17px', '0px'],
	duration: 30,
	delay: 0,
	easing: 'linear',
});

const navbarScene = new ScrollMagic.Scene({
	triggerElement: '#overview',
	triggerHook: 0,
	duration: 50,
	offset: -100,
	reverse: false,
})
	.addIndicators({
		colorTrigger: 'black',
		colorStart: 'blue',
		colorEnd: 'red',
		indent: 10,
	})
	.on('progress', function (event) {
		tl1.seek(tl1.duration * event.progress);
	})
	.setPin('#overview')
	.addTo(controller);
