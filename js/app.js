class Tamagotchi {
  constructor(name) {
    this.name = name
    this.hunger = Math.floor(Math.random() * 15)   // Hunger level starts at random. If it goes above 20, Tamagotchi dies.
    this.boredom = Math.floor(Math.random() * (0 - 15)) + 15    // Boredom level starts at random. If it goes above 20, Tamagotchi dies.
    this.sleepiness = Math.floor(Math.random() * (0 - 15)) + 15   // sleepiness level starts at random. If it goes above 20, Tamagotchi dies.
    this.age = 0
  }

  feedFunction() {
    console.log("now feeding");
    this.hunger -= 2;
    console.log(this.hunger);
    if (this.hunger <= 1) {
      console.log("Oh man I'm so full");
    }
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    backgroundColor.style.backgroundColor = bgColor
  }


  boredomFunction() {
    console.log("now being entertained");
    this.boredom -= 2;
    console.log(this.boredom);
    if (this.boredom <= 1) {
      console.log("I love this, can we do this again some other time?!");
    }
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    backgroundColor.style.backgroundColor = bgColor
  }

  sleepFunction() {
    console.log("now sleeping");
    this.sleepiness -= 2;
    console.log(this.sleepiness);
    if (this.sleepiness <= 1) {
        console.log("I'm wide awake!");
    }
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    backgroundColor.style.backgroundColor = bgColor
  }
}







//////////////////////// INSTANTIATING CHARACTER ////////////////////
const character = new Tamagotchi('babu_G_1');
console.log(character);










////////////////////// SETTING UP AGE ////////////////////////
  const soldierMan = document.querySelector('.soldier')
  const ageCount = document.querySelector('#ageP')
  const ageInterval = setInterval(() => {
    if (character.age >= 4 && character.age < 8) {
      soldierMan.style.width = 5+"em"
      soldierMan.style.height = 5+"em"
      soldierMan.style.marginLeft = 675+"px"
      soldierMan.style.marginTop = -305+"px"
    } else if (character.age >= 8) {
      soldierMan.style.width = 6+"em"
      soldierMan.style.height = 6+"em"
      soldierMan.style.marginLeft = 670+"px"
      soldierMan.style.marginTop = -320+"px"
    }
    character.age += 1
    ageCount.innerText = `Age: ${character. age}`
  }, 4000)









  ////////////// SETTING UP START GAME FUNCTION ////////////////
  const nameSubmit = document.querySelector('#submitButton')
  const gameOver = document.querySelector('#gameOver')
  const soldierCharacter = document.querySelector('.soldier')
  let inputName = document.querySelector('input')
  nameSubmit.addEventListener('click', ()=> {
    nameSubmit.setAttribute('class', 'soldierRotate')
    let gameTitle = document.querySelector('title')
    let inputName = document.querySelector('input')
    gameTitle.innerText = inputName.value + "'s Tamagotchi"
    inputName.remove()
    nameSubmit.disable = true
    nameSubmit.style.opacity = 0
    console.log(character.age);
  })









  //////////////// INCREASE HUNGER LEVEL WITH TIME /////////////////
  const intervalX = setInterval(() => {
    if (character.hunger <= 18) {
      character.hunger += 2
      hungerCount.innerText = `Hunger Level: ${character.hunger}`

    } else {
      clearInterval(intervalX)
      clearInterval(intervalY)
      clearInterval(intervalZ)
      clearInterval(ageInterval)
      gameOver.style.opacity = 100
      if (gameScreen.style.backgroundColor === 'black') {
          gameScreen.style.backgroundColor = 'white'
          gameScreen.style.borderColor = 'black'
      }
      soldierCharacter.style.opacity = 0
      nameSubmit.remove()
      inputName.style.opacity = 0
    }
  }, 4000)


  //////////////// DECREASE HUNGER LEVEL WITH BUTTON (FEED) /////////////////
    const backgroundColor = document.querySelector('#tamogotchi-frame')
    const feedButton = document.querySelector('#left-button')
    const hungerCount = document.querySelector('#hunger')
    const feedEnableButton = () => {
      feedButton.disabled = false
    }

    feedButton.addEventListener('click', ()=> {
      feedButton.disabled = true;
      hungerCount.style.padding = 5 + 'px';
      character.feedFunction()
      hungerCount.innerText = `Hunger Level: ${character.hunger}`
      setTimeout(feedEnableButton, 5000)
    })










    //////////////// INCREASE BOREDOM LEVEL WITH TIME /////////////////
    const intervalY = setInterval(() => {
      if (character.boredom <= 18) {
        character.boredom += 2
        boredomCount.innerText = `Boredom Level: ${character.boredom}`

      } else {
        clearInterval(intervalY)
        clearInterval(intervalX)
        clearInterval(intervalZ)
        clearInterval(ageInterval)
        gameOver.style.opacity = 100
        if (gameScreen.style.backgroundColor === 'black') {
            gameScreen.style.backgroundColor = 'white'
            gameScreen.style.borderColor = 'black'
        }
        soldierCharacter.style.opacity = 0
        nameSubmit.remove()
        inputName.style.opacity = 0
      }
    }, 4000)


    //////////////// DECREASE BOREDOM LEVEL WITH BUTTON (BOREDOM) /////////////////
      const boredomButton = document.querySelector('#middle-button')
      const boredomCount = document.querySelector('#boredom')
      const boredomEnableButton = () => {
        boredomButton.disabled = false
      }

      boredomButton.addEventListener('click', ()=> {
        boredomButton.disabled = true;
        boredomCount.style.padding = 5 + 'px';
        character.boredomFunction()
        boredomCount.innerText = `Boredom Level: ${character.boredom}`
        setTimeout(boredomEnableButton, 5000)
      })











      //////////////// INCREASE SLEEPINESS LEVEL WITH TIME /////////////////
      const intervalZ = setInterval(() => {
        if (character.sleepiness <= 18) {
          character.sleepiness += 2
          tiredCount.innerText = `Tired Level: ${character.sleepiness}`

        } else {
          clearInterval(intervalZ)
          clearInterval(intervalX)
          clearInterval(intervalY)
          clearInterval(ageInterval)
          if (gameScreen.style.backgroundColor === 'black') {
              gameScreen.style.backgroundColor = 'white'
              gameScreen.style.borderColor = 'black'
          }
          gameOver.style.opacity = 100
          soldierCharacter.style.opacity = 0
          nameSubmit.remove()
          inputName.style.opacity = 0
        }
      }, 4000)


      //////////////// DECREASE SLEEPINESS LEVEL WITH BUTTON (SLEEP) /////////////////
      const gameScreen = document.querySelector('#tamogotchi-screen')

        const sleepinessButton = document.querySelector('#right-button')
        const tiredCount = document.querySelector('#sleepiness')
        const sleepinessEnableButton = () => {
          sleepinessButton.disabled = false
        }
        sleepinessButton.addEventListener('click', () => {
          if (gameScreen.style.backgroundColor === 'black') {
            gameScreen.style.backgroundColor = 'white'
            gameScreen.style.borderColor = 'black'
          } else {
            gameScreen.style.backgroundColor = 'black'
            gameScreen.style.borderColor = 'white'
          }
          console.log("sleepinessEnableButton");
          sleepinessButton.disabled = true;
          tiredCount.style.padding = 5 + 'px';
          character.sleepFunction()
          tiredCount.innerText = `Tired Level: ${character.sleepiness}`
          setTimeout(sleepinessEnableButton, 5000)
        })





























///////////////// TOUCH SCREEN FUNCTION /////////////////

// CAN I CLICK AND DRAG??? IF SO, HOW???

// let screenLog = document.querySelector('#screen-log');
// document.addEventListener('mousemove', logKey);
//
// function logKey(e) {
//   screenLog.innerText = `
//     Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}`;
// // //
// //
// //
// //
// // // get the client cordinates for which to run the function in
// // if clientX < rightCordinate || clientX > leftCordinate || clientY < bottomCordinate || clientY > topCordinate, run the function
// if (e.clientX < 550 || e.clientX > 336 || e.clientY > 220 || e.clientY < 433 ) {
//   if (e.clientX === 354 || e.clientY === 410) {
//     const sleepButton = document.querySelector('#right-button')
//     const sleepCount = document.querySelector('#sleepiness')
//     sleepCount.innerText = `Tired Level: ${character.sleepiness}`
//
//     sleepButton.addEventListener('click', ()=> {
//       sleepCount.style.padding = 5 + 'px'
//       if (character.sleepiness > 1){
//         character.sleepFunction()
//         sleepCount.innerText = `Tired Level: ${character.sleepiness}`
//       }
//     })
//   }
// }
// }


// More (if Statements inside of function)
// food: if clientX = ... || clientY = ... {run the same function as for food button}
// sleep: if clientX = ... || clientY = ... {run the same function as for food button}
// boredom: if clientX = ... || clientY = ... {run the same function as for food button}


// if clientX = ... || client


//////////////// INCREASE HUNGER LEVEL BY 30 SECS //////////////////
