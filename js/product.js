$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var laptopColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + laptopColor + ']').addClass('active');
      $(this).addClass('active');
  });

});


// Fetching data
var products = productsList;
console.log(products);

// Check for product id
var url = window.location.search;
console.log(url);
const param = new URLSearchParams(url);
productIdAvailable = true;
var productid = param.get("productid");



if(productIdAvailable){
  setupProduct();
}
function setupProduct(){
  console.log(productid);
  // Setup product details
  productname = document.querySelector("#productname");
  productmodel = document.querySelector("#productmodel");
  productdescription = document.querySelector("#description");
  productimage = document.querySelector("#productimage");


  hasProduct = false;
  for(i=0;i<products.length;++i){
    if(productid == products[i].id){
      hasProduct = true;
      productname.textContent = products[i].name;
      productmodel.textContent = products[i].model;
      productdescription.textContent = products[i].catagory;
      productimage.src = products[i].img;
      break;
    }
  }

  if(!hasProduct){
    console.log("Cannot find product specified!");
    error = "Product not found";
    des = "The product searched was not found!<br>We might have run out of product or it never existed!"
    showErrorSection(error,des);
  }
}

function showErrorSection(title,description){
  errorSection = document.querySelector("#errorPage");
  container = document.querySelector("#mainContainer");
  errordescription = document.querySelector("#errdescripton");
  errorTitle = document.querySelector("#error");
  errorSection.classList.remove('hidden');
  container.classList.add('hidden');
  errorTitle.textContent = title;
  errordescription.innerHTML = description;
}
