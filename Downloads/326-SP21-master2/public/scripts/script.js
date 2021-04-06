const redirect = (url) => {
    window.location = url;
};

const loading = "<span class=\"spinner-border spinner-border-sm\"></span>       ";
const validateLogin = () => {
    $("button#login-button").prepend(loading);
    const formData = formatData($("form#login-form"));
    post('login', 'dashboard', formData);
    return false;
};

const validateRegister = () => {
    $("button#register-button").prepend(loading);
    const formData = formatData($("form#register-form"));
    console.log(formData);
    post('register', 'dashboard', formData);
    return false;
};

const validateCreateProject = () => {
    $("button#create-project-button").prepend(loading);
    const formData = formatData($("form#create-project-form"));
    post('create-project', 'dashboard', formData);
    return false;
}

const validateEditProject = () => {
    $("button#edit-project-button").prepend(loading);
    const formData = formatData($("form#edit-project-form"));
    post('edit-project', 'dashboard', formData);
    return false;
}

const formatData = (data) => {
    var arr = {};
    data = data.serializeArray();
    for (var i = 0; i < data.length; i++) {
        arr[data[i]['name']] = data[i]['value'];
    }
    return arr;
};

const post = (validationPage, redirectPage, formData) => {
    const getUrl = window.location;
    const site = getUrl .protocol + "//" + getUrl.host + "/";
    $.post(site + 'api/validate/' + validationPage, formData, (data) => {
        redirect(site + redirectPage);
    }).fail((xhr) => {
        const msg = JSON.parse(xhr.responseText).msg;
        flash(msg, 2250, "error");
    });
}

const flash = (msg, delay, type) => {
    $('.toast').on('show.bs.toast', () => {
        $('.toast').css("opacity", "0.7");
    })
    $('.toast').toast({
        delay: delay
    });
    $('.toast').toast('show');
    $(".toast .toast-body").text(msg);
    $(".toast").addClass(type);

    $("span.spinner-border").remove();
}

