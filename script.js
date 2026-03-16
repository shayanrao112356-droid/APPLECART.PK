let cart=[]
let discount=0

const container=document.getElementById("products")

function loadProducts(){
container.innerHTML=""
products.forEach((p,i)=>{
container.innerHTML+=`
<div class="card">
<img src="${p.image}">
<h3>${p.name}</h3>
<p>Rs ${p.price}</p>
<button onclick="openProduct(${i})">View</button>
</div>
`
})
}
loadProducts()

function openProduct(i){
const p=products[i]
document.getElementById("productModal").style.display="block"
document.getElementById("modalImg").src=p.image
document.getElementById("modalTitle").innerText=p.name
document.getElementById("modalPrice").innerText="Rs "+p.price
document.getElementById("addCart").onclick=()=>addToCart(p)
document.getElementById("orderNow").onclick=()=>{
window.open(`https://wa.me/923375105518?text=I want to order ${p.name}`)
}
}

function closeModal(){
document.getElementById("productModal").style.display="none"
}

function addToCart(product){
cart.push(product)
updateCart()
}

function updateCart(){
let list=""
let total=0
cart.forEach(p=>{
list+=`<p>${p.name} - Rs ${p.price}</p>`
total+=p.price
})
document.getElementById("cartItems").innerHTML=list
document.getElementById("total").innerText=total
document.getElementById("finalPrice").innerText=total-discount
document.getElementById("cartCount").innerText=cart.length
}

function openCart(){
document.getElementById("cart").style.display="block"
}

function applyDiscount(){
let code=document.getElementById("discount").value
if(code=="APPLE10"){
discount=200
alert("Discount Applied")
}
updateCart()
}

function placeOrder(){
let name=document.getElementById("name").value
let city=document.getElementById("city").value
let id="AC"+Math.floor(Math.random()*100000)
window.open(`https://wa.me/923375105518?text=Order ID ${id}%0AName:${name}%0ACity:${city}%0AItems:${cart.length}`)
}

function trackOrder(){
let id=document.getElementById("orderID").value
window.open(`https://wa.me/923375105518?text=Track Order ${id}`)
}

function scrollToProducts(){
document.getElementById("products").scrollIntoView()
}

function addProduct(){
let name=document.getElementById("pname").value
let price=document.getElementById("pprice").value
let model=document.getElementById("pmodel").value
let image=document.getElementById("pimage").value
products.push({name,price,model,image})
loadProducts()
}