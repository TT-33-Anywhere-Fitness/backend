//const Classes = require('./classes-model')

const confirmPayload = async (req, res, next) => {
    const { class_type, start_time, duration, intensity_level, location, num_of_attendees, max_class_size, user_id } = req.body

    if (!class_type || !start_time || !duration || !intensity_level|| !location|| !num_of_attendees|| !max_class_size || !user_id) {
        res.status(401).json({ message: 'class type, start time, duration, intensity level, location, number of clients, class size, and user id are required.' })
    } else {
        next();
    }
}

module.exports = {
    confirmPayload
}