exports.up = function(knex, Promise) {
  return knex.schema.createTable('bus_stop', (table) => {
    table.increments();
    table.string('street');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bus_stop');
};
