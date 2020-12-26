"use strict";
import snekArr from "./sneakerArray";

var sneaker= document.getElementById("snek");


window.addEventListener("DOMContentLoaded", function(){
    card(snekArr);
});

function card(arr){
    let cardList= arr.map(e =>{
        if(e.id !=16){
         return `<div class="item">
        <img src="${e.url}" alt="" class="item-img">
        <div>
        <p class="shoe-brand">${e.brand}</p>
        <h3 class="shoe-name">${e.title}</h3>
        </div>
        <p class="shoe-price">$${e.price}</p>
    </div>`;
}
    });
    
    cardList= cardList.join("");
    sneaker.innerHTML= cardList; 
}