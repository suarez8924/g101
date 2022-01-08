import gsap from 'gsap';

function init() {
  gsap.from('body', { opacity: 0, duration: 4 });
}

window.addEventListener('load', function () {
  init();
});
