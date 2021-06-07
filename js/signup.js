var passfield = document.querySelector("#pass");
storage = window.localStorage;
function showPassword(eye){
    if(passfield.type == 'text'){
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');

        passfield.type = 'password';
    }else{
        eye.classList.add('fa-eye');
        eye.classList.remove('fa-eye-slash');
        passfield.type = 'text';
    }
}

var repassfield = document.querySelector("#repass");
function showRePassword(eye){
    if(repassfield.type == 'text'){
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');

        repassfield.type = 'password';
    }else{
        eye.classList.add('fa-eye');
        eye.classList.remove('fa-eye-slash');
        repassfield.type = 'text';
    }
}
function showPopupError(errmsg){
    infoCard.textContent = errmsg;
    infoCard.classList.remove('noOpacity');
    setTimeout(()=>{
        infoCard.classList.add('noOpacity');
    },2000)
}

function validateForm(){
    username = document.querySelector("#name");
    email = document.querySelector("#email");
    password = document.querySelector("#pass");
    repass = document.querySelector("#repass");

    if(username.value==''||
        username.value == null ||
        username.value == undefined){
        showPopupError("Name is required.")
    }else if(email.value==''||
    email.value == null ||
    email.value == undefined){
        showPopupError("Email is required.")
    }else if(password.value==''||
    password.value == null ||
    password.value == undefined){
        showPopupError("Password is required.")
    }else if(password.value != repass.value){
        showPopupError("Passwords does not match.");
    }else{
        jsonData = {
            "name": username.value,
            'email': email.value,
            'password': password.value
        }
        storage.setItem('credentials',JSON.stringify(jsonData));
        showPopupError("Sign up successful. Redirecting! Please login to continue!");
        setTimeout(() => {
            window.open('login.html','_self');
        }, 2000);
    }
}
function validateLogin(){
    email = document.querySelector("#emailaddress");
    password = document.querySelector("#pass");
    if(email.value==''||
    email.value == null ||
    email.value == undefined){
    showPopupError("Email is required.")
    }else if(password.value==''||
    password.value == null ||
    password.value == undefined){
    showPopupError("Password is required.")
    }else{
        jsonData = storage.getItem('credentials');
        if(jsonData == null){
            showPopupError("No account found, please make one before logging in!");
        }else{
            jsonData = JSON.parse(jsonData);
            if(jsonData.email == email.value){
                if(jsonData.password == password.value){
                    storage.setItem('isLoggedIn',true);
                    showPopupError("Login Successful! Redirecting you to home page!");
                    setTimeout(() => {
                        window.open('index.html','_self');
                    }, 2000);
                }else{
                    showPopupError("Password mismatch");
                }
            }else{
                showPopupError("User does not exists!");
            }
        }
    }
}
var signupForm = document.querySelector("#signupForm");
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();
})