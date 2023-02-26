const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
}))

  function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length


    if (randomNumber === 1) {
      computerChoice = 'kivi'
    }
    if (randomNumber === 2) {
      computerChoice = 'sakset'
    }
    if (randomNumber === 3) {
      computerChoice = 'paperi'
    }
    computerChoiceDisplay.innerHTML = computerChoice
  }
