const Classes = require('./classes-model')

const confirmId = async (req, res, next) => {
    const { id } = req.params
    const aClass = await Classes.getById(id)
    !aClass ? res.status(404).json({message: 'Class with ID not found'})  : next() 
}

const confirmPayload = async (req, res, next) => {
    const { class_type, start_time, duration, intensity_level, location, num_of_attendees, max_class_size } = req.body

    if (!class_type || !start_time || !duration || !intensity_level|| !location|| !num_of_attendees|| !max_class_size) {
        res.status(401).json({ message: 'class type, start time, duration, intensity level, location, number of attendees, and max class size are required.' })
    } else {
        next();
    }
}

module.exports = {
    confirmId,
    confirmPayload
}