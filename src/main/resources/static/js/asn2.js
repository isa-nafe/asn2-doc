const studentData = [];

function addStudent() {
  // Get input values
  const nameInput = document.querySelector('.name-input');
  const weightInput = document.querySelector('.weight-input');
  const heightInput = document.querySelector('.height-input');
  const hairColorInput = document.querySelector('.hair-color-input');
  const gpaInput = document.querySelector('.gpa-input');

  // Create a new student object
  const student = {
    name: nameInput.value,
    weight: weightInput.value,
    height: heightInput.value,
    hairColor: hairColorInput.value,
    gpa: gpaInput.value
  };

  // Add the student to the data array
  studentData.push(student);

  // Clear input fields
  nameInput.value = '';
  weightInput.value = '';
  heightInput.value = '';
  hairColorInput.value = '';
  gpaInput.value = '';

  // Display the updated table and student boxes
  displayStudentsTable();
  displayStudentBoxes();
}

function deleteStudent(index) {
  // Remove the student at the specified index
  studentData.splice(index, 1);
  // Display updated table and student boxes
  displayStudentsTable();
  displayStudentBoxes();
}

function displayStudentsTable() {
  const studentsTableBody = document.getElementById('students-table-body');
  studentsTableBody.innerHTML = '';

  // Loop through the studentData array and create table rows
  studentData.forEach((student, index) => {
    const row = document.createElement('tr');

    // Create table cells and set their content
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
    deleteBtn.addEventListener('click', () => deleteStudent(index));
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

    // Append elements to the student box
    box.appendChild(name);
    box.appendChild(document.createElement('br'));
    box.appendChild(gpa);

    // Append the box to the container
    studentBoxesContainer.appendChild(box);
  });
}
