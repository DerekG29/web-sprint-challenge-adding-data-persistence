const db = require('../../data/dbConfig');

const getResourceById = async (resource_id) => {
  const result = await db('resources')
    .where({ resource_id })
    .first();
  return result;
}

const getResources = async () => {
  const result = await db('resources');
  return result;
}

const insertResource = async (resource) => {
  const resource_id = await db('resources')
    .insert(resource);
  const result = await getResourceById(resource_id);
  return result;
}


module.exports = {
  getResources,
  insertResource
}
