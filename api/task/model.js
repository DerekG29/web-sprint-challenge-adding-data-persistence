const db = require('../../data/dbConfig');

const getTaskById = async (task_id) => {
  const result = await db('tasks')
    .where({ task_id })
    .first();
  result.task_completed = 
    Boolean(result.task_completed);
  return result;
}

const getTasks = async () => {
  const data = await db('tasks as t')
    .innerJoin('projects as p', 't.project_id', 'p.project_id')
    .select('t.*', 'project_name', 'project_description');
  const result = data.map(item => {
    return {
      ...item,
      task_completed: Boolean(item.task_completed)
    }
  });
  return result;
}

const insertTask = async (task) => {
  const task_id = await db('tasks')
    .insert(task);
  const result = await getTaskById(task_id);
  return result;
}

module.exports = {
  getTasks,
  insertTask
}