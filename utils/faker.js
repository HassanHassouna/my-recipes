const {faker} = require('@faker-js/faker')

class RandomChefGenerator {
    getRandomChefFullName() {
        return faker.person.fullName()
    }
}


module.exports = RandomChefGenerator
