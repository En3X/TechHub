// Featured products Carousal management
var products = document.getElementsByClassName('product');
var carousalIndex = 1;
var numOfProducts = products.length;
var isPaused = false;
hideEverything();
function hideEverything(){
    for(var i = 1;i<numOfProducts;i++){
        products[i].style.display = 'none';
    }
}
function pauseCarousal(){
    var pauseIcon = document.querySelector("#pauseIcon");
    if(isPaused){
        pauseIcon.classList.replace("fa-play","fa-pause");
        isPaused=false;
    }else{
        pauseIcon.classList.replace("fa-pause","fa-play");

        isPaused = true;
    }
}
setInterval(()=>{
    if(!isPaused){
        changeCarousal();
    }
},7000)
function changeCarousal(){
    hideEverything();
    if(carousalIndex > 0){
        products[carousalIndex-1].style.display = 'none';
    }
    products[carousalIndex].style.display = '';
    carousalIndex++;
    if(carousalIndex == products.length){
        carousalIndex = 0;
    }
}
function nextCarousal(){
    if(!isPaused){
        pauseCarousal();
    }
    changeCarousal();
}