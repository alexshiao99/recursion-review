// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, inputElement) {
//   //edge case for if inputElement was undefined
//     //make inputElement to body
//   if (inputElement === undefined) {
//     inputElement = document.body;
//   }

//   // console.log('document.body.children, result: ', document.body.children);
//   var resultArray = [];
//   // make return array
//   //first input
//   //if classname exists

//   // console.log('inputElement.classList before if statement, result: ', inputElement.classList);
//   if (inputElement.classList.contains(className)) {
//     // console.log('inputElement.classList inside if statement, result: ', inputElement.classList);
//     resultArray = resultArray.concat(inputElement);
//   }
//     //if so concat element to return array
//   //does this input include a nested structure
//     //if so recursively call the function on each value of the nested structure
//   //start at body, check for children
//   if (inputElement.childNodes){
//     for (var i = 0; i < inputElement.childNodes.length; i++){
//       console.log('childNodes inside recursive statement: ', inputElement.childNodes);
//       resultArray = resultArray.concat(getElementsByClassName(className, inputElement.childNodes[i]));
//     }
//   }

// return resultArray;

  var elements = [];

  var getElementsByClass = function(element) {
    // base case 1: No more children
    // if has className
    // ends recursion
    if (element.nodeType === 1 && element.classList.contains(className)) {
      elements.push(element);
    }

    // recursive case: if children, loop through child array andrun getElementsByClassName
    // return result array
    if (element.childNodes.length !== 0) {
      element.childNodes.forEach(function (item, index) {
        getElementsByClass(item);
      })
    }
  }

getElementsByClass(document.body);
return elements;

  // recursive: if children, loop through child array andrun getElementsByClassName
  // return result array


};
