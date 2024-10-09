/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a new row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert a new row and get the newRowID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row with ID: ${newRowID}`);

// Update the row with an age field
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row with ID: ${newRowID}`);

// Delete the row
CRUD.deleteRow(newRowID);
console.log(`Deleted row with ID: ${newRowID}`);
