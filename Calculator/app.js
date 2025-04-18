var display = document.getElementById('input')

function calculate (btnValue){
    var inputValue = display.value
    if(btnValue === '='){
        var result = eval(inputValue);
        display.value = result;
        return ;
    }
     if(btnValue === 'del'){
        display.value = inputValue.slice(0,inputValue.length-1 )
        return;
    }
     if(btnValue === 'c'){
        display.value = ''
        return;
    }
    if(btnValue === 'x2'){
        display.value = Math.pow(inputValue, 2)
        return;
    }
    display.value += btnValue;

}