// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // check for numbers
  if (typeof obj === 'number') {
    return obj.toString();
  }
  //check for null
  if (obj === null) {
    return 'null';
  }
  // check for strings
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // check for booleans
  if (typeof obj === 'boolean') {
    if (obj) {
      return 'true';
    }
    return'false';
  }

  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      var stringArray = [];
      // check for arrays
      if (obj.length !== 0) {
        //loop thru array
        obj.forEach(function(item, index) {
          stringArray.push(stringifyJSON(item));
        })
        stringArray.join(',');
          //run stringify and store the value in stringArray
        //.join(',')
        //return
        return '[' + stringArray + ']';
      }
      return '[' + obj +']';
    } else { // check for objects implicitly
      return '{}';
    }
    // check for objects

  }
};
