const nav = document.querySelector('#main');
// Check the position of the top of the navigation so we can fix it when user scrolls to that point
const topOfNav = nav.offsetTop;

function fixNav() {
	if (window.scrollY >= topOfNav) {
		// Since nav will become fixed, everything will jump a bit. Adding padding fixes that problem.
		document.body.style.paddingTop = nav.offsetHeight;
		document.body.classList.add('fixed-nav');
	} else {
		document.body.classList.remove('fixed-nav');
	}
}

window.addEventListener('scroll', fixNav);