var container = document.querySelector('.container');
var colorCard = document.querySelector('.color-card');
var btn = document.querySelector("button");
var hex = document.querySelector("span");
btn.addEventListener("click" , getNewColor());

function getNewColor(){
    var symbols = '0123456789ABCDEF';  //hex code
    var color = '#';
     
    for(var i= 0 ; i < 6 ; i++){
       color = color + symbols[Math.floor(Math.random() * 16)]; 
    }  //generates any random symbol from 0(0) to 15(F)
    document.body.style.background = color;
    colorCard.style.background = color;
    document.getElementById("hex").innerHTML = color;
}

document.getElementById("copy-button").addEventListener("click" , function(){
    var hexCode = document.getElementById("hex").innerHTML;
    navigator.clipboard.writeText(hexCode);
    var messageDisplay = document.getElementById("message-display");
    messageDisplay.innerHTML = "HEX code is copied ! ";
    messageDisplay.classList.add("slide-up"); 
    setTimeout(function() {
        messageDisplay.innerHTML = "";
      }, 2000);
    
})






