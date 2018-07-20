var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray(array, element) {
  var nameArray = [1]
  nameArray.unshift("foo");
  return nameArray
}

function addElementToBeginningOfArray(array, element) {
  var array2 = [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return [...array, element]
}

function addElementToEndOfArray(array, element) {
  [...array, element]
  return array
}
