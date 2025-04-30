function inputValidation(e){
    var numError = document.getElementById('num-error')
    var numElm = document.getElementById('num')
    var inputValue = e.target.value;
    numError.style.color='red';
    if( inputValue.length > 11){
        numError.innerText = 'Invalid';
        e.target.className = ' input-focus';
        return
    }
      numError.innerText = '';
      e.target.className = ' fokus';
      console.log(e.target.className)
      
}

function pV(){
    var passInput = document.getElementById('pass')
    if(passInput.type === 'text'){
      passInput.type = 'password';
    return
    }
    passInput.type = 'text'
  
  }