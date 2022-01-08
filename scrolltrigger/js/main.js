gsap.registerPlugin('ScrollTrigger');

function init() {
  // // Simple ScrollTrigger
  // gsap.to('#intro img', {
  //   opacity: 0,
  //   scrollTrigger: {
  //     trigger: '#intro',
  //     start: 'top top',
  //     end: 'bottom center',
  //     scrub: true,
  //     markers: true,
  //   },
  // });
  // // toggle css class
  // gsap.set('#project02', {
  //   scrollTrigger: {
  //     trigger: '#project02',
  //     start: 'top bottom-=10%',
  //     end: 'bottom center-=10%',
  //     toggleClass: 'active',
  //     markers: true,
  //   },
  // });
  // // Simple Parallax
  // const parallaxTl = gsap.timeline({
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: '.bcg-parallax',
  //     start: 'top bottom',
  //     scrub: true,
  //   },
  // });
  // parallaxTl
  //   .from('.content-wrapper', { duration: 0.4, autoAlpha: 0 }, 0.4)
  //   .from('.bcg', { duration: 2, y: '-30%' }, 0);
  // // Simple pin
  // gsap.to(['#intro h1', '#intro p'], {
  //   autoAlpha: 0,
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: '#intro .content',
  //     start: 'top top-=5%',
  //     pin: true,
  //     scrub: true,
  //     markers: true,
  //   },
  // });

  const projects = document.querySelectorAll('.project');

  projects.forEach((project) => {
    gsap.from(project, {
      opacity: 0,
      yPercent: 5,
      scrollTrigger: {
        trigger: project.querySelector('img'),
        start: 'top bottom-=300',
        end: 'top center',
        toggleActions: 'play none none reverse',
        scrub: true,
        onToggle: () => console.log('toggle'),
        onEnter: () => console.log('onEnter'),
        onLeave: () => console.log('onLeave'),
        onEnterBack: () => console.log('onEnterBack'),
        onLeaveBack: () => console.log('onLeaveBack'),
        // onUpdate: ({ progress, direction, isActive, getVelocity }) =>
        //   console.log(progress, direction, isActive, getVelocity()),
        markers: true,
      },
    });
  });
}

window.addEventListener('load', function () {
  init();
});
