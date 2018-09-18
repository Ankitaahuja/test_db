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

const name = process.argv[2];

knex SELECT * 
FROM famous_people
WHERE first_name ILIKE '${name}'
OR last_name ILIKE '${name}'('famous_people')
  .then(function (rows) {
    // console.log(rows);
    console.log(`found '${rows.length}' person(s) by the name '${name}'`); 
    let id = 1
        rows.forEach(x => {
            const final = `- ${id++}, ${x.first_name} ${x.last_name}, born '${x.birthdate.toLocaleString().slice(0,-9)}'`
            console.log(final);
        })
  })
  .catch(function (error) {
    console.error(error);
  });

  // console.log(`found '${rows.length}' person(s) by the name '${name}'`); 
  // let id = 1
  //     result.rows.forEach(x => {
  //         const final = `- ${id++}, ${x.first_name} ${x.last_name}, born '${x.birthdate.toLocaleString().slice(0,-9)}'`
  //         console.log(final);
  //     })