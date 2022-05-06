var i=0

function preload(){
 var bag = loadImage("bag.jpg");
 var mug = loadImage("mug.jpg");
 var pillow = loadImage("pillow.jpg");
 var specs = loadImage("spectacles.jpg");
 var bottle = loadImage("water bottle.png");
}

function start(){
i++;
if(i == 1){
    document.getElementById("dvi1").innerHTML = "<img id='image' src='"+ bag + "' style='height: 100%; width: 100%;'></img>" 
    document.getElementById("google").innerHTML = "<h3 class='h3' id='google'>Output on Google lens  - School bag</h3>"
    document.getElementById("mobile").innerHTML = "<h3 class='h3' id='google'>Output on Google lens  -  Bag</h3>"
} else if(i == 2){ 
    document.getElementById("dvi1").innerHTML = "<img id='image' src='"+ mug + "' style='height: 100%; width: 100%;'></img>"  
    document.getElementById("google").innerHTML = "<h3 class='h3' id='google'>Output on Google lens  - Mug</h3>"
    document.getElementById("mobile").innerHTML = "<h3 class='h3' id='google'>Output on Google lens  -  Mug</h3>"
 }else if(i == 3){
    document.getElementById("dvi1").innerHTML = "<img id='image' src='"+ pillow + "' style='height: 100%; width: 100%;'></img>" 
    document.getElementById("google").innerHTML = "<h3 class='h3' id='google'>Output on Google lens  - Pillow</h3>"
    document.getElementById("mobile").innerHTML = "<h3 class='h3' id='google'>Output on Google lens  -  Cushion</h3>"
 }else if(i == 4){
    document.getElementById("dvi1").innerHTML = "<img id='image' src='"+ specs + "' style='height: 100%; width: 100%;'></img>" 
    document.getElementById("google").innerHTML = "<h3 class='h3' id='google'>Output on Google lens  - Spectacles</h3>"
    document.getElementById("mobile").innerHTML = "<h3 class='h3' id='google'>Output on Google lens  -  Googles</h3>"
 }else if(i == 5){
    document.getElementById("dvi1").innerHTML = "<img id='image' src='"+ bottle + "' style='height: 100%; width: 100%;'></img>" 
    document.getElementById("google").innerHTML = "<h3 class='h3' id='google'>Output on Google lens  - Water Bottle</h3>"
    document.getElementById("mobile").innerHTML = "<h3 class='h3' id='google'>Output on Google lens  -  Bottle</h3>"
 }

}

