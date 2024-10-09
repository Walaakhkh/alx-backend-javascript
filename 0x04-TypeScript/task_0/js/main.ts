// task_0/js/main.ts

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles'
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(students: Student[]): void {
  // Create a table element
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');

  // Create table headers
  const header1 = document.createElement('th');
  header1.textContent = 'First Name';
  const header2 = document.createElement('th');
  header2.textContent = 'Location';
  
  headerRow.appendChild(header1);
  headerRow.appendChild(header2);
  table.appendChild(headerRow);

  // Append a new row for each student
  students.forEach(student => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

  // Append the table to the body
  document.body.appendChild(table);
}

// Call the renderTable function
renderTable(studentsList);
