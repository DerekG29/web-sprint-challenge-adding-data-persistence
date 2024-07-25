/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments('project_id');
      table.string('project_name')
        .notNullable();
      table.string('project_description');
      table.boolean('project_completed')
        .defaultTo(false);
    })
    .createTable('resources', table => { // many to many with projects using project_resources
      table.increments('resource_id');
      table.string('resource_name')
        .notNullable()
        .unique();
      table.string('resource_description');
    })
    .createTable('tasks', table => { // one to many with projects
      table.increments('task_id');
      table.string('task_description')
        .notNullable();
      table.string('task_notes');
      table.boolean('task_completed')
        .defaultTo(false);
      table.integer('project_id')
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
    })
    .createTable('project_resources', table => {
      table.increments('project_resources_id');
      table.integer('project_id')
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
      table.integer('resource_id')
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
