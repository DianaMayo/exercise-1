// ESTO SE HACE CUANDO EL SCRIP ESTA ARRIBA
/*document.addEventListener('DOMContentLoaded', funtion( {
    console.log("DOM CONTENT LOADED");
    */
//const btn = document.querySelector('button')

//btn.addEventListener("clik",function() {
  //  console.log("clicked");
//});


/*window.addEventListener('load',function(){
    console.log('fully loaded');
});
*/




//EXERCISE

//document.addEventListener('')

// window.innerWidth
// window.innerHeight

// rgb(0,0,0) => rgb(255,255,255);

document.addEventListener('mousemove', function(e) {

    //console.log(e.pageX, e.pageY);
   
const r = Math.round (e.pageX * 255 / window.innerWidth);
const b = Math.round(e.pageY * 255 / window.innerHeight);
    console.log(r,0,b);

/*  e.x         x
   ____       _____
  innerW       255
*/

   const color = `rgb(${r}, 0, ${b})`;
    document.body.style.backgroundColor = color;
    console.log(color);
});









