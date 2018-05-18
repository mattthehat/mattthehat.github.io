const resultDiv = document.querySelector('#result');
const input = document.querySelector('#cInput');
const submit = document.querySelector('#submit');

convertMeasurement = function(){
    let value = Number(input.value);
    if(isNaN(value)){
        resultDiv.innerHTML = 'Please Enter a number!';
    }else{
    resultDiv.innerHTML = value.toFixed(2) + ' cm = <b>' + (value * 0.39).toFixed(2) + '</b> Inches';
    input.value = '';
    }
}


submit.addEventListener('click', convertMeasurement)

document.getElementById('cInput').onkeydown = function(e){
    if(e.keyCode == 13){
      convertMeasurement();
    }
 };
