var display = document.getElementById('input');
var historyElm = document.getElementById('hst');
var hstElm = document.getElementById('history')

function calculate(btnValue) {
    var inputValue = display.value
    if (btnValue === '=') {
        if (display.value != "") {
            var result = eval(inputValue);
            display.value = result;
            historyElm.style.display="flex";
            var hstSpan = document.createElement('span');
            historyElm.appendChild(hstSpan);
            hstSpan.innerText = inputValue  + ' = ' + result;
            
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
        var powResult =  Math.pow(inputValue, 2)
        display.value = powResult
        historyElm.style.display="flex";
        var hstSpan = document.createElement('span');
        historyElm.appendChild(hstSpan);
        hstSpan.innerText = inputValue  + '^ = ' + powResult;
        return;
    }
    display.value += btnValue;


    function clearHst(){
        historyElm.innerHTML = '';
    }

}