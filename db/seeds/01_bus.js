
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bus').del()
    .then(function () {
      // Inserts seed entries
      return knex('bus').insert([
        {seats:1,color:'yellow',driver_name:'A'},
        {seats:2,color:'green',driver_name:'B'},
        {seats:3,color:'white',driver_name:'C'},
      ]);
    });
};
