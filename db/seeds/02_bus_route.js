
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bus_route').del()
    .then(function () {
      // Inserts seed entries
      return knex('bus_route').insert([
        {description:"To galvanize",bus_id:1},
        {description:"To home",bus_id:2},
        {description:"To Chruch",bus_id:3}
      ]);
    });
};
