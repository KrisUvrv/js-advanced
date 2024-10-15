'use strict';
const dice = (type) => {
  const allTypes = {
    'd4': 4,
    'd6': 6,
    'd8': 8,
    'd10': 10,
    'd12': 12,
    'd16': 16,
    'd20': 20
  };
  const min = 1;
  const max = allTypes[type.toLowerCase()];
  if (!max) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log('case d4: ', dice('D4'));
// console.log('case d6: ', dice('D6'));
// console.log('case d8: ', dice('D8'));
// console.log('case d10: ', dice('D10'));
// console.log('case d12: ', dice('D12'));
// console.log('case d16: ', dice('D16'));
// console.log('case d20: ', dice('D20'));
