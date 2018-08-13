
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bus_info').del()
    .then(function () {
      // Inserts seed entries
      return knex('bus_info').insert([
        {bus_route_id:1,bus_stop_id:1},
        {bus_route_id:2,bus_stop_id:1},
        {bus_route_id:3,bus_stop_id:3},
        {bus_route_id:1,bus_stop_id:2}
      ]);
    });
};
