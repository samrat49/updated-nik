// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typed.js
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Skill bars animation
const skillPers = document.querySelectorAll('.skill-per');

skillPers.forEach(skillPer => {
    const per = skillPer.getAttribute('per');
    skillPer.style.width = per + '%';
});

// Gallery
const galleryGrid = document.getElementById('gallery-grid');
const photoUrls = [
    '12.jpg', '1.jpg', '5.jpg', '3.jpg', '4.jpg', '9.jpg',
    '2.jpg', '11.jpg', '6.jpg', '7.jpg', '8.jpg', '10.jpg'
];

photoUrls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Gallery Photo';
    
    const figure = document.createElement('figure');
    figure.className = 'gallery-item';
    figure.appendChild(img);
    galleryGrid.appendChild(figure);
});

// Initialize SimpleLightbox
// Background image slideshow
const heroSection = document.querySelector('.hero');
let backgroundImages = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg'
];
let currentImageIndex = 0;

// Randomize the order of images
backgroundImages = backgroundImages.sort(() => Math.random() - 1);

// Preload images
backgroundImages.forEach(imagePath => {
    const img = new Image();
    img.src = imagePath;
});

function changeBackground() {
    const nextImage = new Image();
    nextImage.src = backgroundImages[currentImageIndex];
    nextImage.onload = () => {
        heroSection.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    };
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Initial background set
changeBackground();
