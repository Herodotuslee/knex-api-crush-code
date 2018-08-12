exports.up = function(knex, Promise) {
  return knex.schema.createTable("bus_route",(table)=>{
    table.increments();
    table.text("description");
    table.integer("bus_id")
      .notNullable()
      .references('id')
      .inTable('bus')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("bus_route");
};
