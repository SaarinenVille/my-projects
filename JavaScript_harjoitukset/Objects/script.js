
// Luodaan taulukko funktion ulkopuolelle, jotta taulukko ei nollaannu funktion yhteydessä
let movies = [];

function elokuvat() {

// Luodaan objekti {}-merkeillä. Objektiin voi tallentaa useamman muuttujan

let movie = {
  title: document.getElementById('nimi').value,
  year: document.getElementById('vuosi').value,
  score: document.getElementById('pisteet').value
};
// Työnnetään tiedot taulukkoon
movies.push(movie);
// Nollataan formin input fieldit
document.querySelector('.form').reset();

                                              // stringify muuttaa taulukon stringiksi html-sivulla
document.getElementById('vastaus').innerHTML = JSON.stringify(movies);
console.log(movies);
}
