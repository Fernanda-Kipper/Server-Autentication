const knex = require('knex');

export async function up(knex){
    return knex.schema.createTable('users', table=> {
        table.increments('id').primary();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
    })
}

export async function down(knex){
    return knex.schema.dropTable('users');
}