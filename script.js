
/******************************************************Desktop Image Section************************************************/

const img_row = document.querySelector(".img-row");
const main_img = document.getElementById("main-img");
const images = Array.from(img_row.children);

images.forEach((image,index)=>{
    image.addEventListener("click",function(){
        main_img.innerHTML = "<img src=\"images/image-product-"+(index+1)+".jpg\" alt=\"\"></img>"
    })
})


/******************************************************Mobile Nav Menu************************************************/
const menu = document.querySelector(".mobile-menu");
const menu_open = document.getElementById("menu-open");
const menu_close = document.getElementById("menu-close");

menu_open.addEventListener("click",function(){
    menu.classList.add("show");
    menu_close.addEventListener("click",function(){
        menu.classList.remove("show");
    })
})

/*********************************************************CART******************************************/

const basket = document.querySelector(".basket");
const empty = document.querySelector(".empty");
const filled = document.querySelector(".filled");
const cart = document.getElementById("cart");
const add = document.getElementById("plus");
const remove = document.getElementById("minus");
const counter = document.getElementById("counter");
const amount = document.getElementById("amount");
const final_amount = document.getElementById("final-amount");
const clear = document.getElementById("delete");
const add_to_cart = document.getElementById("add-to-cart");
const item_no = document.querySelector(".item-number");

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
    item_no.classList.add("show");
    item_no.innerHTML = count;
})

add_to_cart.addEventListener("click",function(){
    empty.classList.remove("show");
    filled.classList.add("show");
    const final = 125 * count;
    amount.innerHTML = "$125 x" + count + "<span id=\"final-amount\">$"+final+"</span>";
    if(count==0){
        empty.classList.add("show");
        filled.classList.remove("show");
    }
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
    item_no.innerHTML = count;
    if(count==0){
        empty.classList.add("show");
        filled.classList.remove("show");
        item_no.classList.remove("show");
    }
})

clear.addEventListener("click",function(){
    empty.classList.add("show");
    filled.classList.remove("show");
    item_no.classList.remove("show");
})


/*******************************************SLIDER*************************************************/

const img_section = document.getElementById("mobile-carousel");
const imgs = Array.from(img_section.children);
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const total_imgs = imgs.length;
console.log(total_imgs)

next.addEventListener("click",function(){
    movenext();
})

prev.addEventListener("click",function(){
    moveprev();
})

let img_pos = 0;

function movenext(){
    if(img_pos == total_imgs-1){
        img_pos=0;
    }
    else{
        img_pos++;
    }

    updatepos(img_pos);
}

function moveprev(){
    if(img_pos == 0){
        img_pos = total_imgs-1;
    }
    else{
        img_pos--;
    }

    updatepos(img_pos);
}

function updatepos(img_pos){
    console.log(img_pos)
    img_section.innerHTML = "<img src=\"images/image-product-"+(img_pos+1)+".jpg\" alt=\"\"></img>"
}
