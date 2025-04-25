function inputValidation(e){
    var numError = document.getElementById('num-error')
    var numElm = document.getElementById('num')
    var inputValue = e.target.value;
    numError.style.color='red';
    if( inputValue.length > 11){
        numError.innerText = 'Invalid';
        numElm.style.border='2px solid red';
        numElm.style.boxShadow='none';
        return
    }
      numError.innerText = '';
      e.target.className = 'focus';
}

function pV(){
    var passInput = document.getElementById('pass')
    if(passInput.type === 'text'){
      passInput.type = 'password';
    return
    }
    passInput.type = 'text'
  
  }