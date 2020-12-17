// move the dog

const dog = document.querySelector('.dog');

window.addEventListener('scroll', showDog);
showDog();
function showDog() {
    const triggerBottom = window.innerHeight / 5 * 4;

        const boxTop = dog.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            dog.classList.add('show')
        } else {
            dog.classList.remove('show')
        }
    }

    // show quotes

    const dream = document.getElementById('dream');
    const courage = document.getElementById('courage');
    const desire = document.getElementById('desire');
    const inspiration = document.getElementById('inspiration');
    const first = document.getElementById('first');
    const second = document.getElementById('second');
    const third = document.getElementById('third');
    const fourth = document.getElementById('fourth');

    dream.addEventListener('click', () =>
        first.classList.toggle('show-first'));
    courage.addEventListener('click', () =>
        second.classList.toggle('show-second'));
    desire.addEventListener('click', () =>
        third.classList.toggle('show-third'));
    inspiration.addEventListener('click', () =>
        fourth.classList.toggle('show-fourth'));

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