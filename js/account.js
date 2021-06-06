// Signup and login tab setup
var signupTitle = document.querySelector("#signupTitle");
var loginTitle = document.querySelector("#loginTitle");

signupTitle.addEventListener("click",()=>{
    var loginFragment = document.querySelector("#loginFragment");
    var signupFragment = document.querySelector("#signupFragment");
    signupFragment.classList.remove("hidden");
    signupFragment.classList.add("displayed");
    signupTitle.classList.remove("passive");


    loginFragment.classList.remove("displayed");
    loginFragment.classList.add("hidden");
    loginTitle.classList.add("passive");

})

loginTitle.addEventListener("click",()=>{
    var loginFragment = document.querySelector("#loginFragment");
    var signupFragment = document.querySelector("#signupFragment");
    signupFragment.classList.remove("displayed");
    signupFragment.classList.add("hidden");
    signupTitle.classList.add("passive");

    loginFragment.classList.remove("hidden");
    loginFragment.classList.add("displayed");
    loginTitle.classList.remove("passive");

})