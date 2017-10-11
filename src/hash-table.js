/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    const hashKey = getIndexBelowMax(key, this.limit);
    if (!this.storage[hashKey]) {
      const arr = [];
      arr[key] = value;
      return this.storage[hashKey] = arr;
    }
    return this.storage[hashKey][key] = value;
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const hashKey = getIndexBelowMax(key, this.limit);
    if (this.storage[hashKey] === undefined) return undefined;
    delete this.storage[hashKey][key];
    return;
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const hashKey = getIndexBelowMax(key, this.limit);
    if (this.storage[hashKey] === undefined) return undefined;
    return this.storage[hashKey][key];
  }
}

module.exports = HashTable;
