// const startGame = () => {
//   const startButtons = document.querySelector('.button')
//   startButtons.addEventListner('click', '')
// }

class Tamagotchi {
  constructor(name) {
    this.name = name
    this.hunger = Math.floor(Math.random() * 20)   // Hunger level starts at random. If it goes above 20, Tamagotchi dies.
    this.sleepiness = Math.floor(Math.random() * (0 - 20)) + 20   // sleepiness level starts at random. If it goes above 20, Tamagotchi dies.
    this.boredom = Math.floor(Math.random() * (0 - 20)) + 20    // Boredom level starts at random. If it goes above 20, Tamagotchi dies.
  }


  feedFunction() {
    console.log("now feeding");
    this.hunger -= 2;
    console.log(this.hunger);
    if (this.hunger <= 1) {
      console.log("Oh man I'm so full");
    }
  }


  sleepFunction() {
    console.log("now sleeping");
    this.sleepiness -= 2;
    console.log(this.sleepiness);
    if (this.sleepiness <= 1) {
        console.log("I'm wide awake!");
    }
  }


  boredomFunction() {
    console.log("now being entertained");
    this.boredom -= 2;
    console.log(this.boredom);
    if (this.boredom <= 1) {
      console.log("I love this, can we do this again some other time?!");
    }
  }
}

//////////////////////// INSTANTIATING CHARACTER ////////////////////
const character = new Tamagotchi('babu_G_1');
console.log(character);



//////////////// DECREASE HUNGER LEVEL WITH BUTTON /////////////////
const feedButton = document.querySelector('#left-button')
feedButton.addEventListener('click', ()=> {
  if (character.hunger > 1) {
    character.feedFunction()
  }
})





//////////////// DECREASE BOREDOM LEVEL WITH BUTTON /////////////////
const boredomButton = document.querySelector('#middle-button')
boredomButton.addEventListener('click', ()=> {
  if (character.boredom > 1) {
    character.boredomFunction()
  }
})




//////////////// DECREASE SLEEPINESS LEVEL WITH BUTTON /////////////////
const sleepButton = document.querySelector('#right-button')
sleepButton.addEventListener('click', ()=> {
  if (character.sleepiness > 1){
    character.sleepFunction()
  }
})
