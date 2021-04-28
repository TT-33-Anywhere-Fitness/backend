
exports.seed = function(knex) {
      return knex('users').insert([
        {username: 'Chantz', password: 'abc123', user_type: 1},
        {username: 'Austin', password: 'abc123', user_type: 1},
        {username: 'Tommy', password: 'abc123', user_type: 1},
        {username: 'Karla', password: 'abc123', user_type: 1},
      ]);
};
