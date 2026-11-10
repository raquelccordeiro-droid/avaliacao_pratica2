import {knex} from "../database/knex.js";


async getAll() {
    const jogos = await knex('veiculos').select().returning();
    return jogos;
}