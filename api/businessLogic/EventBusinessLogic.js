
const {  deleteEventService, createEventService,getPublishedEventsService } = require("../service/EventService")
const moment = require('moment-timezone');


const deleteEventBusiness = async (eventId, deleteType) => {
  try {
    if (!eventId) {
      return {
        status: 400,
        message: "Event ID is required"
      };
    }

    const result = await deleteEventService(eventId, deleteType);

    return result;

  } catch (error) {
    return {
      status: 500,
      message: error.message || "Something went wrong while deleting event"
    };
  }
};

const createEventBussiness = async (eventPayload) => {
  try {
    const {
      title,
      description,
      publishTime,
      photos,
      categoryId
    } = eventPayload;

   
    if (!title || !publishTime  || !categoryId) {
      return {
        status: 400,
        message: 'Missing required fields: title, publishTime, userId, or categoryId'
      };
    }

    const result = await createEventService({
      title,
      description,
      publishTime,
      photos,
      categoryId
    });

    return result;

  } catch (error) {
    return {
      status: 500,
      message: error.message || 'Something went wrong in business logic'
    };
  }
};

const getPublishedEventsBusiness = async (timezone) => {
  try {
    const currentTime = moment().tz(timezone).toDate(); 
    const result = await getPublishedEventsService(currentTime);

    return {
      status: 200,
      message: 'Events fetched successfully',
      data: result
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message || 'Something went wrong while fetching events'
    };
  }
};


module.exports = { deleteEventBusiness, createEventBussiness,getPublishedEventsBusiness };