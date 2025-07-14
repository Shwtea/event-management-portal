const { sequelize } = require('../../config/db.config');
const { Op } = require('sequelize');
const Event = require('../../models/event')(sequelize);
const User = require('../../models/user')(sequelize);
const Category = require('../../models/category')(sequelize);



const createEventService = async (eventData) => {
  try {
    const {
      title,
      description,
      publishTime,
      photos,        
      categoryId
    } = eventData;

    const newEvent = await Event.create({
      title,
      description,
      publishTime,
      photos,
      isDeleted: false,
      categoryId
    });

    return {
      status: 201,
      message: 'Event created successfully',
      data: newEvent
    };

  } catch (error) {
    return {
      status: 500,
      message: error.message || 'Error creating event'
    };
  }
};

const deleteEventService = async (eventId, deleteType) => {
  const event = await Event.findByPk(eventId);

  if (!event) {
    return {
      status: 404,
      message: 'Event not found'
    };
  }

  if (deleteType === 'perma') {
    await event.destroy();
    return {
      status: 200,
      message: 'Event permanently deleted'
    };
  } else {
    event.isDeleted = true;
    await event.save();

    return {
      status: 200,
      message: 'Event deleted'
    };
  }
};

const getPublishedEventsService = async (currentTime) => {
  const events = await Event.findAll({
    where: {
      isDeleted: false,
      publishTime: {
        [Op.lte]: currentTime
      }
    },
    include: [
      { model: User, attributes: ['id', 'email'] },
      { model: Category, attributes: ['id', 'name'] }
    ],
    order: [['publishTime', 'DESC']]
  });

  return events;
};


module.exports = {  createEventService,deleteEventService,getPublishedEventsService};