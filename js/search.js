var resultSection = document.querySelector("#resultSection");
var products = productsList;
var url = window.location.search;
const param = new URLSearchParams(url);
const query = param.get("q").toLowerCase();
var column = 1;
var rem = products.length;
var appendHTML = "";
foundResult = false;

document.querySelector("#searchInputField").value = query;

for(i=0;i<products.length;++i){ 
    nameOfProduct = productsList[i].name.toLowerCase();
    
    title = productsList[i].name;
    img = productsList[i].img;
    description = productsList[i].longDes;
    price = productsList[i].price;
    id = productsList[i].id;
    company = products[i].company.toLowerCase();
    if(nameOfProduct.indexOf(query) > -1
    || query.indexOf(nameOfProduct) > -1){
        foundResult = true;
        if(column == 1){
            appendHTML += '<div class="cardRow">';
        }
        appendHTML += '<div class="cardDemo"><center><img class="productImg" src="'+img+'" alt=""><div class="textSection"><h4 class="title font-medium">'+title+'</h4><p class="font-regular mt10">'+description+'</p><p class="font-bold pricetag mt10">USD '+price+'</p></div><button class="mt50 button button-pink-outline anchor" onclick="window.open(\'product.html?productid='+id+' \',\'_self\')">Buy Now</button></center></div>';
        if(column == 4){
            appendHTML += '</div>';
            column = 0;
        }
        column++;
    }else if(company.indexOf(query) > -1
    || query.indexOf(company) > -1
    ){
        foundResult = true;
        if(column == 1){
            appendHTML += '<div class="cardRow">';
        }
        appendHTML += '<div class="cardDemo"><center><img class="productImg" src="'+img+'" alt=""><div class="textSection"><h4 class="title font-medium">'+title+'</h4><p class="font-regular mt10">'+description+'</p><p class="font-bold pricetag mt10">USD '+price+'</p></div><button class="mt50 button button-pink-outline anchor" onclick="window.open(\'product.html?productid='+id+' \',\'_self\')">Buy Now</button></center></div>';
        if(column == 4){
            appendHTML += '</div>';
            column = 0;
        }
        column++;
        console.log("Found");
    }else if(products[i].id.toString().indexOf(query) > -1
    || query.indexOf(products[i].id.toString()) > -1
    ){
        foundResult = true;
        if(column == 1){
            appendHTML += '<div class="cardRow">';
        }
        appendHTML += '<div class="cardDemo"><center><img class="productImg" src="'+img+'" alt=""><div class="textSection"><h4 class="title font-medium">'+title+'</h4><p class="font-regular mt10">'+description+'</p><p class="font-bold pricetag mt10">USD '+price+'</p></div><button class="mt50 button button-pink-outline anchor" onclick="window.open(\'product.html?productid='+id+' \',\'_self\')">Buy Now</button></center></div>';
        if(column == 4){
            appendHTML += '</div>';
            column = 0;
        } 
        column++;
        console.log("Found");
    }else if(products[i].catagory.toLowerCase().indexOf(query) > -1
    || query.indexOf(products[i].catagory.toLowerCase()) > -1
    ){
        foundResult = true;
        if(column == 1){
            appendHTML += '<div class="cardRow">';
        }
        appendHTML += '<div class="cardDemo"><center><img class="productImg" src="'+img+'" alt=""><div class="textSection"><h4 class="title font-medium">'+title+'</h4><p class="font-regular mt10">'+description+'</p><p class="font-bold pricetag mt10">USD '+price+'</p></div><button class="mt50 button button-pink-outline anchor" onclick="window.open(\'product.html?productid='+id+' \',\'_self\')">Buy Now</button></center></div>';
        if(column == 4){
            appendHTML += '</div>';
            column = 0;
        }
        column++;
        console.log("Found");
    }
}
console.log(appendHTML);
resultSection.innerHTML = appendHTML;

function addCard(img,title,description,price,id){
    remaining--;
    
}

function showErrorSection(title,description){
    errorSection = document.querySelector("#errorPage");
    container = document.querySelector('#container');
    console.log(container);
    errordescription = document.querySelector("#errdescripton");
    errorTitle = document.querySelector("#error");
    errorSection.classList.remove('hidden');
    container.classList.add('hidden');
    errorTitle.textContent = title;
    errordescription.innerHTML = description;
  }
if(!foundResult){
    error = "Product not found";
    des = "The product searched was not found!<br>We might have run out of product or it never existed!"
    showErrorSection(error,des);
}