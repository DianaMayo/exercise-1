
var button = document.getElementById('button');
const topText = document.getElementById('top');
const bottomText = document.getElementById('bottom');
const figure = document.getElementById('meme');

meme.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
});

button.addEventListener('click', function(e) {
    e.preventDefault();
    const textOne = document.createElement('h2');
    const textTwo = document.createElement('h3');
    var imagen = document.getElementById('imageUrl').value;
    var img = document.createElement('img');
    const removeBtn = document.createElement('Button');
    const div = document.createElement('div');
    
    meme.appendChild(div);

    removeBtn.innerText = 'x';
    div.appendChild(removeBtn);

    img.src = imagen;
    div.appendChild(img);
    imageUrl.value = '';

    textOne.innerText = topText.value;
    div.appendChild(textOne);
    topText.value = '';


    textTwo.innerText = bottom.value;
    div.appendChild(textTwo);
    bottom.value = '';
    
    
    const imgs = document.querySelectorAll('img');
    for (let img of imgs) {
    img.style.width = '300px';
    img.style.height = '400px';

};



});