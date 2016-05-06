const merge = require('lodash/merge');
const cloneDeep = require('lodash/cloneDeep');
const values = require('lodash/values');
const uuid = require('node-uuid').v4;
const faker = require('faker');

const data = Object.create(null);

const fixtures = []

for (let i = 0; i < 10; i++) {
  let past = faker.date.past();
  fixtures.push({
    id: uuid(),
    created: past,
    updated: past,
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraphs(),
  });
}

// Add fixtures so that there is some data in the datastore when the server
// first spins up
merge(data, fixtures);

/**
 * @module DataStore
 *
 * A very simple API wrapping a plain JavaScript object. This API is simply
 * meant to simulate simple database CRUD operations.
 *
 * NOTE: We use a bunch of cloneDeep to ensure that no references to the data
 * object or its values are returned and directly mutable.
 */

module.exports = {

  /**
   * Return all data in our datastore
   * @return {Array<object>}
   */
  fetchAll() {
    return cloneDeep(values(data));
  },

  /**
   * Return a single entry in our datastore by ID
   * @param {string} id
   * @return {object}
   */
  fetch(id) {
    return cloneDeep(data[id]);
  },

  /**
   * Save a single entry in our datastore and return the newly saved entry,
   * complete with ID, created and updated properties.
   * @param {object} v
   * @return {object}
   */
  save(v) {
    const id = uuid();
    const result = Object.assign(Object.create(null), v, {
      id,
      created: new Date(),
      updated: new Date(),
    });
    data[id] = result;
    return cloneDeep(result);
  },

  /**
   * Update an entry within our datastore by its ID. Performs a deep merge.
   * @param {string} id
   * @param {object} v
   * @return {object}
   */
  update(id, v) {
    merge(data[id], v, {  // NOTE: _.merge mutates values
      updated: new Date(),
    });
    return cloneDeep(data[id]);
  },

  /**
   * Remove a single entry from our datastore and return the newly removed
   * entry.
   * @param {string} id
   * @return {object}
   */
  remove(id) {
    const d = data[id];
    delete data[id];
    return d;
  },
};
