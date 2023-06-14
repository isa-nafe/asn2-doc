// Place: asn2-doc\src\main\java\com\asn2\asn2\models
// Filename: StudentRepository.java

package com.asn2.asn2.models;
import org.springframework.data.jpa.repository.JpaRepository;


public interface StudentRepository extends JpaRepository<Student, Long> {

}
