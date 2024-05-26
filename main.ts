// Requirements:
// 1) Use the same codebase where I left
// 2) Use for loop to insert multiple employees
// 3) Prepare edit, delete & updated function
// 4) Use inquirer to get input for employee id, employee name & salary

// Employee Management system:

// //2: use for loop to insert multiple employees:
// Define an arry to insert multiple employees:

let employees: string[] = [];

// define names of employees in another array:
let employeeNames: string[] = ["Aneela", "Aisha", "Amna", "Aiman"];

// use for loop to insert each name into employees array:
for (let i = 0; i < employeeNames.length; i++) {
  employees.push(employeeNames[i]);
}

// printing employees array to verify:
console.log(employees);

//// 3) Prepare edit, delete & updated function:

// Function to add an employee:

function addAnEmployee(employeeName: string) {
  employees.push(employeeName);
}

//Add employee named " Alia":
addAnEmployee("Alia");

// Print employees array to verify:
console.log(employees);

// Function to delete an employee:
function deleteAnEmployee(): void {
  employees.shift(); // Remove the first element from the employees array
}
// Call the deleteAnEmployee function to remove the first employee:
deleteAnEmployee();

// Output the updated employees array
console.log(employees);

// Updated function:

function updatedEmployee(oldName: string, newName: string) {
  let index = employees.indexOf(oldName);
  if (index !== -1) {
    employees.splice(1, 1, newName);
    console.log(`Updated ${oldName} to ${newName}`);
  } else {
    console.log(`${oldName} is not found in list`);
  }
}
updatedEmployee("Aisha", "Aania");
console.log(employees);

//// 4) Use inquirer to get input for employee id, employee name & salary:
// Import the inquirer module
import inquirer from "inquirer";

// Define an async function to get user input
async function getInput() {
  // Use inquirer to prompt the user for employee information
  const input = await inquirer.prompt([
    {
      name: "id",
      type: "number",
      message: "Enter employee's ID",
    },
    {
      name: "name",
      type: "input",
      message: "Enter employee's name",
    },
    {
      name: "salary",
      type: "number",
      message: "Enter employee's salary",
    },
  ]);

  // Log the user input to the console
  console.log(input);
}

// Call the getInput function to start the input process
getInput();
