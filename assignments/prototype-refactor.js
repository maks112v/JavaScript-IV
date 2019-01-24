/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameLog {
	constructor(atr){
		this.roundNum = atr.roundNum;
		this.gameFinished = atr.gameFinished;
	}

	checkHealth(fighter1, fighter2){
		if(fighter1.healthPoints < 1 || fighter2.healthPoints < 1){
			this.gameFinished = true;
		}
	}

	randomCrit (damage){
		if(Math.floor(Math.random() * Math.floor(5)) === Math.floor(Math.random() * Math.floor(5))){
			damage++;
			let critDamage =  Math.floor(Math.random() * Math.floor(5));
      return {
				doCrit: true,
				damage: critDamage * damage,
			};
    }
    else {
      return {
				doCrit: false,
				damage: damage,
			};
    }
	}

	damageAmount(maxDamage){
		maxDamage++;
		return Math.floor(Math.random() * Math.floor(maxDamage));
	}

	select(){
		return Math.random() >= 0.5;
	}

	round(attacked, damage){
		this.roundNum++;
		attacked.takeDamage(damage);
	}

	report(attacked,damage,crit, name){
		if(this.gameFinished){
			let match = `${attacked.name} Died`;
			this.addRow(match, "bg-danger");
		}
		else {
			if(damage === 0){
				let match = `${attacked.name} did not get hit.`;
				this.addRow(match, "bg-success");
			}
			else if(crit){
				let match = `${attacked.name} was hit with and lost ${damage} and has ${attacked.healthPoints}`;
				this.addRow(match, "bg-warning");
			}
			else {
				let match = `${attacked.name} was hit and lost ${damage} and has ${attacked.healthPoints}`;
				this.addRow(match);
			}
		}
	}

	addRow(match, color){
		let table = document.getElementById("table-body");
		let row = table.insertRow();
		row.classList.add(color);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
		cell1.innerHTML = this.roundNum;
		cell2.innerHTML = match;
	}

	console(msg){
		console.log(msg);
	}

	consoleError (msg){
		console.error(msg);
	}
}

const currentGame = new GameLog({
	roundNum: 0,
	gameFinished: false,
});

class GameObject {
	constructor(atr){
		this.createdAt = atr.createdAt;
  	this.dimensions = atr.dimensions;
	}

	destroy(){
		return `${this.name} was removed from the game.`;
	}
}

class CharacterStats extends GameObject {
	constructor(atr){
		super(atr);
		this.healthPoints = atr.healthPoints;
  	this.name = atr.name;
	}

	takeDamage(){
		return `${this.name} took damage.`;
	}

	celebrate(){
		return `${this.name} HAS WON!`;
	}

	takeDamage(amount){
		this.healthPoints -= amount;
	}
}

class Humanoid extends CharacterStats{
	constructor(atr){
		super(atr);
		this.team = atr.team;
		this.weapons = atr.weapons;
		this.language = atr.language;
		this.alive = atr.alive;
	}

	greet(){
		return `${this.name} offers a greeting in ${this.language}.`;
	}
}

class Villian extends Humanoid{
	constructor(atr){
		super(atr);
		this.lightAttack = atr.attacks.lightAttack;
		this.mediumAttack = atr.attacks.mediumAttack;
		this.strongAttack = atr.attacks.strongAttack;
		this.heavyAttack = atr.attacks.heavyAttack;
		this.lightAttackUsed = 0;
		this.mediumAttackUsed = 0;
		this.strongAttackUsed = 0;
		this.heavyAttackUsed = 0;
	}

	chooseAttack(){
		let attack = Math.floor(Math.random() * Math.floor(4));
		if(attack === 0){
			return this.lightAttack;
		}
		else if(attack === 1){
			return this.mediumAttack;
		}
		else if(attack === 2){
			return this.strongAttack;
		}
		else{
			return this.heavyAttack;
		}
	}
}

class Hero extends Humanoid{
	constructor(atr){
		super(atr);
		this.lightAttack = atr.attacks.lightAttack;
		this.mediumAttack = atr.attacks.mediumAttack;
		this.strongAttack = atr.attacks.strongAttack;
		this.heavyAttack = atr.attacks.heavyAttack;
		this.lightAttackUsed = 0;
		this.mediumAttackUsed = 0;
		this.strongAttackUsed = 0;
		this.heavyAttackUsed = 0;
	}

}

const yokai = new Villian({
	createdAt: new Date(),
	dimensions: {
		length: 1,
		width: 2,
		height: 4,
	},
	healthPoints: 200,
	name: 'Yokai',
	team: 'Anti Big Hero 6',
	weapons: [
		'Robots',
		'Missiles',
	],
	language: 'English',
	alive: true,
	attacks: {
		lightAttack: {
			name: "Light Attack",
			damage: 5,
		},
		mediumAttack: {
			name: "Medium Attack",
			damage: 10,
		},
		strongAttack: {
			name: "Strong Attack",
			damage: 15,
		},
		heavyAttack: {
			name: "Heavy Attack",
			damage: 25,
		},
	}
});



const hamada = new Hero({
	createdAt: new Date(),
	dimensions: {
		length: 1,
		width: 2,
		height: 4,
	},
	healthPoints: 200,
	name: 'Hiro',
	team: 'Big Hero 6',
	weapons: [
		'Baymax',
		'Dagger',
	],
	language: 'English',
	alive: true,
	attacks: {
		lightAttack: 5,
		mediumAttack: 10,
		strongAttack: 15,
		heavyAttack: 25,
	}
});

let fight = (fighter1, fighter2) => {
	while(!currentGame.gameFinished){
		let dealTo = currentGame.select();
		let attacked = null;
		let damage = null;
		if(dealTo){
			//attack = fighter2.chooseAttack();
			attacked = fighter1;
			damage = currentGame.damageAmount(20);
		}
		else {
			attack = fighter1.chooseAttack();
			attacked = fighter2;
			damage = currentGame.damageAmount(attack.damage);
		}
		
		let crit = currentGame.randomCrit(damage);
		currentGame.round(attacked,crit.damage);
		currentGame.checkHealth(fighter1,fighter2);
		currentGame.report(attacked, crit.damage, crit.doCrit)
	}
}

//fight(yokai,hamada);

const startMatch = () => {
	fight(yokai,hamada);
}