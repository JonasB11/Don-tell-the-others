var img = document.getElementById('img');

var slides=['pics/band/band_crowd.jpeg', 'pics/band/band_louis-flo.jpeg', 'pics/band/band_nice-light.jpeg', 'pics/band/band_pascal_go.jpeg', 'pics/band/band_seb-solo.jpeg', 'pics/band/band_trio.jpeg', 'pics/band/band_wave.jpeg', 'pics/band/Band_front.jpg', 'pics/band/Band_light.jpg', 'pics/band/Band_Pascal.jpg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,4000);
