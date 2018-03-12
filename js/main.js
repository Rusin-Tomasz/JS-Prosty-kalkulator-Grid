var screen = document.querySelector('.screen');
var zero = document.querySelector('.number-0');
var one = document.querySelector('.number-1');
var two = document.querySelector('.number-2');
var three = document.querySelector('.number-3');
var four = document.querySelector('.number-4');
var five = document.querySelector('.number-5');
var six = document.querySelector('.number-6');
var seven = document.querySelector('.number-7');
var eight = document.querySelector('.number-8');
var nine = document.querySelector('.number-9');
var dot = document.querySelector('.number-dot');
var equal = document.querySelector('.equal');
var del = document.querySelector('.delete');
var multiply = document.querySelector('.number-multiply');
var slash = document.querySelector('.number-slash');
var plus = document.querySelector('.number-plus');
var minus = document.querySelector('.number-minus');

zero.addEventListener('click', function(){calculation('0')});
one.addEventListener('click', function(){calculation('1')});
two.addEventListener('click', function(){calculation('2')});
three.addEventListener('click', function(){calculation('3')});
four.addEventListener('click', function(){calculation('4')});
five.addEventListener('click', function(){calculation('5')});
six.addEventListener('click', function(){calculation('6')});
seven.addEventListener('click', function(){calculation('7')});
eight.addEventListener('click', function(){calculation('8')});
nine.addEventListener('click', function(){calculation('9')});
dot.addEventListener('click', function(){calculation('.')});
plus.addEventListener('click', function(){calculation('+')});
minus.addEventListener('click', function(){calculation('-')});
slash.addEventListener('click', function(){calculation('/')});
multiply.addEventListener('click', function(){calculation('*')});
del.addEventListener('click', function(){screen.value = ''});
equal.addEventListener('click', function(){equals()});


function calculation(number) {
    screen.value += number
}


function equals() {
    screen.value = eval(screen.value) 
}





