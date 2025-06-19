let userData=JSON.parse(localStorage.getItem('signupData'))

if(!userData)
{
    alert("invalid session");
    window.Location.href="login.html"
}
else
{
    let welcomeMessage=document.getElementById('welcome-message');
    welcomeMessage.innerHTML=welcometo `${userData.username}`
} 

let viewCart=document.getElementById('cart');
viewCart.addEventListener('click',()=>{
    
    window.location.href="cart.html";
})

let product1=document.getElementById('product-name1');
product1.addEventListener('click',()=>{
    let name=card.dataset.name;
    let price=card.dataset.price;
    window.location.href=`pd1.html?
        product=${encodeURIComponent(name)} price=${encodeURIComponent}`
})

let productName=document.querySelectorAll('.product-name1','.product-name2').forEach(cards=>{
    card.addEventListener('click',()=>{
        let name=card.dataset.name;
        let price=card.dataset.price;
        let image=card.querySelectorAll('img').src;

    })
})
let productDetailes={
    name:name,
    price:price,
    image:image,
    description:'the product name ${name} cost ${price}'
}
localStorage.setItem('productDetailes',JSON.stringify(productDetailes));
window.location.href="productdetails.html"

