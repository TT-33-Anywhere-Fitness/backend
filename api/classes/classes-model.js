const db = require('../../data/db-config')

//Handles GET
const getAll = () => {
    return db('classes')
    .select('class_id', 'class_type', 'class_image', 'start_time', 'duration', 'intensity_level', 'location', 'num_of_attendees', 'max_class_size', 'user_id')
}

const getById = (id) => {
    return db('classes')
    .where('class_id', id)
    .select('class_id','class_type', 'class_image', 'start_time', 'duration', 'intensity_level', 'location', 'num_of_attendees', 'max_class_size', 'user_id').first()
}

//Handles POST
const addClass = async (classes) => {
    return await db('classes')
    .insert(classes, ['class_id', 'class_type', 'class_image', 'start_time', 'duration', 'intensity_level', 'location', 'num_of_attendees', 'max_class_size', 'user_id'])
}

//Handles PUT
const editClass = async (id, data) => {
    return await db('classes')
    .where('class_id', id)
    .update(data, ['class_type', 'class_image', 'start_time', 'duration', 'intensity_level', 'location', 'num_of_attendees', 'max_class_size'])
}
//Handles DELETE
const deleteClass = async (id) => {
    const deleted = await getById(id)
    await db('classes').where('class_id', id).del()
    return deleted
}

module.exports = {
    getAll,
    getById,
    addClass, 
    editClass,
    deleteClass
}