interface Student {
    firstName: String;
    lastName: String;
    age: Number;
    location: String;
}
const person_1: Student = {
    firstName: 'James',
    lastName: 'Peter',
    age: 20,
    location: 'Paris',
}

const person_2: Student = {
    firstName: 'Mary',
    lastName: 'Cole',
    age: 23,
    location: 'London',   
}
let studentsList: Student[] = [person_1, person_2]

// Get a reference to the table body
let tableBody = document.querySelector("#studentTable tbody");
// Loop through the array and append a row for each student
studentsList.forEach(student => {
    
    // Create a new row element
    let row = document.createElement("tr");

    // Create table cells for each property of the student object
    let firstNameCell = document.createElement("td");
    firstNameCell.textContent = String(student.firstName);
    row.appendChild(firstNameCell);

    let lastNameCell = document.createElement("td");
    lastNameCell.textContent = String(student.lastName);
    row.appendChild(lastNameCell);

    let ageCell = document.createElement("td");
    ageCell.textContent = String(student.age);
    row.appendChild(ageCell);

    let locationCell = document.createElement("td");
    locationCell.textContent = String(student.location);
    row.appendChild(locationCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  });