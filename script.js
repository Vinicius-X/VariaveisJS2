function som(num1, num2){
    return num1+num2
}

function subtrair(num1, num2){
    return num1-num2
}

function mult(num1, num2){
    return num1*num2
}

function div(num1, num2){
    return num1/num2
}




function somar() {
    let num1= parseFloat(document.getElementById('numero1').value);
    let num2= parseFloat(document.getElementById('numero2').value);
    let result=som(num1, num2);

    document.getElementById("receptor").innerHTML=result;
}

function sub() {

    let num1= parseFloat(document.getElementById('numero1').value);
    let num2= parseFloat(document.getElementById('numero2').value);
    let result=subtrair(num1, num2);

    document.getElementById("receptor").innerHTML=result;
}

function multiplicar() {
    let num1= parseFloat(document.getElementById('numero1').value);
    let num2= parseFloat(document.getElementById('numero2').value);
    let result=mult(num1, num2);

    document.getElementById("receptor").innerHTML=result;
}

function dividir() {
    let num1= parseFloat(document.getElementById('numero1').value);
    let num2= parseFloat(document.getElementById('numero2').value);
    let result=div(num1, num2);

    document.getElementById("receptor").innerHTML=result;
}