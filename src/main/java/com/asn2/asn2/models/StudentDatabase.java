package com.asn2.asn2.models;

import java.util.List;
import org.springframework.stereotype.Component;

@Component
public class StudentDatabase {

  private final List<Student> students;

  public StudentDatabase(List<Student> students) {
    this.students = students;
  }

  public List<Student> getStudents() {
    return students;
  }

  public Student add(final Student student) {
    students.add(student);
    return student;
  }

  public void delete(int id) {
    Student studentToRemove = null;

    for (Student student : students) {
      if (student.getId() == id) {
        studentToRemove = student;
        break;
      }
    }

    students.remove(studentToRemove);
  }
  
  public void edit(int id, Student updatedStudent) {
    for (int i = 0; i < students.size(); i++) {
      if (students.get(i).getId() == id) {
        students.set(i, updatedStudent);
        break;
      }
    }
  }

}
