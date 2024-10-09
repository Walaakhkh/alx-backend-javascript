export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // Use the iterator to get all employee names
  for (const name of reportWithIterator) {
    employeeNames.push(name);
  }

  // Join all names with ' | ' and return the result
  return employeeNames.join(' | ');
}
