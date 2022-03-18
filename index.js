/*
Challenge: 
1. Take the hard-coded HTML for the Wizard card, bring it 
   into index.js and then inject it back into its div with 
   JavaScript.
2. Do the same for Orc card. 
*/


function getDiceRollArray(diceCount) {
return new Array(diceCount).fill(0).map(function(){
   return Math.floor(Math.random() * 6 + 1)
})

}

const hero = {
   elementID: "hero",
   name: "Wizard",
   avatar: "/images/wizard.png",
   health: 60,
   diceCount: 3
}

const monster = {
   elementID: "monster",
   name:"Orc",
   avatar: "/images/orc.png",
   health: 10,
   diceCount: 1
}


function Character(data){
  
   Object.assign(this, data)

   this.getDiceHtml = function(diceCount){
      return getDiceRollArray(diceCount).map(function(dice){
         return `<div class="dice">${dice}</div>`
      }).join('')
   } 
   
   this.getCharacterHtml = function(){
      const {elementID, name, avatar, health, diceCount} = data;
      let diceHtml = this.getDiceHtml(diceCount)
   
   
      document.getElementById(elementID).innerHTML = `
      <div class="character-card">
      <h4 class="name">${name}</h4>
      <img class="avatar" src="${avatar}"/>
      <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">${diceHtml}</div>
      </div>    
   `}
   }

const wizard = new Character(hero)
const orc = new Character(monster)

wizard.getCharacterHtml()
orc.getCharacterHtml()
