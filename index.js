// Header section
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('navMenu');

// Toggle menu visibility and button transformation
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Show/hide menu
    menuToggle.classList.toggle('open'); // Change button to "X"
});


//Images sliding section
const slidesEl = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index){
    slidesEl.forEach((slide, i) =>{
        slide.classList.remove('active');
        if(i === index){
            slide.classList.add('active');
            slide.style.opacity = 1; //Make the current slide visible//
            
        }else {
            slide.style.opacity = 0; //Hide other slides
        }
    });
}

/**
 * // Advances to the next slide in a slideshow, looping back to the first slide if at the end.
 */
function nextSlide(){
    currentIndex = (currentIndex + 1) % slidesEl.length;
    showSlide(currentIndex);
}

// Show the first slide innitially
showSlide(currentIndex);

//change slide every 3 seconds
setInterval(nextSlide, 3000);
