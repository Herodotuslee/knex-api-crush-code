
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bus_info', (table) => {
    table.increments();
    table.integer("bus_route_id")
      .notNullable()
      .references('id')
      .inTable('bus_route')
      .onDelete('CASCADE')
      .index();
      table.integer("bus_stop_id")
        .notNullable()
        .references('id')
        .inTable('bus_stop')
        .onDelete('CASCADE')
        .index();
        table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bus_stop');
};
