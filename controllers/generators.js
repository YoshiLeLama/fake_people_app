const faker = require('faker/locale/fr');
const { random } = require('lodash');
const { getDepartment } = require('../utils/department');

/**
 * 
 * @param {Number} count
 * @param {Function} generator Two parameters : value of the current array element and index of this element. Paramaters should be ignored most of the time.
 * @returns 
 */
const generateArrayOfFakes = async (count, generator) => {
    let arr = new Array(count);
    for (let i = 0; i < count; i++) {
        let element = await generator();
        arr[i] = element;
    }
    return arr;
};
const generateJSONOfFakes = async (count, generator) => {
    const arr = await generateArrayOfFakes(count, generator);
    return JSON.stringify(arr);
};

const generateAnimal = async () => ({ name: faker.name.firstName(), img: faker.image.animals(600, 460, true) });

const generatePerson = async () => {
    const gender = random(0,1) ? 'male':'female';
    const first_name = faker.name.firstName(gender);
    const last_name = faker.name.lastName();
    const email = faker.internet.email(first_name, last_name);
    const phone = faker.phone.phoneNumber();
    const address = `${faker.address.streetAddress()}, ${faker.address.cityName()}`;
    const avatar = faker.image.avatar();
    const department = await getDepartment();

    console.log(department)

    return {
        gender,
        first_name,
        last_name,
        email,
        phone,
        address,
        avatar,
        department
    }
}

module.exports = {
    generateArrayOfFakes,
    generateJSONOfFakes,
    generateAnimal,
    generatePerson
}