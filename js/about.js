form = document.querySelector("#hiringForm");
form.addEventListener('submit',(event)=>{
    event.preventDefault();
})
function validateEmail(){
    success = document.querySelector("#successAlert");
    email = document.querySelector("#email");
    if(email.value == ""
    || email.value == null 
    || email.value == undefined){
        success.style.background = '#F04D2F';
        success.textContent = "Please fill out the form!";
        success.classList.remove('noOpacity');
        setTimeout(() => {
            success.classList.add('noOpacity');
        }, 2000);
    }else{
        success.style.background = '#22BF4F';
        success.textContent = "We will get back to you at "+email.value;
        success.classList.remove('noOpacity');
        setTimeout(() => {
            success.classList.add('noOpacity');
        }, 2000);
        form.reset();
    }
}