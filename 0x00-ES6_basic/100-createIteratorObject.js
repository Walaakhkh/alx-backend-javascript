export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const allEmployees = [];

  // Collect all employees into a single array
  for (const department in employees) {
    allEmployees.push(...employees[department]);
  }

  // Create an iterator for the allEmployees array
  return allEmployees[Symbol.iterator]();
}
