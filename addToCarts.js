let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//Dresses//


const DressDesign={

    "product" : [{

        "Name" : "Strawberry Dress",
        "Brand" : "H&M",
        "Desc" : "Korean style dress",
        "Price" : "Php 550.00"
        
    },
    {
        "Name" : "Black Dress",
        "Brand" : "H&M",
        "Desc" : "Casual dress",
        "Price" : "Php 600.00"
    },
    {
        "Name" : "Floral Dress",
        "Brand" : "H&M",
        "Desc" : "White dress with floral print",
        "Price" : "Php 300.00"

    },
    {
        "Name" : "Casual Style Dress",
        "Brand" : "H&M",
        "Desc" : "White top with Short",
        "Price" : "Php 400.00"
    },
    {
        "Name" : "Croptop Style",
        "Brand" : "H&M",
        "Desc" : "Spaghetti Strap Croptop",
        "Price" : "Php 200.00"
    },
    {
        "Name" : "Casual Croptop Style",
        "Brand" : "H&M",
        "Desc" : "Casual croptop with skirt",
        "Price" : "Php 350.00"
    },
   {
       "Name" : "Croptop with skirt",
       "Brand" : "H&M",
       "Desc" : "Stripe Croptop with skirt",
       "Price" : "Php 400.00"
   },
   {
      "Name" : "Croptop with skirt black",
      "Brand" : "H&M",
      "Desc" : "Color black Croptop with skirt",
      "Price" : "Php 600.00"
   },
   {
    "Name" : "Casual Top",
    "Brand" : "H&M",
    "Desc" : "Casual Top with croptop style",
    "Price" : "Php 700.00"
   },
]
}

function showProduct() {
    for (let product of ShoeDesign.product){
        var cardElement=`<div class='card'>
        <div class="image-container"><img src="${product.image}" class="product-images" /></div>
        <div class="description">
          <div class="product-name">${product.name}</div>
          <div class="product-price">
         <span class="original-price">$${product.price}</span></div>
            <div><button class="order-button" onclick="addOrder(this)" >Order</button></div>
        </div>
        </div>
      </div>`
      document.getElementsByClassName('flex-container')[0].innerHTML+=cardElement;
    }
}
showProduct();

//modal script
// Select modal
var mpopup = document.getElementById('mpopupBox');

// Select close action element
var close = document.getElementsByClassName("close")[0];

// Open modal once the link is clicked
function openModal() {
    mpopup.style.display = "block";
};

// Close modal once close element is clicked
close.onclick = function() {
    mpopup.style.display = "none";
};

// Close modal when user clicks outside of the modal box
window.onclick = function(event) {
    if (event.target == mpopup) {
        mpopup.style.display = "none";
    }
};
function addOrder(addproduct){
    var modalBody = document.getElementsByClassName("modal-body")[0];
    var orderPar = ${addproduct.parentElement.parentElement.parentElement.getElementsByClassName('product-name')[0].innerHTML}<br>
    modalBody.innerHTML+=orderPar;
}

addToCartButton = document.querySelectorAll(".add-to-cart-button");  
document.querySelectorAll('.add-to-cart-button').forEach(function(addToCartButton) {  
  addToCartButton.addEventListener('click', function() {  
    addToCartButton.classList.add('added');  
    setTimeout(function(){  
      addToCartButton.classList.remove('added');  
    }, 2000);  
  }),  
})
