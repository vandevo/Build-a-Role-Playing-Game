/*
Challenge: 
1. Take the hard-coded HTML for the Wizard card, bring it 
   into index.js and then inject it back into its div with 
   JavaScript.
2. Do the same for Orc card. 
*/

const heroElementId = "hero"
const heroName = 'Wizard'
const heroAvatar = '/images/wizard.png'
const heroHealth = "60";
const heroDiceRoll = 6;

const monsterElementId = "monster"
const monsterName = 'Orc'
const monsterAvatar = '/images/orc.png'
const monsterHealth = "10";
const monsterDiceRoll = 4;


function renderCharacter(elementID, name, avatar, health, diceRoll){
   document.getElementById(elementID).innerHTML = `
   <div class="character-card">
   <h4 class="name">${name}</h4>
   <img class="avatar" src="${avatar}"/>
   <p class="health">health: <b> ${health} </b></p>
   <div class="dice-container"><div class="dice">${diceRoll}</div></div>
   </div>    
`}

renderCharacter(heroElementId, heroName, heroAvatar, heroHealth, heroDiceRoll)
renderCharacter(monsterElementId, monsterName, monsterAvatar, monsterHealth, monsterDiceRoll)