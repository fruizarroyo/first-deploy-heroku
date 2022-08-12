const faker = require('faker');

class Users {
  constructor() {
    this.users = [];
    this.generate();
  }

  async generate() {
    const limit = 15;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        email: faker.internet.email(),
      });
    }
  }

  async get() {
    return this.users;
  }

  async findOne(id) {
    const user = this.users.find((item) => item.id === id);
    if (user) {
      return user;
    } else {
      return {
        message: 'No user found',
      };
    }
  }
}

module.exports = Users;
