// Array of quotes
const quotes = [
    "I love you as certain dark things are to be loved, in secret, between the shadow and the soul.",
    "Whatever our souls are made of, hers and mine are the same.",
    "If I know what love is, it is because of you.",
    "You are my heart, my life, my one and only thought.",
    "I would rather spend one lifetime with you than face all the ages of this world alone.",
    "You are my sun, my moon, and all my stars.",
    "I look at you and see the rest of my life in front of my eyes.",
    "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.",
    "I love you not only for what you are, but for what I am when I am with you.",
    "So, I love you because the entire universe conspired to help me find you.",
    "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    "My love for you is past the mind, beyond my heart, and into my soul.",
    "The best love is the kind that awakens the soul; that makes us reach for more, that plants the fire in our hearts and brings peace to our minds.",
    "To love and be loved is to feel the sun from both sides.",
    "In order to be happy oneself it is necessary to make at least one other person happy.",
    "Where there is love there is life.",
    "The greatest thing you’ll ever learn is just to love, and be loved in return.",
    "You are my sun, my moon, and all my stars."
];

// Get modal elements for the image gallery
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const galleryItems = document.querySelectorAll('.gallery-item img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;

// Array of image paths
const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg'
    // Add more image paths if you have more images
];

// Function to open the modal and display the image and a random quote
function openModal(index) {
    currentIndex = index;
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    updateModalContent();
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

// Function to update modal content
function updateModalContent() {
    modalImg.src = images[currentIndex];
    modalImg.alt = `Memory ${currentIndex + 1}`;
    modalCaption.innerHTML = getRandomQuote();
}

// Function to get a random quote
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Event listeners for gallery items
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openModal(index));
});

// Navigation buttons
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModalContent();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateModalContent();
});

// Close the image modal when clicking outside the image
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        closeModal();
    }
});

// Get the audio element
const backgroundMusic = document.getElementById('background-music');

// Event Listener for the "Play Music" Button
document.getElementById('play-music-btn').addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        this.textContent = 'Pause Music';
        this.classList.add('playing');
    } else {
        backgroundMusic.pause();
        this.textContent = 'Play Music';
        this.classList.remove('playing');
    }
});

// Event Listener for the "View Memories" Button
document.getElementById('view-memories-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior

    // Add fade-out class to hero section
    document.querySelector('.hero').classList.add('fade-out');

    // Scroll to the gallery section
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });

    // Start the background music when "View Memories" is clicked
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        document.getElementById('play-music-btn').textContent = 'Pause Music';
        document.getElementById('play-music-btn').classList.add('playing');
    }
});

// Event Listener for the "Read Message" Button
document.getElementById('read-message-btn').addEventListener('click', function() {
    document.getElementById('message-modal').style.display = 'block';
    document.getElementById('message-modal').setAttribute('aria-hidden', 'false');
});

// Event Listener for the Close Button of Message Modal
document.getElementById('close-message-modal').addEventListener('click', function() {
    document.getElementById('message-modal').style.display = 'none';
    document.getElementById('message-modal').setAttribute('aria-hidden', 'true');
});

// Close the message modal when clicking outside of it
window.addEventListener('click', function(event) {
    const messageModal = document.getElementById('message-modal');
    if (event.target == messageModal) {
        messageModal.style.display = 'none';
        messageModal.setAttribute('aria-hidden', 'true');
    }
});

// Event Listener for Scroll to Remove 'fade-out' Class When Scrolling Back Up
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;

    if (scrollPosition < window.innerHeight / 2) {
        // Remove the 'fade-out' class to make the hero section visible again
        heroSection.classList.remove('fade-out');
    }
});
