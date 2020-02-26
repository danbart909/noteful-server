const AnyService = {
  getAllAny(knex) {
    return knex.select('*').from('anydb')
  },
  getById(knex, id) {
    return knex.from('anydb').select('*').where('id', id).first()
  },
  insertAny(knex, newAny) {
    return knex
      .insert(newAny)
      .into('anydb')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },
  deleteAny(knex, id) {
    return knex('anydb')
    .where({ id })
    .delete()
  },
  updateAny(knex, id, newAnyFields) {
    return knex('anydb')
      .where({ id })
      .update(newAnyFields)
  },
}

module.exports = AnyService