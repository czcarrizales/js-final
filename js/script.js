let button = document.querySelector('button');
let input = document.querySelector('input');
let div = document.querySelector('#answers');
let label = document.querySelector('label');
div.innerHTML = "<img src='images/magic8ball_start.png'>"

button.addEventListener('click', function() {
    let number = Math.floor(Math.random()*20) +1;
    let numberString = number.toString();
    if (input.value == '') {
        label.innerHTML = 'You should probably ask a question?'
        div.innerHTML = "<img src='images/magic8ball_start.png'>"
    }
    else if (input.value == 'Can I have something to eat?') {
        label.innerHTML = input.value;
        input.value = '';
        div.innerHTML = "<img src='images/magicno.jpg'/>"
    }
    else
    {
        div.innerHTML = "<img src='images/magic8ball_"+numberString+".png'/>";
        label.innerHTML = input.value;
        input.value = '';
    }
});