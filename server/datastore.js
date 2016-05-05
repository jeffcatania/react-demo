const merge = require('lodash/merge');
const cloneDeep = require('lodash/cloneDeep');
const values = require('lodash/values');
const uuid = require('node-uuid').v4;

const data = Object.create(null);

/**
 * NOTE: We use a bunch of clone deep to ensure that no references to the data
 * object or its values are returned and directly mutable.
 */

module.exports = {
  fetchAll() {
    return cloneDeep(values(data));
  },

  fetch(id) {
    return cloneDeep(data[id]);
  },

  save(v) {
    const id = uuid();
    const result = Object.assign(Object.create(null), v, {
      id,
      created: Date.now(),
      updated: Date.now(),
    });
    data[id] = result;
    return cloneDeep(result);
  },

  update(id, v) {
    merge(data[id], v, {  // _.merge mutates values
      updated: Date.now(),
    });
    return cloneDeep(data[id]);
  },

  remove(k) {
    const d = data[k];
    delete data[k];
    return d;
  },
};
