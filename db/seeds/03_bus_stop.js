
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bus_stop').del()
    .then(function () {
      // Inserts seed entries
      return knex('bus_stop').insert([
        {street:'A'},
        {street:'B'},
        {street:'C'}
      ]);
    });
};
