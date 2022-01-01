var submitBtn = document.getElementById('submitMessage');
var lastNameError = document.getElementById('lastNameError');
var adressError = document.getElementById('adressError');
var emailError = document.getElementById('emailError');
var subjectError = document.getElementById('subjectError');
var messageError = document.getElementById('messageError');

lastNameError.style.display = "none";
adressError.style.display = "none";
emailError.style.display = "none";
subjectError.style.display = "none";
messageError.style.display = "none";

// Submit button validation
submitBtn.addEventListener('click', function (e) {
e.preventDefault();
var inputLastName = document.getElementById("lastName").value;
var inputAdress = document.getElementById("adress").value;
var inputEmail = document.getElementById("email").value;
var inputSubject = document.getElementById("subject").value;
var inputMessage = document.getElementById("message").value;

    // 
function checkLastName(lastName) {
var lastNameRequired = /[a-zA-Z.-]{3,}$/g;
if (lastName.match(lastNameRequired)) {
lastNameError.style.display = "minimum";
} else {
lastNameError.style.display = "block";
return false;
}}

    // 
function checkAdress(adress) {
var adressRequired = /[a-zA-Z.-]{10,}$/g;
if (adress.match(adressRequired)) {
adressError.style.display = "none";
} else {
adressError.style.display = "block";
return false;
}}
    // 
function checkEmail(emailAdr) {
var emailRequired = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,4}$/;
if (emailAdr.match(emailRequired)) {
emailError.style.display = "none";
} else {
emailError.style.display = "block";
return false;
}}

    //
function checkSubject(subject) {
var subjectRequired = /[a-zA-Z.-]{7,}$/g;
if (subject.match(subjectRequired)) {
subjectError.style.display = "none";
} else {
subjectError.style.display = "block";
return false;
}}

    // Validate message
function checkMessage(message) {
var messageRequired = /[a-zA-Z.-]{15,}$/g;
if (message.match(messageRequired)) {
messageError.style.display = "none";
} else {
messageError.style.display = "block";
return false;
        }
    }

    // Call functions
    checkLastName(inputLastName);
    checkAdress(inputAdress);
    checkEmail(inputEmail);
    checkSubject(inputSubject);
    checkMessage(inputMessage);

    function redirect() {
        if (messageError.style.display === "none" && emailError.style.display === "none" && adressError.style.display === "none" && lastNameError.style.display === "none" && subjectError.style.display === "none");
    }
    redirect();
});