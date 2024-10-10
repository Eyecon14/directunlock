document.getElementById("imei-orders").addEventListener("click", function() {
});

document.getElementById("servers-orders").addEventListener("click", function() {
});

document.getElementById("retail-orders").addEventListener("click", function() {
});

document.getElementById("advanced-history").addEventListener("click", function() {
});


document.addEventListener('DOMContentLoaded', function() {
    // Function to display the modal
    function showModal() {
        const modal = document.getElementById('telegramModal');
        modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        const modal = document.getElementById('telegramModal');
        modal.style.display = 'none';
    }

    // Show the modal every 5 minutes (300000 milliseconds)
    setInterval(showModal, 300000);

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
        const modal = document.getElementById('telegramModal');
        if (event.target === modal) {
            closeModal();
        }
    };

    // Close the modal when the "Join" button is clicked
    document.querySelector('.modal-button').addEventListener('click', function() {
        // Handle the "Join" button click event
        // For example, redirect to a Telegram group or other action
        window.location.href = 'https://t.me/teletechhub';
    });

    // Close the modal when the close button (×) is clicked
    document.querySelector('.close-button').addEventListener('click', closeModal);
});



const validSearchTerms = ['product1', 'product2', 'product3'];

// Function to handle search
function handleSearch(query) {
    const lowerCaseQuery = query.toLowerCase();
    const isValid = validSearchTerms.some(term => term.toLowerCase() === lowerCaseQuery);

    if (!isValid && query.trim() !== '') {
        window.location.href = 'error.html';
    }
}

// Add event listener to search inputs
document.querySelectorAll('.search-input, .search-input-phone').forEach(input => {
    input.addEventListener('input', function(event) {
        var query = event.target.value;
        handleSearch(query);
    });
});

// Function to check if an element is in the viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle adding the animation class
function handleScroll() {
    const elements = document.querySelectorAll('.shake-text-box');
    elements.forEach(el => {
        if (isInViewport(el)) {
            el.classList.add('shake-animation');
        }
    });
}

// Attach the scroll event
window.addEventListener('scroll', handleScroll);

// Initial check
handleScroll();


// JavaScript to handle intersection observer with delay
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a delay before applying the class
                setTimeout(() => {
                    entry.target.classList.add('fade-in');
                }, 700); // 2000 milliseconds = 0.7 seconds

                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe each text-box
    document.querySelectorAll('.text-box').forEach(box => {
        observer.observe(box);
    });
});


let slideIndex = 0;

function showSlides() {
    const slidesDesktop = document.querySelectorAll('.desktop-slideshow .mySlides');
    const slidesPhone = document.querySelectorAll('.phone-slideshow .mySlides');

    // Desktop slides
    slidesDesktop.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });

    // Phone slides
    slidesPhone.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });

    slideIndex++;
    if (slideIndex >= slidesDesktop.length) slideIndex = 0;

    setTimeout(showSlides, 5000); // Change slide every 3 seconds
}

// Initialize slides
document.addEventListener('DOMContentLoaded', showSlides);


document.addEventListener('DOMContentLoaded', function() {
    var countryBtn = document.querySelector('.country-btn');
    var languageDrop = document.querySelector('.language-drop');
    
    countryBtn.addEventListener('click', function() {
        languageDrop.classList.toggle('show');
    });
    
    document.querySelectorAll('.language-drop li').forEach(function(item) {
        item.addEventListener('click', function() {
            var lang = item.getAttribute('data-lang');
            changeLanguage(lang);
            languageDrop.classList.remove('show');
        });
    });
    
    function changeLanguage(lang) {
        // You need to define translations for each language
        var translations = {
            'en': {
                'contact': 'Contact',
                'email': 'Email',
                'registration': 'Registration',
                // Add all other translations
            },
            'fr': {
                'contact': 'Contact',
                'email': 'Email',
                'registration': 'Inscription',
                // Add all other translations
            },
            // Add translations for other languages here
        };

        // Change text based on selected language
        document.querySelectorAll('[data-translate]').forEach(function(element) {
            var key = element.getAttribute('data-translate');
            element.textContent = translations[lang][key] || key;
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggle = document.querySelector('.dropdown-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu1');
    
    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const overlay = document.querySelector('.overlay');

    menuIcon.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
        overlay.style.display = dropdownMenu.classList.contains('show') ? 'block' : 'none';
    });

    overlay.addEventListener('click', function() {
        dropdownMenu.classList.remove('show');
        overlay.style.display = 'none';
    });
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'error.html'));
});
