exports.up = function(knex, Promise) {
  return knex.schema.createTable("bus",(table)=>{
    table.increments(); // Creates id column
    table.integer("seats"); // Creates seats column as varchar(255)
    table.string("color"); // Creates color column as varchar(255)
    table.string("driver_name"); // Creates drive_name column as varchar(255)
    table.timestamps(true, true); // Creates created_at and updated_at columns to use as timestamps
  })
};


exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bus');
};
