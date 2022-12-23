"use strict";

let i = 0;

// Takes value index value from deleteButtonTableRow button's this.parentNode.parentNode.nodeIndex

let deleteTableRow = (k) => {
  document.getElementById("expenseTable").deleteRow(k);
};

document.getElementById("addExpense").addEventListener("click", () => {
  let table = document.getElementById("expenseTable");
  let tableRow = table.insertRow(-1);

  let typeOfExpenseDataCell = tableRow.insertCell(-1);
  let nameOfExpenseDataCell = tableRow.insertCell(-1);
  let dateOfExpenseDataCell = tableRow.insertCell(-1);
  let amountOfExpenseDataCell = tableRow.insertCell(-1);
  let deleteButtonTableRow = tableRow.insertCell(-1);

  let expenseValues = {
    typeOfExpense: document.getElementById("typeOfExpense").value,
    nameOfExpense: document.getElementById("nameOfExpense").value,
    dateOfExpense: document.getElementById("dateOfExpense").value,
    amountOfExpense: document.getElementById("amountOfExpense").value,
  };

  i++;

  tableRow.id = `${i}`;

  typeOfExpenseDataCell.textContent = expenseValues.typeOfExpense;
  nameOfExpenseDataCell.textContent = expenseValues.nameOfExpense;
  dateOfExpenseDataCell.textContent = expenseValues.dateOfExpense;
  amountOfExpenseDataCell.textContent = expenseValues.amountOfExpense;

  deleteButtonTableRow.innerHTML = `<button onclick="deleteTableRow(this.parentNode.parentNode.rowIndex)" class="deleteButtons" id="deleteButtonTableRow${i}">X</button>`;
});
