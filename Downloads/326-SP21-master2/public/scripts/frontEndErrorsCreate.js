let textBox1Valid = false;
let textBox2Valid = false;
let box1Widget = document.forms["project-form"]["project-name"];
let box2Widget = document.forms["project-form"]["project-description"];
box1Widget.addEventListener("input", checkEmpty1);
box2Widget.addEventListener("input", checkEmpty2);
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");

disableButton();

function checkEmpty1() {
    let text = box1Widget.value;
    if(text === "") {
        error1.textContent = "Must have a project name"; 
        error1.style.color = "red";
        textBox1Valid = false;
    }
    else {
        error1.textContent = " "; 
        error1.style.color = "red";
        textBox1Valid = true;
    }
    disableButton();
}

function checkEmpty2() {
    let text = box2Widget.value;
    if(text === "") {
        error2.textContent = "Must have a project desription"; 
        error2.style.color = "red";
        textBox2Valid = false;
    }
    else {
        error2.textContent = " "; 
        error2.style.color = "red";
        textBox2Valid = true;
    }
    disableButton();
}

function checkall() {
    return textBox1Valid == true && textBox2Valid == true;
}

function disableButton() {
    const register_button = document.getElementById("project-button");
    if(!checkall()) {
        register_button.disabled = true;
    }
    else {
        register_button.disabled = false;
    }
}