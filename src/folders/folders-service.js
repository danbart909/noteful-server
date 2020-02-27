const FoldersService = {
  getAllFolders(knex) {
    return knex.select('*').from('folders')
  },
  getById(knex, id) {
    return knex.from('folders').select('*').where({ id }).first()
  },
  insertFolders(knex, newFolders) {
    return knex
      .insert(newFolders)
      .into('folders')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },
  deleteFolders(knex, id) {
    return knex('folders')
    .where({ id })
    .delete()
  },
  updateFolders(knex, id, newFoldersFields) {
    return knex('folders')
      .where({ id })
      .update(newFoldersFields)
  },
}

module.exports = FoldersService