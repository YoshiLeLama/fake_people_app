const faker = require('faker/locale/fr');
const { random } = require('lodash');

/**
 * 
 * @param {Number} count 
 * @param {Function} generator Two parameters : value of the current array element and index of this element. Paramaters should be ignored most of the time.
 * @returns 
 */
const generateArrayOfFakes = (count, generator) => JSON.stringify(Array.from(Array(typeof(count) === 'string' ? Number.parseInt(count) : count), generator));

const generateAnimal = () => ({ name: faker.name.firstName(), img: faker.image.animals(600, 460, true) });

const generateStudent = () => {
    const gender = random(0,1) ? 'male':'female';
    const first_name = faker.name.firstName(gender);
    const last_name = faker.name.lastName();
    const email = faker.internet.email(first_name, last_name);
    const phone = faker.phone.phoneNumber();
    const address = `${faker.address.streetAddress()}, ${faker.address.cityName()}`;
    const avatar = faker.image.avatar();

    return {
        gender,
        first_name,
        last_name,
        email,
        phone,
        address,
        avatar
    }
}

module.exports = {
    generateArrayOfFakes,
    generateAnimal,
    generateStudent
}