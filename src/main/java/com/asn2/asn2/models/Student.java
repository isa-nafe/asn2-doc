// Place: asn2-doc\src\main\java\com\asn2\asn2\models
// Filename: Student.java

package com.asn2.asn2.models;

public class Student {

    private int id;
    private String name;
    private double height;
    private double weight;
    private String hairColor;
    private double gpa;

    public Student() {
    }

    public Student(int id, String name, double height, double weight, String hairColor, double gpa) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.hairColor = hairColor;
        this.gpa = gpa;
    }

    public int getId() {
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