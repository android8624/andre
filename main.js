let nomeUsuario = 'André';
alert ('nomeUsuario')
function soma(num1,num2){
    return num1+num2;
}
console.log(soma(5,4))

function mult(num1,num2){
    return num1*num2;
}
console.log(mult(4,6));

function areaQuadrado(lado){
    return lado**2;
}
console.log(areaQuadrado(8))

let media = function(num1,num2,num3){
return (num1+num2+num3)/3;
}
console.log(media(20,5,5))

let num1 = parseInt(prompt('qual é sua nota do primeiro trimestre?'));
let num2 = parseInt(prompt('qual é sua nota do segundo trimestre?'));
let num3 = parseInt(prompt('qual é sua nota do terceiro trimestre?'));
function media = (num1,num2,num3)
{
    return (num1+num2+num3)/3;
}
document.write(media(num1,num2,num3));