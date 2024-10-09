// Testing the function
const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie']),
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
    console.log(item);
}
