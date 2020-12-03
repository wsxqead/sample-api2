//const BaseModel = require('./knex')
const BaseModel = require('./connect');

class Person extends BaseModel {
    static get tableName() {
      return 'persons';
    }
}

module.exports = Person