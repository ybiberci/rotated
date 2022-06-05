var image360 = document.getElementById("image360");
var slider = document.getElementById("slider");
var advanced360 = document.getElementById("advanced360");
var imageNo = 1;
var images = [];
 
//Preloading images
for(var i = 1; i < 25; i++){
    images[i] = new Image();
    images[i].src = "/images/Car360_" + i + ".png";
}
 
//Event handler for input from the slider as the user slides it
slider.addEventListener("input", function(){
 
    image360.src = images[slider.value].src;
 
});
 
//Function to switch out to the next image
function rotate(){
    if(imageNo === 0) imageNo = 24;
    else if(imageNo === 25) imageNo = 0;
    advanced360.src = images[imageNo].src;
}
 
//executing rotate for the advanced 360 viewer autorotate feature
window.setInterval(function(){imageNo += 1; rotate();}, 250);