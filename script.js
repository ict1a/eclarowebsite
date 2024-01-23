// script.js

function validateRegistrationForm() {
    // Check if the user has agreed to the consent
    var consentValue = document.querySelector('input[name="consent"]:checked');

    if (!consentValue || consentValue.value !== "IAgree") {
        // If the user hasn't agreed, prevent the form submission
        alert("You must agree to the consent before continuing.");
        return false;
    }

    // Array of field IDs to validate
    var fields = ['firstName', 'middleName', 'lastName', 'age', 'dob', 'email', 'gradeLevel', 'guardianName', 'guardianContact', 'contactNumber', 'address', 'facebookName', 'religion', 'male', 'female'];

    for (var i = 0; i < fields.length; i++) {
        var fieldValue = document.getElementById(fields[i]).value;

        if (!fieldValue) {
            alert('Please fill out all required fields in the Registration form.');
            return false;
        }
    }

    // Check if passwords match
    var password = document.getElementById('password').value;
    var repeatPassword = document.getElementById('repeatPassword').value;

    if (password !== repeatPassword) {
        alert('Passwords do not match.');
        return false;
    }

    // Validate password length
    if (password.length < 8) {
        alert('Password must be 8 characters or longer.');
        return false;
    }

    // Show registration success alert
    alert("You're now registered!");

    // Redirect to login.html
    window.location.href = 'login.html';

    return false; // Prevent form submission
}



function validateEnrollmentForm() {
    var enrollmentFields = ['program', 'LRN', 'Voucher', 'AdviserName', 'SectionSy', 'SchoolAttended', 'Learning', 'Admission'];

    for (var i = 0; i < enrollmentFields.length; i++) {
        var enrollmentFieldElement = document.getElementById(enrollmentFields[i]);
        
        if (!enrollmentFieldElement) {
            alert('Error: Element with ID ' + enrollmentFields[i] + ' not found.');
            return false;
        }

        var enrollmentFieldValue = enrollmentFieldElement.value;

        if (!enrollmentFieldValue) {
            alert('Please fill out all required fields in the Enrollment form.');
            return false;
        }
    }

    // If all validations pass, redirect to the congratulations page
    window.location.href = 'congratulations.html';
    return false; // Prevent form submission
}

function redirectToRegistration() {
    // Redirect back to the registration form
    window.location.href = 'registration.html';
}

function redirectToRegistrationFromCongratulations() {
    // Redirect back to the registration form from Congratulations page
    window.location.href = 'h.html';
}
function validateLogin() {
    // Add your login validation logic here
    // Return true if login is successful, otherwise return false
}

function redirectCreateAccount() {
    window.location.href = 'h.html';
}
function validateLogin() {
    // Add your login validation logic here
    // Return true if login is successful, otherwise return false
}

function redirectToEnrollmentChoice() {
    // Assuming successful login, redirect to enrollment_choice.html
    window.location.href = 'UserInterface.html';
}

function redirectCreateAccount() {
    window.location.href = 'h.html';
}
function redirectToEnrollmentForm() {
    // Redirect to the enrollment form page (adjust the URL as needed)
    window.location.href = 'enrollment.html';
}

function redirectToHome() {
    // Redirect to the home page or any other page as needed
    window.location.href = 'home.html';
}
function redirectToSignIn(){
    // redirect to login page
    window.location.href = 'login.html'
}
function redirecttoHome(){
    //redirect to home
    window.location.href ='home.html'
    }
