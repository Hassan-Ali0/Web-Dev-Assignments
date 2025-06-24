var mainElm = document.createElement('div');
var scoreElm = document.getElementById('score');
var headerElm = document.getElementsByClassName('header')[0];
var leftElm = document.getElementsByClassName('left')[0];
leftElm.appendChild(mainElm);

var colors = ['forestgreen', 'blue', 'purple', 'aqua', 'burlywood'];
var randomNum = Math.floor(Math.random() * 5);
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
    setColors()
}



for (var i = 0; i < 20; i++) {
    var randomNum1 = Math.floor(Math.random() * 5);
    var divElm = document.createElement('div');
    var main = document.getElementsByClassName('main')[0];
    main.appendChild(divElm);
    divElm.style.backgroundColor = colors[randomNum1];
    divElm.className = 'card';
    divElm.id = `divElm${i}` ;
    divElm.addEventListener('click', check);
}

function setColors(){
    var randomNum2 = Math.floor(Math.random() * 4);
    mainElm.style.backgroundColor = colors[randomNum2]
    console.log(randomNum)
    for (let i = 0; i < 20; i++) {
        var randomNum1 = Math.floor(Math.random() * 4);
        var div = document.getElementById(`divElm${i}`)
        div.style.backgroundColor = colors[randomNum1];
        
    }
}