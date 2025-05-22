var display = document.getElementById('input');
var historyElm = document.getElementById('hst');
var hstElm = document.getElementById('history')
var btnElm = document.querySelector('#clear-btn')
var calculatHistory = [];
function calculate(btnValue) {
    var inputValue = display.value
    if (btnValue === '=') {
        if (display.value != "") {
            var result = eval(inputValue);
            display.value = result;

            for (let i = 0; i < inputValue.length; i++) {
                if (inputValue[i] === '+' || inputValue[i] === '-' || inputValue[i] === '*' || inputValue[i] === '/') {


                    calculatHistory.push(inputValue + ' = ' + result);
                    historyElm.style.display = "flex";
                    btnElm.style.display = 'block'
                    var hstSpan = document.createElement('span');
                    for (let i = 0; i < calculatHistory.length; i++) {

                        hstSpan.innerText = calculatHistory[i]
                    }
                    hstElm.appendChild(hstSpan);
                    console.log(calculatHistory)
                }
            }
        }

        return;
    }

    if (btnValue === 'del') {
        display.value = inputValue.slice(0, inputValue.length - 1)
        return;
    }
    if (btnValue === 'c') {
        display.value = ''
        return;
    }
    if (btnValue === 'x2') {
        if (inputValue != '') {
            var powResult = Math.pow(inputValue, 2)
            display.value = powResult
            historyElm.style.display = "flex";
            var hstSpan = document.createElement('span');
            hstElm.appendChild(hstSpan);
            hstSpan.innerText = inputValue + '^ = ' + powResult;
        }
        return;
    }
    display.value += btnValue;



}

function clearHst(e) {
    hstElm.innerHTML = '';
    e.target.style.display = 'none'
    calculatHistory = [];
    console.log(calculatHistory)
}