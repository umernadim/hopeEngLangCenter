
$(document).ready(() => {
    $.get('nav.html', (data) => {
        document.getElementById('nav-container').innerHTML = data;

        // code for responsive navbar 
        let menubtn = document.getElementById('menu-btn');
        menubtn.addEventListener('click', function () {
            const navContainer = document.getElementById('nav-container');
            const navLinks = document.getElementById('nav-links');
            navLinks.classList.toggle('show');
            if (navLinks.classList.contains('show')) {
                navContainer.style.maxHeight = '500px';
            } else {
                navContainer.style.maxHeight = '80px';
            }
        });

        // code to animate navbar 
        let tl = gsap.timeline();
        tl.from('nav h2, nav ul li, nav i', {
            y: -30,
            opacity: 0,
            delay: 0.6,
            duration: 0.4,
            stagger: 0.1
        });
    });


    $.get('footer.html', (data) => {
        document.getElementById('footer').innerHTML = data;
    });
});


// GSAP Scroll Animation 
gsap.registerPlugin(ScrollTrigger);
gsap.from('#statement-heading h1', {
    scrollTrigger: '#statement-heading h1'
    , duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});
gsap.from('#statement-heading p', {
    scrollTrigger: '#statement-heading p',
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

