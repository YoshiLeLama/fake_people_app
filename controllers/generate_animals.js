const faker = require('faker/locale/fr');

/**
 * 
 * @param {number} count 
 * @returns 
 */
const generateAnimals = (count) => Array.from(Array(count), generateAnimal);

const generateAnimal = (v,k) => {
    return {name: faker.name.firstName(), img: faker.image.animals(600, 460, true)};
}


module.exports = {
    generateAnimals: generateAnimals
}