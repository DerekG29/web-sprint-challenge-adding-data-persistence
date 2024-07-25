const db = require('../../data/dbConfig');

const getProjectById = async (project_id) => {
  const result = await db('projects')
    .where({ project_id })
    .first();
  result.project_completed = 
    Boolean(result.project_completed);
  return result;
}

const getProjects = async () => {
  const data = await db('projects');
  const result = data.map(item => {
    return {
      ...item,
      project_completed: Boolean(item.project_completed)
    }
  })
  return result;
}

const insertProject = async (project) => {
  const project_id = await db('projects')
    .insert(project);
  const result = await getProjectById(project_id);
  return result;
}

module.exports = {
  getProjects,
  insertProject,
}