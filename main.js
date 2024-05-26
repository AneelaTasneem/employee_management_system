// Requirements:
// 1) Use the same codebase where I left
// 2) Use for loop to insert multiple employees
// 3) Prepare edit, delete & updated function
// 4) Use inquirer to get input for employee id, employee name & salary
// //2: use for loop to insert multiple employees:
// Define an arry to insert multiple employees:
let employees = [];
// define names of employees in another array:
let employeeNames = ["Aneela", "Aisha", "Amna", "Aiman"];
// use for loop to insert each name into employees array:
for (let i = 0; i < employeeNames.length; i++) {
    employees.push(employeeNames[i]);
}
// printing employees array to verify:
console.log(employees);
//// 3) Prepare edit, delete & updated function:
// Function to add an employee:
function addAnEmployee(employeeName) {
    employees.push(employeeName);
}
//Add employee named " Alia":
addAnEmployee("Alia");
// Print employees array to verify:
console.log(employees);
// Function to delete an employee:
function deleteAnEmployee() {
    employees.shift(); // Remove the first element from the employees array
}
// Call the deleteAnEmployee function to remove the first employee:
deleteAnEmployee();
// Output the updated employees array
console.log(employees);
// Updated function:
function updatedEmployee(oldName, newName) {
    let index = employees.indexOf(oldName);
    if (index !== -1) {
        employees.splice(1, 1, newName);
        console.log(`Updated ${oldName} to ${newName}`);
    }
    else {
        console.log(`${oldName} is not found in list`);
    }
}
updatedEmployee("Aisha", "Aania");
console.log(employees);
//// 4) Use inquirer to get input for employee id, employee name & salary:
import inquirer from 'inquirer';
async function getInput() {
    const input = await inquirer.prompt([{
            name: "Employee's id",
            type: "number",
            message: "Enter employee's ID"
        },
        {
            name: "employee's name",
            type: "string",
            message: "Enter employee's name "
        },
        {
            name: "employee's salary",
            type: " number",
            message: "Enter employee's salary"
        }
    ]);
    console.log(input);
}
getInput();
