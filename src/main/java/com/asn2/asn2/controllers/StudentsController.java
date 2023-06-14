// Place: asn2-doc\src\main\java\com\asn2\asn2\controllers
// Filename: StudentsController.java

package com.asn2.asn2.controllers;

import com.asn2.asn2.models.Student;
import com.asn2.asn2.models.StudentDatabase;
import com.asn2.asn2.models.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentsController {
    private StudentRepository studentRepository;

    @Autowired
    public StudentsController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        studentRepository.save(student);
        return student;
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable long id) {
        studentRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public void editStudent(@PathVariable long id, @RequestBody Student updatedStudent) {
        studentRepository.save(updatedStudent);
    }
}