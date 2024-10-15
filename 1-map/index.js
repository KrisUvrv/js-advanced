'use strict';

const array = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 1, name: "Вася"}
];

const setArray = [...new Set(array.map(el => el.id).map(id => array.find(el => el.id === id)))];
console.log('вариант 1: ', setArray);

const setArray2 = [...new Set(array.map(el => el.id))].map(id => array.find(el => el.id === id));
console.log('вариант 2: ', setArray2);


const obj = {};
array.forEach((el) => obj[el.id] = el)
console.log('вариант без Set: ', Object.values(obj));
