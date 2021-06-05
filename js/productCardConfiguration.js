var laptopSection = document.querySelector("#laptop");
var pcSection = document.querySelector("#pc");
var componentSection = document.querySelector("#components");
var products = productsList;
var lines = 1;
var hasPC = false,hasLaptop = false, hasComponent = false;
appendHtml = "";
console.log(products.length);
len = products.length;
for(i=0;i<len;++i){
    if(products[i].catagory == "Laptop"){
        hasLaptop = true;
        if(lines>6){
            console.log("Row complete");
            appendHtml += '</div>';
            lines = 1;
        }
        if(lines==1){
            console.log("New row");
            appendHtml += '<div class="productListSection">';
        }
        appendHtml += '<div class="card anchor" onclick="window.open(\'product.html\?productid='+products[i].id+'\',\'_self\')"><img id="productImage" src="'+products[i].img+'" alt=""><h3 class="font-light text-center" id="productTitle">'+products[i].name+'</h2><p class="font-regular"><small id="productDescription">'+products[i].shortDes+'</small></p><p class="font-regular"><small id="companyName">Manufacturer: '+products[i].company+'</small></p><span class="font-regular pricetag" id="price">$ '+products[i].price+'</span> </div>';
        lines++;
    }
}
laptopSection.innerHTML += appendHtml;
appendHtml ="";

for(i=0;i<len;++i){
    if(products[i].catagory == "PC"){
        hasPC = true;
        if(lines>6){
            console.log("Row complete");
            appendHtml += '</div>';
            lines = 1;
        }
        if(lines==1){
            console.log("New row");
            appendHtml += '<div class="productListSection">';
        }
        appendHtml += '<div class="card anchor" onclick="window.open(\'product.html\?productid='+products[i].id+'\',\'_self\')"><img id="productImage" src="'+products[i].img+'" alt=""><h3 class="font-light text-center" id="productTitle">'+products[i].name+'</h2><p class="font-regular"><small id="productDescription">'+products[i].shortDes+'</small></p><p class="font-regular"><small id="companyName">Manufacturer: '+products[i].company+'</small></p><span class="font-regular pricetag" id="price">$ '+products[i].price+'</span> </div>';
        lines++;
    }
}
pcSection.innerHTML += appendHtml;
appendHtml ="";

for(i=0;i<len;++i){
    if(products[i].catagory == "components"){
        hasComponent = true;
        if(lines>6){
            console.log("Row complete");
            appendHtml += '</div>';
            lines = 1;
        }
        if(lines==1){
            console.log("New row");
            appendHtml += '<div class="productListSection">';
        }
        appendHtml += '<div class="card anchor" onclick="window.open(\'product.html\?productid='+products[i].id+'\',\'_self\')"><img id="productImage" src="'+products[i].img+'" alt=""><h3 class="font-light text-center" id="productTitle">'+products[i].name+'</h2><p class="font-regular"><small id="productDescription">'+products[i].shortDes+'</small></p><p class="font-regular"><small id="companyName">Manufacturer: '+products[i].company+'</small></p><span class="font-regular pricetag" id="price">$ '+products[i].price+'</span> </div>';
        lines++;
    }
}
componentSection.innerHTML += appendHtml;

if(!hasComponent){
    document.querySelector("#componentNotFound").classList.remove("hidden");
}
if(!hasPC){
    document.querySelector("#pcNotFound").classList.remove("hidden");
}
if(!hasLaptop){
    document.querySelector("#laptopNotFound").classList.remove("hidden");
}


// Configure featured products
var fproductTitle = document.querySelectorAll(".fproductTitle");
var fproductDescription = document.querySelectorAll(".fproductDescription");
var mobileImage = document.querySelectorAll(".mobileViewImage");
var fproductImage = document.querySelectorAll(".productImageFeature");
var fprice = document.querySelectorAll(".fprice");
console.log(fprice);

for(i=0;i<3;++i){
    fprice[i].innerHTML = "At <del><small><i class='mr2 ml2'>$ "+(products[i].price+100)+"</i></small></del> $"+products[i].price;
    fproductImage[i].src = products[i].img;
    mobileImage[i].src = products[i].img;
    fproductTitle[i].textContent = products[i].name;
    fproductDescription[i].textContent = products[i].longDes;
}
