/*
Challenge: 
1. Take the hard-coded HTML for the Wizard card, bring it 
   into index.js and then inject it back into its div with 
   JavaScript.
2. Do the same for Orc card. 
*/

const hero = {
   elementID: "hero",
   name: "Wizard",
   avatar: "/images/wizard.png",
   health: 60,
   diceRoll: 6
}

const monster = {
   elementID: "monster",
   name:"Orc",
   avatar: "/images/orc.png",
   health: 10,
   diceRoll: 4
}


function renderCharacter(data){
   document.getElementById(data.elementID).innerHTML = `
   <div class="character-card">
   <h4 class="name">${data.name}</h4>
   <img class="avatar" src="${data.avatar}"/>
   <p class="health">health: <b> ${data.health} </b></p>
   <div class="dice-container"><div class="dice">${data.diceRoll}</div></div>
   </div>    
`}

renderCharacter(hero)
renderCharacter(monster)