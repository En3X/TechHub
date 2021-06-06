accountText = document.querySelector("#account");
storage = window.localStorage;
isLoggedIn = storage.getItem('isLoggedIn');
if(isLoggedIn == 'true'){
    json = storage.getItem('credentials');
    json = JSON.parse(json);
    accountText.textContent = json.name;
}else{
    accountText.textContent = "Account";
}