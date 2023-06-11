package com.asn2.asn2.controllers;

import com.asn2.asn2.models.Student;
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

    @GetMapping
    public List<Student> getAllStudents() {
        return List.of(new Student("Isa", 180, 80, "black", 8.0));
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return new Student();
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {

    }
}