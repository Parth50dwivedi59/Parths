// Select all anchor links that start with "#" (internal links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent the default action (jumping to the section)

        // Get the target section using the href attribute of the clicked link
        const target = document.querySelector(this.getAttribute('href'));

        // Check if the target element exists
        if (target) {
            // Calculate the offset position by subtracting the header's height from the target's position
            const offsetPosition = target.offsetTop - document.querySelector('header').offsetHeight;

            // Smoothly scroll to the calculated position
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
// Function to check if an element is in viewport
// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add or remove the 'visible' class based on viewport position
function onScroll() {
    const sections = document.querySelectorAll('.section, footer');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Add event listener to trigger on scroll
window.addEventListener('scroll', onScroll);

// Initial check in case sections are already in view when the page loads
onScroll();
// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add or remove the 'visible' class based on viewport position
function onScroll() {
    const sections = document.querySelectorAll('.section, footer');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Handle the form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send the email using EmailJS
    emailjs.send('service_jn5yt5j', 'template_qa289ge', {
        from_name: name,
        from_email: email,
        message: message,
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('form-message').textContent = 'Message sent successfully!';
        document.getElementById('form-message').style.color = 'green';
    }, function(error) {
        console.log('FAILED...', error);
        document.getElementById('form-message').textContent = 'Failed to send message. Please try again later.';
        document.getElementById('form-message').style.color = 'red';
    });

    // Reset the form fields
    document.getElementById('contact-form').reset();
});

// Add event listener to trigger on scroll
window.addEventListener('scroll', onScroll);

// Initial check in case sections are already in view when the page loads
onScroll();
