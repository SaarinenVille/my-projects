var numero = "";
var luku = "";
var taulu = [];
var index = 0;

function lisays(luku) {

  numero+=luku
  document.getElementById('numOutput').innerHTML = numero;
}

function tyhjennys() {
  numero = '';
  document.getElementById('numOutput').innerHTML = numero;
}
