/*
Challenge: 
1. Take the hard-coded HTML for the Wizard card, bring it 
   into index.js and then inject it back into its div with 
   JavaScript.
2. Do the same for Orc card. 
*/


function getDiceRollArray(diceCount) {
   const newDiceRolls = []
   for (let i = 0; i < diceCount; i++) {
      newDiceRolls.push(Math.floor(Math.random()*6)+1); 
   }
   return newDiceRolls

}

getDiceRollArray(5)

const hero = {
   elementID: "hero",
   name: "Wizard",
   avatar: "/images/wizard.png",
   health: 60,
   diceRoll: [3,1,4],
   diceCount: 3
}

const monster = {
   elementID: "monster",
   name:"Orc",
   avatar: "/images/orc.png",
   health: 10,
   diceRoll: [2],
   diceCount: 1
}


function renderCharacter(data){
   const {elementID, name, avatar, health, diceRoll, diceCount} = data;

   let diceHtml = ""
   for (let i = 0; i < diceRoll.length; i++) {
      diceHtml += `<div class="dice">${diceRoll[i]}</div>`;
   }


   document.getElementById(elementID).innerHTML = `
   <div class="character-card">
   <h4 class="name">${name}</h4>
   <img class="avatar" src="${avatar}"/>
   <p class="health">health: <b> ${health} </b></p>
   <div class="dice-container">${diceHtml}</div>
   </div>    
`}

renderCharacter(hero)
renderCharacter(monster)


