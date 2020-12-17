const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', () => 
container.classList.add ('show-nav'))

close.addEventListener('click', () => 
container.classList.remove('show-nav'));


// appear letter
let message = document.getElementById('sendMessage');
let res = document.getElementById('receiver');
//let myMessage = message.split( /\r?\n/);
//res.value = myMessage.join("\r\n");
let goAhead = document.getElementById('btn-fly');
goAhead.addEventListener('click', update);
    function update() {
res.textContent = message.value;
}

// objects of letters 

var letters = [];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}


