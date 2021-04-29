const db = require('../../data/db-config')

const findUser = () => {
    return db('users')
    .select('user_id', 'created_at', 'username', 'password', 'user_type')
}

const findUserById = (id) => {
    return db('users')
    .where('user_id', id)
    .select('user_id', 'created_at', 'username', 'password', 'user_type')
    .first()
}

const addUser = async (user) => { 
    return await db('users')
    .insert(user, ['username', 'user_type'])
}

const editUser = async (id, data) => {
    return await db('users')
    .where('user_id', id)
    .update(data, ['username', 'user_type'])
}

const deleteUser = async (id) => {
    return await db('users')
    .where('user_id', id)
    .del()
}

module.exports = {
    findUser,
    findUserById,
    addUser,
    editUser,
    deleteUser
}