function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

const letters = document.querySelectorAll('.letter');

const intervalId = setInterval(function() {
    /*loops*/
    for (let letter of letters) {
      letter.style.color = randomRGB();
    }
},1000)




/* ESTO ES CON RESPECTO A LA FUNCION DE LA PRIMERA LINEA 
cada rgb va con 3 numeros desde 0 a 255
rgb(255,255,255)
rgb(0,0,0)
rgb(133,4,255)


function randomRGB() {
    const r = Math.random() * 255
}

si lo multiplico x 255 me va a dar un numero desde 0 a 254.9999
 entonces colocamos math.floor y 256 para que me incluya el 255
 */

/*ESTO ES CON RESPECTO A LA FUNCION DE LA LINEA 11 EN ADELANTE
asi me cambia de color en el nombre pero no en cada letra
entonces en el documento de html coloco span para cada letra y hago la otra
funcion despues esta


const h1 = document.querySelector('h1');

setInterval(function () {
    h1.style.color = randomRGB();
}, 500);

 solo letter busca un elemento que no existe pero .letter le dice dame
la letra con esa clase de elemento
*/

/*EN LA LINEA 12
si no quiero que los colores corran para siempre solo coloco const intervalId
no lo va a hacer en la pag pero si abro la console y coloco
clearInterval(intervalId) va a parar

*/