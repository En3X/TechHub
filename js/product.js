// Fetching data
var products = productsList;
var infoCard = document.querySelector("#infoCard");
console.log(infoCard);
// console.log(products);
// Rating
var ratingStars = document.querySelectorAll(".ratingStar");
console.log(ratingStars.length);
var catagory = "";
// Check for product id
var url = window.location.search;
// console.log(url);
const param = new URLSearchParams(url);
productIdAvailable = true;
var productid = param.get("productid");



if(productIdAvailable){
  setupProduct();
}
function setupProduct(){
  // console.log(productid);
  // Setup product details
  productname = document.querySelector("#productname");
  company = document.querySelector("#company");
  price = document.querySelector("#price");
  nonDiscountPrice = document.querySelector("#nonDiscountPrice");
  productdescription = document.querySelector("#description");
  productimage = document.querySelector("#productimage");
  //Specs
  processor = document.querySelector("#processor");
  ram = document.querySelector("#ram");
  graphics = document.querySelector("#graphics");
  storage = document.querySelector("#storage");
  os = document.querySelector("#os");

  

  hasProduct = false;
  for(i=0;i<products.length;++i){
    if(productid == products[i].id){
      hasProduct = true;
      productimage.src = products[i].img;
      productname.textContent = products[i].name;
      company.textContent =  products[i].company;
      nonDiscountPrice.textContent = '$ '+(products[i].price+100);
      price.textContent = "$ "+products[i].price;
      productdescription.textContent = products[i].longDes;
      // Specs
      p = products[i].shortDes;
      o = products[i].os;
      r = products[i].ram;
      g = products[i].graphics;
      s = products[i].storage;

      if (p==""){
        p = "N/A";
      }
      if (o==""){
        o = "N/A";
      }
      if (r==""){
        r = "N/A";
      }
      if (g==""){
        g = "N/A";
      }
      if (s==""){
        s = "N/A";
      }
      catagory = products[i].catagory;
      processor.textContent = p;
      os.textContent = o;
      ram.textContent = r;
      graphics.textContent = g;
      storage.textContent = s;

      break;


    }
  }

  if(!hasProduct){
    error = "Product not found";
    des = "The product searched was not found!<br>We might have run out of product or it never existed!"
    showErrorSection(error,des);
  }
}

function showErrorSection(title,description){
  errorSection = document.querySelector("#errorPage");
  container = document.querySelector("#main");
  errordescription = document.querySelector("#errdescripton");
  errorTitle = document.querySelector("#error");
  errorSection.classList.remove('hidden');
  container.classList.add('hidden');
  errorTitle.textContent = title;
  errordescription.innerHTML = description;
}

// Rating Control
function rate(rating){
  if(rating == 1){
    infoCard.textContent = "Thank you for feedback! We will try to make the product better!";
  }else{
    infoCard.textContent = 'Thank you for rating the product!';
  }
  infoCard.classList.remove('noOpacity');
  setTimeout(()=>{
    infoCard.classList.add('noOpacity');
  },2000)
  var ratedStars = document.querySelectorAll(".ratingStarActive");
  for(i=1;i<ratedStars.length;++i){
    ratedStars[i].classList.remove('ratingStarActive');
  }
  for(i=0;i<rating;++i){
    ratingStars[i].classList.add("ratingStarActive");
  }
}


// Setup similar products
var appendHtml = "";
var len = products.length;
appendHtml += '<div class="productListSection">';
similarSection = document.querySelector("#similarProducts");
numOfItems = 0;
for(i=0;i<len;++i){
  if(products[i].catagory == catagory){
    if(numOfItems < 6){
      appendHtml += '<div class="card anchor" onclick="window.open(\'product.html\?productid='+products[i].id+'\',\'_self\')"><img id="productImage" src="'+products[i].img+'" alt=""><h3 class="font-light text-center" id="productTitle">'+products[i].name+'</h2><p class="font-regular"><small id="productDescription">'+products[i].shortDes+'</small></p><p class="font-regular"><small id="companyName">Manufacturer: '+products[i].company+'</small></p><span class="font-regular pricetag" id="price">$ '+products[i].price+'</span> </div>';
      numOfItems++;
    }else{
      break;
    }
  }
}
appendHtml += '</div>';

similarSection.innerHTML += appendHtml;