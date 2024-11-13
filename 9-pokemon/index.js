'use strict';

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function () {
  const pokemon = JSON.parse(this.responseText);
  const url = pokemon.abilities[0].ability.url;

  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();

  request.addEventListener('load', function () {
    const abilityData = JSON.parse(this.responseText);
    const englishDescription = abilityData.effect_entries.find(entry => entry.language.name === 'en').effect;

    console.log(englishDescription)
  });
});

/* вариант с перебором всех abilities */

// const request = new XMLHttpRequest();
// request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
// request.send();
//
// request.addEventListener('load', function () {
//   const pokemon = JSON.parse(this.responseText);

//   for (const ability of pokemon.abilities) {
//     const url = ability.ability.url;
//
//     const request = new XMLHttpRequest();
//     request.open('GET', url);
//     request.send();
//
//     request.addEventListener('load', function () {
//       const abilityData = JSON.parse(this.responseText);
//       const englishDescription = abilityData.effect_entries.find(entry => entry.language.name === 'en').effect;
//
//       console.log(englishDescription)
//     });
//   }
// });
