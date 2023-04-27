const form = document.querySelector('#que-tienes-que-hacer');
const input = document.querySelector('#accion');
const listaDeCosas = document.querySelector('#lista-de-cosas');




listaDeCosas.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
      e.target.parentElement.remove();
}
    else if (e.target.tagName === "LI") {
            e.target.style.textDecoration = "line-through";
    }

});


form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(input.value);
    const agregarCosas = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Listo';

    agregarCosas.innerText = input.value;
    agregarCosas.appendChild(removeBtn)
    input.value = "";
    listaDeCosas.appendChild(agregarCosas);


})