
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var response = document.getElementById('response');
 
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        response.innerHTML = 'Please fill out all fields.';
        return;
    }

    // You can implement AJAX to send the form data to your backend for processing here
    // For demonstration purpose, let's just display a success message
    response.innerHTML = 'Thank you, ' + name + '! Your message has been sent.';
    document.getElementById('contactForm').reset();
});
