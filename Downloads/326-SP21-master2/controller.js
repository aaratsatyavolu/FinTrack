const validateLoginForm = (data) => {
    const email = data['email'], password = data['password'];
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    // check if email or password are empty
    if (email === '' || password === '' || email === undefined || password === undefined || email === null || password === null) {
        return -1;
    }
    //make sure email is of right format
    if (!emailRegex.test(email)) {
        return -1;
    }
    if (password.length < 6) {
        return -1;
    }
    return 1;
};

const validateRegisterForm = (data) => {
    const firstName = data['first-name'], lastName = data['last-name'], email = data['email'],
        password = data['password'], confirmPassword = data['confirm-password'];
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    //check if any of the fields (except confirmPassword) are empty
    if (firstName === '' || lastName == '' || email === '' || password == ''
        || firstName === undefined || lastName == undefined || email === undefined || password == undefined
        || firstName === null || lastName == null || email === null || password == null) {
        return -1;
    }
    //makes sure email is of the right format
    if (!emailRegex.test(email)) {
        return -1;
    }
    if (confirmPassword !== password || password.length < 6) {
        return -1;
    }
    return 1;
};

const validateProjectForm = (data) => {
    const projectName = data['project-name'], projectDescription = data['project-description'];
    //check if any of the fields are empty
    if (projectName === '' || projectDescription == '' || projectName == undefined || projectDescription === undefined
        || projectName === null || projectDescription == null) {
        return -1;
    }
    return 1;
}

module.exports = {validateLoginForm, validateRegisterForm, validateProjectForm};