var knex = require ('knex')({
    client: 'sqlite3',
    connection: {
        host: 'local host',
        user: 'root',
        password: '',
        database: 'caveira.js'
    }
})
module.exports = knex;