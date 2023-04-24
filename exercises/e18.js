/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  let yearMap = new Map();
  let dYear = data.asteroids.map((asteroid) => asteroid.discoveryYear);
  let keyValueAsteroid = { max: 0, year: 0 };

  dYear.map((year) => {
    if (yearMap.has(year)) {
      yearMap.set(year, yearMap.get(year) + 1);
      if (yearMap.get(year) > keyValueAsteroid.max) {
        keyValueAsteroid.max = yearMap.get(year);
        keyValueAsteroid.year = year;
      }
    } else {
      yearMap.set(year, 1);
    }
  });

  //Oops used a forEach the first time
  // yearMap.forEach((asteroid, i) => {
  //   if (asteroid > keyValueAsteroid.max) {
  //     keyValueAsteroid.max = asteroid;
  //     keyValueAsteroid.year = i;
  //   }
  // });
  return keyValueAsteroid.year;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
