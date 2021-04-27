const db = require('../../data/db-config')

const getAll = () => {
    return db('classes').select('class_id', 'class_type', 'class_image', 'start_time', 'duration', 'intensity_level', 'location', 'num_of_attendees', 'max_class_size', 'user_id')
}

const addClass = async (classes) => {
    return await db('classes').insert(classes, ['class_id', 'class_type', 'class_image', 'start_time', 'duration', 'intensity_level', 'location', 'num_of_attendees', 'max_class_size', 'user_id'])
}

module.exports = {
    getAll,
    addClass
}