
exports.up = function(knex, Promise) {
    return Promise.all([
    knex.schema.createTable('milestones', table => {
        table.increments('id').primary()
        table.text('description')
        table.date('date_achieved')
      })
    ])
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('milestones')
};
