import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
  let planetsWithMoons = data.planets.filter((planet) => planet.moons);
  planetsWithMoons.map((planet) => (planet.moons = planet.moons.length));
  let moonCount = planetsWithMoons.map((planet) => planet.moons);
  let totalMoonCount = moonCount.reduce((acc, value) => acc + value);

  return totalMoonCount;

  //Question for Jon, Bring up in learning time with jon:
  //Question: Why does the top function work but the chaining down below does now?
  //Had a lot of odd issues with moon in genereal getting undefined and such
  // May have figured it out in future questions, will still ask to understand better

  // let planetsWithMoons = data.planets
  //   .filter((planet) => planet.moons)
  //   .map((planet) => (planet.moons = planet.moons.length));
  // let moonCount = planetsWithMoons.map((planet) => planet.moons);
  // let totalMoonCount = moonCount.reduce((acc, value) => acc + value);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
