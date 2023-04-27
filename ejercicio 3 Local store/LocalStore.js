const form = document.querySelector('#que-tienes-que-hacer');
const input = document.querySelector('#accion');
const listaDeCosas = document.querySelector('#lista-de-cosas');

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', () => {
    lista = JSON.parse(localStorage.getItem('lista'));
    
    });
//}

//el inicio

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(input.value);
    const agregarCosas = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Listo';



//localStorage
    var lista = [];
    if (localStorage.lista) {
    lista = JSON.parse(localStorage.lista);
}
    lista.push(input.value)
    localStorage.lista = JSON.stringify(lista);
    



    agregarCosas.innerText = input.value;
    agregarCosas.appendChild(removeBtn)
    input.value = "";
    listaDeCosas.appendChild(agregarCosas);

})
}
listaDeCosas.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
      e.target.parentElement.remove();
}
    else if (e.target.tagName === "LI") {
            e.target.style.textDecoration = "line-through";
    }
    
});
