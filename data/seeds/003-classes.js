
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE TABLE users, classes CASCADE')
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {class_type: 'Cardio', class_image: '', start_time: 'May 9th 3020', duration: '1 hour', intensity_level: 'Medium', location: 'Somewhere Town', num_of_attendees: 25, max_class_size: 50, },
        {class_type: 'Weights (Upper Body)', class_image: '', start_time: 'May 10th 7820', duration: '45 minutes', intensity_level: 'Easy', location: 'Imagination City', num_of_attendees: 12, max_class_size: 34, },
        {class_type: 'Yoga', class_image: '', start_time: 'Feb 12th 999', duration: '2 hours', intensity_level: 'Expert', location: 'AnyPlace Villa', num_of_attendees: 100, max_class_size: 120, },
        {class_type: 'Diet', class_image: '', start_time: 'Please Show up', duration: '1 hour', intensity_level: 'Hard', location: 'Random Grove', num_of_attendees: 2, max_class_size: 15, },
      ])
    })
}
