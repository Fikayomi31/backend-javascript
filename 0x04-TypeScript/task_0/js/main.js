var person_1 = {
    firstName: 'James',
    lastName: 'Peter',
    age: 20,
    location: 'Paris',
};
var person_2 = {
    firstName: 'Mary',
    lastName: 'Cole',
    age: 23,
    location: 'London',
};
var studentsList = [person_1, person_2];
// Get a reference to the table body
var tableBody = document.querySelector("#studentTable tbody");
// Loop through the array and append a row for each student
studentsList.forEach(function (student) {
    // Create a new row element
    var row = document.createElement("tr");
    // Create table cells for each property of the student object
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = String(student.firstName);
    row.appendChild(firstNameCell);
    var lastNameCell = document.createElement("td");
    lastNameCell.textContent = String(student.lastName);
    row.appendChild(lastNameCell);
    var ageCell = document.createElement("td");
    ageCell.textContent = String(student.age);
    row.appendChild(ageCell);
    var locationCell = document.createElement("td");
    locationCell.textContent = String(student.location);
    row.appendChild(locationCell);
    // Append the row to the table body
    tableBody.appendChild(row);
});
