const lisaaBtn3 = document.querySelector(".btn-add3");
const lisaaBtn4 = document.querySelector(".btn-add4");
const container1 = document.getElementById("container_1");
const container2 = document.getElementById("container_2");


lisaaBtn3.addEventListener("click", addNew3)
lisaaBtn4.addEventListener("click", addNew4)

  function addNew3() {

    for(let i = 0; i < 9; i++) {

      var newDiv3 = document.createElement("div");
      newDiv3.id = "new_div" + i;
      container1.appendChild(newDiv3);
      newDiv3.classList.add("kortti_div");
    }
  };



  function addNew4() {

    for(let j = 0; j < 16; j++) {

      var newDiv4 = document.createElement("div");
      newDiv4.id = "new_div" + j;
      container2.appendChild(newDiv4);
      newDiv4.classList.add("kortti_div");
    }
  };

  let kuva = document.createElement("img");
  kuva.setAttribute("src", "imgs/kuva0.png");
  kuva.setAttribute("height", "150");
  kuva.setAttribute("width", "150");

  document.addEventListener('click', function(e){
      if(e.target && e.target.id== 'new_div0') {
        console.log("terve");
        document.getElementById('new_div0').appendChild(kuva);
       }
       else {
         kuva.remove();
       }


   });





// Toinen tapa luoda funktio eventListernerillä

/*
lisaaNappi.addEventListener("click", function() {

  var newDiv = document.createElement("div");
  container.appendChild(newDiv);
  newDiv.classList.add("kortti_div");
});
*/
