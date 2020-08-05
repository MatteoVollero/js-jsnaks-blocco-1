var numero = parseInt(prompt("Inserire il numero: "));

if(numero % 2 == 0){
  document.getElementById('numero').innerHTML = numero;
} else{
  document.getElementById('numero').innerHTML = numero + 1;

}
