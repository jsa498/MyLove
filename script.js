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
    // Ensure all images are placed in the correct directory
];

// Function to open the modal and display the image and a random quote
function openModal(index) {
    modal.style.display = 'block';
    modalImg.src = images[index];
    modalCaption.innerHTML = getRandomQuote();
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to get a random quote
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Close the image modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Smooth Scroll Function with Easing
function scrollToElement(element, duration) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime){
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing Function (EaseInOutCubic)
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
}

// Get the audio element
const backgroundMusic = document.getElementById('background-music');

// Event Listener for the "Play Music" Button
document.getElementById('play-music-btn').addEventListener('click', function() {
    backgroundMusic.play();
    // Optionally, hide the play button after playing
    this.style.display = 'none';
});

// Event Listener for the "View Memories" Button
document.getElementById('view-memories-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior

    // Add fade-out class to hero section
    document.querySelector('.hero').classList.add('fade-out');

    // Scroll to the gallery section over 1 second (1000 milliseconds)
    scrollToElement(document.getElementById('gallery'), 1000);

    // Start the background music when "View Memories" is clicked
    backgroundMusic.play();
});

// Event Listener for the "Read Message" Button
document.getElementById('read-message-btn').addEventListener('click', function() {
    document.getElementById('message-modal').style.display = 'block';
});

// Event Listener for the Close Button of Message Modal
document.getElementById('close-message-modal').addEventListener('click', function() {
    document.getElementById('message-modal').style.display = 'none';
});

// Close the message modal when clicking outside of it
window.addEventListener('click', function(event) {
    const messageModal = document.getElementById('message-modal');
    if (event.target == messageModal) {
        messageModal.style.display = 'none';
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
