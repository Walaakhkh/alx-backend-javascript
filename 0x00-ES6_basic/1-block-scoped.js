// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  let task = false;  // Use let instead of var
  let task2 = true;  // Use let instead of var

  if (trueOrFalse) {
    let task = true;  // This task is scoped to the if block
    let task2 = false; // This task2 is also scoped to the if block
  }

  return [task, task2]; // Returns the outer task and task2
}
