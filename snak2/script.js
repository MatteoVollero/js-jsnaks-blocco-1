var parolaUno = prompt("Inserire la prima parola");
var parolaDue = prompt("Inserire la seconda parola");

if(parolaUno.length > parolaDue.length){
  document.getElementById('corta').innerHTML = parolaDue;
  document.getElementById('lunga').innerHTML = parolaUno;
}else if(parolaUno.length < parolaDue.length){
  document.getElementById('corta').innerHTML = parolaUno;
  document.getElementById('lunga').innerHTML = parolaDue;
}else{
  document.getElementById('uguali').innerHTML = "Le hanno la stessa lunghezza (" + parolaUno + " " + parolaDue + " )";
}
