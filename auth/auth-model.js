const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db('users').select(
    'id',
    'email',
    'password',
    'fullName',
    'investor',
    'image'
  );
}

function findBy(filter) {
  return db('users')
    .select('id', 'email', 'password', 'fullName', 'investor', 'image')
    .where(filter);
}

function findById(id) {
  return db('users')
    .select('id', 'email', 'password', 'fullName', 'investor', 'image')
    .where({ id })
    .first();
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}
