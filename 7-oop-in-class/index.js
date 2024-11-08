'use strict';

class Character {
  race;
  name;
  language;
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  speak() {
    console.log(`Race: ${this.race} Language: ${this.language}, Name: ${this.name}`)
  }
}

class Orc extends Character {
  weapon;
  constructor(name, language, weapon) {
    super('orc', name, language);
    this.weapon = weapon;
  }
  hit() {
    console.log(`${this.name} attacks`);
  }
  speak() {
      console.log(`hello, i'm orc, my name is ${this.name}, my language is ${this.language}`)
  }
}

class Elf extends Character {
  spell;
  constructor(name, language, spell) {
    super('elf', name, language);
    this.spell = spell;
  }
  createSpell() {
    console.log(`The new spell was created by ${this.name}`)
  }
  speak() {
    console.log(`hello, i'm elf, my name is ${this.name}, my language is ${this.language}`)
  }
}

const character = new Character('human', 'Albert', 'english');
const elf = new Elf('Gris', 'elven', 'git');
const orc = new Orc('Truc', 'orkish', 'git');

character.speak();
elf.speak();
orc.speak();
orc.hit();
elf.createSpell();
