

var chocolateBars = ["sneakers", "hundred grand" , "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  return [arrya, ...element]
  
}

function destructivelyAddElementToEndOfArray(array, element){
  array.shift(element)
}