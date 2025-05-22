function inputValidation(e){
    let numError = document.getElementById('num-error')
    let numElm = document.getElementById('num')
    let inputValue = e.target.value;
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
    let passInput = document.getElementById('pass')
    if(passInput.type === 'text'){
      passInput.type = 'password';
    return
    }
    passInput.type = 'text'
  
  }