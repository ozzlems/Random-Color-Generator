var container = document.querySelector('.container');
var colorCard = document.querySelector('.color-card');
var btn = document.querySelector("button");
var hex = document.querySelector("span");

function getNewColor(){
    var symbols = '0123456789ABCDEF';  //hex code
    var color = '#';
     
    for(var i= 0 ; i < 6 ; i++){
       color = color + symbols[Math.floor(Math.random() * 16)]; 
    }  //generates any random symbol from 0(0) to 15(F)
    document.body.style.background = color;
    colorCard.body.style.background = color;


}


btn.addEventListener("click" , getNewColor());