// Place: asn2-doc\src\main\resources\static\js
// Filename: asn2.js

let studentData = [];

function fetchStudents() {
  fetch('http://localhost:8080/students')
    .then(response => response.json())
    .then(data => {
      studentData = data;
      displayStudentsTable();
      displayStudentBoxes();
    })
    .catch(error => {
      console.error('Error fetching student data:', error);
    });
}

async function addStudent() {
  // Get input values
  const nameInput = document.querySelector('.name-input');
  const weightInput = document.querySelector('.weight-input');
  const heightInput = document.querySelector('.height-input');
  const hairColorInput = document.querySelector('.hair-color-input');
  const gpaInput = document.querySelector('.gpa-input');
  const idInput = document.querySelector('.id-input');

  // Create a new student object
  const student = {
    name: nameInput.value,
    weight: weightInput.value,
    height: heightInput.value,
    hairColor: hairColorInput.value,
    gpa: gpaInput.value,
    id: idInput.value
  };

  try {
    const response = await fetch('http://localhost:8080/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(student)
    });

    if (response.ok) {
      // Clear input fields
      nameInput.value = '';
      weightInput.value = '';
      heightInput.value = '';
      hairColorInput.value = '';
      gpaInput.value = '';
      idInput.value = '';

      // Fetch updated student data from the backend
      fetchStudents();
    } else {
      console.error('Error adding student:', response.status);
    }
  } catch (error) {
    console.error('Error adding student:', error);
  }
}

async function deleteStudent(index) {
  try {
    const response = await fetch('http://localhost:8080/students/${id}', {
      method: 'DELETE'
    });

    if (response.ok) {
      // Fetch updated student data from the backend
      fetchStudents();
    } else {
      console.error('Error deleting student:', response.status);
    }
  } catch (error) {
    console.error('Error deleting student:', error);
  }
}

function displayStudentsTable() {
  const studentsTableBody = document.getElementById('students-table-body');
  studentsTableBody.innerHTML = '';



  // Loop through the studentData array and create table rows
  studentData.forEach((student, index) => {
    const row = document.createElement('tr');

    // Create table cells and set their content

    const idCell = document.createElement('td');
    idCell.textContent = student.id;
    row.appendChild(idCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = student.name;
    row.appendChild(nameCell);

    const weightCell = document.createElement('td');
    weightCell.textContent = student.weight;
    row.appendChild(weightCell);

    const heightCell = document.createElement('td');
    heightCell.textContent = student.height;
    row.appendChild(heightCell);

    const hairColorCell = document.createElement('td');
    hairColorCell.textContent = student.hairColor;
    row.appendChild(hairColorCell);

    const gpaCell = document.createElement('td');
    gpaCell.textContent = student.gpa;
    row.appendChild(gpaCell);

    const actionCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    
    // Add event listener to the delete button
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteStudent(id));
    actionCell.appendChild(deleteBtn);
    row.appendChild(actionCell);

    // Append the row to the table body
    studentsTableBody.appendChild(row);
  });
}

function displayStudentBoxes() {
  const studentBoxesContainer = document.getElementById('student-boxes');
  studentBoxesContainer.innerHTML = '';

  // Loop through the studentData array and create student boxes
  studentData.forEach(student => {
    const box = document.createElement('div');
    box.className = 'student-box';
    box.style.backgroundColor = student.hairColor;
    box.style.height = `${parseInt(student.height)}px`;
    box.style.width = `${parseInt(student.weight)}px`;

    // Create name and GPA elements
    const name = document.createElement('span');
    name.textContent = student.name;

    const gpa = document.createElement('span');
    gpa.textContent = `${student.gpa} GPA`;

    const id = document.createElement('span');
    id.textContent = `ID: ${student.id}`

    // Append elements to the student box
    box.appendChild(name);
    box.appendChild(document.createElement('br'));
    box.appendChild(gpa);
    box.appendChild(document.createElement('br'));
    box.appendChild(id);

    // Append the box to the container
    studentBoxesContainer.appendChild(box);
  });
}

// Execute fetchStudents() when the HTML page is loaded
document.addEventListener('DOMContentLoaded', fetchStudents);