document.addEventListener('DOMContentLoaded', function () {
    
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); 

        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const errorMessage = document.getElementById('error-message');

        
        errorMessage.textContent = '';

        
        if (name === '' || email === '' || message === '') {
            errorMessage.textContent = 'Please fill out all fields.';
            errorMessage.style.color = 'red';
            return;
        }

        
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            errorMessage.style.color = 'red';
            return;
        }

        
        alert('Your message has been sent successfully!');
        form.reset(); 
    });
});
