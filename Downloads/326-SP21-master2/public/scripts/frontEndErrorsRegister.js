let emailValid = false;
let passwordValid = false;
let firstNameValid = false;
let lastNameValid = false;
let confirmPasswordValid = false;
let firstNameWidget = document.forms["register-form"]["first-name"];
let lastNameWidget = document.forms["register-form"]["last-name"];
let emailWidget = document.forms["register-form"]["email"];
let passwordWidget = document.forms["register-form"]["password"];
let confirmPasswordWidget = document.forms["register-form"]["confirm-password"];
firstNameWidget.addEventListener("input", checkFName);
lastNameWidget.addEventListener("input", checkLName);
emailWidget.addEventListener("input", checkEmail);
passwordWidget.addEventListener("input", checkPassword);
confirmPasswordWidget.addEventListener("input", checkConfirmPassword);
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let error4 = document.getElementById("error4");
let error5 = document.getElementById("error5");

disableButton();

function checkEmail() {
    let email = emailWidget.value;
    const check1 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(check1.test(email) == false) {
        error3.textContent = "Please enter a valid emailaddress"; 
        error3.style.color = "red";
        emailValid = false;
    }
    else {
        error3.textContent = ""; 
        error3.style.color = "red";
        emailValid = true;
    }
    disableButton();
}

function checkPassword() {
    let password = passwordWidget.value;
    if(password.length < 6) {
        error4.textContent = "Password must be at least 6 characters long"; 
        error4.style.color = "red";
        passwordValid = false; 
    }
    else {
        error4.textContent = ""; 
        error4.style.color = "red";
        passwordValid = true;
    }
    disableButton();
}

function checkConfirmPassword() {
    let conPassword = confirmPasswordWidget.value;
    let password = passwordWidget.value;
    if(conPassword !== password) {
        error5.textContent = "Passwords must match"; 
        error5.style.color = "red";
        confirmPasswordValid = false; 
    }
    else {
        error5.textContent = ""; 
        error5.style.color = "red";
        confirmPasswordValid = true; 
    }
    disableButton();
}

function checkFName() {
    let fName = firstNameWidget.value;
    if(fName === "") {
        error1.textContent = "Please enter a valid first name"; 
        error1.style.color = "red";
        firstNameValid = false;
    }
    else {
        error1.textContent = "";
        firstNameValid = true;
    }
    disableButton();
}

function checkLName() {
    let lName = lastNameWidget.value;
    if(lName === "") {
        error2.textContent = "Please enter a valid last name"; 
        error2.style.color = "red";
        lastNameValid = false;
    }
    else {
        error2.textContent = "";
        lastNameValid = true;
    }
    disableButton();
}

function checkall() {
    return emailValid == true && passwordValid == true && firstNameValid == true && lastNameValid == true && confirmPasswordValid == true
}

function disableButton() {
    const register_button = document.getElementById("register-button");
    if(!checkall()) {
        register_button.disabled = true;
    }
    else {
        register_button.disabled = false;
    }
}