import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js"

function Character(data) {
    Object.assign(this, data)


    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function(diceCount) {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(function(dice){
            return `<div class="dice">${dice}</div>`
        }).join('')
    }
 

    this.takeDamage = function(attackScoreArray){

        const totalAttackScore = attackScoreArray.reduce(function(total, dice){
            return total + dice
        })
        this.health -= totalAttackScore
        if (this.health <= 0){
            this.dead = true
            this.health = 0
        } 
        
    }

    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount, diceArray } = this;      
        let diceHtml = this.getDiceHtml(diceCount);
        
           return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${diceArray}
                </div>
            </div>`;
    }  
 }

 export default Character