const menu = document.querySelector(".mobile-menu");
const basket = document.querySelector(".basket");
const empty = document.querySelector(".empty");
const filled = document.querySelector(".filled");
const menu_open = document.getElementById("menu-open");
const menu_close = document.getElementById("menu-close");
const cart = document.getElementById("cart");
const add = document.getElementById("plus");
const remove = document.getElementById("minus");
const counter = document.getElementById("counter");
const amount = document.getElementById("amount");
const final_amount = document.getElementById("final-amount");
const clear = document.getElementById("delete");
const add_to_cart = document.getElementById("add-to-cart");


menu_open.addEventListener("click",function(){
    menu.classList.add("show");
    menu_close.addEventListener("click",function(){
        menu.classList.remove("show");
    })
})

cart.addEventListener("click",function(){
    basket.classList.toggle("show");
    if(filled.className != "filled show"){
        empty.classList.add("show");
    }
})

let count = 0;
add.addEventListener("click",function(){
    count++;
    counter.innerHTML = count;
})

add_to_cart.addEventListener("click",function(){
    empty.classList.remove("show");
    filled.classList.add("show");
    const final = 125 * count;
    amount.innerHTML = "$125 x" + count + "<span id=\"final-amount\">$"+final+"</span>";
})

remove.addEventListener("click",function(){
    count--;
    counter.innerHTML = count;
    if(count<0){
        count = 0;
        counter.innerHTML = count;
    }
    const final = 125 * count;
    amount.innerHTML = "$125 x" + count + "<span id=\"final-amount\">$"+final+"</span>";
    if(count==0){
        empty.classList.add("show");
        filled.classList.remove("show");
    }
})

clear.addEventListener("click",function(){
    empty.classList.add("show");
    filled.classList.remove("show");
})