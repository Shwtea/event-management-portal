
const { deleteEventBusiness, createEventBussiness,getPublishedEventsBusiness } = require("../businessLogic/EventBusinessLogic")


const deleteEventController = async (req, res) => {
  const { id } = req.params;
  const { type  } = req.query;

  const result = await deleteEventBusiness(id, type);

  return res.status(result.status).json(result);
};

const createEventController = async (req, res) => {
  try {
    const {
      title,
      description,
      publishTime,
      categoryId
    } = req.body;

    const photos = req.files.map(file => file.buffer); 

    const response = await createEventBussiness({
      title,
      description,
      publishTime,
      photos,
      categoryId,
    });

    return res.status(response.status).json(response);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};



const getPublishedEventsController = async (req, res) => {
  try {
    const timezone = req.query.timezone || 'UTC'; 
    const result = await getPublishedEventsBusiness(timezone);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch events', error: error.message });
  }
};
module.exports = {  deleteEventController,createEventController,getPublishedEventsController }