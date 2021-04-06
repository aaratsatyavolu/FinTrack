let emailValid = false;
let passwordValid = false;
let emailWidget = document.forms["login-form"]["email"];
let passwordWidget = document.forms["login-form"]["password"];
emailWidget.addEventListener("input", checkEmail);
passwordWidget.addEventListener("input", checkPassword);
let error3 = document.getElementById("error3");
let error4 = document.getElementById("error4");

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
        error3.textContent = " "; 
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

function checkall() {
    return emailValid == true && passwordValid == true;
}

function disableButton() {
    const register_button = document.getElementById("login-button");
    if(!checkall()) {
        register_button.disabled = true;
    }
    else {
        register_button.disabled = false;
    }
}