const faker = require('faker/locale/fr');
const { random } = require('./utils');

/**
 * 
 * @param {number} count 
 * @returns 
 */
const generateCats = (count) => Array.from(Array(count), generateCat);

const generateCat = (v,k) => {
    return {name: faker.name.firstName(), img: faker.image.animals(600, 460, true)};
}


module.exports = {
    generateCats
}