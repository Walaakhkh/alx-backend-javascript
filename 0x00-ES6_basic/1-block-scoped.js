export default function taskBlock(trueOrFalse) {
  var task = false;  // Keep the outer task variable
  var task2 = true;  // Keep the outer task2 variable

  if (trueOrFalse) {
    task = true;  // Modify the existing task variable
    task2 = false;  // Modify the existing task2 variable
  }

  return [task, task2];
}
