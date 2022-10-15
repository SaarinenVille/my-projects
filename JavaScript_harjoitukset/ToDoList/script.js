var enter = document.getElementById('painike');
/*
enter.addEventListener("click", lisaaListaanNapauttaessa);
*/
var input = document.getElementById('syotto');
/*
input.addEventListener("keypress", lisaaListaanEnterilla);
*/
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length
}

function listElement() {
  var lista = document.createElement("li");
  if(input.value != "") {
    lista.appendChild(document.createTextNode(input.value));
    ul.appendChild(lista);
    input.value = "";
  }
  function crossOut() {
    lista.classList.toggle("done");
  }
  lista.addEventListener("click",crossOut());

  var poista = document.createElement("button");
  poista.appendChild(document.createTextNode("X"));
  lista.appendChild(poista);
  poista.addEventListener("click",poistaTehtava());


function poistaTehtava() {
    lista.classList.add("delete");

}
}
