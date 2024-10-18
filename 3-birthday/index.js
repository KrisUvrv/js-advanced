'use strict';

const isValidAge = (birthdayDate) => {
  const userBirthdayDate = new Date(birthdayDate);
  const today = new Date();
  return (Number(today) - Number(userBirthdayDate)) / (1000 * 60 * 60 * 24 * 365.25) >= 14;
}

// console.log(isValidAge('2010-10-18'));
// console.log(isValidAge('2010-10-19'));


