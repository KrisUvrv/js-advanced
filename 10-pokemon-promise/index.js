'use strict';

function getAbility(url, errorMessage, method = 'GET') {
  return fetch(url, {
    method
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`${errorMessage} ${response.status}`)
      }
      return response.json()
    })
}
getAbility('https://pokeapi.co/api/v2/pokemon/ditto', 'Cannot get pokemon abilities')
  .then(({abilities}) => {
    console.log(abilities);
    return getAbility(abilities[0].ability.url, 'Cannot get first ability');
  })
  .then( data => {
    const englishDescription = data.effect_entries.find(entry => entry.language.name === 'en').effect;
    console.log(englishDescription)
  })
  .catch(error => console.error(error.message));
