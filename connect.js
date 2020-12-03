const { Model } = require('objection');
const Knex = require('knex');

const knex = Knex({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'lsj1229love@',
      database : 'sample_api'
    }
});

Model.knex(knex)

module.exports = Model