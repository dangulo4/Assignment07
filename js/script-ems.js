// CREATE AN ARRAY OF EMPLOYEES
let employee = [];
let employees = JSON.parse(localStorage.getItem('employees')) || [
  ['05698474', 'Daniel Angulo', 8978, 'dangulo4@gmail.com', 'Engineering'],
  ['89785693', 'Hank Garland', 1951, 'hank@mail.com', 'Sales'],
  ['64578963', 'Grady Martin', 5619, 'grady@mail.com', 'Administrative'],
  ['56789632', 'Holly Smith', 1920, 'holly@mail.com', 'Quality Assurance'],
  ['78000247', 'James Crook', 3216, 'james@mail.com', 'Sales'],
];
// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
localStorage.setItem('employees', JSON.stringify(employees));
const displayEmployeeList = () => {
  // IF THERE ARE NO employees IN ARRAY, CHECK STORAGE
  if (employees.length === 0) {
    // GET employees FROM STORAGE OR EMPTY STRING IF STORAGE IS EMPTY
    storage = localStorage.getItem('employees') || '';
  }
};

// GET DOM ELEMENTS
const $ = (id) => {
  return document.getElementById(id);
};
// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
let table = document.querySelector('tbody');
let form = document.querySelector('form');
// DISPLAY employees
buildGrid(employees);

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();
  // GET THE VALUES FROM THE TEXT BOXES
  if ($('id').value !== '') {
    // ADD employee TO ARRAY
    employee.push($('id').value);
    employee.push($('name').value);
    employee.push($('extension').value);
    employee.push($('email').value);
    employee.push($('department').value);
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(employee);
    // ADD employee TO STRORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus();
    // BUILD THE GRID
    buildGrid(employees);
  } else {
    alert('Please enter an Employee.');
  }
  // RESET THE FORM
  form.reset();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
  // CONFIRM THE DELETE
  // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
  // REMOVE EMPLOYEE FROM ARRAY
  // BUILD THE GRID
});

// BUILD THE EMPLOYEES GRID
function buildGrid(employees) {
  // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
  // LOOP THROUGH THE ARRAY OF EMPLOYEES AND BIND THE TBODY TO THE EMPLOYEE TABLE
  // UPDATE EMPLOYEE COUNT
  // STORE THE ARRAY IN STORAGE
  table.innerHTML = employees.map((item) => {
    // REBUILD THE TBODY FROM SCRATCH AND ROW STRUCTURE
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
  if (employees.length === 0) {
    // GET employees FROM STORAGE OR EMPTY STRING IF STORAGE IS EMPTY
    employees = localStorage.getItem('employees') || '';
  }
}
