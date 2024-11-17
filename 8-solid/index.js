'use strict';

class Billing {
  constructor(amount) {
    this.amount = amount;
  }
  calculateTotal() {}
}

class FixedBilling extends Billing {
  constructor(amount) {
    super(amount);
  }
  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
  }

  calculateTotal() {
    return this.amount * this.hours;
  }
}

class ItemBilling extends Billing {
  constructor(amount, elements) {
    super(amount);
    this.elements = elements;
  }

  calculateTotal() {
    return this.amount * this.elements;
  }
}

const billing = new Billing(200);
const fixBilling = new FixedBilling(250);
const hourBilling = new HourBilling(300, 3);
const itemBilling = new ItemBilling(400, 2);

billing.calculateTotal();
console.log(fixBilling.calculateTotal());
console.log(hourBilling.calculateTotal());
console.log(itemBilling.calculateTotal());
