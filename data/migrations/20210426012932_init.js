
exports.up = async (knex) => {
    await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.timestamp(true, false)
      users.string('username', 128).notNullable()
      users.string('password', 128).notNullable()
      users.integer('user_type').defaultTo(1)
  })
    .createTable('classes', (classes) => {
        classes.increments('class_id')
        classes.string('class_type').notNullable()
        classes.string('start_time', 128).notNullable()
        classes.string('duration', 128).notNullable()
        classes.string('intensity_level', 128).notNullable()
        classes.string('location', 256).notNullable()
        classes.integer('num_of_attendees', 128).notNullable()
        classes.integer('max_class_size').notNullable()
        classes.integer('user_id')
          .unsigned()
          .references('user_id')
          .inTable('users')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')
    })
  }
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('classes')
      .dropTableIfExists('users')
  };