'use strict';

const Character = function(race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
}

Character.prototype.speak = function() {
  console.log(`Race: ${this.race} Language: ${this.language}, Name: ${this.name}`)
}

const Orc = function(name, language, weapon) {
  Character.call(this, 'orc', name, language)
  this.weapon = weapon;
}

// Orc.prototype = Object.create(Character.prototype);
// Object.setPrototypeOf(Orc.prototype, Character.prototype);
Orc.prototype.__proto__ = Character.prototype;

Orc.prototype.hit = function() {
  console.log(`${this.name} attacks`);
}

Orc.prototype.spell = function() {
  console.log(`${this.name} casts a spell`);;
}

Orc.prototype.createSpell = function() {
  console.log(`The new spell was created by ${this.name}`)
}

// const personage1 = new Character('human', 'Albert', 'english');
// const personage2 = new Orc('Gris', 'orkish', 'git');
//
// console.log(personage1.speak());
// console.log(personage2.speak());
// console.log(personage2.hit());
// console.log(personage2.spell());
// console.log(personage2.createSpell());
