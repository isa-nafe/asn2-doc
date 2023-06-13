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
    //private final StudentRepository studentRepository;

//    @Autowired
//    public StudentsController(StudentRepository studentRepository) {
//
//    }

    private final StudentDatabase studentDatabase;

    @Autowired
    public StudentsController(StudentDatabase studentDatabase) {
        this.studentDatabase = studentDatabase;
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return studentDatabase.getStudents();
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        studentDatabase.add(student);
        return student;
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable int id) {
        studentDatabase.delete(id);
    }
}