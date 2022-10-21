//Luodaan taulukko kuvakorteille. Taulukkoon tulee kuvan nimi ja sijainti. Jokainen kuva kaksi kertaa
const cardsArray = [

  {
    name: 'kengat',
    img: 'imgs/kuva1.png'
  },
  {
    name: 'kengat',
    img: 'imgs/kuva1.png'
  },
  {
    name: 'vaunut',
    img: 'imgs/kuva2.png'
  },
  {
    name: 'vaunut',
    img: 'imgs/kuva2.png'
  },
  {
    name: 'pullo',
    img: 'imgs/kuva3.png'
  },
  {
    name: 'pullo',
    img: 'imgs/kuva3.png'
  },
  {
    name: 'ankka',
    img: 'imgs/kuva4.png'
  },
  {
    name: 'ankka',
    img: 'imgs/kuva4.png'
  },
  {
    name: 'jalat',
    img: 'imgs/kuva5.png'
  },
  {
    name: 'jalat',
    img: 'imgs/kuva5.png'
  },
  {
    name: 'lautanen',
    img: 'imgs/kuva6.png'
  },
  {
    name: 'lautanen',
    img: 'imgs/kuva6.png'
  },
  {
    name: 'hakaneula',
    img: 'imgs/kuva7.png'
  },
  {
    name: 'hakaneula',
    img: 'imgs/kuva7.png'
  },
  {
    name: 'kauluri',
    img: 'imgs/kuva8.png'
  },
  {
    name: 'kauluri',
    img: 'imgs/kuva8.png'
  }
]
//Sekoitetaan taulukon kuvat
cardsArray.sort(() => 0.5 - Math.random());


// Luodaan muuttujat HTML - button-elementille ja section-elementille, jonka sisään kuvat tulevat.
// Haetaan button classin perusteella ja section id:n perusteella.
const lisaaBtn4 = document.querySelector(".btn-add4");
const container1 = document.getElementById("container_1");
// Luodaan muuttujat valituille korteille, valittujen korttien id:lle sekä voitetuille korteille.
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];
// Lisätään evenListener buttonille(click --> suorittaa funktion addNew4).
lisaaBtn4.addEventListener("click", addNew4)
// Seuraava funktio käynnistää pelin ja luo 16 x img(kuva0.png) sectionin(container1) sisään.
function addNew4() {

  for(let i = 0; i < cardsArray.length; i++) {
/* Luodaan img-elementti
   --> syötetään elementtiin attribuutit (sijainti, data-id)
   --> Lisätään elementtiin eventListener(click --> käynnistää funktion flipCard)
   --> upotetaan elementti(img) sectioniin(container1) HTML:ssä
   --> Luodaan img-elementille class*/

    var card = document.createElement("img");
    card.setAttribute('src', 'imgs/kuva0.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    container1.appendChild(card);
    card.classList.add("img_grid");
  }
}
// Seuraava funktio näyttää piilotetut kortit
function flipCard() {
  var cardId = this.getAttribute('data-id');
  cardsChosen.push(cardsArray[cardId].name)
  cardsChosenId.push(cardId);
  this.setAttribute('src', cardsArray[cardId].img)
  if(cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}
// Seuraava funktio tarkastaa, onko klikatut kortit pareja keskenään
function checkForMatch() {
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if(cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match');
    cardsWon.push(cardsChosen);
  }
  else {
    cards[optionOneId].setAttribute('src', 'imgs/kuva0.png')
    cards[optionTwoId].setAttribute('src', 'imgs/kuva0.png')
    alert('Sorry, try again')
  }
  cardsChosen = [];
  cardsChosenId = [];
}







/*
  let kuva = document.createElement("img");
  kuva.setAttribute("src", "imgs/kuva1.png");
  kuva.setAttribute("height", "150");
  kuva.setAttribute("width", "150");

  document.addEventListener('click', function(e){
      if(e.target && e.target.id== 'kuva') {
        console.log("terve");
        document.getElementById('kuva').appendChild(kuva);
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
