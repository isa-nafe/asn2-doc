package com.asn2.asn2.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;

@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "height")
    private double height;

    @Column(name = "weight")
    private double weight;

    @Column(name = "haircolor")
    private String hairColor;

    @Column(name = "gpa")
    private double gpa;

    public Student() {
    }

    public Student(long id, String name, double height, double weight, String hairColor, double gpa) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.hairColor = hairColor;
        this.gpa = gpa;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public double getHeight() {
        return height;
    }

    public double getWeight() {
        return weight;
    }

    public String getHairColor() {
        return hairColor;
    }

    public double getGpa() {
        return gpa;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public void setHairColor(String hairColor) {
        this.hairColor = hairColor;
    }

    public void setGpa(double gpa) {
        this.gpa = gpa;
    }
}