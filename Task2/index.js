

document.addEventListener("DOMContentLoaded", function(e) {
    
    //inialize 

    let form = document.getElementById('form'); 

    let Fn = document.getElementById('Fn');
    Fn.placeholder='First Name';

    let Ln = document.getElementById('Ln');
    Ln.placeholder='Last Name';
    
    let birthDateInput = document.getElementById('bd');

    let agree = document.getElementById('agree');
    
    let verChk = document.getElementById('veri');


    //when the event click or submit 
    form.addEventListener('submit', function(e) {

        e.preventDefault(); 

        // Clear previous errors
        
        let errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(msg) {
            msg.remove();
        });
        
        
        let isValid = true;

        // Validate First Name
        
        if (Fn.value.trim() === '') {
            showError(Fn, 'First Name is required*');
            isValid = false;
        }

        // Validate Last Name
        
        if (Ln.value.trim() === '') {
            showError(Ln, 'Last Name is required*');
            isValid = false;
        }

        // Validate Birth Date
        
        if (birthDateInput.value.trim() === '') {
            showError(birthDateInput, 'Birth Date is required*');
            isValid = false;
        }

        // Validate Email
        let emailInput = document.getElementById('email');
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email is required*');
            isValid = false;
        }
        else if (!validateEmail(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email*');
            isValid = false;
        }

        // Validate Insurance
        let insuranceInput = document.getElementById('ins');
        if (insuranceInput.value.trim() === '') {
            showError(insuranceInput, 'Insurance is required*');
            isValid = false;
        }

        // Validate Terms of Service Checkbox
        
        if (!agree.checked) {
            showError(agree, 'You must agree to the terms of service*');
            isValid = false;
        }

        // Validate Verification Checkbox
        
        if (!verChk.checked) {
            showError(verChk, 'Verification is required*');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully');
        
        }
    });

    function showError(input, message) {
        
        let errorMessage = document.createElement('span');

        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        input.parentElement.appendChild(errorMessage);
    }
});
