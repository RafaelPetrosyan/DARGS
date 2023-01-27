
let allProducts =[
   {type:"shoes",
    gender:"female",
    image:"./Foto/shoes 1.webp",
    price:"9950 AMD",
    name:"shoes1female",
    onclick:false 
   },
   {type:"shoes",
   gender:"male",
   image:"./Foto/shoes2.jpeg",
   price:"12500 AMD",
   name:"shoes2male",
   onclick:false  
   },
   {type:"shoes",
   gender:"male",
   image:"./Foto/shoes3.jpeg",
   price:"8000 AMD",
   name:"shoes3male",
   onclick:false  
   },
   {type:"parfume",
   gender:"female",
   image:"./Foto/perfume 1.jpg",
   price:"22500 AMD",
   name:"parfumeFemale",
   onclick:false  
   },
   {type:"clothes",
   gender:"male",
   image:"./Foto/clothes 1.jpg",
   price:"4500 AMD",
   name:"clothesmale1",
   onclick:false  
   },
   {type:"clothes",
   gender:"male",
   image:"./Foto/clothes 2.jpeg",
   price:"6700 AMD",
   name:"clothesmale2",
   onclick:false  
   },
   {type:"clothes",
   gender:"male",
   image:"./Foto/clothes 3.webp",
   price:"9850 AMD",
   name:"clothesmale3",
   onclick:false  
   },
   {type:"accessories",
   gender:"female",
   image:"./Foto/accesories 3.jpeg",
   price:"38000 AMD",
   name:"watchesfemale1",
   onclick:false  
   },
   {type:"accessories",
   gender:"female",
   image:"./Foto/accesories 2.jpeg",
   price:"12000 AMD",
   name:"glassesfemale1",
   onclick:false  
   }]

let productsul = document.querySelector("#productsul"); //products-i meji ul-nery
let products = document.querySelector("#products"); // filtri meji producty
                           // container.style.textAlign="center" hishelu hamar
products.addEventListener("click",() =>vue())
function vue() {
   if (productsul.style.display=="none")
      {productsul.style.display="block"}
       else {productsul.style.display="none"}};

let main = document.querySelector("#main"); 
let basket =document.querySelector("#basket"); //gnelu knopka
let container = document.querySelector(".container"); //apranq 
let button = document.createElement("button"); //button stexcel 
let price = document.createElement("span"); // giny stexcel
let image =document.createElement("img"); //nkary stexcel
image.classList.add("imageCss"); //css- hamar
button.classList.add("buttonCss"); //css-i hamar
price.classList.add("priceCss"); //css-i hamar

container.append(image,price,button)
image.src = allProducts[0].image 
price.textContent = allProducts[0].price

//  determine if the male or female checkboxes in label tag is checked or not.
let malecheckbox = document.querySelector("#checkMale");
let femalecheckbox = document.querySelector("#checkFemale");
let maleIsChecked = malecheckbox.checked = true;
let femaleIsChecked = femalecheckbox.checked = true;

malecheckbox.addEventListener("click", function() {
  if (this.checked) {
   maleIsChecked = true;
} else {
   maleIsChecked = false;
}
console.log(maleIsChecked);
});

femalecheckbox.addEventListener("click", function() {
   if (this.checked) {
      femaleIsChecked = true;
   } else {
      femaleIsChecked = false;
   }
   console.log(femaleIsChecked);
});

// determine is the Shoes,clothes,perfufe or accessories categorys is selected

let shoesTag = document.querySelector("#shoesID");
let clothesTag = document.querySelector("#clothesID");
let perfumeTag = document.querySelector("#perfumeID");
let accesoriesTag = document.querySelector("#accessoriesID");
let shoesIsSelected = false;
let perfumeIsSelected = false;
let clothesIsSelected = false;
let accesoriesIsSelected = false;
function eddSelectInCategories(category,categotysTag) {
   category = categotysTag.addEventListener("click",() => {
      category = true
      console.log(category,categotysTag);
   })}
eddSelectInCategories(shoesIsSelected,shoesTag);
eddSelectInCategories(perfumeIsSelected,perfumeTag);
eddSelectInCategories(clothesIsSelected,clothesTag);
eddSelectInCategories(accesoriesIsSelected,accesoriesTag);


for(let i = 0; i< allProducts.length;i++) {

   main.appendChild(container)
   container.append(image,price,button)
   
}
