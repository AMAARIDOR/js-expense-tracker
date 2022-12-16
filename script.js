"use strict";

let i = 0;

document.getElementById("addExpense").addEventListener("click", () => {
  let table = document.getElementById("expenseTable");
  let tableRow = table.insertRow(-1);
  let typeOfExpenseDataCell = tableRow.insertCell(-1);
  let nameOfExpenseDataCell = tableRow.insertCell(-1);
  let dateOfExpenseDataCell = tableRow.insertCell(-1);
  let amountOfExpenseDataCell = tableRow.insertCell(-1);
  let deleteButtonTableRow = tableRow.insertCell(-1);

  let typeOfExpenseElementValue =
    document.getElementById("typeOfExpense").value;
  let nameOfExpenseElementValue =
    document.getElementById("nameOfExpense").value;
  let dateOfExpenseElementValue =
    document.getElementById("dateOfExpense").value;
  let amountOfExpenseElementValue =
    document.getElementById("amountOfExpense").value;

  i++;

  tableRow.id = `tableRow${i}`;
  typeOfExpenseDataCell.id = `typeOfExpenseDataCell${i}`;
  nameOfExpenseDataCell.id = `nameOfExpenseDataCell${i}`;
  dateOfExpenseDataCell.id = `dateOfExpenseDataCell${i}`;
  amountOfExpenseDataCell.id = `amountOfExpenseDataCell${i}`;
  deleteButtonTableRow.id = `deleteButtonTableRow${i}`;

  typeOfExpenseDataCell.textContent = typeOfExpenseElementValue;
  nameOfExpenseDataCell.textContent = nameOfExpenseElementValue;
  dateOfExpenseDataCell.textContent = dateOfExpenseElementValue;
  amountOfExpenseDataCell.textContent = amountOfExpenseElementValue;
});
