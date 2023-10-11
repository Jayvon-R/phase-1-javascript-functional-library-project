function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object') {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key]);
        }
      }
    }
  
    return collection;
  }
  
  function myMap(collection, callback) {
    const newArray = [];
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        newArray.push(callback(collection[i]));
      }
    } else if (typeof collection === 'object') {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          newArray.push(callback(collection[key]));
        }
      }
    }
  
    return newArray;
  }
  
  
  function myReduce(collection, callback, acc) {
    if (Array.isArray(collection)) {
      if (acc === undefined) {
        acc = collection[0];
        for (let i = 1; i < collection.length; i++) {
          acc = callback(acc, collection[i]);
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          acc = callback(acc, collection[i]);
        }
      }
    } else if (typeof collection === 'object') {
      if (acc === undefined) {
        let keys = Object.keys(collection);
        acc = collection[keys[0]];
        for (let i = 1; i < keys.length; i++) {
          acc = callback(acc, collection[keys[i]]);
        }
      } else {
        let keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
          acc = callback(acc, collection[keys[i]]);
        }
      }
    }
    return acc;
  }
  
  
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object') {
      for (const key in collection) {
        if (predicate(collection[key])) {
          return collection[key];
        }
      }
    }
  
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const result = [];
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else if (typeof collection === 'object') {
      for (const key in collection) {
        if (predicate(collection[key])) {
          result.push(collection[key]);
        }
      }
    }
  
    return result;
  }
  
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    }
  
    return 0; 
  }
  
  function myFirst(array, n = 1) {
    if (n === 1) {
      return array[0];
    } else if (n <= 0) {
      return [];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n = 1) {
    const length = array.length;
    if (n === 1) {
      return array[length - 1];
    } else if (n <= 0) {
      return [];
    } else {
      return array.slice(Math.max(length - n, 0));
    }
  }
  
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  