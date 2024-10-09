export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    // Update the array in-place using the index from the original array
    array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
