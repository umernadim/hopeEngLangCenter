// code to fetch navbar and footer throug jquery
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


// Code for carousel 
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');
const imageCount = images.length;

function showNextImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % imageCount;
    images[currentImageIndex].style.display = 'block';
}

setInterval(showNextImage, 3000);


// code for suggestoin button 
document.getElementById("suggestionBtn").addEventListener("click", function() {
    document.getElementById("suggestionContent").classList.toggle("show");
});

// Close the suggestion menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#suggestionBtn')) {
        var dropdowns = document.getElementsByClassName("suggestion-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};




// code for scrolling text animation 
window.addEventListener('wheel', function (details) {
    if (details.deltaY > 0) {
        gsap.to('#scrolling-text .marque', {
            transform: 'translateX(-200%)',
            delay: 1,
            duration: 3,
            repeat: -1,
            ease: 'none'
        })
        gsap.to('#scrolling-text .marque img', {
            rotate: 180
        })
    }
    else {
        gsap.to('#scrolling-text .marque', {
            transform: 'translateX(0%)',
            delay: 1,
            duration: 3,
            repeat: -1,
            ease: 'none'
        })
        gsap.to('#scrolling-text .marque img', {
            rotate: 0
        })
    }
})
