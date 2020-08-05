var numeroUno = parseInt(prompt("Inserire il primo numero"));
var numeroDue = parseInt(prompt("Inserire il secondo numero"));

if(numeroUno > numeroDue){
  document.getElementById('maggiore').innerHTML = numeroUno;
}else if(numeroUno < numeroDue){
  document.getElementById('maggiore').innerHTML = numeroDue;

}else{
  document.getElementById('maggiore').innerHTML = "I due numeri sono uguali (" + numeroUno + " " + numeroDue + " )";
}
