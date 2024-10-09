export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];  // Create a new array to hold the modified values

  for (const value of array) {  // Use 'const' for 'value' as it is never reassigned
    newArray.push(`${appendString}${value}`);  // Use template literals to append
  }

  return newArray;  // Return the new array
}
