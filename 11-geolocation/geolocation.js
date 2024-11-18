'use strict';

function getCurrentPosition(position) {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('geolocation is not detected'));
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      error => {
        reject(new Error('geolocation is not detected'));
      }
    );
  });
}

getCurrentPosition()
  .then(coords => {
    console.log(`Geoposition is ${coords.latitude}, ${coords.longitude}`)
  })
  .catch(error => console.error(error))
  .finally(() => {
    console.log('Finally')
  })
