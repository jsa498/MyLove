// Title variations
const TITLE_VARIATIONS = [
    "Happy Anniversary My Love 🌹💕",
    "Happy Anniversary My Love ♾️💗"
];

// Date-based content configuration
const SPECIAL_DATES = {
    BIRTHDAY: {
        month: 11,  // November (0-based)
        day: 8,
        title: "Happy Birthday My Love 🥰",
        message: `Happy Birthday, my love! 🎉 Today, I celebrate not just you but the light and joy you bring into my life every day. Being by your side has shown me what real happiness feels like, and I'm endlessly grateful for every laugh, every moment, and every dream we share. May your years ahead be as incredible as you are, filled with all the love and happiness you bring to everyone around you. Here's to more memories, more laughs, and more 'us.' Love you always and forever ❤️`
    },
    ANNIVERSARY: {
        month: 12,  // December (0-based)
        day: 14,
        title: TITLE_VARIATIONS[0],  // Start with first variation
        message: `My love, 💕

Happy 1-year anniversary! 🥂 I honestly can't believe how quickly this year has flown by, but I guess time does that when you're with someone as amazing as you. 🥰 I just want to take a moment to tell you how truly grateful I am to have you in my life.

You've brought so much joy, love, and meaning to my days. 🌟 Whether it's your smile 😊, your kindness 💖, or the way you're always there for me 🤗, you make everything better. Thank you for loving me, for being patient, and for showing me what real partnership looks like. 💑

I can't imagine my life without you, and I'm so excited to keep building our future together. Cheers to many more beautiful years by your side. 🥰 I love you more than words can say. ❤️

Forever yours,
Jashni Pashni 🥰`
    }
};

// Function to create sparkle elements
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    return sparkle;
}

// Function to create floating heart
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.setProperty('--x', (Math.random() * 200 - 100) + 'px');
    heart.style.setProperty('--r', (Math.random() * 360) + 'deg');
    return heart;
}

// Function to alternate title
let currentTitleIndex = 0;
function alternateTitle() {
    const titleElement = document.querySelector('.hero-content h1');
    currentTitleIndex = (currentTitleIndex + 1) % TITLE_VARIATIONS.length;
    titleElement.textContent = TITLE_VARIATIONS[currentTitleIndex];
}

// Function to add sparkles
function addSparkles() {
    const title = document.querySelector('.hero-content h1');
    const sparklesContainer = document.createElement('div');
    sparklesContainer.className = 'sparkles-container';
    title.appendChild(sparklesContainer);

    // Add initial sparkles
    for (let i = 0; i < 5; i++) {
        sparklesContainer.appendChild(createSparkle());
    }

    // Periodically update sparkles
    setInterval(() => {
        sparklesContainer.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            sparklesContainer.appendChild(createSparkle());
        }
    }, 1500);
}

// Function to add floating hearts
function addFloatingHearts() {
    setInterval(() => {
        const heart = createHeart();
        document.body.appendChild(heart);
        // Remove heart after animation
        setTimeout(() => heart.remove(), 4000);
    }, 2000);
}

// Function to determine which special date content to show
function getSpecialDateContent() {
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDate();

    if (month === SPECIAL_DATES.BIRTHDAY.month - 1 && day === SPECIAL_DATES.BIRTHDAY.day) {
        return SPECIAL_DATES.BIRTHDAY;
    } else if (month === SPECIAL_DATES.ANNIVERSARY.month - 1 && day === SPECIAL_DATES.ANNIVERSARY.day) {
        return SPECIAL_DATES.ANNIVERSARY;
    }
    
    // Default to showing anniversary content (you can change this logic)
    return SPECIAL_DATES.ANNIVERSARY;
}

// Function to start background music
function startBackgroundMusic() {
    const backgroundMusic = document.getElementById('background-music');
    const playMusicBtn = document.getElementById('play-music-btn');
    
    backgroundMusic.play().then(() => {
        playMusicBtn.textContent = 'Pause Music';
        playMusicBtn.classList.add('playing');
    }).catch((error) => {
        console.log("Playback failed:", error);
    });
}

// Update content based on date when page loads
document.addEventListener('DOMContentLoaded', function() {
    const specialContent = getSpecialDateContent();
    
    // Update the main title
    document.querySelector('.hero-content h1').textContent = specialContent.title;
    
    // Update the message modal content
    document.querySelector('.message-text p').textContent = specialContent.message;

    // Start animations
    addSparkles();
    addFloatingHearts();
    
    // Start title alternation
    setInterval(alternateTitle, 5000);

    // Add click sound effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const audio = new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA//OEAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAUAAAiSAAYGBgYJCQkJCQwMDAwMDw8PDw8SEhISEhUVFRUVGBgYGBgbGxsbGx4eHh4eISEhISEkJCQkJCcnJycnKioqKiotLS0tLS8vLy8vMjIyMjI1NTU1NTg4ODg4OTk5OTk8PDw8PD8/Pz8/P///wAAADlMQVZDNTguMTAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAEgEI8WAAAAAAAD/88QAAAAT8nkxLwAAAAAA');
            audio.volume = 0.2;
            audio.play();
        });
    });

    // Try to autoplay music
    startBackgroundMusic();

    // Add event listeners for user interaction to start music
    document.addEventListener('click', function startMusicOnInteraction() {
        startBackgroundMusic();
        // Remove the event listener after first interaction
        document.removeEventListener('click', startMusicOnInteraction);
    }, { once: true });
});

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
const galleryItems = document.querySelectorAll('.gallery-item');
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
    modalCaption.textContent = getRandomQuote();
}

// Function to get a random quote
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Event listeners for gallery items
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openModal(index));
    item.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            openModal(index);
        }
    });
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
    if (event.target === modal) {
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
    const messageModal = document.getElementById('message-modal');
    messageModal.style.display = 'block';
    messageModal.setAttribute('aria-hidden', 'false');
    
    // Update message content
    const specialContent = getSpecialDateContent();
    document.querySelector('.message-text p').textContent = specialContent.message;
});

// Event Listener for the Close Button of Message Modal
document.getElementById('close-message-modal').addEventListener('click', function() {
    const messageModal = document.getElementById('message-modal');
    messageModal.style.display = 'none';
    messageModal.setAttribute('aria-hidden', 'true');
});

// Close the message modal when clicking outside of it
window.addEventListener('click', function(event) {
    const messageModal = document.getElementById('message-modal');
    if (event.target === messageModal) {
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
