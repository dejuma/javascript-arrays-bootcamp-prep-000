var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var array2 = [element, ...array]
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  [...array, element]
  return [...array, element]
}
