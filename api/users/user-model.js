
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

module.exports = {
    findUser,
    findUserById
}