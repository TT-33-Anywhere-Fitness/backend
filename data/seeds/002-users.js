
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE TABLE users, classes CASCADE')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Chantz', password: 'abc123', user_type: 1},
        {username: 'Austin', password: 'abc123', user_type: 1},
        {username: 'Tommy', password: 'abc123', user_type: 1},
        {username: 'Karla', password: 'abc123', user_type: 1},
      ])
    })
}
