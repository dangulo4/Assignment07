// CREATE AN ARRAY OF EMPLOYEES
let storage;
let employees = [
  ['05698474', 'Daniel Angulo', 8978, 'dangulo4@gmail.com', 'Engineering'],
  ['89785693', 'Hank Garland', 1951, 'hank@mail.com', 'Sales'],
  ['64578963', 'Grady Martin', 5619, 'grady@mail.com', 'Administrative'],
  ['56789632', 'Holly Smith', 0920, 'holly@mail.com', 'Quality Assurance'],
  ['78000247', 'James Crook', 3216, 'james@mail.com', 'Sales'],
];
// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
localStorage.setItem('employees', JSON.stringify(employees));
const displayEmolyeeList = () => {
  // IF THERE ARE NO employees IN ARRAY, CHECK STORAGE
  if (employees.length === 0) {
    // GET employees FROM STORAGE OR EMPTY STRING IF STORAGE IS EMPTY
    storage = localStorage.getItem('employees') || '';
    // IF NOT EMPTY, CONVERT TO ARRAY AND STORE IN employees VARIABLE
    // IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
    if (storage.length > 0) {
      employees = storage;
    }
  }
};

// GET DOM ELEMENTS
const $ = (id) => {
  return document.querySelector(id);
};
// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
let table = document.querySelector('tbody');
// for (let i = 0; i < employees.length; i++) {
// DISPLAY employees
table.innerHTML = employees.map((item) => {
  return `<tbody>
      <tr>
        <td>${item[0]}</td>
        <td>${item[1]}</td>
        <td>${item[2]}</td>
        <td>${item[3]}</td>
        <td>${item[4]}</td>
      </tr>
    </tbody>`;
});
// }

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
  // PREVENT FORM SUBMISSION
  // GET THE VALUES FROM THE TEXT BOXES
  // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
  // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
  // BUILD THE GRID
  // RESET THE FORM
  // SET FOCUS BACK TO THE ID TEXT BOX
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
  // CONFIRM THE DELETE
  // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
  // REMOVE EMPLOYEE FROM ARRAY
  // BUILD THE GRID
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
  // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
  // REBUILD THE TBODY FROM SCRATCH
  // LOOP THROUGH THE ARRAY OF EMPLOYEES
  // REBUILDING THE ROW STRUCTURE
  // BIND THE TBODY TO THE EMPLOYEE TABLE
  // UPDATE EMPLOYEE COUNT
  // STORE THE ARRAY IN STORAGE
}
