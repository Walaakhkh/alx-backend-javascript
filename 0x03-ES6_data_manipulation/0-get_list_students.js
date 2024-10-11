// 0-get_list_students.js

/**
 * getListStudents - Returns an array of student objects
 * @returns {Array<Object>} Array of student objects with id, firstName, and location
 */
function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ];
}

export default getListStudents;
