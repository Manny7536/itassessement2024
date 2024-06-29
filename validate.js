document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    if (!firstName) {
        alert("First Name is required");
        return false;
    }
    if (!lastName) {
        alert("Last Name is required");
        return false;
    }
    if (!email) {
        alert("Email is required");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email");
        return false;
    }
    if (phone && !validatePhone(phone)) {
        alert("Please enter a valid phone number");
        return false;
    }
    alert("Form Submitted Successfully");
    return true;
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    var re = /^\d{10}$/;
    return re.test(String(phone));
}