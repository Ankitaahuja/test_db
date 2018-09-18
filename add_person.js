const pg = require("pg");
const settings = require("./settings"); // settings.json
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: settings.user,
    password: settings.password,
    database: settings.database
  }
});

const firstName = process.argv[2];
const lastName = process.argv[3];
const birthDate = process.argv[4];

console.log(firstName)
const insertData = {first_name: firstName,
last_name: lastName,
birthdate: birthDate}


knex ("famous_people"). insert(insertData)
  .returning ('*')
  .then(rows => console.log(rows))
  .catch(err => console.log(err.message))
