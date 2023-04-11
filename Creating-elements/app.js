const newTodo = document.createElement('li');
const boldText = document.createElement('b');
const ul = document.querySelector('ul');
boldText.textContent = "Don't forget to lock the coop!"
newTodo.classlist = 'todo';
newTodo.append(boldText);

const secondTodo = document.createElement('li');
secondTodo.textContent = "Order more la croix";
secondTodo.className = 'todo';

ul.append(newTodo, secondTodo)

const thirdTodo = document.createElement('li');
secondTodo.textContent = "Feed cats";
ul.prepend(thirdTodo);

const newImg = document.createElement('img');
newImg.classList.add('thumbnail')
newImg.setAttribute('src', 'https://www.google.com/search?q=gatos&rlz=1C1ONGR_enUS1049US1049&sxsrf=APwXEdefGmn3-nYGeHR65M0VoyRcTAoalA:1680538279452&source=lnms&tbm=isch&sa=X&ved=2ahUKEwionLb5jI7-AhVUjIkEHX-NBkMQ0pQJegQIBxAE&biw=870&bih=698&dpr=1.25#imgrc=ZOKAEVKnMDeHYM')

document.body.prepend(newImg)


//PARA REMOVER UN OBJETO:

//const removeMe = document.querySelector('#remove-me')
//ul.removeChild(removMe)
/*aqui no selecciono the parents porque ya lo hice alla arriba que es const ul = document.querySelector('ul');
*/

const removeMe = document.querySelector('#remove-me');
removeMe.remove();

const h1 = document.querySelector('h1');
h1.remove();

