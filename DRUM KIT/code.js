
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'a':
            au1 = new Audio('music/1.wav');
            au1.play();
            square1 = document.getElementById('square1');
            square1.classList.add('play');
            setTimeout(function () {
                square1.classList.remove('play');
                square1.classList.add('square');
            }, au1.duration * 1000);
            break;
        case 's':
            au2 = new Audio('music/2.wav');
            au2.play();
            square2 = document.getElementById('square2');
            square2.classList.add('play');
            setTimeout(function () {
                square2.classList.remove('play');
                square2.classList.add('square');
            }, au2.duration * 1000);
            break;
        case 'd':
            au3 = new Audio('music/3.wav');
            au3.play();
            square3 = document.getElementById('square3');
            square3.classList.add('play');
            setTimeout(function () {
                square3.classList.remove('play');
                square3.classList.add('square');
            }, au3.duration * 1000);
            break;
        case 'w':
            au4 = new Audio('music/4.wav');
            au4.play();
            square4 = document.getElementById('square4');
            square4.classList.add('play');
            setTimeout(function () {
                square4.classList.remove('play');
                square4.classList.add('square');
            }, au4.duration * 1000);
            break;
        case 'j':
            au5 = new Audio('music/5.wav');
            au5.play();
            square5 = document.getElementById('square5');
            square5.classList.add('play');
            setTimeout(function () {
                square5.classList.remove('play');
                square5.classList.add('square');
            }, au5.duration * 1000);
            break;
        case 'k':
            au6 = new Audio('music/6.wav');
            au6.play();
            square6 = document.getElementById('square6');
            square6.classList.add('play');
            setTimeout(function () {
                square6.classList.remove('play');
                square6.classList.add('square');
            }, au6.duration * 1000);
            break;
        case 'l':
            au7 = new Audio('music/7.wav');
            au7.play();
            square7 = document.getElementById('square7');
            square7.classList.add('play');
            setTimeout(function () {
                square7.classList.remove('play');
                square7.classList.add('square');
            }, au7.duration * 1000);
            break;
        case 'ı':
            au8 = new Audio('music/8.wav');
            au8.play();
            square8 = document.getElementById('square8');
            square8.classList.add('play');
            setTimeout(function () {
                square8.classList.remove('play');
                square8.classList.add('square');
            }, au8.duration * 1000);
            break;
    }

});
const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mousedown', function() {
        const key = this.id.toLowerCase().slice(-1);
        const audio = new Audio(`music/${key}.wav`);
      
        if (audio) {
            audio.play();
            this.classList.add('play');

            setTimeout(() => {
                this.classList.remove('play');
                this.classList.add('square');
            }, audio.duration * 1000);
        }
    });
});