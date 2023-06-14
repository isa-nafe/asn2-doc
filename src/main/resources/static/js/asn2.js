let studentData = [];
// Execute fetchStudents() when the HTML page is loaded
document.addEventListener('DOMContentLoaded', fetchStudents);
displayStudentsTable();
displayStudentBoxes();

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
  const idInput = document.querySelector('.id-input');
  const nameInput = document.querySelector('.name-input');
  const weightInput = document.querySelector('.weight-input');
  const heightInput = document.querySelector('.height-input');
  const hairColorInput = document.querySelector('.hair-color-input');
  const gpaInput = document.querySelector('.gpa-input');

  // Create a new student object
  const student = {
    id: idInput.value,
    name: nameInput.value,
    weight: weightInput.value,
    height: heightInput.value,
    hairColor: hairColorInput.value,
    gpa: gpaInput.value
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
      idInput.value = '';
      nameInput.value = '';
      weightInput.value = '';
      heightInput.value = '';
      hairColorInput.value = '';
      gpaInput.value = '';

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
    const response = await fetch(`http://localhost:8080/students/${index}`, {
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
    const nameInput = createTextInput(student.name);
    nameCell.appendChild(nameInput);
    row.appendChild(nameCell);

    const weightCell = document.createElement('td');
    const weightInput = createTextInput(student.weight);
    weightCell.appendChild(weightInput);
    row.appendChild(weightCell);

    const heightCell = document.createElement('td');
    const heightInput = createTextInput(student.height);
    heightCell.appendChild(heightInput);
    row.appendChild(heightCell);

    const hairColorCell = document.createElement('td');
    const hairColorInput = createTextInput(student.hairColor);
    hairColorCell.appendChild(hairColorInput);
    row.appendChild(hairColorCell);

    const gpaCell = document.createElement('td');
    const gpaInput = createTextInput(student.gpa);
    gpaCell.appendChild(gpaInput);
    row.appendChild(gpaCell);

    const actionCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteStudent(student.id));
    actionCell.appendChild(deleteBtn);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      enableEditMode(row, index);
    });
    actionCell.appendChild(editBtn);

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
    const id = document.createElement('span');
    id.textContent = `ID: ${student.id}`;

    const name = document.createElement('span');
    name.textContent = `Name: ${student.name}`;

    const gpa = document.createElement('span');
    gpa.textContent = `GPA: ${student.gpa}`;

    // Append elements to the student box
    box.appendChild(id);
    box.appendChild(document.createElement('br'));
    box.appendChild(name);
    box.appendChild(document.createElement('br'));
    box.appendChild(gpa);

    // Append the box to the container
    studentBoxesContainer.appendChild(box);
  });
}

function createTextInput(value) {
  const input = document.createElement('input');
  input.type = 'text';
  input.value = value;
  return input;
}

function enableEditMode(row, index) {
  const cells = row.getElementsByTagName('td');
  const nameInput = createTextInput(cells[1].textContent);
  const weightInput = createTextInput(cells[2].textContent);
  const heightInput = createTextInput(cells[3].textContent);
  const hairColorInput = createTextInput(cells[4].textContent);
  const gpaInput = createTextInput(cells[5].textContent);

  cells[1].textContent = '';
  cells[1].appendChild(nameInput);

  cells[2].textContent = '';
  cells[2].appendChild(weightInput);

  cells[3].textContent = '';
  cells[3].appendChild(heightInput);

  cells[4].textContent = '';
  cells[4].appendChild(hairColorInput);

  cells[5].textContent = '';
  cells[5].appendChild(gpaInput);

  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  saveBtn.addEventListener('click', () => {
    saveEditedStudent(index, nameInput.value, weightInput.value, heightInput.value, hairColorInput.value, gpaInput.value);
  });

  cells[6].replaceChild(saveBtn, cells[6].firstChild);
}

async function saveEditedStudent(id, name, weight, height, hairColor, gpa) {
  const editedStudent = { ...studentData[index], name, weight, height, hairColor, gpa };

  try {
    // Send a POST request to the server to save the edited student data
    const response = await fetch('http://localhost:8080/students/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedStudent),
    });

    if (response.ok) {
      console.log('Student data saved successfully!');
    } else {
      console.log('Failed to save student data.');
    }
  } catch (error) {
    console.log('An error occurred while saving student data:', error);
  }

  studentData[id] = editedStudent;
  displayStudentsTable();
  displayStudentBoxes();
}