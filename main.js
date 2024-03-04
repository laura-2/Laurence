const form = document.getElementById("formulario");
const input = document.querySelectorAll(".formulario-input");
const msgError = document.querySelectorAll(".formulario-msg");
const msgSuccess = document.getElementById("formulario-success");

function nomeValidate(){
    if(input[0].value.length > 10 || input[0].value.length < 2){
        setError(0)
    } else {
        removeError(0)
    }
}
function telefoneValidate(){
    if(input[2].value.length > 15){
        setError(2)
    } else {
        removeError(2)
    }
}
function dataValidate(){
    if(input[4].value.length === ''){
        setError(4)
    } else {
        removeError(4)
    }
}
function horarioValidate(){
    if(input[5].value.length === ''){
        setError(5)
    } else {
        removeError(5)
    }
}
function pessoasValidate(){
    if(input[3].value > 20){
        setError(3)
    } else {
        removeError(3)
    }
}

function setError(index){
    input[index].style.border = '2px solid #e63636';
    msgError[index].style.display = 'block';
}

function removeError(index){
    input[index].style.border = '';
    msgError[index].style.display = 'none';
}
function cleanInput(index){
    input[index].value = '';
}
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    nomeValidate()
    telefoneValidate()
    pessoasValidate()
    dataValidate()
    horarioValidate()
    cleanInput(0)
    cleanInput(2)
    cleanInput(3)
    cleanInput(4)
    cleanInput(5)
    msgSuccess.style.display = "block"

})