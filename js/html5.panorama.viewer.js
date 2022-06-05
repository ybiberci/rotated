var panorama = document.getElementById("panorama");
var dragOn = false;
var xPos = 0;

panorama.addEventListener("mousedown", function(){
    dragOn = !dragOn;
    xPos = event.pageX;
    
});

panorama.addEventListener("mousemove", function(){
    var moveX = xPos - event.pageX;
    
    moveX = moveX * 5;
    
    if(dragOn){
        panorama.style.backgroundPositionX = moveX + "px";        
    }
});