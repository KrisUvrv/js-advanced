'use strict';

class Car {
  #make;
  #model;
  #run;

  constructor(make, model, run) {
    this.#make = make;
    this.#model = model;
    this.#run = run;
  }

  set run(newRun) {
    this.#run = newRun;
  }

  get run() {
    return this.#run
  }

   info() {
    console.log(`${this.#make} ${this.#model} ${this.#run}`);
  }
}

const car = new Car('BMW', 'X6', '15000');
car.info();
car.run = '17000';
car.info();

console.log(car.run);













