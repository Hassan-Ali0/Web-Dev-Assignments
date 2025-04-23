var mainElm = document.createElement('div');
var scoreElm = document.getElementById('score');
var headerElm = document.getElementsByClassName('header')[0];
var leftElm = document.getElementsByClassName('left')[0];
leftElm.appendChild(mainElm);

var colors = ['lightgreen', 'lightblue', 'purple', 'yellow'];
var randomNum = Math.floor(Math.random() * 4);
var mainElmColor = mainElm.style.backgroundColor = colors[randomNum];
mainElm.className = 'main-box';

var scoreCount = 0;
function check(e) {
    if (e.target.style.backgroundColor === mainElmColor) {
        alert('Right Answer');
        scoreCount++;
        scoreElm.innerText = 'Score: '+ scoreCount;
    }else{
        alert('Wrong Answer');
        if(scoreCount > 0){
            scoreCount--;
            scoreElm.innerText = 'Score: '+ scoreCount;
        }
    }
}

for (var i = 0; i < 20; i++) {
    var randomNum1 = Math.floor(Math.random() * 4);
    var divElm = document.createElement('div');
    var main = document.getElementsByClassName('main')[0];
    main.appendChild(divElm);
    divElm.className = 'card';
    divElm.style.backgroundColor = colors[randomNum1];
    divElm.addEventListener('click', check);
}