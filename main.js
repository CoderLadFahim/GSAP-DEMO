const tl = gsap.timeline();

const overlayText = document.querySelector('.overlay-text');
const overlayTextContent = overlayText.textContent
	.split('')
	.map(letter => `<span class="ol">${letter}</span>`)
	.join('');

overlayText.innerHTML = overlayTextContent;

tl.from('.overlay-text .ol', {
	duration: 0.5,
	opacity: 0,
	top: 50,
	stagger: 0.1,
})
	.to('.overlay', {
		duration: 0.5,
		y: '-100%',
	})
	.from('nav', {
		duration: 0.5,
		y: '-100%',
		ease: 'power3.out',
	})
	.from('nav .logo', {
		duration: 0.5,
		y: '100%',
		opacity: 0,
	})
	.from('nav ul li', {
		duration: 0.5,
		y: '100%',
		opacity: 0,
		rotate: '45deg',
		stagger: 0.1,
	})
	.from('.convince', { duration: 1, opacity: 0 });
