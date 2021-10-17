 
//  // Object of All Name of books and Price.

//  const book1= {name:'Wil', price:40 };
//  const book2= {name:'Witchling' ,price=100};
//  const book3= {name:'The Beatryce Prophecy' , price= 38};
//  const book4= {name:'Remember to Dream, Ebere' , price= 28};
//  const book5= {name:'The Butler: A Novel' , price= 19};
//  const book6= {name:'The Ice Coven' , price=33};
  

// const test= book1.price
// console.log(test)

// console.log(Object.values(book1));


///////////////////////////////////
  
 let cart =document.querySelectorAll('.add-cart');
let product =[
{
  name:'Will',
  price:'40 SR',
  inCart :'0' 
},
{
    name:'Witchling',
    price:'100 SR',
    inCart :'0' 
  },
  {
    name:'WiThe Beatryce Prophecy',
    price:'38 SR',
    inCart :'0' 
  },
  {
    name:'Remember to Dream Ebere',
    price:'28 SR',
    inCart :'0' 
  },
  {
    name:'The Butler :A Nover',
    price:'19 SR',
    inCart :'0' 
  },
  {
    name:'Thw Ice Coven',
    price:'33 SR',
    inCart :'0' 
  }

]



 for( let i=0; i<cart.length ;i++){

    cart[i].addEventListener('click',()=>{

        cartNumbers(product[i]);
    })
 }

function local(){

    let productNumber = localStorage.getItem('cartNumbers');
if (productNumber){
    document.querySelector('.cart span').textContent = productNumber;
    
}
}


 function cartNumbers(product){
     

     let productNumber = localStorage.getItem('cartNumbers');


   
     productNumber=parseInt(productNumber); 
      if (productNumber){

        localStorage.setItem('cartNumbers', productNumber+1);
        document.querySelector('.cart span').textContent = productNumber+1;
    
    }
      else {
        localStorage.setItem('cartNumbers',  1);
     document.querySelector('.cart span').textContent=1;
    
    }
    setItem(product)
 }
 function setItem(product){

    let cartItem =localStorage.getItem('productInCart');
    cartItem =JSON.parse(cartItem);

if(cartItem !=null){
 
    if(cartItem[product.name]==undefined){

        cartItem={
            ...cartItem,
            [product.name]:product;
        }
    }

cartItem[product.name].inCart+=1;

}
else{
    product.inCart=1;

    let cartItem ={
        [product.name]:product
    }
    
}
     
    localStorage.setItem('productInCart',JSON.stringify(cartItem)  );
 }
 localStorage();